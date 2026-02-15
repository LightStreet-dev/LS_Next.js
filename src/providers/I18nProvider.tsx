// app/providers/I18nProvider.tsx
'use client';

import { I18nextProvider } from 'react-i18next';
import i18n, { i18nReady } from '@/i18n/client';
import { useEffect, useState } from 'react';

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18nReady.then(() => setReady(true));
  }, []);

  if (!ready) return null; // або loader

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
