import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/feat/components/header";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "clanTeamFC",
  description: "Clan team futbol club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            <Header />
            <div className="p-4">{children}</div>
            <Toaster />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
