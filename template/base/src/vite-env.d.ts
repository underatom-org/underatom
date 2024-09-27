/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_AUTH_REDIRECT_URL: string;
  readonly VITE_POSTHOG_API_KEY: string | undefined;
  readonly VITE_POSTHOG_HOST: string | undefined;
  readonly VITE_POSTHOG_UI_HOST: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
