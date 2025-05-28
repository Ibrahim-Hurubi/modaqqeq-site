import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardCheck, FileWarning, Scale, Zap } from "lucide-react"

export function UseCases() {
  const useCases = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-navy-600" />,
      title: "التدقيق الداخلي",
      description: "تعزيز عمليات التدقيق الداخلي من خلال تحليل البيانات المالية والتشغيلية بشكل آلي وشامل",
    },
    {
      icon: <FileWarning className="h-8 w-8 text-navy-600" />,
      title: "تقييم المخاطر المالية",
      description: "تحديد المخاطر المالية المحتملة وتقييمها بناءً على تحليل البيانات التاريخية والحالية",
    },
    {
      icon: <Scale className="h-8 w-8 text-navy-600" />,
      title: "دعم الامتثال التنظيمي",
      description: "مساعدة الشركات على الامتثال للوائح والمعايير المالية من خلال تحليل مستمر للبيانات",
    },
    {
      icon: <Zap className="h-8 w-8 text-navy-600" />,
      title: "تسريع مراجعة التقارير",
      description: "تقليل الوقت المستغرق في مراجعة التقارير المالية من أيام إلى ساعات أو حتى دقائق",
    },
  ]

  return (
    <section id="use-cases" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-700">حالات الاستخدام</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              يمكن استخدام منصة مدقق في مجموعة متنوعة من سيناريوهات التدقيق المالي والامتثال
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-navy-50 p-2 rounded-lg">{useCase.icon}</div>
                <CardTitle className="text-navy-700">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
