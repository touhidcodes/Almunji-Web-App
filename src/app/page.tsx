"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Bookmark, ChevronRight, Clock3, Compass, Headphones, Heart, Menu, MoonStar, Play, Search, ShieldCheck, Sparkles, Sunrise, X } from "lucide-react";

const surahs = [
  { number: "01", name: "Al-Fatihah", meaning: "The Opening", arabic: "الفاتحة", ayahs: 7, type: "Meccan" },
  { number: "18", name: "Al-Kahf", meaning: "The Cave", arabic: "الكهف", ayahs: 110, type: "Meccan" },
  { number: "36", name: "Ya-Sin", meaning: "Ya Sin", arabic: "يس", ayahs: 83, type: "Meccan" },
  { number: "55", name: "Ar-Rahman", meaning: "The Most Merciful", arabic: "الرحمن", ayahs: 78, type: "Medinan" },
  { number: "67", name: "Al-Mulk", meaning: "The Sovereignty", arabic: "الملك", ayahs: 30, type: "Meccan" },
  { number: "112", name: "Al-Ikhlas", meaning: "The Sincerity", arabic: "الإخلاص", ayahs: 4, type: "Meccan" },
];

const features = [
  { icon: Headphones, title: "Listen with presence", text: "Follow beautiful recitations while every ayah is highlighted in rhythm." },
  { icon: BookOpen, title: "Understand the meaning", text: "Read clear translations and move into trusted tafsir when you want more depth." },
  { icon: Bookmark, title: "Return to reflection", text: "Save ayahs, add personal notes, and continue exactly where you left off." },
];

const collections = [
  { icon: Sunrise, label: "Begin the day", title: "Morning peace", detail: "A gentle 8-minute reading", href: "/surahs/55", tone: "bg-[#e9d9b1]" },
  { icon: ShieldCheck, label: "Find reassurance", title: "Verses of protection", detail: "7 selected passages", href: "/surahs/2", tone: "bg-[#d8e8df]" },
  { icon: Compass, label: "Seek direction", title: "Guidance for the heart", detail: "A reflective collection", href: "/surahs/1", tone: "bg-[#dfe2d5]" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = query.trim() ? `/surahs?search=${encodeURIComponent(query.trim())}` : "/surahs";
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ee] text-[#173b32]">
      <section className="hero-shell relative min-h-[760px] bg-[#0c3b31] text-white">
        <div className="islamic-grid absolute inset-0 opacity-30" />
        <div className="hero-glow absolute -right-40 top-24 h-[520px] w-[520px] rounded-full" />
        <nav className="relative z-20 mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Almunji home"><span className="grid h-11 w-11 place-items-center rounded-full border border-[#d9b968]/40 bg-white/10"><MoonStar className="h-5 w-5 text-[#e5c979]" /></span><span className="font-display text-2xl tracking-wide">Almunji</span></Link>
          <div className="hidden items-center gap-8 text-sm text-white/75 md:flex"><Link className="nav-current text-white" href="/">Home</Link><Link className="transition hover:text-white" href="/surahs">Quran</Link><Link className="transition hover:text-white" href="/dictionary">Dictionary</Link><Link className="transition hover:text-white" href="/books">Library</Link><Link className="transition hover:text-white" href="/about">About</Link></div>
          <div className="hidden items-center gap-3 md:flex"><Link href="/login" className="rounded-full px-5 py-2.5 text-sm text-white/80 transition hover:text-white">Sign in</Link><Link href="/surahs" className="rounded-full bg-[#e5c979] px-5 py-2.5 text-sm font-semibold text-[#173b32] transition hover:bg-[#f1d98e]">Start reading</Link></div>
          <button className="rounded-full border border-white/15 p-2.5 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          {menuOpen && <div className="absolute left-5 right-5 top-20 rounded-2xl border border-white/10 bg-[#123f35] p-5 shadow-2xl md:hidden">{[["Quran","/surahs"],["Dictionary","/dictionary"],["Library","/books"],["About","/about"],["Sign in","/login"]].map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-3 text-white/80 last:border-0">{label}</Link>)}</div>}
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e5c979]/25 bg-white/[.06] px-4 py-2 text-xs uppercase tracking-[.2em] text-[#e5c979]"><Sparkles className="h-3.5 w-3.5" /> A space for daily reflection</div>
            <h1 className="max-w-3xl font-display text-5xl leading-[1.04] tracking-[-.02em] sm:text-6xl lg:text-[76px]">Let the Quran bring <span className="text-[#e5c979]">light</span> to your day.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">Read, listen, understand, and build a lasting relationship with the words of Allah—one peaceful moment at a time.</p>
            <form onSubmit={handleSearch} className="mt-10 flex max-w-xl items-center rounded-2xl border border-white/15 bg-white/[.08] p-2 backdrop-blur"><Search className="ml-3 h-5 w-5 shrink-0 text-white/45" /><input value={query} onChange={(e) => setQuery(e.target.value)} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/40" placeholder="Search a surah, ayah, or topic" aria-label="Search Quran" /><button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#173b32] transition hover:bg-[#f7efda]">Explore</button></form>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50"><span><strong className="mr-2 text-white">114</strong>Surahs</span><span><strong className="mr-2 text-white">6,236</strong>Ayahs</span><span><strong className="mr-2 text-white">10+</strong>Translations</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="verse-card relative rounded-[32px] border border-white/15 bg-[#f4eddb] p-7 text-[#173b32] shadow-2xl sm:p-10">
              <div className="mb-10 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.2em] text-[#a18136]">Ayah of the day</span><button className="rounded-full border border-[#173b32]/10 p-2.5" aria-label="Save verse"><Heart className="h-4 w-4" /></button></div>
              <p dir="rtl" className="font-arabic text-right text-4xl leading-[1.9] sm:text-5xl">إِنَّ مَعَ الْعُسْرِ يُسْرًا</p><div className="my-8 h-px bg-[#173b32]/10" /><p className="font-display text-2xl leading-snug">“Indeed, with hardship comes ease.”</p>
              <div className="mt-8 flex items-center justify-between"><div><p className="text-sm font-semibold">Ash-Sharh</p><p className="mt-1 text-xs text-[#173b32]/55">Surah 94 · Ayah 6</p></div><button className="grid h-12 w-12 place-items-center rounded-full bg-[#0c3b31] text-white" aria-label="Play recitation"><Play className="h-4 w-4 fill-current" /></button></div>
            </div>
            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-[#155044] px-5 py-4 shadow-xl sm:block"><p className="text-xs text-white/50">Today’s reflection</p><p className="mt-1 text-sm text-white">Hope is part of faith.</p></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 sm:px-8"><div className="grid overflow-hidden rounded-3xl border border-[#173b32]/10 bg-white shadow-[0_18px_60px_rgba(23,59,50,.09)] md:grid-cols-[1.2fr_.8fr]">
        <div className="flex items-center gap-5 p-6 sm:p-8"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#e6f0e9] text-[#0c5949]"><BookOpen className="h-6 w-6" /></div><div className="min-w-0 flex-1"><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#9b7b32]">Continue reading</p><h2 className="mt-2 font-display text-2xl">Al-Baqarah <span className="text-base text-[#173b32]/45">· Ayah 255</span></h2><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#173b32]/10"><div className="h-full w-[42%] rounded-full bg-[#c8a653]" /></div></div><Link href="/surahs/2" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#0c3b31] text-white"><ArrowRight className="h-5 w-5" /></Link></div>
        <div className="flex items-center gap-4 border-t border-[#173b32]/10 bg-[#fbfaf6] p-6 sm:p-8 md:border-l md:border-t-0"><Clock3 className="h-5 w-5 text-[#b18b34]" /><div><p className="text-sm font-semibold">Your daily goal</p><p className="mt-1 text-xs text-[#173b32]/55">8 of 10 minutes completed</p></div><span className="ml-auto font-display text-2xl">80%</span></div>
      </div></section>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="section-kicker">Begin with a beloved chapter</p><h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Find a surah for the moment you’re in.</h2></div><Link href="/surahs" className="group inline-flex items-center gap-2 text-sm font-semibold">View all 114 surahs <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{surahs.map((surah) => <Link href={`/surahs/${Number(surah.number)}`} key={surah.number} className="surah-card group rounded-2xl border border-[#173b32]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c29c46]/50 hover:shadow-xl"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf3ee] text-xs font-bold text-[#0c5949]">{surah.number}</span><span dir="rtl" className="font-arabic text-3xl text-[#98752d]">{surah.arabic}</span></div><div className="mt-7 flex items-end justify-between"><div><h3 className="font-display text-2xl">{surah.name}</h3><p className="mt-1 text-sm text-[#173b32]/50">{surah.meaning}</p></div><ChevronRight className="h-5 w-5 text-[#173b32]/25 transition group-hover:translate-x-1 group-hover:text-[#98752d]" /></div><div className="mt-5 flex gap-3 border-t border-[#173b32]/10 pt-4 text-[11px] uppercase tracking-widest text-[#173b32]/40"><span>{surah.type}</span><span>•</span><span>{surah.ayahs} ayahs</span></div></Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 sm:px-8"><div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="section-kicker">Guided collections</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Read with an intention.</h2></div><p className="max-w-md text-sm leading-6 text-[#173b32]/55">Short, considered paths through the Quran for the different moments life brings.</p></div><div className="grid gap-4 lg:grid-cols-3">{collections.map((collection) => <Link href={collection.href} key={collection.title} className={`${collection.tone} collection-card group relative min-h-64 overflow-hidden rounded-[28px] p-7`}><div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full border border-[#173b32]/10" /><div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full border border-[#173b32]/10" /><div className="relative flex h-full flex-col"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/55"><collection.icon className="h-5 w-5" /></span><ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" /></div><div className="mt-auto pt-12"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#173b32]/50">{collection.label}</p><h3 className="mt-2 font-display text-3xl">{collection.title}</h3><p className="mt-2 text-sm text-[#173b32]/55">{collection.detail}</p></div></div></Link>)}</div></section>

      <section className="bg-[#e8eee8] px-5 py-28 sm:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div className="lg:sticky lg:top-10"><p className="section-kicker">More than reading</p><h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A thoughtful companion for your Quran journey.</h2><p className="mt-6 max-w-md leading-7 text-[#173b32]/60">Built to help you slow down, understand more deeply, and keep a gentle, consistent rhythm.</p></div><div className="grid gap-4">{features.map((feature, index) => <article key={feature.title} className="group grid gap-5 rounded-3xl border border-[#173b32]/10 bg-[#f7f5ee] p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-9"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0c3b31] text-[#e5c979]"><feature.icon className="h-6 w-6" /></span><div><p className="mb-2 text-xs font-semibold text-[#a18136]">0{index + 1}</p><h3 className="font-display text-2xl">{feature.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#173b32]/55">{feature.text}</p></div><ArrowRight className="hidden h-5 w-5 text-[#173b32]/25 transition group-hover:translate-x-1 sm:block" /></article>)}</div></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-28 sm:px-8"><div className="relative overflow-hidden rounded-[36px] bg-[#c19a45] px-6 py-16 text-center text-[#15392f] sm:px-12 sm:py-20"><div className="islamic-grid absolute inset-0 opacity-15" /><div className="relative mx-auto max-w-2xl"><MoonStar className="mx-auto h-8 w-8" /><h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">Make space for one ayah today.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-[#15392f]/70">No pressure and no streaks to protect. Just a quiet invitation to return to the Quran, whenever you are ready.</p><Link href="/surahs" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0c3b31] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#092e27]">Open the Quran <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <footer className="border-t border-[#173b32]/10 px-5 py-10 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#0c3b31] text-[#e5c979]"><MoonStar className="h-4 w-4" /></span><span className="font-display text-xl">Almunji</span></Link><p className="text-sm text-[#173b32]/45">Made with care for every heart seeking guidance.</p><div className="flex gap-6 text-sm text-[#173b32]/60"><Link href="/about">About</Link><Link href="/dictionary">Dictionary</Link><Link href="/login">Sign in</Link></div></div></footer>
    </main>
  );
}
