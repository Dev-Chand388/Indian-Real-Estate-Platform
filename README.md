# 🏡 Real Estate Property Listing App

A modern, full-stack property listing application built with **React**, **Node.js**, **Express**, and **Tailwind CSS**. It enables users to browse, search, and filter properties, view detailed information, manage favorites, and track key statistics via a simple dashboard.

## 🚀 Features

- 🔍 **Search & Filters**: Refine properties by city, type, price, bedrooms, and area.
- ❤️ **Favorites**: Add or remove properties from your favorites list.
- 🧭 **Navigation Views**:
  - Home: Browse and filter property listings.
  - Favorites: View saved properties.
  - Dashboard: Overview of favorite counts.
- 🗂️ **Details Modal**: View in-depth property information.
- 🎨 **Responsive Design**: Built with Tailwind CSS for full responsiveness.
- 🔧 **Full-Stack Architecture**: Separate client and server applications.

## 📂 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── utils/          # Mock data and utility functions
│   │   ├── types/          # TypeScript types
│   │   ├── App.tsx         # Main application logic and routing
│   │   └── main.tsx        # App bootstrap with ReactDOM
│   ├── public/             # Static assets
│   └── package.json        # Client dependencies
├── server/                 # Node.js backend application
│   ├── index.js            # Express server setup
│   ├── package.json        # Server dependencies
│   └── .env                # Environment variables
└── package.json            # Root package.json for scripts
```

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React** with TypeScript
- ⚡ **Vite** for development and building
- 💅 **Tailwind CSS** for styling
- 🎨 **Lucide React** for icons

### Backend
- 🟢 **Node.js** with Express
- 🔄 **CORS** for cross-origin requests
- 🔐 **dotenv** for environment variables

## 📦 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/real-estate-app.git
cd real-estate-app

# Install all dependencies (root, client, and server)
npm run install:all
```

### Development

```bash
# Run both client and server concurrently
npm run dev

# Or run them separately:
# Client only (runs on http://localhost:5173)
npm run client:dev

# Server only (runs on http://localhost:5000)
npm run server:dev
```

### Building for Production

```bash
# Build the client application
npm run client:build

# Start the server in production
npm run server:start
```

## 🔗 API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/properties` - Get all properties (to be implemented)

## 🚀 Deployment

The application is structured for easy deployment:

- **Client**: Can be deployed to Netlify, Vercel, or any static hosting service
- **Server**: Can be deployed to Heroku, Railway, or any Node.js hosting service

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Kethe Dev Chand**

---

*Built with ❤️ for the Indian real estate market*