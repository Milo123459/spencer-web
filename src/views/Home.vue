<template>
  <HomeComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeComponent from "@/components/HomeComponent.vue";
import { useHead } from "@vueuse/head";

@Options({
  components: {
    HomeComponent,
  },
  setup() {
    useHead(() => ({
      title: `Spencer: Home`,
      meta: [
        {
          name: `og:url`,
          content: `https://spencer-one.vercel.app`,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: "spencer-web",
        },
        {
          name: "og:description",
          content: "Spencer is a new discord bot packed with features.",
        },
      ],
    }));
  },
})
export default class Home extends Vue {}
</script>
