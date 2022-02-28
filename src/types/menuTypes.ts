import { type } from "os";

export type Item = {
  id: number;
  name: string;
  dietaries: string[];
  featured: boolean;
  image: string;
  category: string;
  price: number;
  quantity: number;
};

export type Count = {
  name: any;
  quantity: any;
};
