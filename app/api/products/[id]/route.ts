import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Params {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const productId = parseInt(params.id, 10);

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "ID invalide" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Produit non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
