import { PrismaClient, Reservation } from '@prisma/client'
const prisma = new PrismaClient()


export function useReservations() {

    async function getByIdAsync(id: number): Promise<Reservation | null> {
        return await prisma.reservation.findUnique({
            where: {
                id
            }
        })
    }

    async function getByCodeAndMailAsync(code: string, email: string): Promise<Reservation | null> {
        return await prisma.reservation.findFirst({
            where: {
                code,
                email
            }
        });
    }

    return {
        getByIdAsync,
        getByCodeAndMailAsync
    }
}