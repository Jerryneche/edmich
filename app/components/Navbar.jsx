export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mt-3 rounded-full border border-neutral-800/80 bg-black/60 backdrop-blur-md">
          <nav className="flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Edmich" className="h-6 w-6" />
              <span className="text-sm md:text-base tracking-wide">EDMICH</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
              <a href="#solutions" className="hover:text-white">Solutions</a>
              <a href="#industries" className="hover:text-white">Industries</a>
              <a href="#autoplux" className="hover:text-white">Autoplux</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="/autoplux" className="btn btn-outline">Explore Autoplux</a>
              <a href="#contact" className="btn btn-primary">Get in touch</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
