import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <footer className="w-full bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Equilibrio Designs
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Elevating Spaces, Designing Dreams, Crafting Legacies & Building the Future. 
                We create architectural masterpieces that blend innovation with timeless design.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/projects" className="text-gray-300 hover:text-red-400 transition-colors">Projects</Link></li>
                <li><Link href="/about-us" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact-us" className="text-gray-300 hover:text-red-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@equilibriodesigns.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Architecture Street<br />Design City, DC 12345</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Equilibrio Designs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
