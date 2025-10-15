# Claude AI Integration Setup Guide

## Overview
Your GP14 website now includes a beautiful Claude AI chat widget that provides intelligent assistance to visitors about your boats, building process, and sailing advice.

## Features
- 🎨 **Beautiful Design**: Matches your website's amber/orange color scheme
- 🧠 **Claude AI Powered**: Uses Claude 3 Haiku for fast, intelligent responses
- 🔒 **Secure**: API key stored locally in browser
- 📱 **Responsive**: Works perfectly on desktop and mobile
- ⚡ **Fast**: Optimized for quick responses
- 🎯 **Context-Aware**: Specialized knowledge about GP14 boats and sailing

## Setup Instructions

### 1. Get Your Claude API Key
1. Visit [Anthropic's Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-ant-...`)

### 2. Configure the Chat Widget
The chat widget will automatically prompt for your API key when first used. Simply:
1. Click the chat button (bottom right corner)
2. Enter your Claude API key when prompted
3. The key will be stored securely in your browser's local storage

### 3. Test the Integration
1. Open your website
2. Click the chat button
3. Ask a question like: "Tell me about your championship-winning GP14 boats"
4. Verify you get intelligent responses about GP14 sailing

## Customization Options

### Changing the System Prompt
Edit the `systemPrompt` in `claude-config.js` to modify what Claude knows about your business.

### Styling Changes
Modify the colors in `CLAUDE_CONFIG.ui.colors` to match different branding.

### Model Selection
Change the model in `CLAUDE_CONFIG.api.model`:
- `claude-3-haiku-20240307` (fastest, cheapest)
- `claude-3-sonnet-20240229` (balanced)
- `claude-3-opus-20240229` (most capable)

## Security Best Practices

### API Key Management
- ✅ Keys are stored in browser's localStorage
- ✅ Keys are not transmitted to your server
- ✅ Each user manages their own key
- ❌ Never commit API keys to version control

### Rate Limiting
The widget includes built-in rate limiting and error handling to prevent abuse.

## Troubleshooting

### "API Key Required" Message
- Make sure you've entered a valid Claude API key
- Check that the key starts with `sk-ant-`
- Verify you have API access in your Anthropic account

### "Error" Status
- Check your internet connection
- Verify your API key is valid and has credits
- Check browser console for detailed error messages

### Chat Not Responding
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify the API endpoint is accessible

## Cost Considerations

### Claude 3 Haiku Pricing (as of 2024)
- Input: $0.25 per 1M tokens
- Output: $1.25 per 1M tokens
- Typical conversation: ~$0.001-0.01 per interaction

### Cost Optimization Tips
- The widget uses Claude 3 Haiku (most cost-effective)
- Max tokens set to 1000 to control costs
- System prompt optimized for GP14-specific responses

## Advanced Configuration

### Custom Domain Setup
If you want to use a custom domain for API calls, modify the `baseUrl` in `claude-config.js`.

### Analytics Integration
Add tracking to monitor chat usage:
```javascript
// Add to sendMessage function
gtag('event', 'claude_chat_message', {
    'event_category': 'engagement',
    'event_label': 'chat_interaction'
});
```

## Support

For technical issues:
1. Check browser console for error messages
2. Verify API key and account status
3. Test with a simple question first
4. Contact Anthropic support for API-related issues

## Example Questions for Testing

Try these questions to test the integration:
- "What makes Donnelly GP14 boats championship-winning?"
- "How long does a custom build take?"
- "What are GRP foils?"
- "Tell me about your sustainable materials"
- "What's included in your warranty?"

The AI assistant is specifically trained on your website content and will provide accurate, helpful responses about your GP14 boats and services.


