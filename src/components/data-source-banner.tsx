import type { DashboardSource } from "@/lib/document-types";

type DataSourceBannerProps = {
  gasConfigured: boolean;
  source: DashboardSource;
  errorMessage?: string;
};

export function DataSourceBanner({
  gasConfigured,
  source,
  errorMessage,
}: DataSourceBannerProps) {
  if (source === "gas") {
    return (
      <div className="border-b border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 sm:px-6">
        กำลังแสดงข้อมูลจริงจาก Google Sheets ผ่าน GAS
      </div>
    );
  }

  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 sm:px-6">
      {gasConfigured
        ? `Vercel fallback ไปใช้ข้อมูลตัวอย่าง เพราะเรียก GAS ไม่สำเร็จ${errorMessage ? `: ${errorMessage}` : ""}`
        : "Vercel fallback ไปใช้ข้อมูลตัวอย่าง เพราะยังไม่ได้ตั้งค่า GAS_WEB_APP_URL"}
    </div>
  );
}
