export interface IProductCardProps {
    product: {
      _id: string;
      name: string;
      model?: string;
      price: number;
      discount: number;
      image_url: string;
      finalPrice: number; // اینجا اضافه شد
    };
  }