"use server";
import prisma from "@/lib/prisma";
import type { Category } from "@prisma/client";

const getProducts = async ({ category }: { category: Category }) => {
  const products = await prisma.product.findMany({
    where: {
      categoryId: category.id,
    },
    include: {
      category: true,
      imageUrl: true, // включаем связанные изображения
    },
  });
  return products;
};

export { getProducts };
