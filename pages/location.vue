<template>
    <div class="flex flex-col gap-4 mt-8 h-full">
        <header class="flex-col align-middle justify-center text-2xl md:text-3xl text-center">
            <h4>Vakantiehuis Sylvain</h4>
            <h4>Bosakkerstraat 73</h4>
            <h4>8700 Tielt (Meulebeke ingeven in GPS)</h4>
        </header>
        <div class="hidden lg:flex lg:flex-row lg:justify-center lg:text-center">
            <div class="p-4">
                <h1 class="text-4xl mb-3">Marialoop</h1>
                <h4 class="text-xl">Onze-Lieve-Vrouw en Sint-Leokerk</h4>
                <h4 class="text-xl">Kapel van Onze-Lieve-Vrouw van Marialoop</h4>
                <h4 class="text-xl">Bakkerij Carlo</h4>
                <h4 class="text-xl">Kruidenierszaak 't Hoeveke</h4>
                <h4 class="text-xl">Apotheek Aernout</h4>
                <h4 class="text-xl">Marialooppad</h4>
            </div>
            <div class="p-4">
                <h1 class="text-4xl mb-3">Tielt</h1>
                <h4 class="text-xl">Tal van restaurants en café's</h4>
                <h4 class="text-xl">waaronder Koffie-en Eethuys Bellevue.</h4>
                <h4 class="text-xl">Allerlei wandelroutes</h4>
                <h4 class="text-xl">De Poelberg</h4>
                <h4 class="text-xl">Fietsknooppuntenroutes</h4>
                <h4 class="text-xl"><a href="www.visittielt.be">www.visittielt.be</a></h4>
            </div>
        </div>
        <footer class="">
            <iframe width="100%" height="450" style="border:0" allowfullscreen
                :src="`https://www.google.com/maps/embed/v1/place?q=50.9678937%2C%203.3321391&key=${config.public.GOOGLE_KEY}`"></iframe>
        </footer>
    </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
</script>
