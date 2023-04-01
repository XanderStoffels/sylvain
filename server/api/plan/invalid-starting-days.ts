import { useDates, MONDAY, FRIDAY } from "~~/composables/dates";
/**
 * Get the dates from now that are invalid starting dates for reservations in the next 2 years.
 * @returns Date[]
 */
export default defineEventHandler(() => {
    const { addDays, addYears, getDatesBetweenFilter, utcMidnight, now } = useDates();

    const start = utcMidnight(addDays(now(), 1));
    const end = addYears(new Date(), 2);
    const between = getDatesBetweenFilter(start, end, filterDate);
    return between;
});

function filterDate(date: Date) {
    // Filter out Mondays and Fridays, which are valid starting days.
    return !(date.getDay() === MONDAY || date.getDay() === FRIDAY);
}
