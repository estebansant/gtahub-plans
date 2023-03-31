<template>
    <div v-for="card in cardsArray" :key="card.title">
            <picture>
                <source media="(min-width: 2559px)" :srcset="card.image2xl" />
                <img :src=" card.image" />
            </picture>
            <span>
                <h2>{{ card.title }}</h2>
            </span>
            <h4>BENEFICIOS</h4>

            <ul v-for="(benefit, i) in card.benefits" :key="i">
                <li>
                    <font-awesome-icon :icon="benefit.icon" style="color: #ffffff"/>
                    <p>{{ benefit.number }}</p>
                    <p>{{ benefit.text }}</p>
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
</template>

<script>
import saul from '../assets/images/characters/character-business-2.png';
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