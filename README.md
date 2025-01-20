![Tech Stack](https://skillicons.dev/icons?i=pnpm,nextjs,react,ts,tailwind,aws)

# Amplify Next.js Starter

A modern, full-stack starter template combining the power of Next.js with AWS Amplify for building scalable web applications.

## Tech Stack

- **Frontend**

  - [Next.js 15](https://nextjs.org/) - React framework with App Router
  - [React 19](https://react.dev/) - UI library
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
  - [shadcn/ui](https://ui.shadcn.com/) - Re-usable components

- **Backend & Cloud**

  - [AWS Amplify](https://aws.amazon.com/amplify/) - Full-stack development platform
  - [AWS CDK](https://aws.amazon.com/cdk/) - Infrastructure as code

- **Data Management**

  - [TanStack Query](https://tanstack.com/query/latest) - Data fetching and caching
  - [React Hook Form](https://react-hook-form.com/) - Form handling
  - [Zod](https://zod.dev/) - Schema validation

- **Development Tools**
  - [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
  - [ESLint](https://eslint.org/) - Code linting
  - [Prettier](https://prettier.io/) - Code formatting

## Getting Started

1. **Prerequisites**

   - Node.js 18 or later
   - pnpm package manager
   - AWS account and Amplify CLI configured

2. **Installation**

   ```bash
   # Clone the repository
   git clone https://github.com/lichtlabs/amplify-next.git
   cd amplify-next

   # Install dependencies
   pnpm install

   # Configure Amplify
   pnpm amplify:configure

   # Start development environment
   pnpm amplify:dev
   ```

3. **Development**

   ```bash
   # Start the Amplify sandbox environment
   pnpm amplify:dev

   # In a new terminal, start the development server
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

   > ⚠️ **Important**: When you're done with development, run `pnpm amplify:cleanup` to destroy and clean up the sandbox resources. This helps prevent unnecessary AWS resource usage.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format:check` - Check code formatting
- `pnpm format:write` - Fix code formatting
- `pnpm amplify:configure` - Configure Amplify profile
- `pnpm amplify:dev` - Start Amplify sandbox environment

## Project Structure

```
├── amplify/          # AWS Amplify backend configuration
├── public/           # Static assets
├── src/
│   ├── app/         # Next.js App Router pages
│   ├── components/  # Reusable UI components
│   └── lib/        # Utility functions and configurations
└── package.json
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
