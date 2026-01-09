'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface ProductFormData {
  title: string;
  englishTitle: string;
  description: string;
  price: string;
  image: string;
  specs: string[];
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => Promise<void>;
  isLoading?: boolean;
}

export default function ProductForm({ onSubmit, isLoading = false }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    englishTitle: '',
    description: '',
    price: '',
    image: '',
    specs: ['', '', ''],
  });

  const [preview, setPreview] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecChange = (index: number, value: string) => {
    const newSpecs = [...formData.specs];
    newSpecs[index] = value;
    setFormData(prev => ({
      ...prev,
      specs: newSpecs,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setFormData(prev => ({
          ...prev,
          image: base64,
        }));
        setPreview(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.title || !formData.englishTitle || !formData.price || !formData.image) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      await onSubmit(formData);
      setSuccess('Product added successfully!');
      // Reset form
      setFormData({
        title: '',
        englishTitle: '',
        description: '',
        price: '',
        image: '',
        specs: ['', '', ''],
      });
      setPreview('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add product');
    }
  };

  return (
    <Card className="p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">إضافة منتج جديد</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            صورة المنتج *
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-teal-700 file:text-white
              hover:file:bg-teal-800"
            required
          />
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="h-48 w-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Title (Arabic) */}
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            اسم المنتج (عربي) *
          </label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="مثال: فحم عالي الجودة"
            dir="rtl"
            required
          />
        </div>

        {/* Title (English) */}
        <div className="space-y-2">
          <label htmlFor="englishTitle" className="block text-sm font-medium text-gray-700">
            اسم المنتج (إنجليزي) *
          </label>
          <Input
            id="englishTitle"
            name="englishTitle"
            value={formData.englishTitle}
            onChange={handleInputChange}
            placeholder="Example: High Quality Coal"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            الوصف
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="أدخل وصف تفصيلي للمنتج"
            dir="rtl"
            rows={4}
          />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            السعر (بالعملة المحلية) *
          </label>
          <Input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="0.00"
            required
          />
        </div>

        {/* Specifications */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            المواصفات
          </label>
          {formData.specs.map((spec, index) => (
            <Input
              key={index}
              value={spec}
              onChange={(e) => handleSpecChange(index, e.target.value)}
              placeholder={`مواصفة ${index + 1}`}
              dir="rtl"
            />
          ))}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded-lg font-semibold"
        >
          {isLoading ? 'جاري الإضافة...' : 'إضافة المنتج'}
        </Button>
      </form>
    </Card>
  );
}
