/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_APP_ENV: string;
  BASE_URL: string;
  // 添加其他你自定义的环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export interface IElectronAPI {
  appExit: () => void,
}

declare global {
  interface Window {
    electronApp: IElectronAPI
  }
}