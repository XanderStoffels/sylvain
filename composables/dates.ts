export const MONDAY = 1;
export const TUESDAY = 2;
export const WEDNESDAY = 3;
export const THURSDAY = 4;
export const FRIDAY = 5;
export const SATURDAY = 6;
export const SUNDAY = 0;

export const JANUARY = 0;
export const FEBRUARY = 1;
export const MARCH = 2;
export const APRIL = 3;
export const MAY = 4;
export const JUNE = 5;
export const JULY = 6;
export const AUGUST = 7;
export const SEPTEMBER = 8;
export const OCTOBER = 9;
export const NOVEMBER = 10;
export const DECEMBER = 11;

const isoUtcRegex = /^(\d{4})-(0\d|1[0-2])-(0\d|1\d|2\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)\.\d{3}Z$/;

export type WeekDay = typeof MONDAY | typeof TUESDAY | typeof WEDNESDAY | typeof THURSDAY | typeof FRIDAY | typeof SATURDAY | typeof SUNDAY;
export type Month = typeof JANUARY | typeof FEBRUARY | typeof MARCH | typeof APRIL | typeof MAY | typeof JUNE | typeof JULY | typeof AUGUST | typeof SEPTEMBER | typeof OCTOBER | typeof NOVEMBER | typeof DECEMBER;

export function useDates() {

    function now() {
        return new Date();
    }

    function tomorrow() {
        return addDays(now(), 1);
    }

    function utcMidnight(date: Date) {
        const result = new Date(date);
        result.setUTCHours(0, 0, 0, 0);
        return result;
    }

    function localMidnight(date: Date) {
        const result = new Date(date);
        result.setHours(0, 0, 0, 0);
        return result;
    }

    function belgianMidnight(date: Date) {
        const result = new Date(date);

        // Midnight during winter hours.
        if (result.getMonth() >= 10 || result.getMonth() <= 2)
            result.setHours(1, 0, 0, 0);
        else
            result.setHours(2, 0, 0, 0);

        return result;
    }

    function equalExact(date1: Date, date2: Date) {
        return date1.getTime() === date2.getTime();
    }

    function equalDay(date1: Date, date2: Date) {
        return utcMidnight(date1).getTime() === utcMidnight(date2).getTime();
    }

    function isWeekDay(date: Date) {
        return date.getDay() !== SUNDAY && date.getDay() !== SATURDAY;
    }

    function isOn(date: Date, day: WeekDay) {
        return date.getDay() === day;
    }

    function addDays(date: Date, days: number) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function addMonths(date: Date, months: number) {
        const result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    }

    function addYears(date: Date, years: number) {
        const result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    }

    /**
     * Get all dates between two dates, including the start and end dates.
     * @param start 
     * @param end 
     * @returns 
     */
    function getDatesBetween(start: Date, end: Date) {
        const dates: Date[] = [];
        let currentDate = start;

        while (currentDate <= end) {
            dates.push(currentDate);
            currentDate = addDays(currentDate, 1);
        }

        return dates;
    }

    /**
     * Get all dates between two dates, including the start and end dates, that pass the given filter.
     * @param start 
     * @param end 
     * @param filter 
     * @returns 
     */
    function getDatesBetweenFilter(start: Date, end: Date, filter: (date: Date) => boolean) {
        const dates: Date[] = [];
        let currentDate = start;

        if (!filter(currentDate))
            dates.push(currentDate);

        while (currentDate <= end) {
            currentDate = addDays(currentDate, 1);
            if (!filter(currentDate))
                continue;
            dates.push(currentDate);
        }

        return dates;
    }

    function isIsoUtcDate(str: string): boolean {
        return isoUtcRegex.test(str);
    }

    function daysBetween(date1: Date, date2: Date) {
        const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

        return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    }

    function isBetween(date: Date, start: Date, end: Date) {
        return date >= start && date <= end;
    }

    function isValid(date: Date) {
        return date instanceof Date && !isNaN(date.getTime());
    }

    function isoUtcStringToDate(str: string): Date | null {
        if (isIsoUtcDate(str))
            return new Date(str);
        return null;
    }

    return { now, tomorrow, localMidnight, utcMidnight, equalExact, equalDay, isWeekDay, isOn, addDays, addMonths, addYears, getDatesBetween, getDatesBetweenFilter, isIsoUtcDate, daysBetween, isBetween, isValid, isoUtcStringToDate }
}