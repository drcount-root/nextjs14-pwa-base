import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts", // where the service worker src is
  swDest: "public/sw.js", // where the service worker code will end up
});

export default withSerwist({
  // Next.js config options
  images: {
    domains: ["upload.wikimedia.org"],
  },
});
