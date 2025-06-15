import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ToggleDarkModeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(isDarkClass);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <Button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded-lg border text-sm font-medium bg-background text-foreground border-border shadow transition-all hover:bg-muted"
    >
      {isDark ? 'Modo Claro ☀️' : 'Modo Escuro 🌙'}
    </Button>
  );
}
