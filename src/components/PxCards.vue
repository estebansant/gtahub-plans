<template>
    <section class="w-screen h-auto flex flex-col justify-evenly items-center md:mt-[110px] lg:mt-[52px]">
        <div class="w-screen h-auto flex justify-evenly items-center">
            <div 
                class="md:w-[185px] lg:w-[325px] xl:w-[416px] h-auto lg:h-[696px] xl:h-[696px] bg-secondary-black rounded-lg relative flex flex-col justify-between"
                :class="{'bg-gradient-to-t from-secondary-black via-dark-yellow to-secondary-black' : (card.banner === 'MÁS POPULAR')}"
                v-for="card in cardsArray"
                :key="card.title"
            >
                <div>
                    <span 
                        class="w-full h-[60px] flex items-center justify-center mt-[90px]"
                        :class="{'border-skin border-t-1 border-b-1' : (card.title==='BRONZE'),
                        'border-white border-t-1 border-b-1' : (card.title==='SILVER'),
                        'border-yellow border-t-1 border-b-1' : (card.title==='GOLDEN')
                    }"
                    >
                    <picture class="absolute top-[-91px] left-0 right-0 mx-auto">
                        <source media="(min-width: 2559px)" :srcset="card.vipImage2xl" />
                        <img class="h-[181px] left-0 right-0 top-0 mx-auto" :src=" card.vipImage" />
                    </picture>
                            <img class="w-9/12 md:h-[22px] lg:w-[65%] lg:h-[30px] xl:w-[225px] xl:h-[36px]" :src="card.titleImage" :alt="card.title"/>
                    </span>
                    <h4 class="mt-[15px] font-Roboto text-bold text-base text-center text-white mb-6 lg:text-xl">BENEFICIOS</h4>

                    <ul class="px-6 lg:px-[34px]">
                        <li 
                            v-for="(benefit, i) in card.benefits" :key="i"
                            class="w-full h-auto flex justify-start items-center mb-2 gap-2">
                            <p class="text-white font-Roboto font-black md:text-xs lg:text-base xl:text-l flex justify-center items-center"
                        >
                            <!-- <font-awesome-icon v-html="$colorize(string)" class="md:w-[8px] md:h-auto xl:w-[12.5px] xl:h-[20px]"/> -->
                            {{ benefit }}
                            </p>
                        </li>
                    </ul>

                    <div
                        :class="{'block h-[41px] bg-gradient-to-t from-dark-purple to-purple text-center flex justify-center items-center lg:mt-[12.5px] xl:mt-[60px]' : (card.isPopular > 0),
                        'hidden' : (card.isPopular == 0),
                    }"
                    >
                        <p class="text-center font-Roboto font-black text-white md:text-sm lg:text-xl xl:h-full flex items-center justify-center">{{ card.isPopular }}</p>
                    </div>
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

            <px-diamond-card />
        </div>
        
    </section>

</template>

<script>
import gangster from '../assets/images/characters/character-money-gangster.png';
import gangster2xl from '../assets/images/characters/character-money-gangster@2x.png';
import bus1 from '../assets/images/characters/char-business.png';
import bus12xl from '../assets/images/characters/char-business@2x.png';
import gus from '../assets/images/characters/character_business.png';
import gus2xl from '../assets/images/characters/character_business@2x.png';
import PxDiamondCard from './PxDiamondCard';
import bronze from '../assets/images/titles/bronze.png';
import silver from '../assets/images/titles/silver.png';
import golden from '../assets/images/titles/golden.png';


export default {
  name: 'PxCards',

  components:{
    PxDiamondCard
  },
  methods:{
    titleColor(){
        let title = this.cardsArray.title;
        if(title == 'BRONZE'){
            let className = "text-[50px]";
            return className;
        }else if (title == 'SILVER'){
            let className = ""
            return className;
        } else if (title == 'GOLDEN'){
            let className = ""
            return className;
        } else{
            return null
        }
    }
  },

  data(){
    return{
        cardsArray: [
        {
            vipImage: gangster,
            vipImage2xl: gangster2xl,
            alt: 'gangster',
            title: 'BRONZE',
            titleImage: bronze,
            benefits: [
                "~icon_lock~ +2 estilos de caminar",
                "~icon_lock~ +4 ranuras extras de tatuajes",
                "~icon_lock~ +1 llave para compartir de propiedades",
                "~icon_lock~ Acceso directo en horas pico",
            ],
            expansions: '+6',
            price: 700,
            isPopular: 0,
        },
        {
            vipImage: bus1,
            vipImage2xl: bus12xl,
            alt: 'business man',
            title: 'SILVER',
            titleImage: silver,
            benefits: [
                "~icon_lock~ +1 ranura extra de vehículo",
                "~icon_lock~ +4 estilos de caminar",
                "~icon_lock~ +4 ranuras extras de tatuajes",
                "~icon_lock~ +2 llave para compartir de propiedades",
                "~icon_lock~ Acceso directo en horas pico",
            ],
            expansions: '+12',
            price: 1820,
            isPopular: 0,
        },
        {
            vipImage: gus,
            vipImage2xl: gus2xl,
            alt: 'business man',
            title: 'GOLDEN',
            titleImage: golden,
            benefits: [
                "~icon_lock~ +2 ranura extra de vehículo",
                "~icon_lock~ +4 estilos de caminar",
                "~icon_lock~ +4 ranuras extras de tatuajes",
                "~icon_lock~ +2 llave para compartir de propiedades",
                "~icon_lock~ Acceso directo en horas pico",
            ],
            expansions: '+25',
            price: 3500,
            isPopular: 1,
        },
      ]
    }
  },
}
</script>