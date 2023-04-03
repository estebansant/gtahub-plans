<template>
  <main class="w-screen h-screen bg-neighbourhood bg-center bg-no-repepat bg-cover bg-fixed flex flex-col items-center xl:bg-neighbourhoodXL overflow-y-scroll">
    <px-cards-header />
    <px-cards />
    <div class="w-full h-auto flex justify-center items-center">
      <a href="#table">
        <font-awesome-icon
          icon="fa-solid fa-chevron-down"
          style="color: #ffffff"
          class="w-[80.62px] h-[46.09px] mt-[30px] transition transition-all hover:scale-125 duration-600 ease-in-out" />
      </a>
    </div>
    <section class="w-screen h-fit flex flex-col relative md:mb-[20px] lg:mb-[40px]">
      <a href="#cards" class="w-[80.62px] h-[46.09px] mt-[30px] mx-auto absolute left-0 right-0 top-0">
        <font-awesome-icon
          id="table"
          icon="fa-solid fa-chevron-up"
          style="color: #ffffff"
          class="w-[80.62px] h-[46.09px] transition transition-all hover:scale-125 duration-600 ease-in-out" />
      </a>
      <px-table-header/>
      <px-table />
    </section>
  </main>
</template>

<script>
import PxCards from "@/components/PxCards";
import PxCardsHeader from "@/components/PxCardsHeader";
import PxTableHeader from "@/components/PxTableHeader";
import PxTable from "@/components/PxTable";



export default {
  name: "App",
  components: {
    PxCardsHeader,
    PxCards,
    PxTableHeader,
    PxTable,
  },

  methods: {
    packageDetails(data) {
      this.data = data;
    }
  }
};
</script>
