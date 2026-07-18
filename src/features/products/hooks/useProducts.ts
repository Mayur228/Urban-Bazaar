import { useEffect, useState } from "react";
import { ProductService } from "../../../api/services/productService";


export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    ProductService.getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

    useEffect(
        () => { 
            ProductService.getCategory()
                .then(setCategories)
                .finally(() => { false})
        }
    )
    
    return {
    categories,
    products,
    loading,
  };
    
}