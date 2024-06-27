"use server";
import prisma from "@/lib/prisma";

const getProduct = async ({ handle }: { handle: string }) => {
  const productItem = await prisma.product.findUnique({
    where: {
      handle: handle[0],
    },
    include: {
      imageUrl: true,
    },
  });

  return productItem;
};

export { getProduct };
