import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en"],
  defaultLocale: "es",
  localeDetection: false,
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!_next|_vercel|web-design|.*\\..*).*)"],
};
