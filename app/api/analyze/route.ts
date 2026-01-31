
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { NYAYDOST_SYSTEM_PROMPT } from "@/app/lib/prompts";

export async function POST(req: NextRequest) {
    try {
        const { description } = await req.json();
        console.log("📝 Received description:", description);

        if (!description) {
            return NextResponse.json(
                { error: "Description is required" },
                { status: 400 }
            );
        }

        // The client gets the API key from the environment variable `GEMINI_API_KEY`.
        const ai = new GoogleGenAI({});

        // Combine system prompt with user description
        const fullPrompt = `${NYAYDOST_SYSTEM_PROMPT}\n\nUSER QUERY: ${description}`;
        console.log("🤖 Sending to Gemini (gemini-3-flash-preview)...");

        try {
            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: fullPrompt,
            });

            const text = response.text || "";
            console.log("✅ Raw response from Gemini:", text);

            // Clean up markdown code blocks if present (Gemini sometimes adds them despite instructions)
            const jsonString = text.replace(/```json/g, "").replace(/```/g, "").trim();

            try {
                const parsedData = JSON.parse(jsonString);
                console.log("✅ Successfully parsed JSON:", parsedData);
                return NextResponse.json(parsedData);
            } catch (parseError: any) {
                console.error("❌ JSON Parse Error:", parseError);
                return NextResponse.json(
                    {
                        error: "Failed to parse AI response",
                        raw: text,
                        details: parseError.message
                    },
                    { status: 500 }
                );
            }
        } catch (apiError: any) {
            console.error("❌ Gemini API Call Error:", apiError);
            return NextResponse.json(
                {
                    error: "Gemini API Error",
                    message: apiError.message,
                    details: apiError
                },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error("❌ API General Error:", error);
        return NextResponse.json(
            {
                error: "Internal Server Error",
                details: error.message
            },
            { status: 500 }
        );
    }
}
