import Hero from './components/Hero';
import Products from './components/Products';
import Blog from './components/Blog';
import Investor from './components/Investor';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Brand top bar */}
      <div className="w-full bg-[#0F766E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>
            Manasikhub
          </span>
          <nav className="hidden sm:flex items-center gap-4 text-sm" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
            <a href="#home" className="hover:underline">Home</a>
            <a href="#products" className="hover:underline">Products</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#investor" className="hover:underline">Investor</a>
          </nav>
        </div>
      </div>

      <Hero />
      <Products />
      <Blog />
      <Investor />

      <footer className="border-t border-slate-200 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-600 text-sm" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
            © {new Date().getFullYear()} Manasikhub — Ekosistem Digital Haji & Umrah
          </p>
          <div className="mt-3 sm:mt-0 inline-flex items-center gap-3 text-sm" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
            <a href="#products" className="text-[#0F766E] hover:underline">Lihat Produk</a>
            <a href="#investor" className="text-[#FFBF47] hover:underline">Untuk Investor</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
