<script lang="ts">
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";
  import { onMount } from "svelte";

  onMount(async () => {
    if ($page.data.session) {
      const res = await fetch(
        `http://localhost:3000/auth/check/${$page.data.session.user?.name}`,
        { method: "POST" },
      ).then(async (data) => await data.json());

      if (!res.found) {
        await fetch(
          `http://localhost:3000/auth/create/${$page.data.session.user?.name}`,
          { method: "POST" },
        );
      }
    }
  });
</script>

<head>
  <title>Tech Trinity - Sign In</title>
</head>

<div class="grid place-items-center" style="height: 40vh;">
  {#if $page.data.session}
    <p>You are now signed in!</p>
  {:else}
    <button class="btn btn-outline h-24 mb-2" on:click={() => signIn("github")}>
      <img src="github-icon.webp" alt="Github Logo" width="30" height="30" />
      Sign in with GitHub
    </button>
    <br />
    <button
      class="btn btn-outline btn-warning h-24 mb-2"
      on:click={() => signIn("google")}
    >
      <img src="google-icon.webp" alt="Google Logo" width="30" height="30" />
      Sign in with Google
    </button>
    <br />
    <button
      class="btn btn-outline btn-primary h-24"
      on:click={() => signIn("discord")}
    >
      <img src="discord-icon.webp" alt="Discord Logo" width="30" height="30" />
      Sign in with Discord
    </button>
  {/if}
</div>

<style>
  button {
    width: 30vw;
  }

  @media (max-width: 400px) {
    button {
      width: 45vw;
    }
  }
</style>
