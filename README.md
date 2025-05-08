# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a beautiful UI and smooth animations. This project showcases my professional experience, projects, and skills in an interactive way.

## Features

- 🌐 **Internationalization**: Built-in support for multiple languages (English and French)
- 🎨 **Modern UI**: Clean and responsive design using Tailwind CSS and Shadcn/ui
- ✨ **Smooth Animations**: Enhanced user experience with Framer Motion
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🎯 **Interactive Navigation**: Smooth scrolling and keyboard navigation
- 🌓 **Dark Mode**: Built-in dark mode support
- 🚀 **Performance**: Optimized for speed and SEO

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Carousel**: [Embla Carousel](https://embla-carousel.com)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app)

## Getting Started

First, clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   └── [locale]/        # Internationalized routes
│   ├── components/          # React components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── data/              # Static data (experiences, projects)
│   └── i18n/              # Internationalization setup
├── public/                # Static assets
└── messages/             # Translation files
```

## Customization

### Adding New Languages

1. Create a new translation file in `messages/` directory (e.g., `es.json`)
2. Add the new locale to the supported locales in `src/i18n/routing.ts`

### Modifying Content

- Update experience data in `src/data/experiences.json`
- Modify translations in `messages/en.json` and `messages/fr.json`
- Customize UI components in `src/components/`

## Deployment

This application is deployed on [Vercel](https://vercel.com). The deployment is fully automated through GitHub integration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
