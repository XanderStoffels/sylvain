<template>
    <div>
        <div class="flex flex-col justify-center align-middle bg-cover bg-[url('http://placekitten.com/2000/1000')] ">
            <div class="flex flex-row justify-center gap-4 my-28">
                <PCalendar showIcon :disabledDates="disabledDates" :disabled="invalidStartPending"
                    :minDate="addDays(now(), 1)" :maxDate="dateInTwoYears" class="w-full px-8 sm:w-2/3 xl:w-1/3"
                    v-model="selectedDate" placeholder="Check-in datum" dateFormat="DD dd MM yy" :touchUI="isSmartPhone"
                    :manualInput="false" :firstDayOfWeek="1">

                    <template #date="slotProps">
                        <div v-if="slotProps.date.selectable" class="font-bold">
                            {{ slotProps.date.day }}
                        </div>
                        <div v-else>
                            {{ slotProps.date.day }}
                        </div>
                    </template>

                </PCalendar>
            </div>
        </div>
        <div class="mx-auto mt-2 md:mt-4 md:w-3/4">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">

                <div id="proposals" class="md:col-start-2 md:col-span-2">
                    <div class="p-3 border border-transparent rounded-sm bg-amber-50">
                        {{ proposals }}
                    </div>
                </div>

                <div id="howto" class="col-start-1 md:row-start-1">
                    <div class="p-3 border border-transparent rounded-sm shadow-sm bg-sky-50/80">
                        <div class="text-lg">
                            <h3 class="mb-2 text-2xl font-light">Hoe kan u reserveren</h3>
                            <p class="mb-2">
                                Selecteer een datum in de bovenstaande kalender.
                                Vervolgens verschijnen er beschikbare huurperioden waaruit u kan kiezen.
                            </p>
                            <p class="mb-2 ">Het hele jaar door heeft u de mogelijkheid om een week, midweek of
                                weekend te
                                reserveren.
                                Tijdens het hoogseizoen juli en augustus is het enkel mogelijk een volledige week te
                                reserveren. Afhankelijk van een feestdag zal er ook enkel de mogelijkheid bestaan om een
                                lang weekend te reserveren.
                            </p>
                            <p class="italic">
                                Indien u voor langer dan een week wenst te reserveren, kan u <NuxtLink to="/contact"
                                    class="text-blue-700 underline">contact
                                    op nemen</NuxtLink> met
                                vakantiehuis Sylvain voor een offerte.
                            </p>
                        </div>
                    </div>
                </div>

                <div id="included" class="col-start-1 md:row-start-2">
                    <div class="p-3 border border-transparent rounded-sm shadow-sm bg-sky-50/80">
                        <div>
                            <h3 class="mb-2 text-2xl font-light">Inbegrepen in alle tarieven</h3>
                            <ul class="mb-2 ml-4 text-lg">
                                <li>Bedlinnen (niet opgedekt)</li>
                                <li>Badlinnen</li>
                                <li>Zwembadlinnen (enkel tijdens het zwemseizoen, van mei tot en met september)</li>
                                <li>Gebruik van het privé zwembad (enkel tijdens het zwemseizoen, van mei tot en met
                                    september)
                                </li>
                                <li>Een portie brandhout</li>
                                <li>Gebruik van WiFi</li>
                                <li>Digitale televisie (met Netflix)</li>
                                <li>U kan gebruik maken van het zwembad van 28/04 tot en met 30/09.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { Proposal } from '~~/server/api/plan/proposals';


const { isSmartPhone } = useDevice();
const { addDays, addYears, now } = useDates();

const selectedDate = ref();
const dateInTwoYears = ref(new Date());
const disabledDates: Ref<Date[]> = ref([]);
const proposals: Ref<Proposal[]> = ref([]);

const { data: invalidStartDateStrings, pending: invalidStartPending } = await useFetch('/api/plan/invalid-starting-days');

onMounted(async () => {
    dateInTwoYears.value = addYears(now(), 2);
    disabledDates.value = invalidStartDateStrings.value?.map(d => new Date(d)) ?? [];
});

watch(selectedDate, async () => {
    if (!selectedDate.value)
        return;
    console.log(selectedDate.value.toISOString());
    await refreshProposals();
});

async function refreshProposals() {
    if (!selectedDate.value)
        return;

    // Use fetch to get proposals.
    const isoDate = selectedDate.value.toISOString();
    const url = `/api/plan/proposals?from=${isoDate}`;
    const response = await fetch(url);
    proposals.value = await response.json();
}

</script>

<style scoped>
ul {
    list-style-type: disc;
}
</style>