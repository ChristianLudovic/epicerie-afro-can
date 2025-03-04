import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const productId = parseInt(params.id, 10);

        if (isNaN(productId)) {
            return new Response(JSON.stringify({ error: 'ID invalide' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const product = await prisma.product.findUnique({
            where: { id: productId },
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
        return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
