declare module 'korean-lunar-calendar' {
  interface LunarCalendar {
    year: number;
    month: number;
    day: number;
    intercalation: boolean;
  }

  interface SolarCalendar {
    year: number;
    month: number;
    day: number;
  }

  class KoreanLunarCalendar {
    constructor();
    setSolarDate(year: number, month: number, day: number): void;
    setLunarDate(year: number, month: number, day: number, intercalation?: boolean): void;
    getLunarCalendar(): LunarCalendar;
    getSolarCalendar(): SolarCalendar;
    getKoreanGapja(): string;
    getChineseGapja(): string;
  }

  export = KoreanLunarCalendar;
}