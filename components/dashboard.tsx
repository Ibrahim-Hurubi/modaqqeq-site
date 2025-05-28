import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Dashboard() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-navy-700">لوحة تحكم مدقق</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              واجهة سهلة الاستخدام تمكن المدققين من تحليل التقارير واكتشاف المخاطر بسرعة وكفاءة
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="border-2 border-gray-100 h-full">
                <CardHeader>
                  <CardTitle className="text-navy-700">ملخص التحليل</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">تقدم التحليل</span>
                        <span className="font-medium">٧٥٪</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-navy-600 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">تقارير تم تحليلها</p>
                        <p className="text-2xl font-bold text-navy-700">١٢٨</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">مخاطر مكتشفة</p>
                        <p className="text-2xl font-bold text-navy-700">٢٣</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">وقت التحليل</p>
                        <p className="text-2xl font-bold text-navy-700">٤٥ د</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">دقة التحليل</p>
                        <p className="text-2xl font-bold text-navy-700">٩٨٪</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-navy-700">المخاطر المكتشفة حسب النوع</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">مخاطر مالية</span>
                          <span className="font-medium">٤٥٪</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-red-500 rounded-full w-[45%]"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">مخاطر تشغيلية</span>
                          <span className="font-medium">٣٠٪</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-yellow-500 rounded-full w-[30%]"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">مخاطر امتثال</span>
                          <span className="font-medium">٢٥٪</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-2 border-gray-100 h-full">
                <CardHeader>
                  <CardTitle className="text-navy-700">تحميل تقرير جديد</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-navy-50 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-navy-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">اسحب وأفلت الملفات هنا أو</p>
                    <Button variant="outline" size="sm">
                      تصفح الملفات
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-navy-700">التقارير الأخيرة</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg border border-gray-100 flex justify-between items-center">
                        <span className="text-sm">التقرير_المالي_Q2_2023.pdf</span>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">مكتمل</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-100 flex justify-between items-center">
                        <span className="text-sm">تقرير_المراجعة_السنوي.pdf</span>
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">قيد التحليل</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-navy-600 hover:bg-navy-700">
                    تحليل التقرير
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
