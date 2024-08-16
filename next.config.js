/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const isDev = process.env.NODE_ENV !== "production";
const withPWA = require("next-pwa")({
  buildExcludes: ["app-build-manifest.json"],
  dest: "public",
  disable: isDev,
  register: true,
  skipWaiting: true,
});

const generateAppDirEntry = (entry) => {
  const packagePath = require.resolve("next-pwa");
  const packageDirectory = path.dirname(packagePath);
  const registerJs = path.join(packageDirectory, "register.js");

  return entry().then((entries) => {
    if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
      if (Array.isArray(entries["main-app"])) {
        entries["main-app"].unshift(registerJs);
      } else if (typeof entries["main-app"] === "string") {
        entries["main-app"] = [registerJs, entries["main-app"]];
      }
    }

    return entries;
  });
};

const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
        'scontent.cdninstagram.com',
        'scontent-jnb1-1.cdninstagram.com',
        'image-prod.iol.co.za',
        'instagram.fcpt2-1.fna.fbcdn.net'
    ],
  },
  webpack(config) {
    if (!isDev) {
      const entry = generateAppDirEntry(config.entry);
      config.entry = () => entry;
    }

    return config;
  },
  async headers() {
    const contentSecurityPolicies = [
      "default-src 'self'",
      "connect-src 'self' https://fonts.gstatic.com https://www.google-analytics.com https://www.googletagmanager.com ",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data:",
      "manifest-src 'self'",
      // Todo: Update below when videos are uploaded to rackspace
      "media-src 'self' https://760020dac27e20d936b2-a6f64104c6f909ec2d398b11ad91465d.ssl.cf5.rackcdn.com/",
    ];
    

    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
          },
          {
            key: "Feature-Policy",
            value:
              "camera 'none'; geolocation 'self'; microphone 'none'; fullscreen 'self'; sync-xhr 'self'",
          },
          {
            key: "Expect-CT",
            value: 'max-age=86400, enforce, report-uri="your-report-uri"',
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicies.join(";"),
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
