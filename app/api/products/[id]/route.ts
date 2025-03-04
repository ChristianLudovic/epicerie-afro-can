import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request, // Use `Request` or `NextRequest` from 'next/server'
  { params }: { params: { id: string } } // Destructure `params` directly
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(params.id) }, // Convert the ID to a number
    });

    if (!product) {
      return NextResponse.json(
        { error: 'Produit non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}