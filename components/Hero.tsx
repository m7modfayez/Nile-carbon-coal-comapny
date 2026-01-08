export default function Hero() {
  return (
    <section id="hero" className="min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            توريد وتصدير الفحم
            <br />
            <span className="text-teal-700">بجودة ممتازة</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم خدمات متكاملة في استيراد والتصدير الفحم مع حلول مبتكرة مختصة لتأمين احتياجات العملاء.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="#contact" className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold text-lg hover-lift">
              اطلب الآن
            </a>
            <a href="#about" className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-lg hover-lift">
              تعرف أكثر
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '⚡', label: 'أكثر من 10 سنوات خبرة', delay: '0s' },
            { icon: '🌍', label: 'شحن دولي وجهي', delay: '0.2s' },
            { icon: '✓', label: 'شركات موثوقة', delay: '0.4s' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover-lift animate-scale-in"
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-gray-800 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
