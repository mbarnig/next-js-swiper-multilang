export default function LangLayout({ children, params }) {
  const { lang } = params;
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}