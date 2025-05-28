// components/login.tsx

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 py-16 px-4">
      <Card className="w-full max-w-md shadow-lg border-2 border-navy-100">
        <CardHeader>
          <CardTitle className="text-center text-navy-800 text-2xl">تسجيل الدخول</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-navy-700 mb-1">البريد الإلكتروني</label>
              <Input type="email" placeholder="example@email.com" className="text-right" />
            </div>
            <div>
              <label className="block text-sm text-navy-700 mb-1">كلمة المرور</label>
              <Input type="password" placeholder="••••••••" className="text-right" />
            </div>
            <Button className="w-full bg-navy-600 hover:bg-navy-700 text-white">
              تسجيل الدخول
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
