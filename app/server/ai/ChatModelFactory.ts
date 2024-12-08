import { IAIModel } from "@/app/server/ai/IChatModel";
import { ClaudeModel } from "@/app/server/ai//chatModels/claude";
import { GeminiModel } from "@/app/server/ai//chatModels/gemini";

export function getModel(): IAIModel {
  const modelName = process.env.PREFERRED_AI_MODEL || "claude";
  switch (modelName.toLowerCase()) {
    case "claude":
      return new ClaudeModel();
    case "gemini":
      return new GeminiModel();
    default:
      throw new Error(`Unknown AI model: ${modelName}`);
  }
}