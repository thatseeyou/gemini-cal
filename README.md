# 🌙 Korean Traditional Calendar (음력 달력)

A beautiful, interactive Korean lunar calendar web application that displays both solar and lunar dates along with Korean holidays and traditional events.

[![Deploy to GitHub Pages](https://github.com/thatseeyou/gemini-cal/actions/workflows/deploy.yml/badge.svg)](https://github.com/thatseeyou/gemini-cal/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://thatseeyou.github.io/gemini-cal/)

## 🚀 Live Demo

Visit the live application: **[https://thatseeyou.github.io/gemini-cal/](https://thatseeyou.github.io/gemini-cal/)**

## ✨ Features

- 📅 **Dual Calendar Display**: Shows both solar (양력) and lunar (음력) dates
- 🎉 **Korean Holidays**: Displays Korean national holidays and traditional celebrations
- 🌕 **Lunar Dates**: Highlights important lunar dates (1st and 15th of each lunar month)
- 🎨 **Beautiful UI**: Clean, modern interface with responsive design
- 🔄 **Interactive Navigation**: Easy month-by-month navigation
- 📱 **Mobile Friendly**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3
- **Libraries**:
  - `korean-lunar-calendar` - Korean lunar calendar calculations
  - `date-holidays` - Holiday information
- **Deployment**: GitHub Pages

## 🏃 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/thatseeyou/gemini-cal.git
cd gemini-cal

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the application
pnpm build

# Preview the production build
pnpm preview
```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests

## 🎯 Project Structure

```
gemini-cal/
├── src/
│   ├── App.tsx          # Main application component
│   ├── Calendar.tsx     # Calendar component with lunar logic
│   ├── main.tsx         # Application entry point
│   └── *.css           # Styling files
├── public/             # Static assets
├── dist/              # Production build output
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## 🌙 About Korean Lunar Calendar

This application uses the traditional Korean lunar calendar system (음력), which is still widely used in Korea for:

- **Traditional Holidays**: Lunar New Year (설날), Chuseok (추석)
- **Cultural Events**: Buddha's Birthday, various traditional festivals
- **Personal Celebrations**: Traditional birthdays, memorial days
- **Agricultural Planning**: Based on lunar cycles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Korean lunar calendar calculations powered by `korean-lunar-calendar`
- Holiday data provided by `date-holidays`
- Built with modern React and TypeScript

---

<div align="center">
  Made with ❤️ for preserving Korean traditional culture
</div>