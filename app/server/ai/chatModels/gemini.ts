import { IAIModel } from "../IChatModel";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { geminiSettings } = require(`@/app/server/ai/settings/gemini`);
// setup the gemini model to be used across the functions

export class GeminiModel implements IAIModel {
    private settings: any;
    private genAI: any;
    private model: any;

    constructor() {
        this.settings = geminiSettings
        if (!this.settings.apiKey || !this.settings.model) {
            throw new Error("apiKey or model is not set");
        }
        this.genAI = new GoogleGenerativeAI(this.settings.apiKey);
        this.model = this.genAI.getGenerativeModel({ model: this.settings.model });

      }

    async getResponse(prompt: string): Promise<string> {
        const promptResult = await this.model.generateContent(prompt);

        //TODO: decide if we want to save off the prompt metadata separately
        return promptResult.response.text;
    }
}