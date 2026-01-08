export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-right space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              عن <span className="text-teal-700">الشركة</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              شركة متخصصة في تجارة الفحم تتمتع بسمعة عالية وخبرة واسعة في مجال الفحم مع مختلف موردين ومصنعين متميزين ومعاملات تتسم بالشفافية على كل مراحل العملية.
            </p>
          </div>

          <div className="animate-slide-in-left">
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-8">
                {[
                  { number: '10+', label: 'سنوات الخبرة' },
                  { number: '500+', label: 'عملاء موثوقين' },
                  { number: '50+', label: 'شحنة شهرية' },
                ].map((stat, index) => (
                  <div key={index} className="border-b border-teal-600 pb-6 last:border-b-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-4xl font-bold">{stat.number}</div>
                    <div className="text-teal-100 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
