import { createContext, useState } from 'react';

// data 담는 컨텍스트 생성.
export const DarkModeContext = createContext();

// 엄브렐라(데이터를 담고있는) 컴포넌트를 만드는 것.
export function DarkModeProvider({ children }) {
  // 글로벌하게 기억하고 싶은 데이터를, 그것을 처리할 함수를 작성.
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(mode => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
