'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import ProductForm from '@/components/ProductForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Product {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  price: number;
  image: string;
  specs: string[];
  createdAt: string;
}

interface ProductFormData {
  title: string;
  englishTitle: string;
  description: string;
  price: string;
  image: string;
  specs: string[];
}

export default function Dashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [tab, setTab] = useState<'add' | 'view'>('add');

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoadingProducts(true);
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const handleAddProduct = async (data: ProductFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      await fetchProducts();
      setTab('view');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا المنتج؟')) return;

    try {
      const response = await fetch(`/api/products?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchProducts();
      }
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600">إدارة منتجات عملك</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setTab('add')}
            className={`px-6 py-3 font-semibold transition-colors ${
              tab === 'add'
                ? 'text-teal-700 border-b-2 border-teal-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            إضافة منتج جديد
          </button>
          <button
            onClick={() => setTab('view')}
            className={`px-6 py-3 font-semibold transition-colors ${
              tab === 'view'
                ? 'text-teal-700 border-b-2 border-teal-700'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            المنتجات ({products.length})
          </button>
        </div>

        {/* Add Product Tab */}
        {tab === 'add' && (
          <div className="flex justify-center">
            <ProductForm onSubmit={handleAddProduct} isLoading={isLoading} />
          </div>
        )}

        {/* View Products Tab */}
        {tab === 'view' && (
          <div>
            {isLoadingProducts ? (
              <p className="text-center text-gray-600">جاري التحميل...</p>
            ) : products.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-gray-600 mb-4">لا توجد منتجات حتى الآن</p>
                <Button
                  onClick={() => setTab('add')}
                  className="bg-teal-700 hover:bg-teal-800 text-white"
                >
                  إضافة أول منتج
                </Button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Product Image */}
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 text-right">
                        {product.title}
                      </h3>
                      <p className="text-sm text-teal-700 font-semibold mb-3">
                        {product.englishTitle}
                      </p>

                      {product.description && (
                        <p className="text-gray-600 text-sm mb-4 text-right line-clamp-2">
                          {product.description}
                        </p>
                      )}

                      <div className="mb-4">
                        <p className="text-2xl font-bold text-teal-700">
                          {product.price.toFixed(2)}
                        </p>
                      </div>

                      {product.specs.length > 0 && (
                        <div className="mb-4 space-y-1">
                          {product.specs.map((spec, idx) => (
                            spec && (
                              <p key={idx} className="text-sm text-gray-600 text-right">
                                • {spec}
                              </p>
                            )
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleDeleteProduct(product.id)}
                          variant="destructive"
                          className="flex-1"
                        >
                          حذف
                        </Button>
                        {/* Edit button can be added later */}
                        <Button
                          disabled
                          className="flex-1 bg-gray-300 text-gray-600 cursor-not-allowed"
                        >
                          تعديل
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
