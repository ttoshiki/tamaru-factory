<template>
  <div id="app">
    <header class="AppHeader">
      <router-link :to="{ name: 'Home' }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.27 22.9" class="icon-logo">
          <path
            d="M11.64,0V2.23H7.2V16.68H4.46V2.23H0V0ZM14.5,10a7.44,7.44,0,0,1,.81-3.53A6.17,6.17,0,0,1,17.57,4.1a6.11,6.11,0,0,1,3.17-.86,5.68,5.68,0,0,1,2.71.62,5.37,5.37,0,0,1,1.87,1.52V3.46h2.76V16.68H25.32v-2a5.25,5.25,0,0,1-1.89,1.56A6.14,6.14,0,0,1,17.57,16a6.44,6.44,0,0,1-2.26-2.45A7.69,7.69,0,0,1,14.5,10Zm10.82.05a4.74,4.74,0,0,0-.57-2.38,4,4,0,0,0-1.47-1.54,4,4,0,0,0-3.93,0,3.83,3.83,0,0,0-1.49,1.52A4.69,4.69,0,0,0,17.31,10a5,5,0,0,0,.55,2.4A4.13,4.13,0,0,0,19.35,14a4,4,0,0,0,2,.53,3.88,3.88,0,0,0,3.44-2.06A4.89,4.89,0,0,0,25.32,10.06ZM48.68,3.24a5.92,5.92,0,0,1,2.79.65,4.55,4.55,0,0,1,1.94,1.92,6.14,6.14,0,0,1,.72,3.07v7.8H51.42V9.29a3.78,3.78,0,0,0-.89-2.71,3.13,3.13,0,0,0-2.42-1,3.22,3.22,0,0,0-2.45,1,3.78,3.78,0,0,0-.89,2.71v7.39H42.06V9.29a3.78,3.78,0,0,0-.89-2.71,3.13,3.13,0,0,0-2.42-1,3.22,3.22,0,0,0-2.45,1,3.78,3.78,0,0,0-.89,2.71v7.39H32.68V3.46h2.73V5A4.46,4.46,0,0,1,37.12,3.7a5.26,5.26,0,0,1,2.2-.46,5.9,5.9,0,0,1,2.84.67,4.63,4.63,0,0,1,1.92,2A4.34,4.34,0,0,1,46,4,5.46,5.46,0,0,1,48.68,3.24Zm9,6.77a7.33,7.33,0,0,1,.82-3.53,6.05,6.05,0,0,1,5.42-3.24,5.65,5.65,0,0,1,2.71.62,5.41,5.41,0,0,1,1.88,1.52V3.46h2.76V16.68H68.53v-2a5.37,5.37,0,0,1-1.9,1.56,5.8,5.8,0,0,1-2.74.63A5.87,5.87,0,0,1,60.77,16a6.42,6.42,0,0,1-2.25-2.45A7.58,7.58,0,0,1,57.7,10Zm10.83.05A4.74,4.74,0,0,0,68,7.68a4,4,0,0,0-1.46-1.54,3.95,3.95,0,0,0-5.43,1.52A4.69,4.69,0,0,0,60.51,10a5,5,0,0,0,.55,2.4A4.21,4.21,0,0,0,62.55,14a4,4,0,0,0,2,.53A3.85,3.85,0,0,0,68,12.46,4.9,4.9,0,0,0,68.53,10.06ZM78.62,5.38A4.08,4.08,0,0,1,80.2,3.82a4.64,4.64,0,0,1,2.38-.58V6.07h-.7a3.36,3.36,0,0,0-2.45.82,4,4,0,0,0-.81,2.83v7H75.88V3.46h2.74ZM98.07,3.46V16.68H95.33V15.12a4.57,4.57,0,0,1-1.7,1.3,5.49,5.49,0,0,1-2.21.45,5.91,5.91,0,0,1-2.81-.65,4.72,4.72,0,0,1-1.94-1.92,6.22,6.22,0,0,1-.7-3.07V3.46h2.71v7.36a3.89,3.89,0,0,0,.89,2.74,3.6,3.6,0,0,0,4.85,0,3.81,3.81,0,0,0,.91-2.74V3.46ZM119.73,0V2.23h-7.08V7.15h5.52V9.38h-5.52v7.3h-2.74V0Zm2.62,10a7.33,7.33,0,0,1,.82-3.53,6.05,6.05,0,0,1,5.42-3.24,5.68,5.68,0,0,1,2.71.62,5.28,5.28,0,0,1,1.87,1.52V3.46h2.76V16.68h-2.76v-2a5.25,5.25,0,0,1-1.89,1.56,5.8,5.8,0,0,1-2.74.63,5.87,5.87,0,0,1-3.12-.87,6.42,6.42,0,0,1-2.25-2.45A7.58,7.58,0,0,1,122.35,10Zm10.82.05a4.74,4.74,0,0,0-.57-2.38,4,4,0,0,0-1.47-1.54,3.94,3.94,0,0,0-5.42,1.52,4.69,4.69,0,0,0-.55,2.35,5,5,0,0,0,.55,2.4A4.13,4.13,0,0,0,127.2,14a4,4,0,0,0,2,.53,3.88,3.88,0,0,0,3.43-2.06A4.89,4.89,0,0,0,133.17,10.06Zm6.45,0a7.56,7.56,0,0,1,.81-3.58,5.94,5.94,0,0,1,2.31-2.4,6.6,6.6,0,0,1,3.36-.84,6.48,6.48,0,0,1,4,1.15,5.55,5.55,0,0,1,2.13,3.24h-2.95a3.08,3.08,0,0,0-1.15-1.53,3.39,3.39,0,0,0-2-.56,3.33,3.33,0,0,0-2.69,1.2,5,5,0,0,0-1,3.32,5.09,5.09,0,0,0,1,3.33,3.33,3.33,0,0,0,2.69,1.2,3,3,0,0,0,3.14-2.09h2.95A5.91,5.91,0,0,1,150,15.72a6.43,6.43,0,0,1-3.93,1.18,6.6,6.6,0,0,1-3.36-.84,6.2,6.2,0,0,1-2.31-2.4A7.7,7.7,0,0,1,139.62,10.06Zm19.49-4.37V13a1.47,1.47,0,0,0,.34,1.08,1.82,1.82,0,0,0,1.2.31h1.68v2.28h-2.16a4.21,4.21,0,0,1-2.84-.86,3.6,3.6,0,0,1-1-2.81V5.69h-1.56V3.46h1.56V.17h2.76V3.46h3.22V5.69ZM171.58,16.9a6.86,6.86,0,0,1-3.38-.84,6.31,6.31,0,0,1-2.38-2.4,7.37,7.37,0,0,1-.86-3.6,7.12,7.12,0,0,1,.89-3.58,6.14,6.14,0,0,1,2.42-2.4,7.44,7.44,0,0,1,6.87,0,6.14,6.14,0,0,1,2.42,2.4,7.12,7.12,0,0,1,.89,3.58,7,7,0,0,1-.91,3.57,6.42,6.42,0,0,1-2.5,2.43A7.17,7.17,0,0,1,171.58,16.9Zm0-2.38a4.06,4.06,0,0,0,2-.5,3.75,3.75,0,0,0,1.51-1.52,4.76,4.76,0,0,0,.58-2.44,4.91,4.91,0,0,0-.55-2.43,3.75,3.75,0,0,0-1.47-1.51,4.11,4.11,0,0,0-3.93,0,3.64,3.64,0,0,0-1.42,1.51,5.13,5.13,0,0,0-.53,2.43,4.73,4.73,0,0,0,1.08,3.31A3.67,3.67,0,0,0,171.58,14.52Zm13.31-9.14a4.15,4.15,0,0,1,1.58-1.56,4.66,4.66,0,0,1,2.38-.58V6.07h-.7a3.32,3.32,0,0,0-2.44.82,3.91,3.91,0,0,0-.82,2.83v7h-2.74V3.46h2.74Zm19.38-1.92L196.16,22.9h-2.84L196,16.46l-5.21-13h3l3.72,10.08,3.87-10.08Z"
          />
        </svg>
      </router-link>
      <nav class="AppNav">
        <ul class="AppMenuList">
          <li class="AppMenuItem"><router-link :to="{ name: 'About' }">About</router-link></li>
          <li class="AppMenuItem"><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="AppContent">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@use 'styles/variables';
@use 'styles/foundation/_base';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.icon-logo {
  min-width: 204px;
  fill: variables.$color-light;
}

.AppHeader {
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  width: 100%;
  padding: variables.$spacing-6x variables.$spacing-12x 0;

  a {
    display: flex;
  }
}

.AppNav {
  margin-left: 80px;
}

.AppMenuList {
  display: flex;
  padding: 0;
  font-family: variables.$font-family-en;
  list-style: none;
}

.AppMenuItem {
  font-weight: 400;

  &:not(:first-child) {
    margin-left: variables.$spacing-8x;
  }
}

.AppContent {
  margin: variables.$spacing-16x variables.$spacing-12x 0;
}
</style>
