import { Card, CardContent } from "@/components/ui/card"
import { ScanSearch, Brain, FileCode, Database } from "lucide-react"

export function Technologies() {
  const technologies = [
    {
      icon: <ScanSearch className="h-10 w-10 text-navy-600" />,
      title: "OCR",
      description: "تقنية التعرف الضوئي على الحروف لقراءة التقارير المسحوبة ضوئيًا والمستندات الرقمية",
    },
    {
      icon: <Brain className="h-10 w-10 text-navy-600" />,
      title: "نماذج اللغة الكبيرة",
      description: "استخدام نماذج OpenAI وغيرها لفهم وتحليل النصوص المالية بدقة عالية",
    },
    {
      icon: <FileCode className="h-10 w-10 text-navy-600" />,
      title: "محرك القواعد المالية",
      description: "نظام متخصص لتطبيق القواعد والمعايير المالية على البيانات المستخرجة",
    },
    {
      icon: <Database className="h-10 w-10 text-navy-600" />,
      title: "تحليل البيانات",
      description: "أدوات متقدمة لتحليل البيانات المالية واكتشاف الأنماط والشذوذ",
    },
  ]

  return (
    <section id="technologies" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-700">التقنيات المستخدمة</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              يعتمد نظام مدقق على مجموعة من التقنيات المتطورة لتوفير تحليل دقيق وشامل للتقارير المالية
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <div className="mb-4 bg-navy-50 p-3 rounded-full">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-navy-700">{tech.title}</h3>
                <p className="text-gray-500">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
