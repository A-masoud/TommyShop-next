// types/productDetail.ts
export interface IProductDetail {
  _id: string;  // همیشه رشته
  name: string;
  category: string;
  popularity?: string;
  sizes?: string[];
  colors?: string[];
  images?: string[];
  image_url?: string;
  description?: string;
  price: number;
  warranty?: boolean;
}
