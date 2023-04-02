<template>
    <div 
        class="md:w-[185px] lg:w-[325px] xl:w-[416px] lg:h-[696px] xl:h-[696px] bg-secondary-black rounded-lg relative"
        :class="{'bg-gradient-to-t from-secondary-black via-dark-yellow to-secondary-black' : (card.banner === 'MÁS POPULAR')}"
        v-for="card in cardsArray"
        :key="card.title"
    >
        
        <span class="w-full h-[60px] flex items-center justify-center mt-[90px] border-light-blue border-t-1 border-b-1">
            <picture class="absolute top-[-91px] left-0 right-0 mx-auto">
                <source media="(min-width: 2559px)" :srcset="card.image2xl" />
                <img class="h-[181px] left-0 right-0 top-0 mx-auto" :src=" card.image" />
            </picture>
            <img class="w-[95%] md:h-[75px] md:ml-[13%] md:mb-[7.5%] lg:w-[95%] lg:ml-[13%] lg:mb-[4.5%] lg:h-[95px] xl:mb-[2.5%]" :src="card.titleImage" :alt="card.title"/>
        </span>
        <h4 class="mt-[15px] font-Roboto text-bold text-base text-center text-white mb-6 lg:text-xl">BENEFICIOS</h4>

        <ul class="px-6 lg:px-[34px]" v-for="(benefit, i) in card.benefits" :key="i"
        >
            <li class="w-full h-auto flex justify-start items-center mb-2 gap-2">
                <font-awesome-icon :icon="benefit.icon" style="color: #ffffff" class="md:w-[8px] md:h-auto xl:w-[12.5px] xl:h-[20px]"/>
                <p class="text-white font-Roboto font-black md:text-xs lg:text-base  lg:text-l">{{ benefit.number }}</p>
                <p class="text-white font-Roboto font-normal md:text-xs lg:text-base  lg:text-l">{{ benefit.text }}</p>
            </li>
        </ul>

        
        <div class="h-[41px] mt-[22px] lg:mt-[-23px] relative bg-gradient-to-t from-dark-purple to-purple text-center flex justify-center items-center"> 
            <div class="w-full h-[50px] absolute top-[-50px] bg-gradient-to-b from-white/0 via-darkest-blue/60 to-darker-black/60 flex justify-center items-center">
                <font-awesome-icon icon="fa-solid fa-chevron-down" style="color: #ffffff" class="w-[23.62px] h-[13.5px] mt-8" />
            </div>
            <p class="text-center font-Roboto font-black text-white md:text-sm lg:text-xl xl:h-full flex items-center justify-center">
                {{ card.banner }}
            </p>
        </div>

        <div class="w-full h-auto mt-[7px] flex flex-col justify-center items-center">
            <span class="w-full h-auto flex justify-center items-center gap-1">
                <p class="text-white font-Roboto font-black md:text-[1rem] lg:text-sm">{{ card.expansions }}</p>
                <p class="text-white font-Roboto font-normal md:text-[.9rem] lg:text-sm">expansiones por</p>
            </span>

            <p class="text-yellow font-Monument font-black md:text-xl text-center md:mt-[-6px] lg:text-[4.8rem] lg:mt-[-10px]">{{ card.hubs }}</p>
            <p class="text-white font-light font-Monument md:text-sm text-center mt-[-6px] lg:text-[2.3rem] lg:mt-[-18px]">HUBS/mes</p>

            <button class="mt-[17px] w-[85%] md:h-[41px] bg-gradient-to-t from-dark-blue to-blue rounded-lg mb-8 lg:h-[54px] xl:w-[360px] xl:h-[59px] lg:rounded-[44px]">
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
            image: saul,
            image2xl: saul2xl,
            alt: 'gangster',
            title: 'DIAMOND',
            titleImage: diamond,
            benefits: [
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+2',
                    text: 'estilos de caminar',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+4',
                    text: 'ranuras extras de tatuajes',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+1',
                    text: 'llave para compartir de propiedades',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '',
                    text: 'Acceso directo en horas pico',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+2',
                    text: 'estilos de caminar',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+4',
                    text: 'ranuras extras de tatuajes',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+1',
                    text: 'llave para compartir de propiedades',
                },
            ],
            expansionNumber: '+36',
            expansionText: 'expansiones por',
            hubs: '6000',
            banner: 'MÁS BENEFICIOS',
        }
      ]
    }
  },
}
</script>