
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  // In a real app, you might want to handle this more gracefully,
  // but for this example, we'll throw an error.
  // The environment is expected to have this variable set.
  console.warn("API_KEY environment variable not set. Using a placeholder. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || " " });

const model = "gemini-2.5-flash";

const MACHINE_SYSTEM_INSTRUCTION = `You are an expert technical support specialist for Aura Dynamics, a world leader in robotics and AI. The user is currently viewing a 3D model of one of your advanced robots. Your role is to provide clear, concise, and accurate information about the robot's features, operation, maintenance, and benefits. Be professional and helpful. Base your answers on general knowledge of advanced robotics. Keep your answers focused on the question.`;
const GENERAL_SYSTEM_INSTRUCTION = `You are a helpful and professional AI assistant for Aura Dynamics, the global leader in advanced robotics and artificial intelligence. Your role is to answer questions about the company, its history, products (like the Orion Mark IV and Titan Hauler), services, and training programs. Be friendly, knowledgeable, and concise. Do not answer questions that are not related to Aura Dynamics or the robotics/AI industry.`;


export const askAboutMachine = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "AI features are disabled because the API key is not configured.";
  }
  try {
    const response = await ai.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction: MACHINE_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 1,
        topK: 32,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};


export const askGeneralQuestion = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "AI features are disabled because the API key is not configured.";
  }
  try {
    const response = await ai.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction: GENERAL_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 1,
        topK: 32,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
}
