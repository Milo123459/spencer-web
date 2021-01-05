<template>
  <HomeComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeComponent from "@/components/HomeComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    HomeComponent
  }
})
export default class Home extends Vue {}
</script>
