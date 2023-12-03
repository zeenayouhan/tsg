export type Reducers = {
  common: CommonReducer;
};
export type CommonReducer = {
  products: productPayload[] | null;
};

export type productsPayload = {
  products: productPayload[];
};

export type productPayload = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: String[];
};
