/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUBSCRIBE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
