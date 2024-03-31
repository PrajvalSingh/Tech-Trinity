<script>
  export let data;
  document.title = "Tech Trinity - Memes";
</script>

{#each data.memes as meme}
  <div class="flex justify-center">
    <img src={meme.image} alt="meme" class="py-1" width="500" height="508" />
  </div>
{/each}
