import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "smart farm",
  description: "a very cool app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
