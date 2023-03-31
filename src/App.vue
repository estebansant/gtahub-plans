<template>
  <main class="w-screen h-screen bg-neighbourhood bg-center bg-no-repepat bg-cover bg-fixed flex flex-col items-center xl:bg-neighbourhoodXL">
    <px-header />
    <px-cards />
  </main>
</template>

<script>
import PxCards from "@/components/PxCards";
import PxHeader from "@/components/PxHeader";


export default {
  name: "App",
  components: {
    PxHeader,
    PxCards,
  },
};
</script>
