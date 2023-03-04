<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import World3DVue from './components/World3D.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello, my name is Kirill and I am a Frontend Developer" />
      <World3DVue />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
