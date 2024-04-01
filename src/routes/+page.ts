export async function load(): Promise<{ posts: object[]; }> {
  const res = await fetch("https://tech-trinity-api-prajvalsingh.koyeb.app/posts");
  return { posts: await res.json() };
}
