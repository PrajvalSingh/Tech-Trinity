<script lang="ts">
  import { page } from "$app/stores";

  export let post: {
    title: string;
    desc: string;
    tags: string[];
    id: string;
    likes: number;
    comments: number;
  };

  let src: string;
  async function x() {
    const res = await fetch(
      `http://localhost:3000/posts/has_liked/${post.id}/${$page.data.session?.user?.name}`,
    ).then(async (data) => await data.json());

    if (res.found) {
      src = "unlike.webp";
    } else {
      src = "like.webp";
    }
  }

  x();

  const handleLikeOrUnlike = async () => {
    if (src === "like.webp") {
      src = "unlike.webp";
      await fetch(
        `http://localhost:3000/posts/like/${post.id}/${$page.data.session?.user?.name}`,
        {
          method: "PUT",
        },
      );

      post.likes++;
    } else {
      src = "like.webp";
      await fetch(
        `http://localhost:3000/posts/unlike/${post.id}/${$page.data.session?.user?.name}`,
        {
          method: "PUT",
        },
      );

      post.likes--;
    }
  };
</script>

<div class="card bg-slate-800 shadow-xl mb-2 ml-3" style="width: 90vw;">
  <div class="card-body">
    <h2 class="card-title mt-2">{post.title}</h2>
    <p>{post.desc}</p>
    <div class="tags absolute top-0 right-0 flex flex-wrap gap-2 my-2">
      {#each post.tags as tag}
        <span class="tag bg-blue-500 text-white px-2 py-1 rounded mx-2"
          >#{tag}</span
        >
      {/each}
    </div>
    <div class="card-actions justify-end pt-2">
      {#if $page.data.session}
        <button on:click={handleLikeOrUnlike}>
          <img {src} alt="Like" height="30" width="30" />
        </button>
        <p>{post.likes}</p>

        <img src="comment.webp" alt="Comments" height="30" width="30" />
        <p>{post.comments}</p>
      {/if}

      <a
        href={`/post/${post.id}`}
        class={"block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r " +
          (Math.floor(Math.random() * 2) === 0
            ? "from-purple-600 via-pink-500 to-red-500"
            : "from-red-500 via-pink-500 to-purple-600")}
      >
        Read
      </a>
    </div>
  </div>
</div>
