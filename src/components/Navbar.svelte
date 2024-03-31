<script lang="ts">
  import { isOnHome, searchTerm } from "../store";
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";

  const handleSearch = (e: any) => {
    searchTerm.set(e.target.value);
  };
</script>

<nav class="bg-slate-900 mb-2">
  <div class="navbar">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">Tech Trinity</a>
    </div>

    {#if $isOnHome}
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="search"
            placeholder="Search"
            class="input input-bordered focus:outline-none search-bar"
            on:input={handleSearch}
          />
        </div>
      </div>
    {/if}
  </div>

  <hr />

  <div class="navbar">
    <div class="flex-auto justify-center">
      <ul class="menu menu-horizontal px-1">
        {#if $page.data.session}
          <li>
            <button on:click={() => signOut()}>Sign Out</button>
          </li>
        {:else}
          <li>
            <a href="/signin">Sign In</a>
          </li>
        {/if}
        <li>
          <a href="/memes">Memes</a>
        </li>
        <li>
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .search-bar {
    width: 30vw;
  }

  @media (max-width: 400px) {
    .search-bar {
      width: 45vw;
    }
  }
</style>
