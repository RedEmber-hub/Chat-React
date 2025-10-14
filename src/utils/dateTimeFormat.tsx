const RULES: Record<string, Intl.DateTimeFormatOptions> = {
  time: { hour: '2-digit', minute: '2-digit' },
  weekday: { weekday: 'short' },
  fullDate: { day: '2-digit', month: '2-digit', year: 'numeric' },
};

interface FormatOptions {
  useTime?: boolean;
  useWeekday?: boolean;
  useFullDate?: boolean;
}

export function dateTimeFormat(dateString: string, locale: string = 'ru-RU', options: FormatOptions = {}) {
  const { useTime = true, useWeekday = true, useFullDate = true } = options;

  const date = new Date(dateString);
  const now = new Date();

  let intl: Intl.DateTimeFormatOptions = RULES.fullDate;

  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const dayOfWeek = (now.getDay() + 6) % 7; // понедельник = 0
  const startOfWeek = new Date(startOfToday);
  startOfWeek.setDate(startOfToday.getDate() - dayOfWeek);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  if (
    useTime &&
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  ) {
    intl = RULES.time;
  } else if (useWeekday && date >= startOfWeek && date <= endOfWeek) {
    intl = RULES.weekday;
  } else if (useFullDate) {
    intl = RULES.fullDate;
  }

  return new Intl.DateTimeFormat(locale, intl).format(date);
}
