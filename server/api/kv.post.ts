import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  const env = event.context.cloudflare.env;
  const body = await readBody(event);
  const message = body.message as string;

  if (!message) {
    throw createError({
      statusCode: 400,
      message: 'message is required'
    });
  }

  // KVに値を書き込む
  await env.KV.put(
    uuidv4(),
    message
  );

  return {
    message: 'added to KV'
  };
});
