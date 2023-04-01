import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import SideBar from "primevue/sidebar";
import Divider from 'primevue/divider';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';
import Calendar from 'primevue/calendar';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true, locale: nl });
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component("PButton", Button);
    nuxtApp.vueApp.component("PSideBar", SideBar);
    nuxtApp.vueApp.component("PDivider", Divider);
    nuxtApp.vueApp.component("PToast", Toast);
    nuxtApp.vueApp.component("PMessage", Message);
    nuxtApp.vueApp.component("PCalendar", Calendar);

    //other components that you need
});


const nl = {
    "startsWith": "Begint met",
    "contains": "Bevat",
    "notContains": "Bevat niet",
    "endsWith": "Eindigt met",
    "equals": "Is gelijk aan",
    "notEquals": "Is niet gelijk aan",
    "noFilter": "Geen filter",
    "lt": "Kleiner dan",
    "lte": "Kleiner dan of gelijk aan",
    "gt": "Groter dan",
    "gte": "Groter dan of gelijk aan",
    "dateIs": "Datum is",
    "dateIsNot": "Datum is niet",
    "dateBefore": "Datum is voor",
    "dateAfter": "Date is na",
    "custom": "anders",
    "clear": "verwijderen",
    "apply": "toepassen",
    "matchAll": "Selecteer alle",
    "matchAny": "Selecteer elke",
    "addRule": "Voeg regel toe",
    "removeRule": "Verwijder regel",
    "accept": "Ja",
    "reject": "Nee",
    "choose": "Kies",
    "upload": "Upload",
    "cancel": "Stoppen",
    "dayNames": ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
    "dayNamesShort": ["Zon", "Ma", "Di", "Woe", "Do", "Vrij", "Zat"],
    "dayNamesMin": ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
    "monthNames": ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    "today": "Vandaag",
    "weekHeader": "Wk",
    "firstDayOfWeek": 0,
    "dateFormat": "dd-mm-yy",
    "weak": "Zwak",
    "medium": "Middel",
    "strong": "Sterk",
    "passwordPrompt": "Typ een wachtwoord",
    "emptyFilterMessage": "Geen beschikbare opties",
    "emptyMessage": "Geen resultaten gevonden",
    "aria": {
        "trueLabel": "Waar",
        "falseLabel": "Onwaar",
        "nullLabel": "Niks geselecteerd",
        "pageLabel": "Pagina",
        "firstPageLabel": "Eerste pagina",
        "lastPageLabel": "Laatste pagina",
        "nextPageLabel": "Volgende pagina",
        "previousPageLabel": "Vorige pagina"
    }
}

