<script lang="ts">
  import { page } from "$app/stores";
  import Card from "../components/Card.svelte";

  export let data: {
    posts: {
      title: string;
      desc: string;
      tags: string[];
      id: string;
      likes: number;
      comments: number;
    }[];
  };
</script>

<head>
  <title>Tech Trinity</title>
</head>

{#if !$page.data.session}
  <p
    class="bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 mx-auto text-center py-2"
  >
    Sign in to like and comment.
  </p>
{/if}
{#each data.posts as post}
  <Card {post} />
{:else}
  <p>Loading...</p>
{/each}
