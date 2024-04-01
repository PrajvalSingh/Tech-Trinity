export async function load() {
  const memes = await fetch("https://tech-trinity-api-prajvalsingh.koyeb.app/memes");

  return { memes: await memes.json() };
}
