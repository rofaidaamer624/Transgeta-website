const FILES_BASE_URL =
  import.meta.env.VITE_FILES_BASE_URL || "https://api.transgateacd.com";

export function getPartnerLogoUrl(logoPath?: string | null) {
  if (!logoPath) return "/images/default-logo.png";

  // تنظيف أي / زيادة
  const cleanBase = FILES_BASE_URL.replace(/\/+$/, "");
  const cleanPath = logoPath.replace(/^\/+/, "");

  return `${cleanBase}/files/partners/${cleanPath}`;
}
