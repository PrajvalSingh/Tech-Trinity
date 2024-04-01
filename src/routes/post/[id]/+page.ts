export async function load(
  { params }: { params: { id: string } },
): Promise<{ post: object, comments: object[], postId: string }> {
  const id = params.id;
  const post = await fetch(`https://tech-trinity-api-prajvalsingh.koyeb.app/posts/id/${id}`);
  const comments = await fetch(`https://tech-trinity-api-prajvalsingh.koyeb.app/comments/post/${id}`);
  return {
    post: await post.json(),
    comments: await comments.json(),
    postId: id
  };
}
