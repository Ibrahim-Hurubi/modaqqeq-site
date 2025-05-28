import { Card, CardContent } from "@/components/ui/card"
import { ScanSearch, Brain, FileCode, AlertTriangle, ArrowLeft } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <ScanSearch className="h-8 w-8" />,
      title: "قراءة التقارير",
      description:
        "استخدام تقنية OCR المتطورة لقراءة التقارير المالية المسحوبة ضوئيًا أو الرقمية بدقة عالية",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "فهم المحتوى",
      description:
        "استخدام نماذج اللغة الكبيرة (LLMs) لفهم السياق والمحتوى بدقة عالية وتحليل المعاني",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      title: "تطبيق القواعد المالية",
      description:
        "تطبيق محرك القواعد المالية المتخصص لتحليل البيانات وفقًا للمعايير المحاسبية الدولية",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "اكتشاف الشذوذ",
      description:
        "تحديد الحالات الشاذة والمخاطر المحتملة وتنبيه المدققين إليها مع تقديم التوصيات",
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
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card
                  className={`group relative overflow-hidden border-2 ${step.borderColor} ${step.bgColor} hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-4`}
                >
                  {/* Step Number */}
                  <div className="absolute top-3 right-3 z-20">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
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

                  {/* Hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>

                {/* Arrows between steps */}
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
      </div>
    </section>
  )
}
