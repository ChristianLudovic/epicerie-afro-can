import { createContext, useContext } from 'react';

type ScrollContextType = {
  faqRef: React.RefObject<HTMLElement | null>;
  contactUsRef: React.RefObject<HTMLElement | null>;
};

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};