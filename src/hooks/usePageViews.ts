import { useEffect } from "react";


declare global {
  interface Window {
    gtag: (command: string, eventName: string, eventParams?: Record<string, string | number | boolean>) => void;
  }
}


export default function usePageViews() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
      });
    }
  }, []);
}
