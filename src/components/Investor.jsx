export default function Investor() {
  return (
    <section id="investor" className="relative py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>
              Manasikhub: Ekosistem Digital Haji Pertama di Indonesia
            </h2>
            <p className="mt-4 text-slate-700" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
              Kami membangun infrastruktur teknologi yang menyatukan biro, muthawwif, dan jemaah dalam satu aliran data yang aman, transparan, dan terdokumentasi.
              Fokus kami adalah meningkatkan kualitas pelayanan ibadah dengan efisiensi operasional dan pengalaman jemaah yang menenangkan.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
              <li>• Pasar haji & umrah Indonesia > 1 juta keberangkatan per tahun dengan nilai ekonomi miliaran dolar.</li>
              <li>• Monetisasi multi-sisi: langganan SaaS, layanan premium, dan marketplace mitra.</li>
              <li>• Strategi go-to-market melalui asosiasi biro, komunitas masjid, dan kemitraan pelatihan muthawwif.</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#" className="px-5 py-3 rounded-md bg-[#0F766E] text-white font-semibold hover:bg-teal-700 transition" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
                Minta Deck Investor
              </a>
              <a href="#" className="px-5 py-3 rounded-md bg-[#FFBF47] text-slate-900 font-semibold hover:brightness-95 transition" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
                Jadwalkan Demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#0F766E]/10 to-[#FFBF47]/20 blur-2xl rounded-3xl pointer-events-none" />
            <div className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-slate-500" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>TAM</dt>
                  <dd className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>>$3B</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>Target Pengguna</dt>
                  <dd className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>1.500+ biro</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>Model</dt>
                  <dd className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>SaaS + Marketplace</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-500" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>Fokus</dt>
                  <dd className="text-3xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>Kualitas Ibadah</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
