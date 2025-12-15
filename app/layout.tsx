import "./globals.css";

export const metadata = {
  title: "Luca | AI Engineer in Med-Tech",
  description:
    "AI Engineer focused on workflow intelligence and clinical decision support in Med-Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

