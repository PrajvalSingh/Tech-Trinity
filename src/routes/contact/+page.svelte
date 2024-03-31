<script lang="ts">
  import { init, send } from "@emailjs/browser";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";
  import { page } from "$app/stores";

  init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });

  let name: string | null | undefined = $page.data.session
      ? $page.data.session.user?.name
      : "",
    message: string;

  function handleSubmit() {
    if (!name || !message) {
      toasts.add({
        title: "Error",
        description: "Please fill all of the fields.",
        duration: 5000,
        theme: "dark",
        placement: "bottom-right",
        showProgress: true,
        type: "error",
        onClick: () => {},
        onRemove: () => {},
      });

      return;
    }

    if (message.length < 10 && name.length < 3) {
      toasts.add({
        title: "Error",
        description: "Name and messages are too short.",
        duration: 3000,
        theme: "dark",
        placement: "bottom-right",
        showProgress: true,
        type: "error",
        onClick: () => {},
        onRemove: () => {},
      });

      return;
    }

    if (name.length < 3) {
      toasts.add({
        title: "Error",
        description: "Name is too short.",
        duration: 3000,
        theme: "dark",
        placement: "bottom-right",
        showProgress: true,
        type: "error",
        onClick: () => {},
        onRemove: () => {},
      });

      return;
    }

    if (message.length < 10) {
      toasts.add({
        title: "Error",
        description: "Message is too short.",
        duration: 3000,
        theme: "dark",
        placement: "bottom-right",
        showProgress: true,
        type: "error",
        onClick: () => {},
        onRemove: () => {},
      });

      return;
    }

    send("service_ptldzq9", "template_vlsp6pz", {
      from_name: name,
      message: message,
    });

    toasts.add({
      title: "Success",
      description: "Form submitted successfully",
      duration: 5000,
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "success",
      onClick: () => {},
      onRemove: () => {},
    });

    name = "";
    message = "";
  }
</script>

<head>
  <title>Tech Trinity - Contact Me</title>
</head>

<section class="text-gray-400 bg-gray-900 body-font relative">
  <div class="container px-5 py-6 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Contact Me
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Have a doubt? Don't hesitate to ask!
      </p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        {#if !$page.data.session}
          <div class="p-2 w-full">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-400"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                bind:value={name}
              />
            </div>
          </div>
        {/if}

        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              bind:value={message}
            ></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            on:click={handleSubmit}>Submit</button
          >
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="text-indigo-400">prajval.laptop2323@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</section>

<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>
