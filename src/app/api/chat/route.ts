import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Don't initialize OpenAI during build
let openai: OpenAI | null = null;

if (process.env.NODE_ENV !== 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
  console.log('Skipping OpenAI client initialization during build');
} else {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OPENAI_API_KEY is not set in environment variables');
    } else {
      openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
      console.log('OpenAI client initialized successfully');
    }
  } catch (error) {
    console.error('Failed to initialize OpenAI client:', error);
  }
}

type RequestBody = {
  message: string;
  service?: string;
};

export async function POST(req: Request) {
  // Handle build-time execution
  if (process.env.NODE_ENV !== 'production' || process.env.NEXT_PHASE === 'phase-production-build') {
    return NextResponse.json(
      { message: 'Chat API is not available during build' },
      { status: 503 }
    );
  }

  try {
    if (!openai) {
      console.error('OpenAI client not initialized - check API key');
      return NextResponse.json(
        { 
          response: "I'm currently in development mode. Please ensure your OpenAI API key is properly configured."
        },
        { status: 200 }
      );
    }

    const { message, service } = (await req.json()) as RequestBody;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Handle service-specific responses
    let systemPrompt = 'You are a helpful customer support assistant for IgniteX, a digital solutions company. ';
    
    if (service) {
      systemPrompt += `The user is interested in ${service}. `;
      systemPrompt += `Provide specific information about our ${service} services. `;
      systemPrompt += `If the user asks about pricing, explain that our solutions are customized and you'll connect them with a specialist. `;
    } else {
      systemPrompt += 'Help the user understand our services and guide them to select a service they might be interested in. ';
    }

    systemPrompt += 'Be friendly, professional, and concise in your responses. ';
    systemPrompt += 'If the user wants to talk to a human or get a callback, guide them to use the call back feature.';

    console.log('Sending message to OpenAI API');
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 250,
    }).catch(error => {
      console.error('OpenAI API Error:', error);
      throw new Error('Failed to get response from AI service');
    });
    
    console.log('Received response from OpenAI API');

    let aiResponse = response.choices[0]?.message?.content || "I'm sorry, I couldn't process your request.";

    // Add a friendly sign-off if it's a service-related query
    if (service && !aiResponse.includes('Let me know') && !aiResponse.includes('feel free to ask')) {
      aiResponse += '\n\nWould you like me to connect you with one of our specialists or would you like to schedule a callback?';
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
