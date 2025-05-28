import { Card, CardContent } from "@/components/ui/card"
import { ScanSearch, Brain, FileCode, AlertTriangle, ArrowLeft } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <ScanSearch className="h-8 w-8" />,
      title: "قراءة التقارير",
      description: "استخدام تقنية OCR المتطورة لقراءة التقارير المالية المسحوبة ضوئيًا أو الرقمية بدقة عالية",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "فهم المحتوى",
      description: "استخدام نماذج اللغة الكبيرة (LLMs) لفهم السياق والمحتوى بدقة عالية وتحليل المعاني",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      title: "تطبيق القواعد المالية",
      description: "تطبيق محرك القواعد المالية المتخصص لتحليل البيانات وفقًا للمعايير المحاسبية الدولية",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "اكتشاف الشذوذ",
      description: "تحديد الحالات الشاذة والمخاطر المحتملة وتنبيه المدققين إليها مع تقديم التوصيات",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-50 border border-navy-200 rounded-full px-4 py-2 text-sm font-medium text-navy-700">
            <div className="w-2 h-2 bg-navy-500 rounded-full animate-pulse"></div>
            العملية
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-navy-700 to-navy-900 bg-clip-text text-transparent">
                كيف يعمل مدقق
              </span>
            </h2>
            <p className="max-w-[900px] text-xl text-gray-600 leading-relaxed mx-auto">
              نظام مدقق يعمل من خلال أربع خطوات رئيسية متطورة لتحليل التقارير المالية واكتشاف المخاطر المحتملة بسرعة
              ودقة استثنائية
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card
                  className={`group relative overflow-hidden border-2 ${step.borderColor} ${step.bgColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 right-6 z-20">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <CardContent className="pt-12 pb-8 px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-navy-800 group-hover:text-navy-900 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>

                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-sm">
                      <ArrowLeft className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">من التقرير إلى النتائج في دقائق</h3>
            <p className="text-gray-600">تتبع رحلة تحليل التقرير المالي خطوة بخطوة</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                <ScanSearch className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-700">رفع التقرير</span>
              <span className="text-xs text-gray-500">٠ ثانية</span>
            </div>

            <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 hidden md:block"></div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                <Brain className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-700">تحليل ذكي</span>
              <span className="text-xs text-gray-500">٣٠ ثانية</span>
            </div>

            <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-green-300 hidden md:block"></div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                <FileCode className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-700">تطبيق القواعد</span>
              <span className="text-xs text-gray-500">٦٠ ثانية</span>
            </div>

            <div className="flex-1 h-0.5 bg-gradient-to-r from-green-300 to-red-300 hidden md:block"></div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium text-gray-700">النتائج النهائية</span>
              <span className="text-xs text-gray-500">٩٠ ثانية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
