export async function load() {
  const memes = await fetch("http://localhost:3000/memes");

  return { memes: await memes.json() };
}
