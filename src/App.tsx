import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Gift,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Users,
  ChevronDown,
  Star,
  ArrowRight,
  Leaf,
  BarChart3,
  BookOpen,
  Quote,
} from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Budi Santoso",
    kota: "Surabaya",
    pekerjaan: "Karyawan Swasta",
    rating: 5,
    text: "Webinar yang paling jelas menjelaskan soal investasi ternak yang pernah saya ikuti. Simulasi angkanya detail banget, langsung paham dari mana datangnya keuntungan 500% itu.",
    avatar: "BS",
    bg: "bg-emerald-600",
  },
  {
    name: "Siti Rahayu",
    kota: "Yogyakarta",
    pekerjaan: "Ibu Rumah Tangga",
    rating: 5,
    text: "Awalnya saya pikir investasi ternak itu ribet dan butuh lahan besar. Ternyata ada cara sistematis yang bisa dijalankan dari modal kecil. Template simulasinya sangat membantu.",
    avatar: "SR",
    bg: "bg-amber-600",
  },
  {
    name: "Hendra Kusuma",
    kota: "Bandung",
    pekerjaan: "Wirausaha",
    rating: 5,
    text: "Pematerinya kompeten, penjelasan risiko-risikonya jujur dan realistis. Tidak ada yang ditutupi. Justru ini yang bikin saya semakin percaya untuk mulai investasi kambing.",
    avatar: "HK",
    bg: "bg-sky-600",
  },
  {
    name: "Dewi Anggraini",
    kota: "Semarang",
    pekerjaan: "Guru SD",
    rating: 5,
    text: "Saya ikut webinar ini dengan modal nol pengalaman soal ternak. Setelah 2 jam, saya sudah bisa hitung sendiri potensi hasilnya. Bonus e-book-nya juga sangat lengkap.",
    avatar: "DA",
    bg: "bg-rose-600",
  },
  {
    name: "Rizky Pratama",
    kota: "Medan",
    pekerjaan: "Fresh Graduate",
    rating: 5,
    text: "Cocok banget buat pemula yang mau diversifikasi investasi selain saham. Cara penyampaiannya mudah dimengerti dan tidak membosankan. Rekaman webinarnya juga bisa diputar ulang.",
    avatar: "RP",
    bg: "bg-violet-600",
  },
  {
    name: "Ahmad Fauzi",
    kota: "Malang",
    pekerjaan: "Petani",
    rating: 5,
    text: "Sudah lama ingin tahu cara mengembangkan usaha ternak secara lebih terstruktur. Webinar ini memberikan framework yang jelas. Langsung saya aplikasikan ke kandang saya.",
    avatar: "AF",
    bg: "bg-teal-600",
  },
];

const GOAT_FARM_HERO =
  "https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=1400&auto=format&fit=crop";
const GOAT_HERD =
  "https://images.unsplash.com/photo-1533318087102-b3ad366ed041?q=80&w=900&auto=format&fit=crop";
const FARM_LANDSCAPE =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=900&auto=format&fit=crop";
const INVESTMENT_CALC =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop";
const EBOOK_IMG =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop";
const MARKET_IMG =
  "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=900&auto=format&fit=crop";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function App() {
  const [formData, setFormData] = useState({ nama: "", wa: "", kota: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nomorAdmin = "6281234567890";
    const pesan =
      `Halo Admin, saya ingin mendaftar Webinar Ternak Domba (Gratis).%0A%0A` +
      `Nama: ${encodeURIComponent(formData.nama)}%0A` +
      `No. WhatsApp: ${encodeURIComponent(formData.wa)}%0A` +
      `Kota: ${encodeURIComponent(formData.kota)}%0A%0A` +
      `Mohon dikirimkan link Zoom webinar.`;
    window.open(`https://wa.me/${nomorAdmin}?text=${pesan}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="bg-[#f5f0e4] min-h-screen font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={GOAT_FARM_HERO} alt="Peternakan kambing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2410]/95 via-[#122e18]/90 to-[#1a4a24]/85" />
          {/* decorative circles */}
          <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-emerald-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-14 pb-20 lg:pt-24 lg:pb-28">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-sm font-bold px-4 py-2 rounded-full mb-7 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                WEBINAR · ONLINE VIA ZOOM
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
                <span className="text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.8)]">Rahasia Sukses Ternak Domba</span>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-amber-400 [text-shadow:0_2px_24px_rgba(251,191,36,0.6)]">
                    Dari 10 Ekor Jadi 200 Ekor
                  </span>
                </span>
                <br />
                <span className="bg-white text-[#0a2410] px-3 py-1 rounded-xl inline-block mt-1 text-3xl sm:text-4xl lg:text-5xl">
                  dalam 2,5 Tahun
                </span>
              </h1>

              <p className="text-lg text-white/75 max-w-lg mb-8 leading-relaxed">
                Pelajari cara saya mengembangkan peternakan Domba dari{" "}
                <strong className="text-amber-300 font-semibold">10 ekor menjadi 200 ekor</strong>.{" "}
                Real case study pribadi.
              </p>

              {/* 3 stats */}
              <div className="grid grid-cols-3 gap-3 mb-9">
                {[
                  { label: "Cocok Pemula", icon: <Users size={18} /> },
                  { label: "Modal Fleksibel", icon: <BarChart3 size={18} /> },
                  { label: "Ada Simulasi", icon: <TrendingUp size={18} /> },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-1.5 bg-white/10 border border-white/15 rounded-2xl py-3 px-2 text-center backdrop-blur-sm"
                  >
                    <span className="text-amber-400">{s.icon}</span>
                    <span className="text-xs font-bold text-white/90 leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#daftar"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a2410] font-black text-base px-7 py-4 rounded-2xl shadow-lg shadow-amber-400/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  DAFTAR SEKARANG
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#materi"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base px-6 py-4 rounded-2xl transition-all backdrop-blur-sm"
                >
                  Lihat Materi
                  <ChevronDown size={16} />
                </a>
              </div>

              <p className="text-white/45 text-sm mt-5 flex items-center gap-1.5">
                <ShieldCheck size={14} />
                Kuota terbatas agar sesi tanya jawab lebih efektif.
              </p>
            </div>

            {/* Right – Event card */}
            <div className="w-full lg:w-[360px] flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl shadow-black/30">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                  <img src={GOAT_HERD} alt="Kambing" className="w-full h-full object-cover" />
                </div>

                <h3 className="text-[#0a2410] font-black text-xl mb-4">Detail Webinar</h3>

                <div className="space-y-3">
                  {[
                    { icon: <Calendar size={16} className="text-amber-500" />, text: "Rabu, 23 Juli 2026" },
                    { icon: <Clock size={16} className="text-amber-500" />, text: "19.30 – 21.30 WIB" },
                    { icon: <MapPin size={16} className="text-amber-500" />, text: "Online via Zoom" },
                    { icon: <Gift size={16} className="text-amber-500" />, text: "Bonus e-book & template simulasi" },
                  ].map((row) => (
                    <div key={row.text} className="flex items-center gap-3 text-sm font-semibold text-[#17351f]">
                      <span className="w-7 h-7 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                        {row.icon}
                      </span>
                      {row.text}
                    </div>
                  ))}
                </div>

                <a
                  href="#daftar"
                  className="mt-5 flex items-center justify-center gap-2 bg-[#17351f] hover:bg-[#1f4a28] text-white font-black text-sm px-5 py-3.5 rounded-xl w-full transition-colors"
                >
                  Amankan Kursi Saya
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUMBERS ── */}
      <section className="bg-[#17351f] text-white">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {[
              { num: 500, suffix: "%", label: "Potensi Keuntungan" },
              { num: 2, suffix: " Thn", label: "Durasi Investasi" },
              { num: 1200, suffix: "+", label: "Peserta Bergabung" },
              { num: 98, suffix: "%", label: "Puas dengan Webinar" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#17351f] flex flex-col items-center justify-center py-10 px-4 text-center"
              >
                <div className="text-4xl lg:text-5xl font-black text-amber-400 leading-none mb-2">
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="max-w-6xl mx-auto px-5 py-16">

        <div className="text-center mb-10">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4">
            Kenalan Dulu dengan Pematerinya
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#17351f] leading-tight mb-4">
            Perjalanan Nyata dari Lapangan
          </h2>
        </div>

        {/* Intro card – perkenalan Mas Ony */}
        <div className="bg-white border border-[#e8dfc8] rounded-3xl overflow-hidden shadow-sm mb-10">
          <div className="flex flex-col md:flex-row">

            {/* Foto placeholder */}
            <div className="md:w-64 lg:w-72 flex-shrink-0 bg-[#e8dfc8] flex flex-col items-center justify-center py-12 px-6 gap-3">
              <div className="w-28 h-28 rounded-full bg-[#c8b898] border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                {/* Ganti src di bawah ini dengan foto asli Mas Ony */}
                <svg viewBox="0 0 80 80" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect width="80" height="80" fill="#a08060"/>
                  <circle cx="40" cy="30" r="16" fill="#c8a878"/>
                  <ellipse cx="40" cy="70" rx="24" ry="18" fill="#c8a878"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-black text-[#17351f] text-base">Mas Ony</p>
                <p className="text-[#7a6040] text-xs mt-0.5">Peternak · Balakosa Farm</p>
                <p className="text-[#7a6040] text-xs">Singosari, Malang</p>
              </div>
              <div className="mt-1 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                📸 Foto menyusul
              </div>
            </div>

            {/* Narasi */}
            <div className="flex-1 p-7 lg:p-9">
              <p className="text-[#17351f] text-base font-black mb-4 leading-snug">
                "Halo, perkenalkan — saya Ony, dari Singosari, Malang."
              </p>
              <div className="space-y-3 text-[#526354] text-sm leading-relaxed">
                <p>
                  Saya bukan orang yang dari awal sudah tahu cara beternak. Dulu saya mulai dari nol — tidak ada latar belakang pertanian, tidak ada mentor, tidak ada sistem. Yang ada hanya keinginan untuk mencoba.
                </p>
                <p>
                  Tahun pertama, saya mulai dengan <strong className="text-[#17351f]">10 ekor domba</strong>. Kandang seadanya. Pakan dicoba-coba. Banyak yang mati, banyak yang salah. Tapi saya catat semua, dan terus diperbaiki.
                </p>
                <p>
                  Pelan-pelan populasi tumbuh. Sistem mulai terbentuk. Sampai akhirnya dalam <strong className="text-[#17351f]">2,5 tahun</strong>, kandang saya pernah menampung <strong className="text-[#17351f]">lebih dari 200 ekor domba</strong>.
                </p>
                <p>
                  Hari ini saya stabilkan di sekitar <strong className="text-[#17351f]">180 ekor</strong> — bukan karena tidak bisa lebih, tapi karena saya belajar bahwa bukan jumlahnya yang paling penting. <em>Sistemnya</em> yang paling penting.
                </p>
                <p className="text-[#17351f] font-semibold">
                  Dan di webinar ini, saya ingin berbagi semua yang saya pelajari — agar Anda tidak perlu mengulang kesalahan yang sama.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-700 via-amber-400 to-emerald-900" />

          <div className="flex flex-col gap-8">

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="md:w-1/2 md:text-right md:pr-10 order-2 md:order-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  Titik Awal
                </span>
                <h3 className="text-xl font-black text-[#17351f] mb-2">Mulai dari 10 Ekor</h3>
                <p className="text-[#526354] text-sm leading-relaxed">
                  Tidak ada sistem, tidak ada template. Kandang pertama dibangun sederhana, pakan masih coba-coba, pencatatan belum ada. Belajar dari nol langsung di lapangan — dan membayar mahal dari setiap kesalahan.
                </p>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-emerald-700 border-4 border-[#f5f0e4] flex items-center justify-center text-white font-black text-lg flex-shrink-0 order-1 md:order-2 shadow-md">1</div>
              <div className="md:w-1/2 md:pl-10 order-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 text-sm text-emerald-800 font-semibold">
                  🐑 10 ekor — modal awal, sistem belum ada
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-5">
              <div className="md:w-1/2 md:text-left md:pl-10 order-2 md:order-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-2">
                  Mulai Serius
                </span>
                <h3 className="text-xl font-black text-[#17351f] mb-2">~20 Ekor: Sistem Mulai Dibangun</h3>
                <p className="text-[#526354] text-sm leading-relaxed">
                  Di titik ini mulai ada pencatatan kelahiran, seleksi indukan, dan perhatian lebih ke manajemen pakan. Bukan karena sudah tahu semua jawaban — tapi karena mulai tahu pertanyaan yang benar.
                </p>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-amber-500 border-4 border-[#f5f0e4] flex items-center justify-center text-white font-black text-lg flex-shrink-0 order-1 md:order-2 shadow-md">2</div>
              <div className="md:w-1/2 md:pr-10 md:text-right order-3">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-sm text-amber-800 font-semibold">
                  📋 ~20 ekor — pencatatan & seleksi mulai jalan
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="md:w-1/2 md:text-right md:pr-10 order-2 md:order-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-2">
                  Puncak Populasi
                </span>
                <h3 className="text-xl font-black text-[#17351f] mb-2">Pernah Menyentuh ±200 Ekor</h3>
                <p className="text-[#526354] text-sm leading-relaxed">
                  Dalam 2,5 tahun populasi pernah mencapai ±200 ekor. Bukan tanpa tantangan — justru di fase ini banyak keputusan sulit harus diambil: jual atau simpan, tambah atau stabilkan, kapasitas kandang vs. target populasi.
                </p>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-emerald-800 border-4 border-[#f5f0e4] flex items-center justify-center text-white font-black text-lg flex-shrink-0 order-1 md:order-2 shadow-md">3</div>
              <div className="md:w-1/2 md:pl-10 order-3">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 text-sm text-emerald-800 font-semibold">
                  🎯 ±200 ekor — puncak dalam 2,5 tahun
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-5">
              <div className="md:w-1/2 md:text-left md:pl-10 order-2 md:order-1">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full mb-2">
                  Kondisi Kini
                </span>
                <h3 className="text-xl font-black text-[#17351f] mb-2">Distabilkan di ~180 Ekor</h3>
                <p className="text-[#526354] text-sm leading-relaxed">
                  Populasi sengaja distabilkan sesuai kapasitas nyata: daya tampung kandang, ketersediaan pakan, dan kemampuan pencatatan harian. Bukan sebanyak mungkin — tapi sekuat sistem mampu menopang.
                </p>
              </div>
              <div className="z-10 w-12 h-12 rounded-full bg-amber-600 border-4 border-[#f5f0e4] flex items-center justify-center text-white font-black text-lg flex-shrink-0 order-1 md:order-2 shadow-md">4</div>
              <div className="md:w-1/2 md:pr-10 md:text-right order-3">
                <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 text-sm text-amber-800 font-semibold">
                  ⚖️ ~180 ekor — stabil, terkontrol, berkelanjutan
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-12 bg-[#17351f] text-white rounded-3xl px-8 py-7 text-center">
          <p className="text-xl font-black mb-2 leading-snug">
            "Saya tidak ingin Anda membayar mahal dari kesalahan yang bisa dihindari."
          </p>
          <p className="text-emerald-300 text-sm">
            Mas Ony akan berbagi langsung — proses, kesalahan, dan sistem yang akhirnya berjalan.
          </p>
        </div>

      </section>

      {/* ── MATERI ── */}
      <section id="materi" className="bg-[#17351f] text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/15 px-4 py-1.5 rounded-full mb-4">
              Kurikulum Webinar
            </span>
            <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-4">
              Ini yang Akan Saya Ajarkan kepada Anda di Webinar Online Nanti
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-base">
              Webinar dibuat ringkas, praktis, dan fokus pada angka agar peserta paham cara kerja investasi kambing dari awal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "01", text: "Cara kerja pengembangan domba: dari breeding, pembesaran, hingga penjualan." },
              { num: "02", text: "Simulasi nyata memulai hanya dari 10 ekor hingga berkembang jadi 200 ekor." },
              { num: "03", text: "Skema arah genetik & pemilihan pejantan unggul untuk mempercepat pertumbuhan populasi." },
              { num: "04", text: "Risiko yang wajib diketahui sebelum mulai beternak dan cara menghadapinya." },
              { num: "05", text: "Cara meminimalkan angka kematian dan menjaga kesehatan kawanan domba." },
              { num: "06", text: "Langkah memulai meski belum punya kandang dan pengalaman beternak sebelumnya." },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-4 items-start bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl p-5 transition-colors"
              >
                <span className="text-3xl font-black text-amber-400/40 leading-none flex-shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white/85 text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 bg-[#f5f0e4]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4">
              Kata Peserta
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#17351f] leading-tight mb-4">
              Apa Kata Mereka yang Sudah Ikut?
            </h2>
            <p className="text-[#526354] max-w-lg mx-auto text-base">
              Lebih dari 1.200 peserta telah bergabung. Ini beberapa cerita nyata dari mereka.
            </p>
          </div>

          {/* highlight strip */}
          <div className="bg-amber-400 rounded-3xl p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex-1">
              <Quote size={32} className="text-[#0a2410]/30 mb-3" />
              <p className="font-black text-xl lg:text-2xl text-[#0a2410] leading-snug">
                "Akhirnya ada webinar investasi yang jujur soal risiko, bukan cuma jual mimpi. Saya langsung rekomendasikan ke keluarga."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 rounded-full bg-[#0a2410] text-amber-400 flex items-center justify-center font-black text-sm flex-shrink-0">
                  RW
                </div>
                <div>
                  <p className="font-black text-[#0a2410] text-sm">Rini Wulandari</p>
                  <p className="text-[#0a2410]/60 text-xs">Jakarta · Ibu Rumah Tangga</p>
                </div>
                <div className="flex gap-0.5 ml-auto flex-shrink-0">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-[#0a2410]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* grid cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-6 border border-[#e8dfc8] shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                {/* stars */}
                <div className="flex gap-0.5">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" className="text-amber-400" />
                  ))}
                </div>

                {/* quote */}
                <p className="text-[#3a4a3c] text-sm leading-relaxed flex-1">
                  "{t.text}"
                </p>

                {/* author */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#f0e9d6]">
                  <div
                    className={`w-10 h-10 rounded-full ${t.bg} text-white flex items-center justify-center font-black text-xs flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-black text-[#17351f] text-sm leading-tight">{t.name}</p>
                    <p className="text-[#8a907e] text-xs">{t.kota} · {t.pekerjaan}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom CTA nudge */}
          <div className="mt-10 text-center">
            <p className="text-[#526354] text-sm mb-4">Bergabunglah bersama 1.200+ peserta yang sudah mendaftar.</p>
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 bg-[#17351f] hover:bg-[#1f4a28] text-white font-black text-base px-8 py-4 rounded-2xl transition-colors shadow-md shadow-[#17351f]/20"
            >
              Daftar Sekarang
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── BONUS + FORM ── */}
      <section id="daftar" className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-7 items-start">

          {/* Bonus card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a2410] to-[#1d5228] text-white p-7 shadow-xl shadow-[#0a2410]/20">
            {/* bg blobs */}
            <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/15 px-3 py-1 rounded-full mb-5">
                Bonus Peserta
              </span>
              <h3 className="font-black text-2xl text-white mb-2">Semua Peserta Mendapatkan</h3>
              <p className="text-white/60 text-sm mb-6">Dikirim langsung via WhatsApp setelah pendaftaran dikonfirmasi.</p>

              <div className="space-y-3 mb-7">
                {[
                  { icon: <BookOpen size={16} />, text: "E-book Panduan Investasi Kambing untuk Pemula" },
                  { icon: <BarChart3 size={16} />, text: "Template simulasi keuntungan investasi kambing" },
                  { icon: <CheckCircle2 size={16} />, text: "Rekaman webinar untuk dipelajari ulang" },
                  { icon: <Users size={16} />, text: "Sesi tanya jawab langsung dengan pemateri" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="w-7 h-7 bg-amber-400/20 rounded-full flex items-center justify-center text-amber-400 flex-shrink-0">
                      {b.icon}
                    </span>
                    <span className="text-white/85">{b.text}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <img src={INVESTMENT_CALC} alt="Template simulasi" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <img src={EBOOK_IMG} alt="E-book panduan" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#e8dfc8]">
            <span className="inline-block text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-5">
              Daftar Sekarang
            </span>
            <h3 className="font-black text-2xl text-[#17351f] mb-2">
              Amankan Kursi Webinar
            </h3>
            <p className="text-[#526354] text-sm mb-1">
              Isi data berikut. Tim kami akan mengirimkan link Zoom melalui WhatsApp.
            </p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { icon: <ShieldCheck size={15} />, label: "Aman & Terpercaya" },
                { icon: <MapPin size={15} />, label: "Online" },
                { icon: <Users size={15} />, label: "Kuota Terbatas" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center gap-1 bg-[#f5f0e4] border border-[#e8dfc8] rounded-xl py-2.5 px-1"
                >
                  <span className="text-amber-600">{t.icon}</span>
                  <span className="text-xs font-black text-[#17351f] text-center leading-tight">{t.label}</span>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h4 className="font-black text-[#17351f] text-xl mb-2">Pendaftaran Dikirim!</h4>
                <p className="text-[#526354] text-sm">Jendela WhatsApp baru telah terbuka. Kirim pesan untuk mendapatkan link Zoom webinar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {[
                  { id: "nama", type: "text", placeholder: "Nama lengkap" },
                  { id: "wa", type: "tel", placeholder: "Nomor WhatsApp aktif" },
                  { id: "kota", type: "text", placeholder: "Kota / Domisili" },
                ].map((f) => (
                  <input
                    key={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={formData[f.id as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, [f.id]: e.target.value }))
                    }
                    className="w-full border border-[#d8c9ad] focus:border-[#1f7a3a] focus:ring-2 focus:ring-[#1f7a3a]/15 outline-none rounded-xl px-4 py-3.5 text-sm text-[#17351f] placeholder:text-[#aaa] transition-colors"
                  />
                ))}

                <button
                  type="submit"
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a2410] font-black text-base px-6 py-4 rounded-xl shadow-md shadow-amber-400/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  DAFTAR SEKARANG
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <p className="text-[#8a907e] text-xs mt-4 leading-relaxed">
              Catatan: Potensi keuntungan 500% berdasarkan simulasi dan studi kasus. Hasil aktual dapat berbeda tergantung sistem pengelolaan, kondisi ternak, biaya operasional, dan pasar.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#ddd4bc] py-8">
        <div className="max-w-6xl mx-auto px-5 text-center text-[#8a907e] text-sm">
          © 2026 Webinar Investasi Kambing. Semua materi bersifat edukasi dan bukan jaminan hasil investasi.
        </div>
      </footer>

      {/* ── STICKY CTA (mobile) ── */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 px-4 py-3 bg-white/95 backdrop-blur-md border-t border-[#e4d8bd] shadow-2xl transition-transform duration-300 sm:hidden ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href="#daftar"
          className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#0a2410] font-black text-base px-6 py-4 rounded-xl w-full shadow-md shadow-amber-400/20 transition-colors"
        >
          DAFTAR SEKARANG
          <ArrowRight size={18} />
        </a>
      </div>

    </div>
  );
}
