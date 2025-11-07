import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />
        <div className="h-[520px] w-full">
          <Spline scene="https://prod.spline.design/0w47vJq6KQ1Xn8bI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>
            Satu Platform untuk Semua Kebutuhan Haji & Umrah Anda.
          </h1>
          <p className="mt-4 text-slate-700 text-lg" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
            Manasikhub menghubungkan biro, pembimbing (muthawwif), dan jemaah dalam satu sistem digital yang efisien, aman, dan penuh keberkahan.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#products" className="px-5 py-3 rounded-md bg-[#0F766E] text-white font-semibold hover:bg-teal-700 transition" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
              Pelajari Lebih Lanjut
            </a>
            <a href="#investor" className="px-5 py-3 rounded-md bg-[#FFBF47] text-slate-900 font-semibold hover:brightness-95 transition" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
              Coba Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
