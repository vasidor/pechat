import { Prisma } from "@prisma/client";

export type Product = Prisma.ProductGetPayload<{
  include: { imageUrl: true };
}>;

export interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}
