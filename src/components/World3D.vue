<template>
  <div class="planet-data">
    <div ref="planetRef" class="view-planet"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted  } from 'vue'
import { WorldApp } from '@/ThreeJSComponents/WorldApp';

const world = new WorldApp
export default defineComponent({
  data() {
    return {}
  },
  mounted() {    
    world.addToDOM((this.$refs.planetRef as HTMLDivElement))
  }
})
    
</script>

<style scoped>
.view-planet {
  max-width: 1200px;
  min-width: 400px;
  min-height: 400px;
}

.planet-data {
  display: flex;
  justify-content: center;
}
</style>
