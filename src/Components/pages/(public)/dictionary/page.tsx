"use client";

import dictionaryData from "../../../../../public/dictionaryData.json";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, ChevronRight, Languages, Mail, Menu, MoonStar, Search, Sparkles, X } from "lucide-react";
import { useGetDictionarySuggestionsQuery, useGetDictionaryWordQuery } from "@/redux/api/dictionaryApi";

type DictionaryEntry = (typeof dictionaryData)[number];

const categories = ["All", ...Array.from(new Set(dictionaryData.map((item) => item.category)))];

function useDebouncedValue(value: string, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedValue(value), delay);
    return () => window.clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function QuranDictionary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(dictionaryData[0]?.id ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const debouncedQuery = useDebouncedValue(query.trim());
  const { data: suggestionsResponse, isFetching: isSearching, isError: isSearchError } =
    useGetDictionarySuggestionsQuery(debouncedQuery, { skip: !debouncedQuery });
  const apiSuggestions = (suggestionsResponse?.data ?? []) as DictionaryEntry[];
  const sourceEntries = debouncedQuery ? apiSuggestions : dictionaryData;
  const isTyping = query.trim() !== debouncedQuery || isSearching;

  const results = useMemo(() => {
    return sourceEntries.filter((entry) => {
      const matchesCategory = category === "All" || entry.category === category;
      return matchesCategory;
    });
  }, [category, sourceEntries]);

  useEffect(() => {
    if (results.length && !results.some((entry) => entry.id === selectedId)) setSelectedId(results[0].id);
  }, [results, selectedId]);

  const localSelectedWord = (results.find((entry) => entry.id === selectedId) || results[0]) as DictionaryEntry | undefined;
  const { data: wordResponse, isFetching: isWordLoading } = useGetDictionaryWordQuery(
    selectedId,
    { skip: !debouncedQuery || !selectedId }
  );
  const selectedWord = ((wordResponse?.data as DictionaryEntry | undefined) || localSelectedWord);

  return (
    <main className="min-h-screen bg-[#f7f5ee] text-[#173b32]">
      <header className="relative overflow-hidden bg-[#0c3b31] text-white">
        <div className="islamic-grid absolute inset-0 opacity-25" />
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c3b31]/90 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-[#e5c979]/35 bg-white/10"><MoonStar className="h-[18px] w-[18px] text-[#e5c979]" /></span><span className="font-display text-2xl">Almunji</span></Link>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex"><Link className="transition hover:text-white" href="/">Home</Link><Link className="transition hover:text-white" href="/surahs">Quran</Link><Link href="/dictionary" className="nav-current text-white">Dictionary</Link><Link className="transition hover:text-white" href="/books">Library</Link><Link className="transition hover:text-white" href="/about">About</Link></div>
          <div className="hidden items-center gap-2 md:flex"><Link href="/login" className="rounded-full px-4 py-2.5 text-sm text-white/70 transition hover:text-white">Sign in</Link><Link href="/surahs" className="rounded-full bg-[#e5c979] px-5 py-2.5 text-sm font-semibold text-[#173b32] transition hover:bg-[#f1d98e]">Read Quran</Link></div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-white/15 p-2.5 md:hidden" aria-label="Toggle navigation">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          {menuOpen && <div className="absolute left-5 right-5 top-[72px] rounded-2xl border border-white/10 bg-[#123f35] p-5 shadow-2xl md:hidden">{[["Home","/"],["Quran","/surahs"],["Dictionary","/dictionary"],["Library","/books"],["About","/about"],["Sign in","/login"]].map(([label, href]) => <Link onClick={() => setMenuOpen(false)} key={label} href={href} className="block border-b border-white/10 py-3 text-white/80 last:border-0">{label}</Link>)}</div>}
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div><div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#e5c979]"><Sparkles className="h-3.5 w-3.5" /> Quranic language, made clear</div><h1 className="max-w-3xl font-display text-5xl leading-[1.04] sm:text-6xl">Discover the meaning behind every word.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">Explore essential Quranic vocabulary across Arabic, Persian, and English—with roots, meanings, and references gathered in one quiet place.</p></div>
            <div className="rounded-3xl border border-white/12 bg-white/[.07] p-5 backdrop-blur"><div className="flex items-center gap-3"><Languages className="h-5 w-5 text-[#e5c979]" /><p className="text-sm font-semibold">Three-language discovery</p></div><p className="mt-3 text-sm leading-6 text-white/55">Search by Arabic script, Persian, English meaning, pronunciation, or triliteral root.</p></div>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl border border-[#173b32]/10 bg-white p-3 shadow-[0_18px_60px_rgba(23,59,50,.12)] sm:p-4">
          <div className="flex items-center gap-3"><Search className="ml-2 h-5 w-5 shrink-0 text-[#a18136]" /><input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent py-4 text-base outline-none placeholder:text-[#173b32]/35" placeholder="Search Allāh, نور, mercy, ر-ح-م…" aria-label="Search dictionary" /><span className={`hidden text-xs text-[#173b32]/40 sm:block ${isTyping ? "opacity-100" : "opacity-0"}`}>Searching…</span>{query && <button onClick={() => setQuery("")} className="grid h-10 w-10 place-items-center rounded-full bg-[#edf2ed]" aria-label="Clear search"><X className="h-4 w-4" /></button>}<span className="hidden rounded-xl bg-[#0c3b31] px-5 py-3 text-sm font-semibold text-white sm:block">Search words</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide" aria-label="Dictionary categories">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${category === item ? "border-[#0c3b31] bg-[#0c3b31] text-white" : "border-[#173b32]/10 bg-white text-[#173b32]/60 hover:border-[#173b32]/30"}`}>{item}</button>)}</div>

        <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <aside className="overflow-hidden rounded-3xl border border-[#173b32]/10 bg-white">
            <div className="flex items-center justify-between border-b border-[#173b32]/10 px-5 py-4"><div><p className="text-sm font-semibold">Dictionary index</p><p className="mt-1 text-xs text-[#173b32]/45">{isTyping ? "Refining results…" : `${results.length} ${results.length === 1 ? "entry" : "entries"}`}</p></div><BookOpen className="h-5 w-5 text-[#a18136]" /></div>
            <div className="max-h-[680px] overflow-y-auto p-2 dictionary-scroll">
              {isSearchError && debouncedQuery ? <div className="mx-2 mb-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">The dictionary service could not be reached. Make sure the local API is running on port 5000.</div> : null}
              {results.length ? results.map((entry) => <button key={entry.id} onClick={() => setSelectedId(entry.id)} className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition ${selectedWord?.id === entry.id ? "bg-[#e8eee8]" : "hover:bg-[#f7f5ee]"}`}><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-bold ${selectedWord?.id === entry.id ? "bg-[#0c3b31] text-[#e5c979]" : "bg-[#f1efe7] text-[#173b32]/45"}`}>{entry.id.padStart(2,"0")}</span><span className="min-w-0 flex-1"><span className="flex items-baseline justify-between gap-3"><strong className="font-display text-xl font-semibold">{entry.word}</strong><span dir="rtl" className="font-arabic text-xl text-[#a18136]">{entry.arabic}</span></span><span className="mt-1 block truncate text-xs text-[#173b32]/45">{entry.meaning}</span></span><ChevronRight className="h-4 w-4 shrink-0 text-[#173b32]/20 transition group-hover:translate-x-0.5" /></button>) : <div className="px-6 py-20 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#edf2ed]"><Search className="h-6 w-6 text-[#173b32]/35" /></span><h2 className="mt-5 font-display text-2xl">No matching words</h2><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#173b32]/50">Try a broader meaning, another spelling, or select a different category.</p><button onClick={() => { setQuery(""); setCategory("All"); }} className="mt-5 text-sm font-semibold text-[#8e6b24]">Clear all filters</button></div>}
            </div>
          </aside>

          <article className="min-h-[560px] rounded-3xl border border-[#173b32]/10 bg-[#eee9dc] p-6 sm:p-9 lg:sticky lg:top-6 lg:self-start">
            {isWordLoading ? <div className="grid min-h-[500px] place-items-center text-center"><div><span className="mx-auto block h-8 w-8 animate-spin rounded-full border-2 border-[#173b32]/15 border-t-[#a18136]" /><p className="mt-4 text-sm text-[#173b32]/50">Loading word details…</p></div></div> : selectedWord ? <>
              <div className="flex flex-col gap-6 border-b border-[#173b32]/10 pb-8 sm:flex-row sm:items-start sm:justify-between"><div><span className="inline-flex rounded-full bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-[#876925]">{selectedWord.category}</span><h2 className="mt-5 font-display text-5xl sm:text-6xl">{selectedWord.word}</h2><p className="mt-2 text-sm text-[#173b32]/45">/{selectedWord.pronunciation}/ · {selectedWord.transliteration}</p></div><div className="text-right"><p dir="rtl" className="font-arabic text-5xl leading-relaxed text-[#9b762b] sm:text-6xl">{selectedWord.arabic}</p><p dir="rtl" className="mt-1 font-arabic text-xl text-[#173b32]/50">Persian · {selectedWord.persian}</p></div></div>
              <div className="grid gap-8 py-8 sm:grid-cols-[1fr_auto]"><div><p className="dictionary-label">Meaning</p><p className="mt-2 font-display text-3xl leading-tight">{selectedWord.meaning}</p></div><div className="sm:text-right"><p className="dictionary-label">Arabic root</p><span dir="rtl" className="mt-2 inline-flex rounded-xl border border-[#173b32]/10 bg-white/55 px-4 py-2 font-arabic text-xl">{selectedWord.root}</span></div></div>
              <div className="rounded-2xl bg-white/55 p-5 sm:p-6"><p className="dictionary-label">Definition</p><p className="mt-3 max-w-2xl text-base leading-7 text-[#173b32]/70">{selectedWord.definition}</p></div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2"><div><p className="dictionary-label">Used in context</p><div className="mt-3 space-y-2">{selectedWord.examples.map((example) => <p key={example} dir="rtl" className="rounded-xl border border-[#173b32]/8 bg-white/35 px-4 py-3 font-arabic text-lg">{example}</p>)}</div></div><div><p className="dictionary-label">Quran references</p><div className="mt-3 flex flex-wrap gap-2">{selectedWord.verses.map((verse) => { const [surah] = verse.split(":"); return <Link href={`/surahs/${surah}`} key={verse} className="group inline-flex items-center gap-2 rounded-full border border-[#173b32]/10 bg-white/50 px-4 py-2 text-sm font-semibold">{verse}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></Link>; })}</div></div></div>
            </> : <div className="grid h-full min-h-[500px] place-items-center text-center"><div><BookOpen className="mx-auto h-8 w-8 text-[#a18136]" /><h2 className="mt-5 font-display text-3xl">Choose a word to explore</h2><p className="mt-2 text-sm text-[#173b32]/50">Its meaning, root, and Quran references will appear here.</p></div></div>}
          </article>
        </div>
      </section>

      <section className="px-5 pb-20 pt-6 sm:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#c19a45] px-6 py-10 sm:px-10"><div className="islamic-grid absolute inset-0 opacity-15" /><div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#173b32]/55">A word to carry with you</p><h2 className="mt-3 font-display text-3xl sm:text-4xl">Receive one Quranic word and reflection each week.</h2></div><div className="flex w-full max-w-md rounded-2xl bg-white/75 p-2"><Mail className="ml-3 h-5 w-5 self-center text-[#173b32]/45" /><input type="email" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-[#173b32]/40" placeholder="Your email address" aria-label="Email address" /><button type="button" className="rounded-xl bg-[#0c3b31] px-5 py-3 text-sm font-semibold text-white">Join weekly</button></div></div></div></section>

      <footer className="bg-[#082f28] px-5 pb-8 pt-16 text-white sm:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.65fr_.8fr]"><div><Link href="/" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full border border-[#e5c979]/30 bg-white/5"><MoonStar className="h-5 w-5 text-[#e5c979]" /></span><span className="font-display text-2xl">Almunji</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-white/50">A thoughtful space to read, understand, and return to the words of the Quran every day.</p></div><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#e5c979]">Explore</p><div className="mt-5 grid gap-3 text-sm text-white/55"><Link href="/surahs">Read Quran</Link><Link href="/dictionary">Dictionary</Link><Link href="/books">Library</Link></div></div><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#e5c979]">Almunji</p><div className="mt-5 grid gap-3 text-sm text-white/55"><Link href="/about">About us</Link><Link href="/login">Your account</Link><Link href="/">Home</Link></div></div><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#e5c979]">Dictionary</p><p className="mt-5 text-sm leading-6 text-white/50">Search Arabic, Persian, English meanings, and Quranic roots in one reference.</p></div></div><div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Almunji. Made for reflection.</p><div className="flex gap-5"><span>Privacy</span><span>Terms</span><span>Accessibility</span></div></div></div></footer>
    </main>
  );
}
