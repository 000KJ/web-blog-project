interface ClassNamesProps {
  cls: string; // название главного класса
  mods?: Record<string, boolean | string>; // объект с настройками класса, ключ может быть строкой, а значение либо булевым значением либо строкой
  additional?: string[]; // массив с дополнительными названиями классов
}

export const classNames = ({ cls, mods, additional }: ClassNamesProps): string => {
  return [
    cls,
    ...additional,
    Object.entries(mods) // через Object.entries вытаскиваем пару ключ-значение
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className), 
  ].join(' ')
}