// src/components/layouts/Sidebar.tsx
import {
  Users,
  GraduationCap,
  TrendingUp,
  FileText,
  Settings,
  Home,
  RefreshCw,
  Award
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/employees', icon: Users, label: 'Pendataan Pegawai' },
  { to: '/mutations', icon: RefreshCw, label: 'Mutasi & Promosi' },
  { to: '/training', icon: GraduationCap, label: 'Pelatihan & Sertifikasi' },
  { to: '/performance', icon: TrendingUp, label: 'Monitoring Kinerja' },
  { to: '/reports', icon: FileText, label: 'Laporan & Analitik' },
  { to: '/management', icon: Settings, label: 'Manajemen Terintegrasi' },
  { to: '/certification', icon: Award, label: 'Status Sertifikasi' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">SIMPEG</h1>
        <p className="text-sm text-gray-500">Sistem Manajemen Kepegawaian</p>
      </div>
      <nav className="space-y-2 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}