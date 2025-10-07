const defaultOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

interface FormatDateTimeAdditionalParams {
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}

export function formatDateTime(dateString: string, { locale = 'en-GB', options }: FormatDateTimeAdditionalParams = {}) {
  const finalOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat(locale, finalOptions).format(new Date(dateString));
}
