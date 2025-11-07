import { Smartphone, Users, MessagesSquare } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc, color }) => (
  <div className="p-6 rounded-xl border border-teal-100 bg-white/80 shadow-sm hover:shadow-md transition">
    <div className={`h-10 w-10 rounded-md grid place-content-center text-white`} style={{ backgroundColor: color }}>
      <Icon size={18} />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>{title}</h3>
    <p className="mt-2 text-slate-600" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>{desc}</p>
  </div>
);

export default function Products() {
  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-white to-teal-50/50">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-[#0F766E]/10 to-transparent blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: 'Kufam, system-ui, sans-serif' }}>Produk Manasikhub</h2>
          <p className="mt-3 text-slate-700" style={{ fontFamily: 'Sofia Pro, Inter, system-ui, sans-serif' }}>
            Satu rangkaian solusi yang saling terhubung untuk mengelola operasi, membimbing jemaah, dan membangun komunikasi yang hangat.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon={Users}
            title="ManasikAdmin"
            desc="Sistem manajemen biro: pendaftaran, paket, keberangkatan, dokumen, keuangan, hingga laporan—semua terintegrasi."
            color="#0F766E"
          />
          <Feature
            icon={Smartphone}
            title="ManasikApp"
            desc="Aplikasi jemaah untuk jadwal, materi manasik, notifikasi, dan pelacakan progres ibadah agar lebih terarah."
            color="#FFBF47"
          />
          <Feature
            icon={MessagesSquare}
            title="ManasikConnect"
            desc="Komunikasi real-time antara biro, muthawwif, dan jemaah. Grup perjalanan, pengumuman, dan konsultasi."
            color="#0F766E"
          />
        </div>
      </div>
    </section>
  );
}
