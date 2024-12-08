# Frontiers Market

A modern livestock marketplace platform built with Next.js, featuring real-time chat support, authentication, and a beautiful UI.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Authentication**: Secure user authentication with Clerk
- **Real-time Chat**: Firebase-powered chat system with AI integration
- **Beautiful UI**: Styled with Tailwind CSS and shadcn/ui components
- **Responsive Design**: Mobile-first approach for all screen sizes
- **Performance Optimized**: Static page generation and optimized assets

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: Firebase Realtime Database
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **AI Integration**: Firebase Gemini API

## 🛠️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── chat/             # Chat widget components
│   ├── home/             # Home page sections
│   ├── ui/               # shadcn/ui components
│   ├── header/           # Header components
│   └── footer/           # Footer components
├── lib/                   # Utility functions
│   ├── firebase.ts       # Firebase configuration
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- pnpm 8 or later
- Firebase project with Realtime Database
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/frontiers-market.git
cd frontiers-market
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file:
```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_DATABASE_URL=your_database_url
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
GEMINI_SECRET_KEY=your_gemini_secret_key
ANTHROPIC_API_KEY= your_anthropic_api_key
FIREBASE_ADMIN_JSON= your_firebase_admin_json

```

4. Start the development server:
```bash
pnpm dev
```

## 📁 Key Components

### Chat System
- `ChatProvider`: Manages chat state and Firebase integration
- `ChatWidget`: Floating chat widget with real-time messaging
- Firebase Realtime Database for message storage

### Authentication
- Clerk for user authentication and management
- Protected routes and components
- User profile management

### UI Components
- Responsive header with navigation
- Hero section with search functionality
- Feature tabs for buyers and sellers
- Info grid with step-by-step guide
- About section with company information
- App promotion section
- Footer with social links

## 🔧 Development

### Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-first architecture
- CSS-in-JS with Tailwind CSS

## 🚀 Deployment

The project is configured for static exports and can be deployed to various platforms:

```bash
pnpm build      # Creates a static export in the 'out' directory
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)


TODO:
- [] Add rules for the database to lock it down
- [x] Add a sonner if we get an error on chat
- [x] chat merges chats, doesn't take into account the fact that a logged in user logging out should not be able to see the chat history
- [x] Clean up the last top sections for
 - [x] search
 - [x] info grid
 - [x] hero
- [] send email to include:
 - [x] link to the site
 - [x] link to github
 - [x] link to firebase project
 - [o] link to clerk project -- this cannot be done on the free tier for this one
 - [x] comments on time spent with breakdown:
  - [x] cloning the site
  - [x] css and design
  - [x] chatbot
  - [x] templating
  - [x] setup of accounts and binding
  - [x] setup of overall project
  - [x] deployment and hosting
- [x] comments on what was left out
 - [x] pixel perfect design
 - [x] responsive across all sizes
 - [x] mobile friendly
 - [x] added accessibility and a couple small animations
- [x] speed report
- [] add a link to the speed page
- [x] look at the overall site and see if top level css aligns better
- [x] fix any other css issues -- mostly, a few things need tweaking