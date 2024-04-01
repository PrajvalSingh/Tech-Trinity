<script>
  export let data;
</script>

<head>
  <title>Tech Trinity - Memes</title>
</head>

{#each data.memes as meme}
  <div class="flex justify-center">
    <img src={meme.image} alt="meme" class="py-1" width="500" height="508" />
  </div>
{/each}
