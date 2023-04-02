<template>
    <div class="md:w-[95%] md:mx-auto h-fit py-2 lg:w-[85%] px-4 lg:px-10 bg-secondary-black rounded-lg md:mt-[25px] lg:mt-[33px] xl:mt-[41px] relative">
        <picture class="absolute top-[-201px] lg:top-[-247px] xl:top-[-288px] lg:right-[150px] xl:right-[225px] right-0">
                    <source media="(min-width: 2559px)" srcset="../assets/images/characters/biker@2x.png" />
                    <img class="w-auto md:h-[200px] lg:h-[246px] xl:h-[287px] left-0 right-0 top-0 mx-auto" src="../assets/images/characters/biker.png" alt="biker"/>
                </picture>
        <table class="w-auto h-fit border-collapse">
            <colgroup>
                <col class="w-[350px] lg:w-[700px] xxl:min-w-[796px] xl:w-[65%] border-2 border-solid border-white border-l-0 border-t-0"/>
                <col class="md:w-[110px] lg:w-[170px] xl:min-w-[220px] xl:w-[8.75%] border-solid border-white border-2"/>
                <col class="md:w-[110px] lg:w-[170px] xl:min-w-[220px] xl:w-[8.75%] border-solid border-white border-2"/>
                <col class="md:w-[110px] lg:w-[170px] xl:min-w-[220px] xl:w-[8.75%] border-solid border-more-purple border-2"/>
                <col class="md:w-[110px] lg:w-[170px] xl:min-w-[220px] xl:w-[8.75%] border-solid border-2 border-white border-r-0 border-b-0"/>
            </colgroup>
            <thead>
                <tr>
                    <th>
                        <h3 class="font-Roboto font-black md:text-l text-white text-left md:pl-[16px] pt-[13px] lg:pb-[6px] lg:text-2xl xl:text-[3rem]">BENEFICIOS</h3>
                    </th>
                    <th>
                        <img class="w-[100px] md:h-[17px] mx-auto  lg:w-[140px] lg:h-[18px] xl:w-[172.49px] xl:h-[24.73px]" src="../assets/images/titles/bronze.png" alt="bronze"/>
                    </th>
                    <th>
                        <img class="w-[100px] md:h-[17px] mx-auto  lg:w-[140px] lg:h-[18px] xl:w-[172.49px] xl:h-[24.73px]" src="../assets/images/titles/silver.png" alt="silver"/>
                    </th>
                    <th class="relative">
                        <div class="md:w-[70%] h-[24px] lg:w-[75%] bg-gradient-to-t from-dark-purple to-purple shadow-[0px_0px_10px_#FF00EE57;] rounded-[9px] absolute top-[-18px] mx-auto right-0 left-0 flex justify-center items-center">
                            <p class="font-Roboto font-bold md:text-[1rem] lg:text-[1.4rem] xl:text-base text-center text-white">MÁS POPULAR</p>
                        </div>
                        <img class="w-[100px] md:h-[17px] mx-auto lg:w-[140px] lg:h-[18px] xl:w-[172.49px] xl:h-[24.73px]" src="../assets/images/titles/golden.png" alt="golden"/>
                    </th>
                    <th class="relative">
                        <div class="md:w-[70%] h-[24px] lg:w-[75%] bg-gradient-to-t from-more-blue to-light-blue shadow-[0px_0px_10px_#00EDFF57;] rounded-[9px] absolute top-[-18px] mx-auto right-0 left-0 flex justify-center items-center">
                            <p class="font-Roboto font-bold md:text-[1rem] lg:text-[1.4rem] xl:text-base text-center text-black">MÁS BENEFICIOS</p>
                        </div>
                        <img class="w-[100px] md:h-[19px] mx-auto lg:w-[140px] lg:h-[18px] xl:w-[172.49px] xl:h-[24.73px]" src="../assets/images/titles/diamondTitle.png" alt="diamond"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in tableArray" :key="i">
                    <td>
                        <div class="w-full md:h-[30px] pl-4 lg:h-[39px] xl:h-[48px] flex items-center gap-4">
                            <font-awesome-icon :icon="row.icon" style="color: #ffffff" class="md:w-[8px] md:h-auto lg:w-[12.5px] xl:w-[12.5px] xl:h-[20px]"/>
                            <p class="text-white font-Roboto text-normal md:text-xs lg:text-l xl:text-xl">{{ row.title }}</p>
                        </div>
                    </td>
                    <td>
                        <div class="w-full md:h-[30px] lg:h-[39px] xl:h-[48px] flex justify-center items-center">
                            <p
                                v-if="row.bronze.length < 3"
                                class="font-Monument text-white font-bold md:text-base lg:text-l xl:text-xl"
                            >{{ row.bronze }}</p>
                            <font-awesome-icon v-else :icon="row.bronze" style="color: #2a2a32" class="w-8 h-8 l:w-[34.04px] xl:h-[34.04px]"/>
                        </div>
                    </td>
                    <td>
                        <div class="w-full md:h-[30px] lg:h-[39px] xl:h-[48px] flex justify-center items-center">
                            <p 
                                v-if="row.silver.length < 3"
                                class="font-Monument text-white font-bold md:text-base lg:text-l xl:text-xl"
                            >{{ row.silver }}</p>
                            <font-awesome-icon v-else :icon="row.silver" style="color: #2a2a32" class="w-8 h-8 xl:w-[34.04px] xl:h-[34.04px]"/>
                        </div>
                    </td>
                    <td>
                        <div class="w-full md:h-[30px] lg:h-[39px] xl:h-[48px] flex justify-center items-center">
                            <p 
                                v-if="row.golden.length < 3"
                                class="font-Monument text-white font-bold md:text-base lg:text-l xl:text-xl flex justify-center items-center"
                            >{{ row.golden }}</p>
                            <font-awesome-icon v-else-if="row.golden === 'fa-solid fa-x'" :icon="row.golden" style="color: #2a2a32" class="w-8 h-8"/>
                            <font-awesome-icon v-else :icon="row.golden" style="color: #34B100" class="w-8 h-8 xl:w-[36px] xl:h-[26.85px]"/>
                        </div>
                        
                    </td>
                    <td>
                        <div class="w-full md:h-[30px] lg:h-[39px] xl:h-[48px] flex justify-center items-center">
                            <p 
                            v-if="row.diamond.length < 3"
                            class="font-Monument text-white font-bold md:text-base lg:text-l xl:text-xl flex justify-center items-center"
                            >{{ row.diamond }}</p>
                            <font-awesome-icon v-else :icon="row.diamond" style="color: #34B100" class="w-8 h-8 xl:w-[36px] xl:h-[26.85px]"/>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td v-for="(pack, i) in packageArray" :key="i">
                        <div class="w-full h-auto flex flex-col justify-center items-center p-4">
                            <span class="w-full h-auto flex justify-center items-center gap-1">
                                <p class="text-white font-Roboto font-black md:text-[1rem] lg:text-xs">{{ pack.expansions }}</p>
                                <p class="text-white font-Roboto font-normal md:text-[.8rem] lg:text-xs">beneficios por</p>
                            </span>

                            <p class="text-yellow font-Monument font-black md:text-xl lg:text-2xl text-center md:mt-[-6px] xl:text-[3.5rem] lg:mt-[-2px]">{{ pack.hubs }}</p>
                            <p class="text-white font-light font-Monument md:text-[1rem] lg:text-[1.4rem] text-center mt-[-6px] xl:-[1.6rem] lg:mt-[-6px]">HUBS/mes</p>

                            <button class="mt-[8px] w-[85%] md:h-[20px] bg-gradient-to-t from-dark-blue to-blue rounded-lg lg:h-[27px] xl:w-[195px] xl:h-[33px] lg:rounded-[44px] transition transition-all hover:scale-105 duration-300 ease-in-out">
                                <p class="text-white font-Roboto font-normal md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.5rem]">Comprar</p>
                            </button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>

</template>

<script>

export default {
  name: 'PxTable',

  methods:{
  },

  data(){
    return {
        packageArray: [
            {
                expansions: '+6',
                hubs: '700',
            },
            {
                expansions: '+12',
                hubs: '1820',
            },
            {
                expansions: '+25',
                hubs: '3500',
            },
            {
                expansions: '+36',
                hubs: '6000',
            },
        ],
        tableArray: [
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Estilos de caminar',
                bronze: '+2',
                silver: '+4',
                golden: '+6',
                diamond: '+6'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Ranuras extras de tatuajes',
                bronze: '+4',
                silver: '+4',
                golden: '+8',
                diamond: '+8'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Llaves para compartir de propiedades',
                bronze: '+2',
                silver: '+2',
                golden: '+3',
                diamond: '+4'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Ranuras de vehículos',
                bronze: 'fa-solid fa-x',
                silver: '+1',
                golden: '+2',
                diamond: '+4'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Ranuras extras de casa personal',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: '+1',
                diamond: '+2'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Ranuras extras de departamento personal',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: '+1',
                diamond: '+2'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Ranuras extras de almacén',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: '+1',
                diamond: '+2'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Acceso a la última colección de muebles exclusivos',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: 'fa-solid fa-check',
                diamond: 'fa-solid fa-check'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Anuncios de teléfono "Golden"',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: 'fa-solid fa-check',
                diamond: 'fa-solid fa-check'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Acceso a todas las colecciones de muebles exclusivos',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: 'fa-solid fa-x',
                diamond: 'fa-solid fa-check'
            },
            {
                icon: 'fa-solid fa-person-walking',
                title: 'Anuncios de teléfono "Diamond"',
                bronze: 'fa-solid fa-x',
                silver: 'fa-solid fa-x',
                golden: 'fa-solid fa-x',
                diamond: 'fa-solid fa-check'
            },
        ]
    }
  },
}
</script>