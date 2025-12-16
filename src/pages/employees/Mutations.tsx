// src/pages/employees/Mutations.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { FileText, CheckCircle, XCircle, Clock } from 'lucide-react'

export function Mutations() {
  const pendingMutations = [
    { id: 1, name: 'Budi Santoso', from: 'SDN 1 Jakarta', to: 'SDN 5 Jakarta', type: 'Mutasi', date: '2024-01-15' },
    { id: 2, name: 'Ani Lestari', from: 'Guru III/b', to: 'Guru IV/a', type: 'Promosi', date: '2024-01-14' },
  ]

  const mutationHistory = [
    { id: 1, name: 'Siti Rahayu', from: 'SMPN 2 Bandung', to: 'SMPN 5 Bandung', type: 'Mutasi', status: 'Disetujui', date: '2024-01-10' },
    { id: 2, name: 'Ahmad Hidayat', from: 'Kepala Sekolah', to: 'Pengawas Sekolah', type: 'Promosi', status: 'Disetujui', date: '2024-01-05' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mutasi & Promosi Jabatan</h1>
        <p className="text-gray-600">Kelola pengajuan dan persetujuan mutasi secara digital</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Pengajuan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-sm text-gray-500">Dalam 30 hari terakhir</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Menunggu Persetujuan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-sm text-gray-500">Perlu tindak lanjut</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Rata-rata Proses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.2 hr</div>
            <p className="text-sm text-gray-500">Waktu penyelesaian</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">
            <Clock className="w-4 h-4 mr-2" />
            Menunggu Persetujuan
          </TabsTrigger>
          <TabsTrigger value="history">
            <FileText className="w-4 h-4 mr-2" />
            Riwayat Mutasi
          </TabsTrigger>
          <TabsTrigger value="new">
            + Ajukan Baru
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Dari</TableHead>
                    <TableHead>Ke</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingMutations.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.from}</TableCell>
                      <TableCell>{item.to}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${item.type === 'Promosi' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                          {item.type}
                        </span>
                      </TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Setujui
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-4 h-4 mr-1" />
                            Tolak
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Perubahan</TableHead>
                    <TableHead>Jenis</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mutationHistory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>
                        <div>
                          <div className="text-sm text-gray-500">Dari: {item.from}</div>
                          <div className="text-sm">Ke: {item.to}</div>
                        </div>
                      </TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </TableCell>
                      <TableCell>{item.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}