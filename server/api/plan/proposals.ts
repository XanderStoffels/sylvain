import { useDates, SUNDAY, FRIDAY } from "~~/composables/dates";

export interface Proposal {
    start: Date;
    end: Date;
    price: number;
    pool: boolean;
}

const { now, daysBetween, isBetween, addYears, addDays, isIsoUtcDate, utcMidnight, addMonths, getDatesBetweenFilter } = useDates();


/**
 * Get some booking proposals for a given date.
 * Query parameters: 
 *      from: Date (The date from which to start the search of invalid end dates.)
 * @returns Date[]
 */
export default defineEventHandler((event) => {
    // Get the query parameters.
    const { from } = getQuery(event);
    if (!from)
        return createError({
            statusCode: 400,
            message: "Missing 'from' date query",
        });

    // From should be a string.
    if (typeof from !== "string")
        return createError({
            statusCode: 400,
            message: "'from' should be a string in UTC ISO format",
        });


    // The from query parameter should be a valid date.
    const { valid, date, message } = tryParseDate(from);
    if (!valid || !date)
        return createError({
            statusCode: 400,
            message: message || 'The "from" date is not valid'
        });


    // Get all dates from the date until that date in two weeks.
    // Only include Fridays and Sundays.
    const start = addDays(utcMidnight(date), 1);
    const validEndDates = getDatesBetweenFilter(start, addMonths(start, 3), (d) => {
        const day = d.getDay();
        if (!(day === SUNDAY || day === FRIDAY))
            return false;

        // TODO: Check if there are no other reservations in between.
        return true;
    });

    const proposals: Proposal[] = validEndDates.map(d => {
        return {
            start,
            end: d,
            price: daysBetween(start, d) * 100,
            pool: poolIsOpen(start, d),
        };
    });

    return proposals;

});

function poolIsOpen(from: Date, to: Date): boolean {
    // The pool is open every year between 28/04 and 30/09.
    const start = new Date(from.getFullYear(), 3, 28);
    const end = new Date(to.getFullYear(), 8, 30);

    return isBetween(from, start, end) && isBetween(to, start, end);
}

function tryParseDate(date: string): { valid: boolean, date?: Date, message?: string } {

    // The string should be a valid date in UTC ISO format.
    if (!isIsoUtcDate(date))
        return { valid: false, message: "The date string is not a valid UTC ISO date" };

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime()))
        return { valid: false, message: "The date string is not valid" };

    // The incoming date should be in the future.
    const today = now();
    if (dateObj < today)
        return { valid: false, message: "The date can not be in the past" };

    // The date should be no more than 2 years in the future.
    const twoYearsFromNow = addYears(today, 2);
    if (dateObj > twoYearsFromNow)
        return { valid: false, message: "The date can not be more than 2 years in the future" };

    return { valid: true, date: dateObj };
}

