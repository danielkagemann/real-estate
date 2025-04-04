"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import "./globals.css";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>real estate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className="antialiased"
      >
        <QueryClientProvider client={queryClient}>
          <main className='min-h-svh'>
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html >
  );
}
