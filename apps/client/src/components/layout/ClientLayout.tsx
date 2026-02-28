import Link from "next/link";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container flex items-center justify-between py-4">

          {/* Logo */}
         <Link href="/" className="text-xl font-bold tracking-tight">
  Bet<span className="text-amber-500">Link</span>
</Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/properties" className="hover:text-black transition">
              Properties
            </Link>
            <Link href="#how" className="hover:text-black transition">
              How It Works
            </Link>
            <Link href="#about" className="hover:text-black transition">
              About
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              Sign In
            </Link>

            <Link href="/register">
              <button className="bg-[#142a4f] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#0f213d] transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-[#142a4f] text-white mt-20">
        <div className="container py-14 grid md:grid-cols-4 gap-10 text-sm">

          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              <span className="text-amber-400">Bet</span>Link
            </h3>
            <p className="text-white/70">
              Secure managed rental platform connecting landlords and renters through trusted intermediaries.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/properties">Browse Properties</Link></li>
              <li><Link href="/register">List Property</Link></li>
              <li><Link href="#">How It Works</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 text-center py-6 text-sm text-white/60">
          © {new Date().getFullYear()} BetLink. All rights reserved.
        </div>
      </footer>
    </div>
  );
}