// src/pages/performance/PerformanceReview.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const performanceData = [
  { name: 'Jan', value: 82 },
  { name: 'Feb', value: 85 },
  { name: 'Mar', value: 88 },
  { name: 'Apr', value: 84 },
  { name: 'Mei', value: 90 },
  { name: 'Jun', value: 92 },
]

const employeesPerformance = [
  { name: 'Dr. Siti Nurhaliza', score: 95, status: 'Sangat Baik' },
  { name: 'Budi Santoso, M.Pd.', score: 88, status: 'Baik' },
  { name: 'Ani Lestari, S.Pd.', score: 78, status: 'Cukup' },
  { name: 'Ahmad Hidayat', score: 92, status: 'Sangat Baik' },
]

export function PerformanceReview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Monitoring Kinerja</h1>
        <p className="text-gray-600">Penilaian kinerja berkala dan evaluasi pegawai</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tren Kinerja 6 Bulan Terakhir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rata-rata Kinerja</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Kinerja Keseluruhan</span>
                <span className="text-sm font-bold">86.5/100</span>
              </div>
              <Progress value={86.5} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Kedisiplinan</span>
                <span className="text-sm font-bold">92/100</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Pencapaian Target</span>
                <span className="text-sm font-bold">81/100</span>
              </div>
              <Progress value={81} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Penilaian Kinerja Pegawai</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {employeesPerformance.map((employee, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">
                      {employee.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{employee.name}</h4>
                    <p className="text-sm text-gray-500">Nilai: {employee.score}/100</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={
                    employee.status === 'Sangat Baik' ? 'default' :
                    employee.status === 'Baik' ? 'secondary' : 'outline'
                  }>
                    {employee.status}
                  </Badge>
                  <Progress value={employee.score} className="w-32" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}