<template>
  <body class="bg-gray-700">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-700"
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
    </div>
    <router-view />
  </body>
</template>
