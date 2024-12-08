import { IAIModel } from "../IChatModel";
const { claudeSettings } = require(`@/app/server/ai/settings/claude`);

import Anthropic from "@anthropic-ai/sdk";
// setup the AI model to be used across the functions
const anthropic = new Anthropic();

export class ClaudeModel implements IAIModel {
    private settings: any;

    constructor() {
        this.settings = claudeSettings
        if (!this.settings.apiKey || !this.settings.model) {
            throw new Error("apiKey or model is not set");
        }
      }

    async getResponse(prompt: string): Promise<string> {
        const promptResult = await anthropic.messages.create({
            model: this.settings.model,
            max_tokens: this.settings.max_tokens || 1000,
            temperature: this.settings.temperature || 0,
            system: this.settings.system || "Respond to the user's message in a short and concise way.",
            messages: [
                {
                "role": "user",
                "content": [
                    {
                    "type": "text",
                    "text": prompt
                    }
                ]
                }
            ]
            });

        //TODO: decide if we want to save off the prompt metadata separately
        const fullText = promptResult.content.map(c => ('text' in c ? c.text : '')).join("");
        return fullText;
    }
}
