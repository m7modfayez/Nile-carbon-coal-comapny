'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'عن الشركة', href: '#about' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'المنتجات', href: '/products' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md animate-fade-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-2xl font-extrabold text-teal-700 hover:text-teal-800 transition-colors">
              شركة النيل لتجارة الفحم
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-8 absolute md:relative top-full md:top-auto left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent p-4 md:p-0 md:items-center shadow-md md:shadow-none`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-teal-700 transition-colors font-medium md:hidden"
              onClick={() => setIsOpen(false)}
            >
              لوحة التحكم
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            <Link href="/dashboard" className="text-gray-700 hover:text-teal-700 transition-colors font-medium">
              لوحة التحكم
            </Link>
            <a href="#contact" className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition-colors font-semibold">
              اطلب الآن
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
