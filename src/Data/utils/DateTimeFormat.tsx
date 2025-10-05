export function formatDateTime(last_updated_at: string) {
  const date = new Date(last_updated_at);

  return new Intl.DateTimeFormat('en-GB', {
    // dateStyle: 'full',
    // timeStyle: 'long',
    // timeZone: 'Australia/Sydney',

    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit', // можно раскомментировать, если нужны секунды
    hour12: false, // 24-часовой формат, true для AM/PM
  }).format(date);
}
