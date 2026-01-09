// Simple in-memory storage for products (can be replaced with database later)
// For now using JSON file storage with localStorage context

export interface Product {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  price: number;
  image: string; // base64 or URL
  specs: string[];
  createdAt: Date;
}

// This will be replaced with actual database calls
let products: Product[] = [];

export async function getProducts(): Promise<Product[]> {
  // TODO: Replace with actual database call
  return products;
}

export async function addProduct(product: Omit<Product, 'id' | 'createdAt'>): Promise<Product> {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date(),
  };
  products.push(newProduct);
  return newProduct;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const initialLength = products.length;
  products = products.filter(p => p.id !== id);
  return products.length < initialLength;
}

export async function updateProduct(id: string, updated: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null> {
  const product = products.find(p => p.id === id);
  if (!product) return null;
  
  const updatedProduct = { ...product, ...updated };
  products = products.map(p => p.id === id ? updatedProduct : p);
  return updatedProduct;
}
