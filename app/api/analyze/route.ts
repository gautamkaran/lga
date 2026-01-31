
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
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        // Combine system prompt with user description
        const fullPrompt = `${NYAYDOST_SYSTEM_PROMPT}\n\nUSER QUERY: ${description}`;
        console.log("🤖 Sending to Gemini...");

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: fullPrompt,
        });

        const text = response.text || "";
        console.log("✅ Raw response from Gemini:", text);

        // Clean up markdown code blocks if present (Gemini sometimes adds them despite instructions)
        const jsonString = text.replace(/```json/g, "").replace(/```/g, "").trim();
        console.log("🧹 Cleaned JSON string:", jsonString);

        try {
            const parsedData = JSON.parse(jsonString);
            console.log("✅ Successfully parsed JSON:", parsedData);
            return NextResponse.json(parsedData);
        } catch (parseError) {
            console.error("❌ JSON Parse Error:", parseError);
            console.error("📄 Raw Text that failed to parse:", text);
            return NextResponse.json(
                {
                    error: "Failed to parse AI response",
                    raw: text,
                    details: parseError instanceof Error ? parseError.message : "Unknown error"
                },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("❌ API Error:", error);
        return NextResponse.json(
            {
                error: "Internal Server Error",
                details: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        );
    }
}
