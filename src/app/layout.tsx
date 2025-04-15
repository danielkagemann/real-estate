"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "./globals.css";
import { Header } from '@/features/layout/Header';
import { Footer } from '@/features/layout/Footer';
import { Breadcrumb } from '@/features/layout/Breadcrumb';

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>spanish properties</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <QueryClientProvider client={queryClient}>
          <main className="min-h-svh w-5xl mx-auto text-base/relaxed">
            <Header />
            <Breadcrumb />
            {children}
          </main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html >
  );
}
