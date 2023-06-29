import {ProductType} from './ProductType';

export type OrderItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  product: ProductType;
};
