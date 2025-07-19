# Office 365 Training Platform

A comprehensive, interactive training platform for Microsoft Office 365 applications including Word, Excel, and Outlook. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Office 365 Training](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### 📚 **Interactive Learning**
- **Comprehensive Lessons**: Step-by-step tutorials for Word, Excel, and Outlook
- **Interactive Quizzes**: Test your knowledge with timed assessments
- **Progress Tracking**: Monitor your learning progress across all courses
- **Professional Tips**: Advanced techniques and best practices

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations**: Smooth transitions and hover effects
- **Dark/Light Mode Ready**: Built with accessibility in mind
- **Scroll-to-Top**: Convenient navigation with smooth scrolling

### 📋 **Course Content**
- **Microsoft Word**: Document creation, formatting, and advanced features
- **Microsoft Excel**: Spreadsheets, formulas, charts, and data analysis
- **Microsoft Outlook**: Email management, calendar, and productivity tools

### 🛠 **Developer Features**
- **TypeScript**: Full type safety and better development experience
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Hot Reload**: Fast development with Next.js

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Markdown**: React Markdown
- **Syntax Highlighting**: React Syntax Highlighter
- **Deployment**: Vercel Ready

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/office365-training.git
   cd office365-training
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

```
office365-training/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── word/              # Word course pages
│   │   ├── excel/             # Excel course pages
│   │   ├── outlook/           # Outlook course pages
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   ├── lib/                   # Utility functions
│   └── content/               # Markdown lesson content
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📚 Course Structure

### Microsoft Word
- **Introduction**: Getting started with Word
- **Basic Formatting**: Text and paragraph formatting
- **Advanced Features**: Styles, templates, and automation
- **Bonus Lessons**: Power user techniques

### Microsoft Excel
- **Introduction**: Excel fundamentals
- **Formulas & Functions**: Essential calculations
- **Data Analysis**: Charts, pivot tables, and more
- **Bonus Lessons**: Advanced Excel techniques

### Microsoft Outlook
- **Introduction**: Email management basics
- **Calendar & Scheduling**: Meeting management
- **Productivity Tools**: Rules, automation, and tips
- **Bonus Lessons**: Advanced Outlook features

## 🎯 Features in Detail

### Interactive Lessons
- **Markdown Content**: Easy to update and maintain
- **Syntax Highlighting**: Code examples with proper formatting
- **Section Navigation**: Quick jump to specific topics
- **Progress Indicators**: Visual feedback on completion

### Quizzes
- **Timed Assessments**: Challenge yourself with time limits
- **Multiple Choice**: Various question types
- **Progress Tracking**: Monitor your performance
- **Instant Feedback**: Immediate results and explanations

### Cheatsheets
- **Keyboard Shortcuts**: Essential shortcuts for each application
- **Quick Reference**: Common tasks and formulas
- **Printable Format**: Perfect for desk reference
- **Pro Tips**: Advanced techniques and tricks

## 🌐 Deployment

### Vercel (Recommended & Optimized)
This application is specifically optimized for Vercel deployment with:
- **Automatic deployments** on every push to main branch
- **Edge functions** for optimal performance
- **Static generation** for fast loading
- **Image optimization** with WebP and AVIF support
- **Security headers** configured for production

#### Quick Deploy Steps:
1. **Push your code** to GitHub
2. **Connect repository** to Vercel
3. **Deploy automatically** - no additional configuration needed!

#### Vercel Configuration:
- `vercel.json` - Optimized for Vercel deployment
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **Node.js version**: 18.x (automatically detected)

### Alternative Platforms
The app is also compatible with other platforms that support Next.js:
- **Netlify** - Static site hosting
- **Railway** - Full-stack platform
- **DigitalOcean App Platform** - Cloud hosting
- **AWS Amplify** - AWS hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Microsoft** for Office 365 applications

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**Made with ❤️ for better Office 365 learning**
