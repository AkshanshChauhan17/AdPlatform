import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Media Marketplace',
  description: 'Book advertising spaces easily.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <AuthProvider>
          <Navbar /> {/* <-- Added here */}
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}