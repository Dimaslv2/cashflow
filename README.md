# 💰 Cashflow

Modern personal finance management app. Track income, expenses, and manage budgets with an intuitive dashboard.

## ✨ Features

- **📊 Dashboard** - Real-time overview of income, expenses, and financial summary
- **💳 Transaction Management** - Add, edit, and categorize transactions
- **🏷️ Smart Categories** - Organize income and expenses by custom categories
- **📈 Visual Analytics** - Charts and graphs for spending patterns
- **🔐 Secure Authentication** - User registration and login with encrypted passwords
- **👤 Personal Workspace** - Each user has isolated financial data

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Backend**: Next.js API routes
- **Database**: MySQL with Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: shadcn/ui, Lucide icons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- MySQL database

### Installation

```bash
# Clone repository
git clone https://github.com/Dimaslv2/cashflow.git
cd cashflow

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your database URL and auth secrets

# Setup database
npx prisma migrate dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint
```

## 📊 Database Schema

### Users
- Email authentication with bcrypt hashing
- Personal workspace isolation

### Categories
- Income and expense categorization
- Custom colors per category
- User-owned with cascade delete

### Transactions
- Amount, type (income/expense), date
- Category and user relationships
- Timestamped records

## 🔗 API Routes

- `POST /api/auth/register` - Create account
- `POST /api/auth/[...nextauth]` - Authentication
- `GET /api/dashboard` - Financial summary
- `GET|POST /api/transactions` - Transaction CRUD
- `GET|POST /api/categories` - Category management

## 🎨 UI Components

Built with shadcn/ui and Tailwind CSS:
- Button, Card, Input, Label
- Select, Dialog components
- Responsive design patterns
- Dark/light mode ready

## 📦 Project Structure

```
cashflow/
├── app/              # Next.js app directory
│   ├── api/         # API routes
│   ├── dashboard/   # Dashboard page
│   ├── login/       # Auth pages
│   └── register/
├── components/      # React components
│   └── ui/         # shadcn/ui components
├── lib/            # Utilities and helpers
├── prisma/         # Database schema
└── public/         # Static assets
```

## 🔒 Security

- Passwords hashed with bcryptjs
- Environment variables for secrets
- NextAuth.js session management
- Database relationships with cascading deletes

## 📄 License

MIT

## 👥 Contributors

- [@Dimaslv2](https://github.com/Dimaslv2)

---

**Start managing your finances today!** 🚀
