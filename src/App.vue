<template>
  <main class="w-screen h-screen bg-neighbourhood bg-center bg-no-repepat bg-cover bg-fixed xl:bg-neighbourhoodXL">
    <px-header />
    <px-cards />
    <px-diamond-card />
  </main>
</template>

<script>
import PxCards from "@/components/PxCards";
import PxDiamondCard from "@/components/PxDiamondCard";
import PxHeader from "@/components/PxHeader";


export default {
  name: "App",
  components: {
    PxHeader,
    PxCards,
    PxDiamondCard
  },
};
</script>
