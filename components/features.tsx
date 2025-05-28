import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileSearch, Shield, Clock, BarChart, Brain, Zap } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Brain className="h-7 w-7" />,
      title: "ذكاء اصطناعي متقدم",
      description: "تحليل شامل للتقارير المالية باستخدام أحدث تقنيات الذكاء الاصطناعي ونماذج اللغة الكبيرة",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "اكتشاف المخاطر",
      description: "تحديد المخاطر المحتملة وتنبيه المدققين إلى المجالات التي تتطلب اهتمامًا خاصًا بدقة عالية",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "سرعة فائقة",
      description: "تسريع عملية التدقيق بشكل كبير من خلال أتمتة المهام الروتينية والتحليلية المعقدة",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "تقارير تحليلية",
      description: "إنشاء تقارير تحليلية شاملة مع رؤى قابلة للتنفيذ لتحسين عمليات التدقيق والامتثال",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <FileSearch className="h-7 w-7" />,
      title: "تحليل متعمق",
      description: "فحص دقيق للبيانات المالية والتشغيلية مع إمكانية اكتشاف الأنماط المخفية والشذوذ",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "متاح ٢٤/٧",
      description: "خدمة مستمرة على مدار الساعة مع إمكانية الوصول من أي مكان وفي أي وقت بأمان تام",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ]

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-50 border border-navy-200 rounded-full px-4 py-2 text-sm font-medium text-navy-700">
            <div className="w-2 h-2 bg-navy-500 rounded-full animate-pulse"></div>
            لماذا مدقق؟
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-navy-700 to-navy-900 bg-clip-text text-transparent">
                مميزات استثنائية
              </span>
            </h2>
            <p className="max-w-[900px] text-xl text-gray-600 leading-relaxed mx-auto">
              مدقق هو منصة ذكاء اصطناعي تدعم المدققين الماليين في تحليل تقارير الشركات واكتشاف المخاطر المحتملة من خلال
              تقاطع البيانات المالية والتشغيلية بدقة وسرعة لا مثيل لها.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 ${feature.borderColor} ${feature.bgColor} hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-navy-800 group-hover:text-navy-900 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </CardContent>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-navy-600 to-navy-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">أرقام تتحدث عن نفسها</h3>
            <p className="text-navy-100 text-lg">إحصائيات حقيقية من عملائنا حول العالم</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                +500%
              </div>
              <p className="text-navy-200 text-sm">تسريع في التحليل</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                98%
              </div>
              <p className="text-navy-200 text-sm">دقة في اكتشاف المخاطر</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                1000+
              </div>
              <p className="text-navy-200 text-sm">تقرير تم تحليله</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-navy-200 text-sm">خدمة مستمرة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
