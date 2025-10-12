export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-900 bg-black">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Edmich" className="h-6 w-6" />
              <span className="text-lg">EDMICH</span>
            </div>
            <p className="mt-4 text-neutral-400">
              Innovation. Access. Connectivity. Growth.
            </p>
          </div>
          <div>
            <h4 className="text-neutral-200 mb-3">Company</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white">Industries</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-neutral-200 mb-3">Autoplux</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/autoplux" className="hover:text-white">Marketplace</a></li>
              <li><a href="/autoplux#partners" className="hover:text-white">Partners</a></li>
              <li><a href="/autoplux#sell" className="hover:text-white">Sell with us</a></li>
            </ul>
          </div>
          <div id="contact">
            <h4 className="text-neutral-200 mb-3">Contact</h4>
            <p className="text-neutral-400">info@edmich.com</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Edmich International Services Limited — All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
