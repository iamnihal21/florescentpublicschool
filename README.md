# Florocent Public School Website Project

This project is a modern school website built with various technologies to ensure flexibility, scalability, and ease of development. The project utilizes **Next.js**, **React**, **TypeScript**, **Biome.js**, **ShadCN**, **Framer Motion**, **Payload CMS**, **BetterAuth**, **Supabase** and integrates with **GitHub Actions** for CI/CD.

## Table of Contents

* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Directory Structure](#directory-structure)
* [Features](#features)
* [Deployment](#deployment)
* [License](#license)

## Tech Stack

* **Next.js**: A React framework for server-side rendering and static site generation.
* **React**: A JavaScript library for building user interfaces.
* **TypeScript**: A superset of JavaScript that adds static types.
* **Biome.js**: A modern, flexible web framework built for performance and developer experience.
* **ShadCN**: A component library that offers pre-designed, reusable components for building UIs quickly.
* **Framer Motion**: A popular React library for animations and transitions.
* **BetterAuth**: A modern authentication library designed for easy implementation of auth flows.
* **Payload CMS**: A headless content management system for managing content dynamically.
* **GitHub Actions**: For CI/CD, automating workflows like deployments, testing, and builds.
* **Supabase**: Supabase with graphql as db

## Getting Started

To get started with this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/iamnihal21/florescentpublicschool.git/
   cd florescentpublicschool
   ```

2. Install the dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env.local` file at the root of the project and add the necessary environment variables. These might include things like your API keys, database connections, etc.

   Example:

   ```env
   
   ```

4. Run the development server:

   ```bash
   bun dev
   ```

   This will start the development server at `http://localhost:3000`.

## Directory Structure

Here is an overview of the main directories and their purpose:

```
/public
  - Static assets like images, fonts, and icons.

/src
  /components
    - Reusable React components (UI elements, forms, etc.).

  /pages
    - Next.js page components. Contains the routes for the website.
    
  /styles
    - Global and component-level styles (CSS/SASS files).

  /utils
    - Helper functions, utilities, and custom hooks.

  /api
    - API route handlers for server-side logic in Next.js.

  /lib
    - Helper functions to integrate with external libraries (e.g., Payload CMS, BetterAuth, etc.).
  
/scripts
  - Custom scripts for build or deployment processes.

/.github
  - GitHub Actions workflows and other CI/CD configurations.
```
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.