export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center font-bold">
                EN
              </div>
              <span className="text-xl font-bold">النيل</span>
            </div>
            <p className="text-gray-400">شركة متخصصة في توريد وتصدير الفحم بجودة عالية وموثوقية تامة</p>
            <p className="mt-2 text-sm text-gray-500">تم تصميم وتطوير هذا الموقع بواسطة فريق محترف</p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-teal-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">عن الشركة</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">خدماتنا</a></li>
              <li><a href="#products" className="hover:text-teal-400 transition-colors">المنتجات</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">استيراد الفحم</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">التصدير</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">فحص الجودة</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">إدارة المخزن</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+201000000002" className="hover:text-teal-400 transition-colors">00 20 100 000 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@elnilecoal.example" className="hover:text-teal-400 transition-colors">info@elnilecoal.example</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>القليوبية - مصر</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>© {currentYear} شركة النيل للفحم - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
