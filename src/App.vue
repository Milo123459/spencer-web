<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
           <router-link
                  to="/"
                  class="transition duration-500 text-indigo-400 hover:text-blurple px-3 py-2 rounded-md text-sm font-medium"
                  >Spencer</router-link
                >
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link
                  to="/about"
                  class="transition duration-500 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >About</router-link
                >
                <router-link
                  to="/blog"
                  class="transition duration-500 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Blog</router-link
                >
                <a
                  href="https://discord.com/oauth2/authorize?client_id=765156777607823380&permissions=8&scope=bot%20applications.commands"
                  class="trasniton duration-500 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Invite</a
                >
                <a
                  href="https://top.gg/bot/765156777607823380/vote"
                  class="tramsition duration-500 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >Vote</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="max-w-max justify-center bg-gray-800 max-h-auto">
      <router-view></router-view>
    </div>
</template>