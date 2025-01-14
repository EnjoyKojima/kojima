export default defineEventHandler(async (event) => {
  const env = event.context.cloudflare.env;

  const kvList = await env.KV.list();
  const messages = [];

  // 各キーの値を取得
  for (const key of kvList.keys) {
    const value = await env.KV.get(key.name);
    messages.push({
      key: key.name,
      value: value
    });
  }

  return {
    messages
  };
});
