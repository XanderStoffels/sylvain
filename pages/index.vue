<template>
    <div class="w-full opacity-80">
        <div class="hidden sm:block">
            <img class="w-full object-cover border" :src="getKitten(2000, 666)" alt=""> <!-- 3.33:1 -->
        </div>
        <div class="sm:hidden">
            <img :src="getKitten(1500, 1000)" alt="">
        </div>
    </div>

    <div class="absolute bott flex flex-row justify-center w-full opacity-100">
        <span
            class="border-white bg-white border p-4 rounded-2xl text-4xl -mt-9 md:text-5xl lg:text-6xl lg:-mt-5 xl:-mt-12">Vakantiehuis
            Sylvain
        </span>
    </div>
    <div class="mt-9 flex flex-row justify-center sm:mt-12 z-1">
        <q class="w-4/5 text-center italic">'s Zomers fluit nog de leeuwerik terwijl de reiger de lucht doorklieft.</q>
    </div>
    <div class="mx-auto w-1/3 lg:mb-10  xl:w-1/4 2xl:hidden">
        <PDivider type="dotted"></PDivider>
    </div>
    <div class="flex flex-row justify-center mt-6 mb-8">
        <p class="w-3/4 text-lg lg:w-2/3 md:text-xl">Vakantiehuis Sylvain is een luxueuze vakantiewoning die plaats biedt
            aan 12
            personen.
            Vakantiehuis
            Sylvain
            ligt in Tielt, pal
            in het midden van de driehoek Brugge - Gent - Kortrijk. Het domein van één hectare is omzoomd door bomen en
            gewassen waardoor uw privacy verzekerd is terwijl u een plons waagt in het verwarmde zwembad.
            Fietsknooppuntenroutes, wandelingen en historische stadjes liggen binnen handbereik.</p>
    </div>
</template>

<script setup lang="ts">
const { getKitten } = usePlaceholders();
</script>
