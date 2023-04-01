import { useDates } from "~~/composables/dates"
const { isValid, isoUtcStringToDate } = useDates();

interface ReservationRequestModel {
    from: Date,
    to: Date,
    name: string,
    email: string,
    phone: string,
    birthday: Date,
    people: GuestInfoModel[],
}

interface GuestInfoModel {
    name: string,
    birthday: Date
}

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const model = parseReservationRequestModel(body);
    if (!model)
        return createError({ statusCode: 400, message: "Invalid request body" });



    return model;
});



// Parsing //
// TODO: Isn't there a lib for this?

function parseReservationRequestModel(body: object): ReservationRequestModel | null {
    if (!body)
        return null;

    const { from, to, name, email, phone, birthday, people } = body as ReservationRequestModel;

    if (!from || !to || !name || !email || !phone || !birthday || !people)
        return null;

    if (typeof from !== "string" || typeof to !== "string" || typeof name !== "string" || typeof email !== "string" || typeof phone !== "string" || typeof birthday !== "string" || !Array.isArray(people))
        return null;

    const peopleModels = people.map(p => parseGuestInfoModel(p));
    if (peopleModels.some(p => p == null))
        return null;

    // Parse dates.
    const fromParsed = isoUtcStringToDate(from);
    const toParsed = isoUtcStringToDate(to);
    const birthdayParsed = isoUtcStringToDate(birthday);

    // Check if the dates are valid.
    if (!fromParsed || !toParsed || !birthdayParsed)
        return null;



    return {
        from: fromParsed,
        to: toParsed,
        name,
        email,
        phone,
        birthday: birthdayParsed,
        people: peopleModels as GuestInfoModel[]
    }
}

function parseGuestInfoModel(body: object): GuestInfoModel | null {
    if (!body)
        return null;

    const { name, birthday } = body as GuestInfoModel;

    if (!name || !birthday)
        return null;

    if (typeof name !== "string" || typeof birthday !== "string")
        return null;

    // Parse dates.
    const birthdayParsed = isoUtcStringToDate(birthday);

    if (!birthdayParsed)
        return null;

    return {
        name,
        birthday: birthdayParsed
    }
}
