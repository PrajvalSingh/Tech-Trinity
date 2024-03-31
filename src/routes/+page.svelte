<script lang="ts">
  import Card from "../components/Card.svelte";
  import { isOnHome } from "../store";
  $isOnHome = true;

  export let data: {
    posts: { title: string; desc: string; tags: string[]; id: string; likes: number; comments: number }[];
  };
</script>

<head>
  <title>Tech Trinity</title>
</head>

{#each data.posts as post}
  <Card {post} />
{:else}
  <p>Loading...</p>
{/each}
