/**
 * Claude AI Configuration for GP14 Website
 * 
 * This file contains configuration options for the Claude AI integration.
 * You can modify these settings to customize the chat experience.
 */

const CLAUDE_CONFIG = {
    // Claude API Configuration
    api: {
        baseUrl: 'https://api.anthropic.com/v1/messages',
        model: 'claude-3-haiku-20240307', // Fast and cost-effective model
        maxTokens: 1000,
        version: '2023-06-01'
    },

    // Chat Widget Configuration
    chat: {
        maxMessageLength: 500,
        welcomeMessage: "Hi! I'm your GP14 assistant powered by Claude AI. Ask me anything about our championship-winning boats, build process, or sailing advice!",
        thinkingMessage: "Thinking...",
        errorMessage: "Sorry, I encountered an error. Please check your API key and try again.",
        statusMessages: {
            ready: "Ready",
            thinking: "Thinking...",
            error: "Error",
            apiKeyRequired: "API Key Required"
        }
    },

    // System Prompt for GP14 Context
    systemPrompt: `You are a helpful assistant for Donnelly GP14, a championship-winning GP14 sailboat builder. You have deep knowledge about:

- GP14 sailing dinghies and their specifications
- Boat building techniques, materials, and processes
- CAD, CFD, and CNC precision manufacturing
- Championship racing and performance optimization
- Wooden boat construction and GRP foils
- Sailing techniques, tuning, and maintenance
- The company's championship pedigree (2022 World Championship winner)

Always provide accurate, helpful information about GP14 boats, sailing, and boat building. Be friendly, professional, and knowledgeable. If asked about something outside your expertise, politely redirect to GP14-related topics.`,

    // UI Configuration
    ui: {
        colors: {
            primary: 'amber-500',
            primaryHover: 'amber-600',
            secondary: 'orange-500',
            secondaryHover: 'orange-600'
        },
        animations: {
            duration: '300ms',
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CLAUDE_CONFIG;
}


