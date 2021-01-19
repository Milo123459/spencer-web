<template>
  <HomeComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeComponent from "@/components/HomeComponent.vue";
import { useHead } from '@vueuse/head';

@Options({
  components: {
    HomeComponent,
  },
  setup() {
      useHead(() => ({
      title: `Spencer: Home`,
      meta: [
        {
          name: `description`,
          content: `hey`,
        },
      ],
    }))
  }
})
export default class Home extends Vue {}
</script>
