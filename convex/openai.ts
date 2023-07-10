"use node";
import { OpenAI } from "openai";
import { internalAction } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";
import { internal } from "./_generated/api";

type ChatParams = {
  messages: Doc<"messages">[];
  messageId: Id<"messages">;
};
export const chat = internalAction({
  handler: async ({ runMutation }, { messages, messageId }: ChatParams) => {
    const apiKey = process.env.OPENAI_API_KEY!;
    const openai = new OpenAI({ apiKey });

    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // "gpt-4" also works, but is so slow!
      stream: true,
      messages: [
        {
          role: "system",
          content: "You are a terse bot in a group chat responding to q's.",
        },
        ...messages.map(({ body, author }) => ({
          role:
            author === "ChatGPT" ? ("assistant" as const) : ("user" as const),
          content: body,
        })),
      ],
    });
    let body = "";
    for await (const part of stream) {
      if (part.choices[0].delta?.content) {
        body += part.choices[0].delta.content;
        // Alternatively you could wait for complete words / sentences.
        // Here we send an update on every stream message.
        await runMutation(internal.messages.update, {
          messageId,
          body,
        });
      }
    }
  },
});
