// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import DashboardPage from './pages/dashboard/DashboardPage'
import ProfilePage from './pages/profile/ProfilePage'
import LoginPage from './pages/auth/LoginPage'

import { EmployeeList } from './pages/employees/EmployeeList'
import { Mutations } from './pages/employees/Mutations'
import { PerformanceReview } from './pages/performance/PerformanceReview'
import { TrainingList } from './pages/training/TrainingList'

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') || sessionStorage.getItem('isAuthenticated')
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="mutations" element={<Mutations />} />
          <Route path="performance" element={<PerformanceReview />} />
          <Route path="training" element={<TrainingList />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
// src/App.tsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { MainLayout } from '@/components/layout/MainLayout'
// import { Dashboard } from '@/pages/dashboard/Dashboard'
// import { EmployeeList } from '@/pages/employees/EmployeeList'
// import { Mutations } from '@/pages/employees/Mutations'
// import { PerformanceReview } from '@/pages/performance/PerformanceReview'
// import { TrainingList } from '@/pages/training/TrainingList'
// // import { Certification } from '@/pages/training/Certification'
// // import { Reports } from '@/pages/reports/Reports'
// // import { Analytics } from '@/pages/reports/Analytics'
// // import { Integration } from '@/pages/management/Integration'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="employees" element={<EmployeeList />} />
//           <Route path="mutations" element={<Mutations />} />
//           <Route path="performance" element={<PerformanceReview />} />
//           <Route path="training" element={<TrainingList />} />
//           {/* <Route path="certification" element={<Certification />} />
//           <Route path="reports" element={<Reports />} />
//           <Route path="analytics" element={<Analytics />} />
//           <Route path="management" element={<Integration />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default App