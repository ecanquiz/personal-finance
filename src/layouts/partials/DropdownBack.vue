<template>
  <div class="relative">
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none"
    >
      <img
        v-if="store.authUser && store.authUser.avatar"
        :src="store.authUser.avatar"
        class="w-10 h-10 rounded-full"
        alt=""
      />
      <svg v-else
        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
        aria-hidden="true" class="w-8 h-10 rounded-full"
      >
        <path
          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z">
        </path>
      </svg>
    </button>

    <div
      v-show="dropdownOpen"
      @click="dropdownOpen = false"
      class="absolute right-0 mt-2 py-2 w-48 bg-base-100 rounded-md shadow-xl z-20"
    >

      <NuxtLink
        to="/profile"
        class="block px-4 py-2 text-sm hover:bg-gray-400"
      >
        {{ store.authUser ? store.authUser.name : 'Profile' }}
      </NuxtLink>
      {{ store.authUser  }}
      <NuxtLink
        to="/"
        class="block px-4 py-2 text-sm hover:bg-gray-400"
      >
        <AuthLogout />
      </NuxtLink> 
    </div>        
  </div>
</template>