<template>
  <body class="bg-gray-700">
    <div
      class="container mx-auto flex flex-wrap pt-5 flex-col md:flex-row items-center bg-gray-700"
      id="nav"
    >
      <router-link
        to="/"
        class="transition duration-500 text-purple-400 hover:text-white animate-bounce px-7"
        >Home</router-link
      >
      <router-link
        to="/about"
        class="transition duration-500 text-purple-400 hover:text-white animate-bounce pr-7"
        >About</router-link
      >
      <a href="https://discord.com/api/oauth2/authorize?client_id=765156777607823380&permissions=8&scope=bot%20applications.commands" class="transition duration-500 text-purple-400 hover:text-white animate-bounce pr-7">
      Invite</a>
      <a href="https://top.gg/bot/765156777607823380/vote" class="transition duration-500 text-purple-400 hover:text-white animate-bounce pr-7">Vote</a>
    </div>
    <router-view />
  </body>
  <section class="text-center bg-gray-700">
      <a href="https://donatebot.io/checkout/784470505607528448" class="transition duration-500 ease-in-out bg-indigo-500 hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110 rounded-md tracking-widest text-black text-xl font-medium title-font">
        <code>Donate</code>
</a>
<br><br><br>

  </section>
</template>
