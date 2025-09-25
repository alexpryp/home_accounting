'use client';

import { Button } from '@heroui/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { useTheme } from '../../../../hooks/useTheme';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { theme, setTheme, mounted, themes } = useTheme();

  if (!mounted) {
    return <div className="w-10 h-10" />; // Placeholder
  }

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case 'light': return <Sun size={16} />;
      case 'dark': return <Moon size={16} />;
      case 'purple': return <Palette size={16} />;
      default: return <Monitor size={16} />;
    }
  };

  const getThemeLabel = (themeName: string) => {
    switch (themeName) {
      case 'light': return 'Светлая';
      case 'dark': return 'Тёмная';
      case 'purple': return 'Фиолетовая';
      default: return 'Системная';
    }
  };

  console.log(theme);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
          size="sm"
          isIconOnly
          className="text-default-600"
        >
          {getThemeIcon(theme || 'system')}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Выбор темы"
        selectedKeys={[theme || 'system']}
        selectionMode="single"
        onSelectionChange={(keys) => {
          const selectedTheme = Array.from(keys)[0] as string;
          setTheme(selectedTheme);
        }}
      >
        <DropdownItem key="system" startContent={<Monitor size={16} />}>
          Системная
        </DropdownItem>
        <DropdownItem key="light" startContent={<Sun size={16} />}>
          Светлая
        </DropdownItem>
        <DropdownItem key="dark" startContent={<Moon size={16} />}>
          Тёмная
        </DropdownItem>
        <DropdownItem key="purple" startContent={<Palette size={16} />}>
          Фиолетовая
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};