

export default defineEventHandler(async (event) => {
    const reservationRepo = useReservations();

    const codeParameter = event.context.params?.id;
    const { email } = getQuery(event);

    if (!codeParameter)
        return createError({
            statusCode: 400,
            message: "Missing 'id' url parameter",
        });

    if (!email || typeof email !== "string")
        return createError({
            statusCode: 400,
            message: "String query parameter 'email' is a required",
        });


    const reservation = await reservationRepo.getByCodeAndMailAsync(codeParameter, email);
    if (!reservation) {
        return createError({ statusCode: 404, message: "Reservation not found" });
    }

    return reservation;
});