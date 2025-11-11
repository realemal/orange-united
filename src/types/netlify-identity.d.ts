// TypeScript declarations for Netlify Identity Widget
// https://github.com/netlify/netlify-identity-widget

export {}

declare global {
  interface Window {
    netlifyIdentity?: {
      on(event: 'init' | 'login' | 'logout' | 'error', cb: (user?: any) => void): void
      init(opts?: { APIUrl?: string }): void
      currentUser(): any | null
      open(tab?: 'login' | 'signup'): void
      close(): void
      logout(): Promise<void>
      refresh(): Promise<any>
      setLocale(locale: string): void
    }
  }
}

