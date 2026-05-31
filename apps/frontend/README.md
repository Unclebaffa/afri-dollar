# AfriDollar Frontend

Next.js frontend application for AfriDollar - a Stellar-powered financial infrastructure platform for African businesses.

## Overview

The frontend provides a modern, responsive web interface for businesses to manage digital dollar wallets, execute treasury operations, perform FX conversions, process payroll, and handle cross-border payments. Built with Next.js 14, it offers a seamless user experience with real-time updates, secure authentication, and comprehensive financial dashboards.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context + Zustand
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Authentication**: JWT with NextAuth.js
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Testing**: Jest, React Testing Library, Playwright
- **Build Tool**: Turbopack

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Presentation Layer                      │
│              (Next.js App Router + Pages)                   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   Component Layer                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Wallet  │  │ Treasury │  │    FX    │  │ Payroll  │   │
│  │Components│  │Components│  │Components│  │Components│   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   State & Logic Layer                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Context │  │  Hooks   │  │ Services │  │  Utils   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                   API Layer                                 │
│              (Axios + Backend API)                          │
└─────────────────────────────────────────────────────────────┘
```

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Dashboard routes
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── wallet/           # Wallet-related components
│   │   ├── treasury/         # Treasury components
│   │   ├── fx/               # FX conversion components
│   │   ├── payroll/          # Payroll components
│   │   └── shared/           # Shared components
│   ├── lib/                   # Utility libraries
│   │   ├── api.ts            # API client
│   │   ├── auth.ts           # Authentication utilities
│   │   ├── stellar.ts        # Stellar SDK integration
│   │   └── utils.ts          # General utilities
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.ts        # Authentication hook
│   │   ├── useWallet.ts      # Wallet hook
│   │   ├── useTreasury.ts    # Treasury hook
│   │   └── useFX.ts          # FX hook
│   ├── context/               # React Context providers
│   │   ├── AuthContext.tsx   # Authentication context
│   │   └── ThemeContext.tsx  # Theme context
│   ├── store/                 # State management
│   │   └── useStore.ts       # Zustand store
│   ├── types/                 # TypeScript types
│   │   └── index.ts          # Shared types
│   └── styles/                # Global styles
│       └── globals.css       # Tailwind CSS
├── public/                   # Static assets
├── tests/                    # Test files
├── .env.example             # Environment variables template
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Backend API running on http://localhost:3001

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.example .env
```

Configure the required environment variables in `.env`:

```env
# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Stellar
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org

# Feature Flags
NEXT_PUBLIC_ENABLE_KYC=true
NEXT_PUBLIC_ENABLE_PAYROLL=true
NEXT_PUBLIC_ENABLE_FX=true

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run test:coverage` - Run tests with coverage report

## Key Features

### Dashboard

- Overview of account balances and portfolio
- Recent transactions and activity feed
- Quick actions for common operations
- Real-time updates via WebSocket

### Wallet Management

- Create and manage Stellar wallets
- View wallet balances and transaction history
- Send and receive USDC
- Multi-wallet support

### Treasury Operations

- Treasury dashboard with position overview
- Rebalancing tools and recommendations
- Historical treasury performance
- Asset allocation visualization

### FX Conversion

- Real-time FX rate display
- Currency conversion calculator
- Conversion history and analytics
- Rate alerts and notifications

### Payroll Management

- Create and manage payroll batches
- Upload payroll data (CSV, Excel)
- Approve and process payments
- Payroll history and reports

### Cross-Border Payments

- Send international payments
- Track payment status in real-time
- Payment history and receipts
- Multi-currency support

### Compliance

- KYC verification flow
- Document upload and verification
- Compliance status dashboard
- AML transaction monitoring

## UI Components

The application uses shadcn/ui components for consistent, accessible UI:

- **Forms**: Input, Select, Checkbox, Radio, Switch
- **Data Display**: Table, Card, Badge, Avatar
- **Feedback**: Alert, Dialog, Toast, Progress
- **Navigation**: Tabs, Pagination, Breadcrumb
- **Layout**: Container, Grid, Flex, Separator

## State Management

### React Context

- `AuthContext` - Authentication state and user session
- `ThemeContext` - Theme preferences (light/dark mode)

### Zustand Store

- Global application state
- Wallet and transaction data
- FX rates and market data
- UI state (modals, sidebars, etc.)

### Custom Hooks

- `useAuth` - Authentication operations
- `useWallet` - Wallet operations and data
- `useTreasury` - Treasury management
- `useFX` - FX conversion operations
- `usePayroll` - Payroll management
- `usePayments` - Cross-border payments

## Authentication

### Login Flow

1. User enters credentials on login page
2. Frontend sends request to `/api/v1/auth/login`
3. Backend validates credentials and returns JWT
4. Frontend stores token in secure httpOnly cookie
5. User is redirected to dashboard

### Protected Routes

Routes are protected using middleware:

- Check for valid JWT token
- Redirect to login if unauthenticated
- Verify user permissions for specific routes

### Session Management

- Automatic token refresh
- Session timeout handling
- Logout functionality with token invalidation

## API Integration

### API Client

The application uses Axios for API communication:

```typescript
// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Error Handling

- Global error handling with Axios interceptors
- User-friendly error messages
- Automatic retry for failed requests
- Error boundary for React errors

## Stellar Integration

### Wallet Operations

The frontend integrates with Stellar using the Stellar SDK:

- **Wallet Creation**: Generate keypairs client-side
- **Balance Queries**: Fetch balances from Horizon API
- **Transaction Signing**: Sign transactions with private keys
- **QR Codes**: Generate QR codes for wallet addresses

### Security

- Private keys never leave the client
- Encrypted storage for sensitive data
- Secure key derivation
- Hardware wallet support (future)

## Responsive Design

The application is fully responsive and optimized for:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (< 768px)

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Performance Optimization

### Code Splitting

- Automatic code splitting with Next.js App Router
- Lazy loading of heavy components
- Dynamic imports for non-critical features

### Image Optimization

- Next.js Image component for automatic optimization
- WebP format support
- Responsive images with srcset

### Caching

- API response caching with React Query
- Static page generation where possible
- Service Worker for offline support (future)

## Testing

### Unit Tests

```bash
npm run test
```

### End-to-End Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:coverage
```

## Deployment

### Environment Setup

Ensure all environment variables are configured for production:

```env
NEXT_PUBLIC_API_URL=https://api.afridollar.com
NEXT_PUBLIC_APP_URL=https://app.afridollar.com
NEXTAUTH_URL=https://app.afridollar.com
NEXTAUTH_SECRET=your_production_secret
```

### Build

```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)

```bash
vercel deploy
```

#### Docker

```bash
docker build -t afridollar-frontend .
docker run -p 3000:3000 --env-file .env afridollar-frontend
```

#### Static Export

```bash
npm run build
npm run export
```

## Accessibility

The application follows WCAG 2.1 AA guidelines:

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Best Practices

- Content Security Policy (CSP)
- XSS protection
- CSRF protection
- Secure cookie flags
- Input validation and sanitization
- Dependency vulnerability scanning

## Development Guidelines

### Code Style

- Follow ESLint rules
- Use Prettier for formatting
- Write TypeScript with strict mode
- Use functional components with hooks
- Prefer composition over inheritance

### Component Structure

```typescript
// Example component structure
import { useState, useEffect } from 'react';

interface ComponentProps {
  // prop definitions
}

export function Component({ prop }: ComponentProps) {
  // component logic

  return (
    // JSX
  );
}
```

### Git Workflow

- Create feature branches from `main`
- Use conventional commit messages
- Ensure tests pass before pushing
- Request code review for PRs

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors**

- Run `npm run type-check` to identify issues
- Ensure all dependencies are installed
- Check TypeScript configuration

**API requests failing**

- Verify NEXT_PUBLIC_API_URL is correct
- Check backend server is running
- Review browser console for CORS errors

**Styling not applying**

- Ensure Tailwind CSS is properly configured
- Check that Tailwind classes are correct
- Verify PostCSS configuration

## Support

For frontend-specific issues:

- Email: dev.mes.anonfedora@gmail.com
- GitHub Issues: [afri-dollar/issues](https://github.com/DigiAfricaEra/afri-dollar/issues)

## License

MIT License - see root LICENSE file for details
