# User Management Dashboard

A modern, responsive user management dashboard built with React, TypeScript, and Vite. This application allows users to view, search, and filter user data fetched from JSONPlaceholder API.

## 🚀 Features

- **User List Dashboard**: View all users in a clean, organized table layout
- **Search Functionality**: Search users by name in real-time
- **City Filter**: Filter users by city with a dropdown selector
- **User Details**: View detailed user posts by clicking on any user
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Type-Safe**: Built with TypeScript for enhanced code quality and developer experience

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd user-management-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## ▶️ Running the Project

### Development Mode

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
```

## 🏗️ Project Structure

```
user-management-dashboard/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, and other assets
│   ├── components/     # Reusable React components
│   │   └── Sidebar.tsx
│   ├── pages/          # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Layout.tsx
│   │   └── Post.tsx
│   ├── providers/      # Context providers for state management
│   │   ├── UsersContext.tsx
│   │   └── UserPostsContext.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   ├── types.tsx       # TypeScript type definitions
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
```

## 🎨 Architecture & Design Decisions

### 1. **State Management - Context API**

**Decision**: Used React Context API instead of external state management libraries (Redux, Zustand, etc.)

**Rationale**:

- The application has a moderate state complexity that doesn't require a full-fledged state management solution
- Context API provides a clean way to share state across components without prop drilling
- Reduces bundle size by avoiding external dependencies
- Sufficient for managing users and posts data with filtering capabilities

**Implementation**:

- `UsersContext`: Manages user data, filtering logic, and city extraction
- `UserPostsContext`: Manages fetching and storing user-specific posts
- Custom hooks (`useUsers`, `useUserFilter`, `usePosts`, `useGetPosts`) provide type-safe access to context values

### 2. **Component Structure - Pages & Components**

**Decision**: Separated pages from reusable components

**Rationale**:

- **Pages folder**: Contains route-level components (Dashboard, Post, Layout)
- **Components folder**: Contains reusable UI components (Sidebar)
- This separation makes it easier to understand the routing structure and identify reusable components
- Promotes component reusability and maintainability

### 3. **Layout Pattern**

**Decision**: Implemented a Layout component with React Router's Outlet

**Rationale**:

- Provides a consistent layout structure across all pages
- Sidebar and main content area are persistent across route changes
- Improves user experience with consistent navigation
- Reduces code duplication

### 4. **Type Safety with TypeScript**

**Decision**: Full TypeScript implementation with explicit type definitions

**Rationale**:

- `types.tsx` centralizes all type definitions for Users, Posts, and API endpoints
- Prevents runtime errors by catching type mismatches during development
- Improves IDE autocomplete and developer experience
- Makes refactoring safer and easier

### 5. **Styling - Tailwind CSS**

**Decision**: Used Tailwind CSS v4 for styling

**Rationale**:

- Utility-first approach enables rapid UI development
- Smaller bundle size with Tailwind v4's optimizations
- Consistent design system through predefined utility classes
- Responsive design is straightforward with built-in breakpoint utilities
- No CSS naming conflicts or specificity issues

### 6. **Routing - React Router v7**

**Decision**: Used React Router DOM for client-side routing

**Rationale**:

- Enables seamless navigation without page reloads
- Supports dynamic routes (e.g., `/post/:id` for user-specific posts)
- Built-in 404 handling
- Industry-standard solution with excellent documentation

### 7. **Icons - Lucide React**

**Decision**: Used Lucide React for iconography

**Rationale**:

- Lightweight icon library with tree-shaking support
- Consistent icon design language
- Easy to use as React components
- Better alternative to importing entire icon sets

### 8. **API Integration**

**Decision**: Used native Fetch API with JSONPlaceholder

**Rationale**:

- No need for axios or other HTTP libraries for simple GET requests
- JSONPlaceholder provides reliable mock data for testing
- Centralized API endpoints in `types.tsx` for easy management
- Error handling implemented with try-catch blocks

### 9. **Filtering Logic**

**Decision**: Implemented client-side filtering for both name and city

**Rationale**:

- With a small dataset (10-20 users), client-side filtering is performant
- Provides instant feedback to users without API calls
- Combines multiple filters (name + city) seamlessly
- Reduces server load and API rate limits

### 10. **Build Tool - Vite**

**Decision**: Chose Vite over Create React App or Webpack

**Rationale**:

- Lightning-fast hot module replacement (HMR) during development
- Optimized production builds with Rollup
- Native ESM support for faster development experience
- Better developer experience with instant server start
- Smaller bundle sizes compared to traditional bundlers

### 11. **Responsive Design Approach**

**Decision**: Mobile-first responsive design with Tailwind breakpoints

**Rationale**:

- Mobile traffic is significant, so starting with mobile ensures good UX on all devices
- Tailwind's `md:`, `lg:` prefixes make responsive adjustments intuitive
- Different layouts for mobile (grid) and desktop (inline form) in Dashboard

## 🌐 API Endpoints

The application uses JSONPlaceholder API:

- **Users**: `https://jsonplaceholder.typicode.com/users`
- **User Posts**: `https://jsonplaceholder.typicode.com/posts?userId={id}`

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Build tool and dev server
- **React Router DOM v7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting and quality

## 📝 Future Enhancements

Potential improvements for future iterations:

- Add user editing and deletion capabilities
- Implement pagination for better performance with large datasets
- Add user creation functionality
- Integrate real authentication and authorization
- Add data caching with React Query or SWR
- Implement unit and integration tests
- Add loading skeletons for better UX
- Dark mode support

## 📄 License

This project is part of an internship assessment.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
