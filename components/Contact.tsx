"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Implement your own backend API endpoint here
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitStatus("success");
      alert("شكراً لتواصلك معنا. سنرد عليك قريباً!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            اتصل <span className="text-teal-700">بنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            هل تريد معرفة المزيد؟ نحن هنا لمساعدتك والإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              label: "الهاتف",
              value: "00 20 100 000 0000",
              detail: "اتصل بنا من 9 صباحاً إلى 6 مساءً",
            },
            {
              icon: Mail,
              label: "البريد الإلكتروني",
              value: "info@elnilecoal.example",
              detail: "سنرد عليك في أسرع وقت",
            },
            {
              icon: MapPin,
              label: "العنوان",
              value: "قليوبية - مصر",
              detail: "اجهور الكبرى-مركز طوخ",
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl text-center hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center text-white">
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                <p className="text-teal-700 font-semibold mb-2">
                  {contact.value}
                </p>
                <p className="text-gray-600 text-sm">{contact.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              معلومات إضافية
            </h3>
            <div className="space-y-6 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl">
              <div>
                <p className="font-semibold text-gray-900 mb-2">الاسم</p>
                <p className="text-gray-700">شركة النيل للفحم</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  البريد الإلكتروني
                </p>
                <p className="text-gray-700">info@elnilecoal.example</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">العنوان</p>
                <p className="text-gray-700">اجهور الكبرى - القليوبية</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">ساعات العمل</p>
                <p className="text-gray-700">
                  من الأحد إلى الخميس: 9:00 - 18:00
                </p>
                <p className="text-gray-700">الجمعة والسبت: مغلق</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-left">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-8 rounded-xl"
            >
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700 transition-colors"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700 transition-colors"
                  placeholder="أدخل بريدك"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700 transition-colors"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  الموضوع
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700 transition-colors"
                  placeholder="موضوع رسالتك"
                />
              </div>

              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700 transition-colors resize-none"
                  placeholder="أدخل رسالتك هنا"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "جاري الإرسال..." : "أرسل الرسالة"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
