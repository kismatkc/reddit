import Header from "@/components/header"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-4">
   <Header/>
        {children}
    </main>
  );
}
