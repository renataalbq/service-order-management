export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  
  const hrs = Math.floor(mins / 60);

  if (mins < 1) return "agora";
  if (mins < 60) return `há ${mins} min`;
  if (hrs < 24) return `há ${hrs} h`;
  return `há ${Math.floor(hrs / 24)} d`;
}