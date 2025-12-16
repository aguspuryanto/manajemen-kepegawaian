// src/pages/Dashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, GraduationCap, TrendingUp, Award } from 'lucide-react'

export function Dashboard() {
  const stats = [
    {
      title: 'Total Pegawai',
      value: '1,248',
      icon: Users,
      change: '+12%',
      description: 'Dari bulan lalu',
    },
    {
      title: 'Pelatihan Aktif',
      value: '45',
      icon: GraduationCap,
      change: '+8%',
      description: 'Program berjalan',
    },
    {
      title: 'Rata-rata Kinerja',
      value: '4.2/5',
      icon: TrendingUp,
      change: '+0.3',
      description: 'Peningkatan kinerja',
    },
    {
      title: 'Sertifikasi',
      value: '78%',
      icon: Award,
      change: '+5%',
      description: 'Guru tersertifikasi',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Sistem Manajemen Kepegawaian Pendidikan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-green-600">{stat.change}</span> {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { activity: 'Promosi jabatan 5 guru', time: '2 jam yang lalu' },
                { activity: 'Pelatihan peningkatan kompetensi', time: '1 hari yang lalu' },
                { activity: 'Validasi data ASN terbaru', time: '2 hari yang lalu' },
                { activity: 'Penilaian kinerja semester', time: '1 minggu yang lalu' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="font-medium">{item.activity}</p>
                    <p className="text-sm text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <span className="font-medium">Tambah Pegawai</span>
                <p className="text-sm text-gray-600 mt-1">Input data baru</p>
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <span className="font-medium">Ajukan Mutasi</span>
                <p className="text-sm text-gray-600 mt-1">Proses perpindahan</p>
              </button>
              <button className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <span className="font-medium">Buat Laporan</span>
                <p className="text-sm text-gray-600 mt-1">Generate report</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <span className="font-medium">Jadwal Pelatihan</span>
                <p className="text-sm text-gray-600 mt-1">Lihat kalender</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}