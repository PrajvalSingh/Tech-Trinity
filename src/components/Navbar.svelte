<script lang="ts">
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
</script>

<!-- bg-slate-900  -->
<header class="text-gray-400 bg-slate-900 body-font mb-2">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a
      class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      href="/"
    >
      Tech Trinity
    </a>
    <nav
      class="md:ml-auto flex flex-wrap items-center text-base justify-center"
    >
      {#if $page.data.session}
        <button class="mr-5 hover:text-white" on:click={() => signOut()}
          >Sign out</button
        >
      {:else}
        <a class="mr-5 hover:text-white" href="/signin">Sign in</a>
      {/if}
      <a class="mr-5 hover:text-white" href="/memes">Memes</a>
      <a class="mr-5 hover:text-white" href="/contact">Contact Me</a>
    </nav>
  </div>
</header>
