export async function load(): Promise<{ posts: object[]; }> {
  const res = await fetch("http://localhost:3000/posts");
  return { posts: await res.json() };
}
