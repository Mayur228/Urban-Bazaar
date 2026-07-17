import {
  Shirt,
  Footprints,
  Handbag,
  Watch,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

export interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
}

export const categories: Category[] = [
  {
    id: 0,
    name: "All",
    icon: LayoutGrid,
  },
  {
    id: 1,
    name: "Men",
    icon: Shirt,
  },
  {
    id: 2,
    name: "Women",
    icon: Sparkles,
  },
  {
    id: 3,
    name: "Shoes",
    icon: Footprints,
  },
  {
    id: 4,
    name: "Bags",
    icon: Handbag,
  },
  {
    id: 5,
    name: "Watches",
    icon: Watch,
  },
];