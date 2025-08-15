# Portfolio Website

## Overview

This is a modern portfolio website for Arsheeq, a DevOps Engineer specializing in cloud automation, infrastructure management, and CI/CD pipelines. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase professional experience, skills, and projects in an interactive and visually appealing manner.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Theme Support**: Custom theme provider supporting light/dark mode with CSS custom properties

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot reload with Vite middleware in development mode
- **Storage Interface**: Modular storage system with in-memory implementation (MemStorage)
- **API Structure**: RESTful API design with centralized route registration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Email Integration
- **Email Service**: SendGrid API integration for contact form submissions
- **Contact Form**: Functional form sending emails to arshakachu29@gmail.com
- **Email Templates**: Professional HTML email formatting with contact details

### Component Architecture
- **Design System**: Consistent component library using Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Interactive Elements**: Custom animations and transitions for enhanced UX
- **Form Handling**: React Hook Form with Zod validation schemas
- **Toast Notifications**: Custom toast system for user feedback

### Development Environment
- **Hot Module Replacement**: Vite HMR for instant feedback during development
- **Error Overlay**: Runtime error modal for debugging in development
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/)
- **Code Quality**: TypeScript strict mode with comprehensive type checking

## External Dependencies

### Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **State Management**: TanStack React Query for async state management
- **UI Framework**: Radix UI components for accessibility and consistency
- **Styling**: Tailwind CSS with PostCSS for processing

### Backend Dependencies
- **Server Framework**: Express.js for HTTP server functionality
- **Email Service**: SendGrid for transactional email delivery
- **PDF Generation**: Server-side resume generation with HTML-to-PDF capabilities

### Development Tools
- **Build Tool**: Vite with React plugin for fast development builds
- **TypeScript**: Full TypeScript support with strict configuration
- **Code Formatting**: ESBuild for production bundling
- **Development Plugins**: Replit-specific plugins for error handling and debugging

### UI and Styling Libraries
- **Component Library**: shadcn/ui built on Radix UI primitives
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS-based animations with Tailwind utilities
- **Typography**: Inter font family from Google Fonts
- **Form Validation**: Zod schemas with React Hook Form integration

### Additional Features
- **Contact Form**: Functional email submission with validation and success feedback
- **Resume Download**: PDF-ready resume with auto-print functionality
- **Glass Effects**: Comprehensive glassmorphism design throughout the interface
- **Project Images**: Visual representations for key DevOps projects
- **Theme Switching**: Complete light/dark mode support with persistent preferences
