/// <reference types="vite/client" />
interface Window {
  voiceflow: {
    chat: {
      load: (a: { verify: { projectID: string }, url: string, versionID: string }) => void
    }
  }
}
