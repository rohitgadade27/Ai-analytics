// AI Model Configuration for ChatGPT, Claude, and Gemini

export const AI_MODELS = {
  CHATGPT: 'chatgpt',
  CLAUDE: 'claude',
  GEMINI: 'gemini',
} as const;

export const AI_CONFIG = {
  chatgpt: {
    name: 'ChatGPT (OpenAI)',
    model: 'gpt-4-turbo',
    description: 'Advanced reasoning and analysis',
    color: 'from-green-500 to-emerald-500',
  },
  claude: {
    name: 'Claude (Anthropic)',
    model: 'claude-3-opus',
    description: 'Long context and nuanced understanding',
    color: 'from-blue-500 to-cyan-500',
  },
  gemini: {
    name: 'Gemini (Google)',
    model: 'gemini-1.5-pro',
    description: 'Multimodal analysis and insights',
    color: 'from-yellow-500 to-orange-500',
  },
};

export const getAIHeaders = (model: keyof typeof AI_MODELS) => {
  const apiKeys = {
    chatgpt: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
    claude: process.env.NEXT_PUBLIC_CLAUDE_API_KEY || '',
    gemini: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
  };

  const headers: Record<string, Record<string, string>> = {
    chatgpt: {
      'Authorization': `Bearer ${apiKeys.chatgpt}`,
      'Content-Type': 'application/json',
    },
    claude: {
      'x-api-key': apiKeys.claude,
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01',
    },
    gemini: {
      'Content-Type': 'application/json',
    },
  };

  return headers[model] || {};
};

export type AIModel = keyof typeof AI_CONFIG;
