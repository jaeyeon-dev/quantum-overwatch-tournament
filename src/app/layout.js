import "./globals.css";

export const metadata = {
  title: "제1회 양자배 옵치 대회",
  description: "e스포츠 토너먼트 대시보드",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
