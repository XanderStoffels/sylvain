<template>
    <div class="flex flex-col gap-4 md:w-8/12 mx-auto">
        <AdaptiveCard right :imageUrl="getKitten(600, 600)" alt="A nice image">
            <div class="flex flex-col justify-center h-full gap-2 px-2 pt-2 md:pt-4">
                <p class="text-2xl">Leefruimtes</p>
                <p>
                    Living met open haard.
                    Groot televisietoestel van 75 inch of 190 cm.
                    Digitale zenders en Netflix.
                    Wifi is aanwezig.
                    Uitgeruste luxueuze keuken.
                    Siemens combi microgolf- en hete luchtoven.
                    Koelkast met drievriezer.
                    Afwasmachine.
                    Inductiekookplaat met 4 kookzones.
                    Dolce Gusto koffiezetapparaat en servies.
                    Bestek, glazen en keukengerei voor 12 personen.
                    Bar aan de keuken met 4 barkrukken.
                    Eetruimte met plaats voor 12 personen met open haard.
                </p>
            </div>
        </AdaptiveCard>
        <AdaptiveCard :imageUrl="getKitten(600, 600)" alt="A nice image">
            <div class="flex flex-col justify-center h-full gap-2 px-2 pt-2 md:pt-4">
                <p class="text-2xl">Poolhouse</p>
                <p>
                    Polyvalente ruimte.
                    Tafel met plaats voor 10 à 12 personen.
                    Uitgeruste keuken.
                    Koelkast met diepvriezer.
                    Afwasmachine.
                    Inductiekookplaat met 4 kookzones.
                    Senseo koffiezetapparaat.
                    Bestek, glazen en keukengerei voor 12 personen.
                    Bar aan de keuken met barkrukken.
                    Omkleedruimte met lavabo en handdoeken voor het zwembad.
                    Toilet.
                    Hoge bartafeltjes.
                </p>
            </div>
        </AdaptiveCard>
        <AdaptiveCard right :imageUrl="getKitten(600, 600)" alt="A nice image">
            <div class="flex flex-col justify-center h-full gap-2 px-2 pt-2 md:pt-4">
                <p class="text-2xl">Slaap - en badkamers</p>
                <div class="p-5 bg-blue-50 rounded-sm">
                    <p class="font-semibold">Ter info</p>
                    <p>Alle bedlinnen (matras- en kussenbeschermers, kussenslopen, hoeslakens en dekbedovertrekken)
                        en badlinnen zijn inbegrepen en liggen klaar.</p>
                </div>
                <span>Slaapkamer 1, gelijksvloers<br />2 tweepersoonsbedden met dekbedden en
                    kussens.<br /></span>
                <span>Slaapkamer 2, gelijksvloers<br />1 tweepersoonsbed met dekbed en kussens.<br /></span>
                <span>Slaapkamer 3, boven<br />1 tweepersoonsbed met dekbed en kussens.<br /></span>
                <span>Slaapkamer 4, boven<br />2 tweepersoonsbedden met dekbedden en kussens, 2 éénpersoonsbedden met
                    dekbedden en kussens, 1 babybed van 60 cm/120 cm.</span>

                <span>Badkamer 1, gelijksvloers<br />Dubbele lavabo, douche, toilet op de gang.<br /></span>
                <span>Badkamer 2, boven<br />Dubbele lavabo, douche, toilet op de gang.</span>
            </div>
        </AdaptiveCard>
        <AdaptiveCard :imageUrl="getKitten(600, 600)" alt="A nice image">
            <div class="flex flex-col justify-center h-full gap-2 px-2 pt-2 md:pt-4">
                <p class="text-2xl">Tuin en zwembad</p>
                <p>
                    Tuin van 1 hectare.
                    Mogelijkheid tot petanquen.
                    Grote eettafel met plaats voor 12 personen.
                    7 zonnebedden met kussens.
                    2 parasols inclusief voet.
                    BBQ en vuurkorf.
                    Pingpong tafel.
                    Hoge aperotafel met 2 banken en kussens.
                    Zwembad van 5x12m met handdoeken inbegrepen
                    (het zwembad is beschikbaar van 28 april tot en met 30 september).
                </p>
            </div>
        </AdaptiveCard>
        <AdaptiveCard right :imageUrl="getKitten(600, 600)" alt="A nice image">
            <div class="flex flex-col justify-center h-full gap-2 px-2 pt-2 md:pt-4">
                <p class="text-2xl">Wasplaats</p>
                <p>
                    Bosch wasmachine en een
                    Miele droogkast
                </p>
            </div>
        </AdaptiveCard>
    </div>
</template>

<script setup lang="ts">
const { getKitten } = usePlaceholders();
</script>
