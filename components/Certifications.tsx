export default function Certifications() {
  const certifications = [
    'شهادات معتمدة عند البنوك والشركات',
    'شهادات موثوقة لضمان جودة المنتجات',
    'سياسة مشددة في اختيار الموردين والموزعين',
  ];

  const standards = [
    'معايير ISO العالمية',
    'معايير البيئة والسلامة الدولية',
    'شهادات التصدير والاستيراد المعتمدة',
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            الشهادات <span className="text-teal-700">والجودة</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">شهاداتنا</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">معايير الجودة</h3>
            <div className="space-y-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center text-white flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white p-12 rounded-2xl text-center animate-scale-in">
          <h3 className="text-3xl font-bold mb-4">التزامنا بالجودة</h3>
          <p className="text-lg leading-relaxed">
            نحن نلتزم بأعلى معايير الجودة والسلامة في جميع عملياتنا، مع ضمان الشفافية والمصداقية في التعامل مع جميع عملائنا. جودتنا لا تساوم وسمعتنا تتحدث عن نفسها.
          </p>
        </div>
      </div>
    </section>
  );
}
