<script lang="ts">
  import { page } from "$app/stores";

  export let data: {
    post: { title: string; body: string };
    comments: any;
    postId: string;
  };
  let text: string;

  const handleSubmit = async () => {
    if (text.trim() !== "") {
      const res = await fetch("https://tech-trinity-api-prajvalsingh.koyeb.app/comments/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: data.postId,
          comment: text,
          username: $page.data.session?.user?.name,
        }),
      });

      data.comments = [...data.comments, await res.json()];
    }

    text = "";
  };

  const deleteComment = async (id: string) => {
    await fetch(`https://tech-trinity-api-prajvalsingh.koyeb.app/comments/delete/${id}`, {
      method: "DELETE",
    });

    data.comments = data.comments.filter(
      (comment: { id: string }) => comment.id !== id,
    );
  };
</script>

<head>
  <title>Tech Trinity - {data.post.title}</title>
</head>

<h1 class="text-center text-3xl mx-3 mb-5">{data.post.title}</h1>
<div class="p-2">
{@html data.post.body}
</div>

<div class="pt-6">
  <details class="collapse collapse-arrow bg-base-200">
    <summary class="collapse-title text-xl font-medium">Comments</summary>
    <div class="collapse-content">
      {#if data.comments.length === 0 && $page.data.session}
        <input
          class="outline-none w-2/4 border-2 rounded-md border-indigo-500"
          type="text"
          placeholder="Type your comment..."
          bind:value={text}
          style="padding: 0.6rem;"
        />
        <button class="btn btn-info btn-outline" on:click={handleSubmit}
          >Post</button
        >
        <p>No comments to show.</p>
      {:else if $page.data.session}
        <input
          class="outline-none w-2/4 border-2 rounded-md border-indigo-500"
          type="text"
          placeholder="Type your comment..."
          bind:value={text}
          style="padding: 0.6rem;"
        />
        <button class="btn btn-info btn-outline" on:click={handleSubmit}
          >Post</button
        >
        {#each data.comments as comment}
          <div
            class="card w-96 border-indigo-600 border-solid border-2 text-primary-content my-2"
          >
            <div class="card-body p-4">
              <h2 class="card-title" style="color: burlywood;">
                {comment.username}
              </h2>
              <p style="color: darkgray;">{comment.comment}</p>

              {#if comment.username === $page.data.session?.user?.name}
                <button
                  class="btn btn-error btn-outline w-20 ml-auto"
                  on:click={() => deleteComment(comment.id)}
                >
                  Delete
                </button>
              {/if}
            </div>
          </div>
        {/each}
      {:else}
        <p>Please sign in to view and post comments.</p>
      {/if}
    </div>
  </details>
</div>
