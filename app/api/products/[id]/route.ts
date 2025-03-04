
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string }  }) {
    try {
        const product = await prisma.product.findUnique({
            where: { id: Number(params.id) }, // Convert the ID to a number
        });

        if (!product) {
            return new Response(JSON.stringify({ error: 'Produit non trouvé' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(product), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Erreur complète:', error);
        return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}