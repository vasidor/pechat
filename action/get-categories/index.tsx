"use server";
import prisma from "@/lib/prisma";

const getCategories = () => {
  const categories = prisma.category.findMany();
  return categories;
};

export { getCategories };
