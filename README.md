# The Faithful Mindset - Staging Repository

**Client:** Hilary Williamson  
**Website:** www.thefaithfulmindset.com (Rebuild)  
**Project:** Garden of Declarations Series

## Overview

This repository is a staging environment for rebuilding The Faithful Mindset website. Hilary is rebranding from a course-focused platform to a visual, product-based experience centered around "The Garden of Declarations Series" - 12 beautiful coffee table books designed to soothe the soul and encourage healing.

### New Brand Direction

- **Visual over Instructional:** Beautiful imagery that calms the mind and induces feelings of safety
- **Product Line:** Coffee table books, journals, calendars, 6-week courses
- **Core Philosophy:** Blending faith, neuroscience, and action through visual experience
- **The Garden of Declarations Series:** 12 books featuring stunning floral imagery with themes:
  1. Declarations of Faith
  2. Declarations of Strength
  3. Declarations of Gratitude
  4. Declarations of Peace
  5. Declarations of Hope
  6. Declarations of Love
  7. Declarations of Grace
  8. Declarations of Wisdom
  9. Declarations of Purpose
  10. Declarations of Joy
  11. Declarations of Courage
  12. Declarations of Renewal

## Brand Identity

**Business Name:** The Faithful Mindset  
**Descriptor:** A Botanical Creative Studio  
**Tagline:** Living on purpose through intentional change  
**Opening Line:** "Today is a new day"

## Brand Philosophy

The Faithful Mindset is a botanical creative studio that inspires women to live on purpose through small intentional change, guided by faith, knowledge of the mind, and thoughtful action.

This is **not a personality-driven platform**. The focus is on the creative work itself—books, reflections, courses, and thoughtfully designed products. Hilary serves as the curator and creator behind the work, not the product being marketed.

## Visual Identity

### Color Palette
- **Primary Background:** White (#FFFFFF)
- **Signature Accent:** Pink (#D91184) - navigation, buttons, clickables, logo
- **Text/Graphics:** Charcoal (#3B3B3B)

### Design Principles
- Bright, cheerful, elegant, modern, minimal, botanical, timeless
- Generous white space (essential to brand aesthetic)
- One large flower bloom as signature visual element
- Natural botanical photography style
- Modern editorial layout (not crowded marketing)
- **Design Rule:** Always choose simpler, brighter, cleaner, more spacious

## Website Structure

### Navigation
- **About** - Hilary as curator/creator
- **Courses** - Studio Courses with workbooks
- **Reflections** - Thoughtful essays
- **Contact** - Form + newsletter
- **Studio Collection** - Products with interactive previews

### Key Features
- Hero section with large flower bloom and opening phrase
- The Declarations Coffee Table Series (12 books)
- Studio Courses (6-week workbook format)
- Reflections (warm, thoughtful essays)
- Contact form and newsletter signup
- Lead magnet: "Living on Purpose in Small Ways"

## The Declarations Coffee Table Series

A collection of 12 beautiful reminders for the heart:

1. **Declarations of Faith** - Pink
2. **Declarations of Strength** - Purple
3. **Declarations of Gratitude** - Orange
4. **Declarations of Joy** - Yellow
5. **Declarations of Hope** - Blue
6. **Declarations of Peace** - White
7. **Declarations of Love** - Red
8. **Declarations of Courage** - Coral
9. **Declarations of Wisdom** - Lavender
10. **Declarations of Grace** - Cream
11. **Declarations of Purpose** - Peach
12. **Declarations of Renewal** - Green

Each book contains one declaration per page paired with beautiful floral imagery. Designed to be displayed on a coffee table, read slowly, and returned to regularly.

## Technology Stack

- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Fonts:** Inter (body), Dancing Script (script)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Server

Open [http://localhost:3030](http://localhost:3030) to view the website.

If local chunks or HMR become unstable:

```bash
npm run clean:all
npm run dev
```

Before merge:

```bash
npm run verify
```

See `docs/DEV_WORKFLOW.md` and `docs/GARDEN_REGRESSION_CHECKLIST.md` for the full checklist.

## Project Structure

```
the-faithful-mindset/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── studio-collection/ # Products page
│   │   ├── courses/           # Courses page
│   │   ├── reflections/       # Blog/essays page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable components
│       ├── Navigation.tsx     # Main navigation
│       └── Footer.tsx         # Footer component
├── public/
│   └── assets/
│       ├── marketing/         # Marketing materials
│       ├── book-covers/       # Book cover images
│       └── images/            # Additional images
├── docs/                      # Documentation
└── netlify.toml              # Netlify config
└── README.md                 # This file
```

## Contact

For questions or clarifications, reach out to Dallas regarding Hilary's vision for The Faithful Mindset rebrand.
