# Javed Sidiqi - Personal Portfolio

A clean, minimal, and professional portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **TypeScript**: Full type safety and better developer experience
- **Modern Stack**: React 18, Vite, Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Performance**: Code splitting, lazy loading, optimized builds
- **Accessibility**: WCAG compliant, keyboard navigation
- **Error Handling**: Graceful error boundaries and fallbacks

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
├── components/
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   ├── ui/                # Reusable UI components
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── LoadingSpinner.tsx # Loading states
│   └── SEOHead.tsx        # SEO meta tags
├── data/
│   └── portfolio.ts       # Content data (projects, blog posts, social links)
├── types/
│   └── index.ts           # TypeScript type definitions
├── utils/
│   └── analytics.ts       # Analytics tracking helpers
├── hooks/
│   └── useScrollspy.ts    # Custom React hooks
├── styles/
│   └── globals.css        # Global styles and Tailwind config
└── App.tsx               # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd javed-sidiqi-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run pre-commit` - Run all checks before committing

## 📝 Content Management

### Adding Projects

Edit `/data/portfolio.ts` and add new projects to the `projects` array:

```typescript
{
  id: "unique-project-id",
  icon: YourIcon, // From lucide-react
  title: "Project Title",
  description: "Project description",
  link: "https://project-url.com",
  tags: ["React", "TypeScript", "API"]
}
```

### Adding Blog Posts

Edit `/data/portfolio.ts` and add new posts to the `blogPosts` array:

```typescript
{
  id: "unique-post-id",
  title: "Blog Post Title",
  snippet: "Brief description of the post content",
  date: "1 week ago",
  readTime: "5 min read"
}
```

### Updating Social Links

Edit `/data/portfolio.ts` and modify the `socialLinks` array:

```typescript
{
  id: "platform-id",
  name: "Platform Name",
  icon: PlatformIcon,
  url: "https://platform-url.com",
  variant: "primary" | "outline",
  color: "blue" | "red" // optional
}
```

## 🎨 Customization

### Colors

The site uses a clean blue and gray color palette. To customize:

1. Update Tailwind classes in components
2. Modify CSS custom properties in `/styles/globals.css`
3. Update the blue circle placeholders with your logo

### Typography

The site uses:
- **Headings**: Montserrat (bold, clean)
- **Body**: Inter (readable, lightweight)

To change fonts, update the Google Fonts import in `/styles/globals.css`.

### Layout

Each section is a separate component in `/components/sections/`. Modify individual sections without affecting others.

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📈 Analytics

The site includes analytics tracking helpers in `/utils/analytics.ts`. To enable:

1. Add Google Analytics 4 tracking code to your HTML
2. Update the `GA_MEASUREMENT_ID` in the analytics utility
3. Events are automatically tracked for user interactions

## 🔧 Performance

- **Code Splitting**: Automatic chunking for optimal loading
- **Image Optimization**: Responsive images with proper loading
- **CSS Optimization**: Purged and minified Tailwind CSS
- **Bundle Analysis**: Use `npm run build` to see bundle sizes

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run pre-commit` to ensure code quality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Javed Sidiqi**
- Website: [sidiqi.ai](https://sidiqi.ai)
- Email: javed@sidiqi.ai
- LinkedIn: [linkedin.com/in/javedsidiqi](https://linkedin.com/in/javedsidiqi)
- Twitter: [@javedsidiqi](https://twitter.com/javedsidiqi)

---

Built with ❤️ by Javed Sidiqi