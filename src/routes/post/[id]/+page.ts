export async function load(
  { params }: { params: { id: string } },
): Promise<{ post: object, comments: object[], postId: string }> {
  const id = params.id;
  const post = await fetch(`http://localhost:3000/posts/id/${id}`);
  const comments = await fetch(`http://localhost:3000/comments/post/${id}`);
  return {
    post: await post.json(),
    comments: await comments.json(),
    postId: id
  };
}
