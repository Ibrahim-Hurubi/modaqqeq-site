import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, TrendingUp, Shield, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 text-sm font-medium text-navy-700 shadow-sm w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              الآن متاح للاستخدام
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-navy-700 via-navy-800 to-navy-900 bg-clip-text text-transparent">
                  مدقق
                </span>
                <br />
                <span className="text-gray-700 text-3xl sm:text-4xl xl:text-5xl">مساعدك الذكي في التدقيق</span>
              </h1>
              <p className="max-w-[600px] text-xl text-gray-600 leading-relaxed">
                منصة ذكاء اصطناعي متطورة تحول عملية التدقيق المالي من أيام إلى دقائق، مع دقة تصل إلى
                <span className="font-bold text-navy-700"> 98%</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-navy-700">+500%</span> تسريع في التحليل
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-navy-700">98%</span> دقة في اكتشاف المخاطر
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-gray-600">
                  <span className="font-bold text-navy-700">24/7</span> متاح دائماً
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group">
                ابدأ التحليل الآن
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-200 hover:border-navy-300 hover:bg-navy-50 px-8 py-6 text-lg group"
              >
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                شاهد العرض التوضيحي
              </Button>
            </div>
          </div>

          {/* Enhanced Dashboard Preview */}
          <div className="relative">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200/50">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-navy-600 to-navy-700 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">لوحة التحكم الرئيسية</h3>
                      <p className="text-sm text-white/80">تحليل مباشر للتقارير المالية</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">متصل</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Progress Section */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-700">تقدم التحليل الحالي</span>
                    <span className="text-lg font-bold text-navy-700">٨٧٪</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-navy-500 to-blue-500 rounded-full w-[87%] animate-pulse"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">تقارير محللة</p>
                        <p className="text-xl font-bold text-gray-900">١٢٨</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">مخاطر مكتشفة</p>
                        <p className="text-xl font-bold text-gray-900">٢٣</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">توزيع المخاطر</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">مخاطر عالية</span>
                      <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full w-[30%]"></div>
                      </div>
                      <span className="text-xs font-medium">٣٠٪</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">مخاطر متوسطة</span>
                      <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full w-[45%]"></div>
                      </div>
                      <span className="text-xs font-medium">٤٥٪</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">مخاطر منخفضة</span>
                      <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-[25%]"></div>
                      </div>
                      <span className="text-xs font-medium">٢٥٪</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">النشاط الأخير</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg border border-green-100">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">تم تحليل التقرير المالي Q3</span>
                      <span className="text-xs text-gray-400 mr-auto">منذ ٥ دقائق</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">بدء تحليل تقرير المراجعة</span>
                      <span className="text-xs text-gray-400 mr-auto">منذ ١٠ دقائق</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-gray-700">تحليل مكتمل</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-pulse">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-medium text-gray-700">سرعة فائقة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
