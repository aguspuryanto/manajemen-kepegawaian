// src/components/employees/EmployeeForm.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface EmployeeFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: any) => void
  initialData?: {
    nip?: string
    name?: string
    position?: string
    level?: string
    certification?: string
    status?: string
    address?: string
  }
}

export function EmployeeForm({ open, onOpenChange, onSubmit, initialData = {} }: EmployeeFormProps) {
  const [formData, setFormData] = useState({
    nip: initialData.nip || '',
    name: initialData.name || '',
    position: initialData.position || 'Guru',
    level: initialData.level || 'III/a',
    certification: initialData.certification || 'false',
    status: initialData.status || 'Aktif',
    address: initialData.address || ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>
              {initialData.nip ? 'Edit Data Pegawai' : 'Tambah Data Pegawai Baru'}
            </DialogTitle>
            <DialogDescription>
              {initialData.nip 
                ? 'Perbarui data pegawai yang sudah ada.' 
                : 'Lengkapi data pegawai baru. Data yang dimasukkan akan diverifikasi oleh admin.'}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nip">NIP</Label>
                <Input
                  id="nip"
                  name="nip"
                  placeholder="Masukkan NIP"
                  value={formData.nip}
                  onChange={handleInputChange}
                  required
                  disabled={!!initialData.nip}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nama lengkap sesuai ijazah"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position">Jabatan</Label>
                <Select
                  value={formData.position}
                  onValueChange={(value) => handleSelectChange('position', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jabatan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Guru">Guru</SelectItem>
                    <SelectItem value="Kepala Sekolah">Kepala Sekolah</SelectItem>
                    <SelectItem value="Tendik">Tenaga Kependidikan</SelectItem>
                    <SelectItem value="Operator">Operator Sekolah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Pangkat/Golongan</Label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => handleSelectChange('level', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih pangkat/golongan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="III/a">Penata Muda (III/a)</SelectItem>
                    <SelectItem value="III/b">Penata Muda Tk.I (III/b)</SelectItem>
                    <SelectItem value="III/c">Penata (III/c)</SelectItem>
                    <SelectItem value="III/d">Penata Tk.I (III/d)</SelectItem>
                    <SelectItem value="IV/a">Pembina (IV/a)</SelectItem>
                    <SelectItem value="IV/b">Pembina Tk.I (IV/b)</SelectItem>
                    <SelectItem value="IV/c">Pembina Utama Muda (IV/c)</SelectItem>
                    <SelectItem value="IV/d">Pembina Utama Madya (IV/d)</SelectItem>
                    <SelectItem value="IV/e">Pembina Utama (IV/e)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Status Sertifikasi</Label>
                <Select
                  value={formData.certification}
                  onValueChange={(value) => handleSelectChange('certification', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status sertifikasi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Sudah Sertifikasi</SelectItem>
                    <SelectItem value="false">Belum Sertifikasi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Status Kepegawaian</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleSelectChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status kepegawaian" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Aktif">Aktif</SelectItem>
                    <SelectItem value="Tidak Aktif">Tidak Aktif</SelectItem>
                    <SelectItem value="Cuti">Cuti</SelectItem>
                    <SelectItem value="Pensiun">Pensiun</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Alamat</Label>
              <Textarea
                id="address"
                name="address"
                placeholder="Alamat lengkap"
                className="min-h-[100px]"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Batal
            </Button>
            <Button type="submit">
              {initialData.nip ? 'Perbarui' : 'Simpan'} Data
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}