export interface IAIModel {
    getResponse(prompt: string): Promise<string>;
  }