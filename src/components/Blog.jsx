export default function Blog() {
  const posts = [
    {
      title: 'Digitalisasi Manasik: Mengapa Biro Perlu Bertransformasi',
      excerpt:
        'Perjalanan ibadah kini semakin terbantu dengan teknologi. Simak langkah-langkah praktis transformasi digital untuk biro Anda.',
    },
    {
      title: 'Tips Persiapan Haji & Umrah yang Lebih Tenang',
      excerpt:
        'Dari dokumen, kesehatan, hingga pembekalan manasik—berikut panduan agar jemaah merasa siap lahir dan batin.',
    },
    {
      title: 'Muthawwif di Era Digital: Lebih Dekat, Lebih Terarah',
      excerpt:
        'Peran pembimbing semakin strategis dengan dukungan aplikasi mobile dan sistem komunikasi terintegrasi.',
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>Blog & Wawasan</h2>
          <p className="mt-3 text-slate-700" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
            Artikel pilihan seputar haji, umrah, dan transformasi digital industri perjalanan ibadah.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="p-6 rounded-xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-md transition">
              <div className="h-36 w-full rounded-lg bg-gradient-to-br from-[#0F766E]/20 to-[#FFBF47]/30" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>{p.title}</h3>
              <p className="mt-2 text-slate-600" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-[#0F766E] font-semibold hover:underline" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
                Baca selengkapnya
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
