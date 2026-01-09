'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              أنواع <span className="text-teal-700">الفحم</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نوفر أنواع مختلفة من الفحم عالي الجودة لتلبية احتياجاتك المختلفة
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">جاري تحميل المنتجات...</p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">لا توجد منتجات متاحة حالياً</p>
            </div>
          )}

          {/* Products Grid */}
          {!isLoading && products.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <div className="h-64 bg-gradient-to-r from-teal-700 to-teal-900 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-6xl">⬛</div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 text-right">
                      {product.title}
                    </h3>
                    <p className="text-sm text-teal-700 font-semibold mb-4">
                      {product.englishTitle}
                    </p>

                    {product.description && (
                      <p className="text-gray-600 mb-6 text-right text-sm leading-relaxed">
                        {product.description}
                      </p>
                    )}

                    {/* Price */}
                    <div className="mb-6">
                      <p className="text-3xl font-bold text-teal-700">
                        {product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">السعر الأساسي</p>
                    </div>

                    {/* Specifications */}
                    {product.specs.length > 0 && (
                      <div className="space-y-2 mb-6">
                        {product.specs.map((spec, specIndex) => (
                          spec && (
                            <div key={specIndex} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                              <span className="text-sm text-gray-700 text-right">{spec}</span>
                            </div>
                          )
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href="#contact"
                      className="block w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors text-center"
                    >
                      استفسر الآن
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
