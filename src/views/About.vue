<template>
  <AboutComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AboutComponent from "@/components/AboutComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    AboutComponent
  }
})
export default class Home extends Vue {}
</script>
