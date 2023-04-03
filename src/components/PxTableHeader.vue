<template>
    <div class="w-fit h-fit flex flex-col justify-center items-center ml-8 lg:ml-[17.5%] lg:mt-[0.5%]">
        <h2 class="text-white h-auto xl:text-6xl lg:text-4xl md:text-[3rem] md:mt-[18%] font-Monument font-black text-center">ESCOGE EL PLAN <br />QUE NECESITES</h2>
        <div class="w-fit h-auto flex justify-center items-center gap-6">
            <span class="flex gap-2">
                <p class="text-Roboto font-bold text-white text-center md:text-base lg:text-l leading-27">Balance:</p>
                <p class="font-black text-yellow text-Monument text-center md:text-l lg:text-[2.8rem] lg:leading-[22px] lg:pb-[5px]">{{balance}}</p>
                <p class="text-Roboto font-bold text-white text-center md:text-base lg:text-l leading-27">Hubs</p>
            </span>
            <button class="md:w-[165px] md:h-[32px] xl:w-[236.37px] xl:h-[48.37px] bg-gradient-to-t from-dark-green to-green rounded-lg mb-2 flex items-center justify-center transition transition-all hover:scale-105 duration-300 ease-in-out">
                <p class="h-[41px] flex items-center text-Roboto font-normal text-white text-center md:text-base lg:text-l xl:text-[2.3rem] opacity-90">Canjear código</p>
            </button>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'PxTableHeader',
        data(){
            return{
                balance: 7890,
            }
        }
    }
</script>