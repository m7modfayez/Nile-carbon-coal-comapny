export default function Services() {
  const services = [
    {
      title: 'استيراد الفحم',
      description: 'استيراد الفحم الخام والمعادن من مختلف دول العالم',
      icon: '📦',
    },
    {
      title: 'التصدير',
      description: 'تصدير منتجات فحمية بجودة عالية لشركات عالمية',
      icon: '🚢',
    },
    {
      title: 'فحص الجودة',
      description: 'خدمات فحص شاملة والتصنيف والتعبئة بمعايير دولية',
      icon: '✓',
    },
    {
      title: 'إدارة المخزن',
      description: 'إدارة فعالة للمخازن والتسليم والوثائق الإدارية',
      icon: '📊',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            خدماتنا <span className="text-teal-700">المتميزة</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نوفر مجموعة شاملة من الخدمات لضمان رضاك والحصول على أفضل جودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-4 w-12 h-1 bg-teal-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
