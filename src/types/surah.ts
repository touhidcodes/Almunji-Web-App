export interface TSurah {
  id: number;
  number: number;
  nameArabic: string;
  nameEnglish: string;
  nameTransliteration: string;
  meaning: string;
  totalAyahs: number;
  revelation: "Meccan" | "Medinan";
  revelationOrder: number | null;
  mainThemes: string;
  description: string;
}

export interface TNewSurah {
  number: string;
  nameArabic: string;
  nameEnglish: string;
  nameTransliteration: string;
  meaning: string;
  totalAyahs: string;
  revelation: "Meccan" | "Medinan";
  revelationOrder: string;
  mainThemes: string;
  description: string;
}
