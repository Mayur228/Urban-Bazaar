import { api } from "../api";


export const ProductService = {
  async getProducts() {
    const response = await api.get("/products");
    return response.data;
  },

  async getProduct(id: number) {
    const response = await api.get(
      `${"/products"}/${id}`
    );

    return response.data;
  },

  async getByCategory(categoryId: number) {
    const response = await api.get(
      `${"/products"}/${categoryId}/products`
    );

    return response.data;
    },
  
    async getCategory() { 
        const response = await api.get("/categories")
        return response.data
    }
};