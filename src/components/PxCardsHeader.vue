<template>
    <h1 id="cards" class="text-white md:h-54 lg:h-auto font-Monument font-black xl:text-6xl lg:text-4xl md:text-[3rem] text-center underline underline-offset-10 decoration-1 mt-[18px]">DESBLOQUEA TODO EL POTENCIAL</h1>
    <p class="lg:w-814 h-54 md:w-550 md:text-base text-white font-Roboto leading-27 font-light lg:text-l sxl:text-xl text-center mt-4 opacity-80">
        Cada tipo de suscripción te dará nuevas ranuras, acceso a contenido exclusivo <br/> y reconocimiento en la comunidad. ¡Revisa todos los beneficios que ofrece cada una!
    </p>
    <button class="w-[252px] h-[41px] bg-gradient-to-t from-dark-green to-green rounded-lg  mt-4 mb-2 flex items-center justify-center transition transition-all hover:scale-105 duration-300 ease-in-out">
        <p class="h-[41px] flex items-center text-Roboto font-normal text-white text-center text-[1.9rem] opacity-90 transition transition-all hover:scale-105 duration-300 ease-in-out">Canjear código</p>
    </button>
    <span class="flex gap-4">
        <p class="text-Roboto font-bold text-white text-center text-xl leading-27">Balance:</p>
        <p class="text-Monument font-black text-yellow text-center text-[2.8rem] leading-[25px]">{{balance}}</p>
        <p class="text-Roboto font-bold text-white text-center text-xl leading-27">Hubs</p>
    </span>
</template>

<script>
    export default {
        name: 'PxCardsHeader',
        data(){
            return{
                balance: 7890,
            }
        }
    }
</script>