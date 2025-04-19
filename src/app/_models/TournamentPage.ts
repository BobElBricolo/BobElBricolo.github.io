export type LanguageCode = 'en' | 'fr';

export type TranslatedString = Record<LanguageCode, string>;

export interface Tournament {
  id: number;
  title: TranslatedString;
  description: TranslatedString;
  game: string;
  date: string | Date;
  image: string;
  link: string;
  showDescription: boolean;
}