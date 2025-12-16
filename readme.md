# Install dependencies tambahan
npm install
npm install @tanstack/react-table date-fns recharts react-hook-form axios react-query
npm install @hookform/resolvers zod
npm install lucide-react

# Setup shadcn components (sesuai dengan template)
npx shadcn-ui@latest init
# Pilih opsi: typescript, default style, base color: slate

# Start the development server
npm run dev

## Project Structure

```
src/
├── assets/                    # Static assets (images, fonts, etc.)
│   ├── images/
│   └── styles/
│       └── globals.css
│
├── components/                # Reusable UI components
│   ├── ui/                    # shadcn/ui components (auto-generated)
│   ├── shared/                # Shared components used across features
│   │   ├── DataTable/         # Table components with sorting/filtering
│   │   ├── Form/              # Reusable form components
│   │   └── UI/                # Basic UI components (buttons, cards, etc.)
│   └── layouts/               # Layout components
│       ├── MainLayout/
│       │   ├── index.tsx
│       │   ├── Sidebar.tsx
│       │   └── Header.tsx
│       └── AuthLayout/
│           └── index.tsx
│
├── features/                  # Feature-based modules
│   ├── auth/                  # Authentication feature
│   ├── employees/             # Employee management
│   │   ├── components/        # Feature-specific components
│   │   ├── hooks/             # Feature-specific hooks
│   │   ├── types/             # Feature-specific types
│   │   └── index.ts           # Feature entry point
│   ├── training/              # Training management
│   ├── performance/           # Performance reviews
│   └── reports/               # Reporting
│
├── pages/                     # Page components (Next.js pages)
│   ├── _app.tsx               # Custom App component
│   ├── _document.tsx          # Custom Document component
│   ├── dashboard/             # Dashboard pages
│   ├── employees/             # Employee management pages
│   ├── training/              # Training pages
│   ├── performance/           # Performance review pages
│   ├── reports/               # Report pages
│   └── auth/                  # Authentication pages
│
├── services/                  # API services
│   ├── api/                   # API client configuration
│   │   ├── client.ts          # HTTP client instance
│   │   └── endpoints/         # API endpoints
│   ├── employeeService.ts
│   ├── trainingService.ts
│   └── ...
│
├── store/                     # State management
│   ├── slices/                # Redux slices
│   └── hooks.ts               # Typed hooks for Redux
│
├── types/                     # Global TypeScript types
│   ├── api/                   # API response/request types
│   ├── models/                # Data models
│   └── index.ts               # Type exports
│
├── utils/                     # Utility functions
│   ├── constants/             # App-wide constants
│   ├── formatters/            # Data formatting functions
│   ├── validators/            # Validation utilities
│   └── helpers/               # Helper functions
│
└── App.tsx                    # Main App component

## Key Features

- **Modular Architecture**: Features are self-contained with their own components, hooks, and types
- **Type Safety**: Full TypeScript support throughout the application
- **Responsive Design**: Built with mobile-first approach using Tailwind CSS
- **State Management**: Redux for global state management
- **API Layer**: Centralized API services with React Query for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Built with shadcn/ui for consistent design