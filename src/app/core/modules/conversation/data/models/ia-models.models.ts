export const IAmodelValues: Record<string, string> = {
  GPT_4o: 'gpt-4o',
  GPT_4o_mini: 'gpt-4o-mini',
  GPT_4o_turbo: 'gpt-4o-turbo',
  DALLE_E_3: 'dall-e-3',
};

export type IAmodels = (typeof IAmodelValues)[keyof typeof IAmodelValues];
