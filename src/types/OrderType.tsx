import {OrderItemType} from './OrderItemType';
import {PaymentResult} from './PaymentResult';
import {ProductType} from './ProductType';

export type OrderType = {
  user?: number;
  date?: string;
  orderItems?: ProductType[];
  total?: number;
  delivery?: string;
  status?: string;
  discount?: number;
  shippingAddress?: string;
  paymentMethod?: string;
  paymentResult?: PaymentResult;
  isPaid?: boolean;
  paidAt?: string;
  isDelivered?: boolean;
  deliveredAt?: string;
};
