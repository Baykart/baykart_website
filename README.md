# BayKart - Empowering Farmers with Technology

BayKart is an agritech platform that bridges technology and farming, providing tools and knowledge to boost farmer productivity and income.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Best Practices](#best-practices)
- [Documentation Resources](#documentation-resources)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Features

BayKart offers a comprehensive suite of tools for farmers:

- **Weather Forecasting** 🌤️ - Get daily weather updates and predictions
- **Market Analytics** 📈 - Track crop prices from nearby markets with best deals
- **Expert Solutions** 👨‍🌾 - Get guidance from agricultural experts for your problems
- **Knowledge Base** 📚 - Stay updated with the latest posts and videos for agricultural knowledge
- **E-commerce** 🛒 - Order seeds and agricultural products all under one roof
- **Marketplace** 🏪 - Trade crops with verified buyers and sellers

## 💻 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) (v8 or newer)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gobaykart/baykart_website.git
   cd baykart_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📁 Project Structure

```
baykart_website/
├── src/                  # Source code
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Main page component
│   │   ├── layout.tsx    # Root layout component
│   │   └── globals.css   # Global styles
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## 🔄 Making Changes

### Adding a New Page

1. Create a new file in the `src/app` directory, e.g., `about/page.tsx`:
   ```tsx
   export default function About() {
     return (
       <div className="container mx-auto py-8">
         <h1 className="text-3xl font-bold">About BayKart</h1>
         {/* Your content here */}
       </div>
     );
   }
   ```

2. The page will be automatically available at `/about`.

### Adding Components

1. Create a components directory if it doesn't exist:
   ```bash
   mkdir -p src/components
   ```

2. Create your component, e.g., `src/components/FeatureCard.tsx`:
   ```tsx
   interface FeatureCardProps {
     title: string;
     description: string;
     icon: string;
   }

   export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
     return (
       <div className="bg-white p-6 rounded-lg shadow-md">
         <div className="text-4xl mb-4">{icon}</div>
         <h3 className="text-xl font-bold mb-2">{title}</h3>
         <p className="text-gray-600">{description}</p>
       </div>
     );
   }
   ```

3. Import and use your component in pages.

### Styling with Tailwind CSS

- Use Tailwind utility classes directly in your JSX
- For custom styles, modify `tailwind.config.ts`
- For global styles, edit `src/app/globals.css`

## 🏆 Best Practices

### Code Organization

- **Component-Based Architecture**: Break UI into reusable components
- **Separation of Concerns**: Keep logic, UI, and styling separate
- **TypeScript**: Use proper typing for all components and functions

### Performance

- **Image Optimization**: Use Next.js `<Image>` component for optimized images
- **Code Splitting**: Let Next.js handle automatic code splitting
- **Lazy Loading**: Use dynamic imports for large components

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation works
- Maintain sufficient color contrast

### State Management

- Use React hooks for local state
- Consider context API for shared state
- For complex applications, consider libraries like Redux or Zustand

## 📚 Documentation Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

We welcome contributions to BayKart! Here's how you can help:

1. **Fork the Repository**: Click the "Fork" button at the top right of this page.

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/yourusername/baykart_website.git
   cd baykart_website
   ```

3. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**: Implement your feature or fix.

5. **Follow Coding Standards**:
   - Write clean, readable code
   - Add appropriate comments
   - Follow the existing code style
   - Write or update tests if necessary

6. **Run Tests and Linting**:
   ```bash
   npm run lint
   ```

7. **Commit Changes**:
   ```bash
   git commit -m "Add a descriptive commit message"
   ```

8. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Create a Pull Request**: Go to the original repository and click "New Pull Request".

10. **Describe Your Changes**: Provide a clear description of what your changes do and why they should be included.

### Reporting Issues

If you find a bug or have a feature request, please create an issue using the issue tracker.
