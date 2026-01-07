# Kwizerwa Arts Furniture

Kwizerwa Arts Furniture is a web application showcasing handcrafted, locally produced furniture and decor. The project provides an online catalog, product detail pages, and a simple ordering/contact flow to help customers discover and inquire about custom and ready-made pieces.

Key goals:
- Present high-quality product photography and detailed descriptions.
- Make it easy for customers to inquire about custom orders and availability.
- Provide a maintainable, responsive frontend built with modern web tooling.

Table of Contents
- About
- Features
- Technology Stack
- Getting Started
  - Prerequisites
  - Install
  - Local development
- Project Structure
- Deployment
- Contributing
- License
- Contact

About

This repository contains the frontend code for the Kwizerwa Arts Furniture website. The design focuses on clean presentation, accessibility, and a smooth browsing experience on both desktop and mobile devices.

Features

- Product listing and detail pages
- Responsive layout and accessible components
- Simple inquiry/contact flow for purchases and custom orders
- Structured content for easy SEO and sharing

Technology Stack

- JavaScript (primary)
- Vite (development/build)
- React
- Tailwind CSS
- shadcn-ui (UI primitives)
- TypeScript (as used in parts of the project)

Getting Started

These instructions will get the project running on your local machine for development and testing purposes.

Prerequisites

- Node.js (LTS recommended)
- npm or yarn

Install

1. Clone the repository

```sh
git clone https://github.com/fabishz/Kwizerwa-Arts-Furniture.git
cd Kwizerwa-Arts-Furniture
```

2. Install dependencies

```sh
npm install
# or
# yarn install
```

Local development

Start the development server with hot reload:

```sh
npm run dev
# or
# yarn dev
```

Open http://localhost:5173 (or the URL shown in your terminal) to view the site.

Available scripts

- `npm run dev` — start dev server
- `npm run build` — produce production build
- `npm run preview` — preview production build locally

Project Structure

- /src — application source
  - /components — reusable UI components
  - /pages — route pages
  - /assets — images and static assets
  - /styles — global styles and Tailwind config

(Adjust paths above if your project structure differs.)

Deployment

Build the project for production:

```sh
npm run build
```

Host the output in `dist/` on any static hosting service (Netlify, Vercel, GitHub Pages, or a static file server). If using Vercel or Netlify, connect your GitHub repository and configure the build command to `npm run build` and the publish directory to `dist`.

Contributing

Contributions are welcome. To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`.
3. Commit your changes and push to your fork.
4. Open a pull request describing the change.

License

If you would like this project to be open source, consider adding a license file. If no license is present, the repository is not open source by default.

Contact

For questions or support, open an issue or contact the repository owner: https://github.com/fabishz

Acknowledgements

- Thanks to the authors of Vite, React, Tailwind CSS, Next and shadcn-ui for providing the tools used in this project.

End of README
