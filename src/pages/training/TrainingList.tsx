// src/pages/training/TrainingList.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Clock, BookOpen } from 'lucide-react'

export function TrainingList() {
  const trainings = [
    {
      id: 1,
      title: 'Workshop Pembelajaran Berbasis Digital',
      date: '15 Jan 2024',
      participants: 45,
      duration: '3 Hari',
      status: 'Berjalan',
    },
    {
      id: 2,
      title: 'Pelatihan Kurikulum Merdeka',
      date: '20 Jan 2024',
      participants: 60,
      duration: '2 Hari',
      status: 'Terjadwal',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Manajemen Pelatihan & Sertifikasi</h1>
        <p className="text-gray-600">Pendataan pelatihan, workshop, dan bimtek</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Pelatihan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-sm text-gray-500">Dalam setahun</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Peserta Aktif</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-sm text-gray-500">Guru & Tendik</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata Kehadiran</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-sm text-gray-500">Tingkat partisipasi</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sertifikasi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-sm text-gray-500">Guru tersertifikasi</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Daftar Pelatihan</CardTitle>
            <Button>+ Jadwalkan Pelatihan</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trainings.map((training) => (
              <div key={training.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{training.title}</h4>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {training.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {training.participants} peserta
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {training.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    training.status === 'Berjalan' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {training.status}
                  </span>
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}