<template>
    <section class="w-screen h-auto flex justify-center items-center">
        <div 
            class="md:w-[175px] md:h-auto bg-secondary-black rounded-lg"
            v-for="card in cardsArray"
            :key="card.title"
        >
            <picture>
                <source media="(min-width: 2559px)" :srcset="card.image2xl" />
                <img :src=" card.image" />
            </picture>
            <span class="w-full h-[60px] ">
                <h2 :class="{'bg-gradient-to-t from-brown to-skin inline-block text-nada bg-clip-text' : (card.title==='BRONZE'),
                'text-[35px]' : (card.title==='SILVER'), 
                'text-[40px]' : (card.title==='GOLDEN')}
                ">
                {{ card.title }}
            </h2>
            </span>
            <h4>BENEFICIOS</h4>

            <ul v-for="(benefit, i) in card.benefits" :key="i"
            >
                <li class="w-full h-auto flex justify-start items-center mb-4">
                    <font-awesome-icon :icon="benefit.icon" style="color: #ffffff" class="md:w-[8px] md:h-auto lg:w-[12.5px] lg:h-[20px] mr-[6.71px]"/>
                    <p class="mr-[8px] text-white font-Roboto font-black md:text-xs lg:text-l">{{ benefit.number }}</p>
                    <p class="text-white font-Roboto font-normal md:text-xs lg:text-l">{{ benefit.text }}</p>
                </li>
            </ul>

            <div v-if="card.banner.length > 0">
                <p>{{ card.banner }}</p>
            </div>

            <div>
                <span>
                    <p>{{ card.expansions }}</p>
                    <p>expansiones por</p>
                </span>

                <p>{{ card.hubs }}</p>
                <p>HUBS/mes</p>

                <button>
                    <p>Comprar</p>
                </button>
            </div>
        </div>

        <px-diamond-card />
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
            image: gangster,
            image2xl: gangster2xl,
            alt: 'gangster',
            title: 'BRONZE',
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
            ],
            expansionNumber: '+6',
            expansionText: 'expansiones por',
            hubs: '700',
            banner: '',
        },
        {
            image: bus1,
            image2xl: bus12xl,
            alt: 'business man',
            title: 'SILVER',
            benefits: [
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+1',
                    text: 'ranura extra de vehículo',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+4',
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
                    number: '+2',
                    text: 'llave para compartir propiedades',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '',
                    text: 'Acceso directo en horas pico',
                },
            ],
            expansions: '+12',
            hubs: '1820',
            banner: '',
        },
        {
            image: gus,
            image2xl: gus2xl,
            alt: 'business man',
            title: 'GOLDEN',
            benefits: [
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+2',
                    text: 'ranura extra de vehículo',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '+4',
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
                    number: '+2',
                    text: 'llave para compartir propiedades',
                },
                {
                    icon: 'fa-solid fa-person-walking',
                    color: '#ffffff',
                    number: '',
                    text: 'Acceso directo en horas pico',
                },
            ],
            expansions: '+25',
            hubs: '3500',
            banner: 'MÁS POPULAR',
        },
      ]
    }
  },
}
</script>