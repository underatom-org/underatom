export const FRAMEWORKS = {
  "next-app": {
    name: "next-app",
    label: "Next.js",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  "next-pages": {
    name: "next-pages",
    label: "Next.js",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/nextjs",
    },
  },
  remix: {
    name: "remix",
    label: "Remix",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/remix",
    },
  },
  vite: {
    name: "vite",
    label: "Vite",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/vite",
    },
  },
  astro: {
    name: "astro",
    label: "Astro",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/astro",
    },
  },
  laravel: {
    name: "laravel",
    label: "Laravel",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/laravel",
    },
  },
  gatsby: {
    name: "gatsby",
    label: "Gatsby",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/guides/gatsby",
    },
  },
  manual: {
    name: "manual",
    label: "Manual",
    links: {
      installation: "",
      tailwind: "https://tailwindcss.com/docs/installation",
    },
  },
} as const;

export type Framework = (typeof FRAMEWORKS)[keyof typeof FRAMEWORKS];
