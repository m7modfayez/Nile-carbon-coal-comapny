export default function Products() {
  const products = [
    {
      name: 'فحم أ',
      englishName: 'Sample Product A',
      description: 'وصف تجريبي لمنتج صناعي يُستخدم لأغراض العرض فقط',
      specs: ['مواصفات مبدئية', 'قابلة للتعديل', 'للعرض فقط'],
    },
    {
      name: 'فحم ب',
      englishName: 'Sample Product B',
      description: 'منتج افتراضي لعرض شكل البيانات قبل اعتماد التفاصيل النهائية',
      specs: ['بيانات مؤقتة', 'غير نهائية', 'مثال توضيحي'],
    },
    {
      name: 'فحم ج',
      englishName: 'Sample Product C',
      description: 'هذا المحتوى مخصص للعرض المبدئي وسيتم استبداله لاحقًا',
      specs: ['Placeholder', 'Sample Specs', 'To Be Updated'],
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            أنواع <span className="text-teal-700">الفحم</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نوفر أنواع مختلفة من الفحم عالي الجودة لتلبية احتياجاتك المختلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-32 bg-gradient-to-r from-teal-700 to-teal-900 flex items-center justify-center">
                <div className="text-6xl">⬛</div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-teal-700 font-semibold mb-4">{product.englishName}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="space-y-2">
                  {product.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-700 rounded-full"></span>
                      <span className="text-sm text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="block w-full mt-6 bg-teal-700 text-white py-2 rounded-lg font-semibold hover:bg-teal-800 transition-colors text-center">
                  استفسر الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
