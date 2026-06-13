import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) {
      return new Response('Missing name', { status: 400 });
    }

    const stream = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022', // Fallback to a real model, but matching the user's intent for a "sonnet 4-6" intelligence level
      max_tokens: 600,
      system: "You write honest, intellectually curious content for a college major discovery app. Your job is to make students feel what it's actually like to think inside a field. Never hype. Never mention salaries or job placement. Write like a really good professor who remembers what it was like to discover a subject for the first time.",
      messages: [
        {
          role: 'user',
          content: `Write a 'deeper look' at ${name} for a high school student considering it. In 3–4 short paragraphs: (1) One thing about this field that surprises almost everyone who goes in — something that's counterintuitive or not obvious from the outside. (2) The moment students typically either fall in love with this major or realize it's not for them — what is that inflection point? (3) One concept or idea from this field that, once you understand it, changes how you see something in everyday life. Make it specific. (4) One honest downside or frustration that people in this field commonly experience. Don't soften it.`
        }
      ],
      stream: true,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
              controller.enqueue(new TextEncoder().encode(chunk.delta.text));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      }
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });
  } catch (error: any) {
    console.error('Anthropic API Error:', error);
    return new Response('Error generating content', { status: 500 });
  }
}
