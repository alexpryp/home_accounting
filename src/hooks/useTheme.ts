import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return {
    theme: currentTheme,
    setTheme,
    mounted,
    themes: ['light', 'dark', 'purple'],
    toggleTheme: () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }
  };
};
