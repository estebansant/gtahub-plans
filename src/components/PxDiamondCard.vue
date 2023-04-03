<template>
    <div 
        v-for="card in cardsArray"
        class="md:w-[185px] md:h-[660px] lg:w-[325px] xl:w-[416px] lg:h-[696px] xl:h-[696px] bg-secondary-black rounded-lg relative bg-gradient-to-t from-secondary-black via-darkest-of-blues to-secondary-black"
        :key="card.title"
    >
        
        <span class="w-full h-[60px] flex items-center justify-center mt-[90px] border-light-blue border-t-1 border-b-1">
            <picture class="absolute top-[-91px] left-0 right-0 mx-auto">
                <source media="(min-width: 2559px)" :srcset="card.vipImage2xl" />
                <img class="h-[181px] left-0 right-0 top-0 mx-auto" :src=" card.vipImage" />
            </picture>
            <img class="w-[95%] md:h-[75px] md:ml-[13%] md:mb-[7.5%] lg:w-[95%] lg:ml-[13%] lg:mb-[4.5%] lg:h-[95px] xl:mb-[2.5%]" :src="card.titleImage" :alt="card.title"/>
        </span>
        <h4 class="mt-[15px] font-Roboto text-bold text-base text-center text-white mb-6 lg:text-xl">BENEFICIOS</h4>

        <ul class="px-6 lg:px-[34px] max-h-[246px] overflow-y-scroll">
            <li 
                v-for="(benefit, i) in card.benefits" :key="i"
                class="w-full h-auto flex justify-start items-center mb-2 gap-2"
                >
                <p class="text-white font-Roboto font-black md:text-xs lg:text-base xl:text-l flex justify-center items-center">
                    <!-- <font-awesome-icon v-html="$colorize(string)" class="md:w-[8px] md:h-auto xl:w-[12.5px] xl:h-[20px]"/> -->
                    {{ benefit }}
                </p>
            </li>
        </ul>

        
        <div class="h-[41px] mt-[22px] lg:mt-[0px] xl:mt-[-5px] relative bg-gradient-to-t from-bluewish to-light-blue text-center flex justify-center items-center"> 
            <div class="w-full h-[50px] absolute top-[-50px] bg-gradient-to-b from-white/0 via-darkest-blue/60 to-darker-black/60 flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-chevron-down" style="color: #ffffff" class="w-[23.62px] h-[13.5px] mt-8" />
            </div>
            <p class="text-center font-Roboto font-black text-white md:text-sm lg:text-xl xl:h-full flex items-center justify-center">
                {{ card.isPopular }}
            </p>
        </div>

        <div class="w-full h-auto mt-[7px] flex flex-col justify-center items-center">
            <span class="w-full h-auto flex justify-center items-center gap-1">
                <p class="text-white font-Roboto font-black md:text-[1rem] lg:text-sm">{{ card.expansions }}</p>
                <p class="text-white font-Roboto font-normal md:text-[.9rem] lg:text-sm">expansiones por</p>
            </span>

            <p class="text-yellow font-Monument font-black md:text-xl text-center md:mt-[-6px] lg:text-[4.8rem] lg:mt-[-10px]">{{ card.price }}</p>
            <p class="text-white font-light font-Monument md:text-sm text-center mt-[-6px] lg:text-[2.3rem] lg:mt-[-18px]">HUBS/mes</p>

            <button class="mt-[17px] w-[85%] md:h-[41px] bg-gradient-to-t from-dark-blue to-blue rounded-lg mb-8 lg:h-[54px] xl:w-[360px] xl:h-[59px] lg:rounded-[44px] transition transition-all hover:scale-105 duration-300 ease-in-out">
                <p class="text-white font-Roboto font-normal md:text-base lg:text-[2.9rem]">Comprar</p>
            </button>
        </div>
        </div>
</template>

<script>
import saul from '../assets/images/characters/character-business-2.png';
import diamond from '../assets/images/titles/diamond.png';
import saul2xl from '../assets/images/characters/character-business-2@2x.png';

export default {
  name: 'PxDiamondCard',

  data(){
    return{
      cardsArray: [
        {
            vipImage: saul,
            vipImage2xl: saul2xl,
            alt: 'business man',
            title: 'DIAMOND',
            titleImage: diamond,
            benefits: [
                "~icon_lock~ +2 estilos de caminar",
                "~icon_lock~ +4 ranuras extras de tatuajes",
                "~icon_lock~ +1 llave para compartir de propiedades",
                "~icon_lock~ Acceso directo en horas pico",
                "~icon_lock~ +2 estilos de caminar",
                "~icon_lock~ +4 ranuras extras de tatuajes",
                "~icon_lock~ +1 llave para compartir de propiedades",
            ],
            expansionNumber: '+36',
            expansionText: 'expansiones por',
            price: 6000,
            isPopular: 2,
        }
      ]
    }
  },
}
</script>