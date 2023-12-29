import { useState } from "react";
import useMobileLayout from "./useMobileLayout";
import { useLocalStorage } from "./useLocalStorage";

export function useMenu() {
  const isMobile = useMobileLayout();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage(
    "sidebar-open",
    true,
  );

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    if (isMobile) {
      setIsMobileOpen((prev) => !prev);
    }
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  return {
    isMobile,
    isMobileOpen,
    isSidebarOpen,
    toggleMobileMenu,
    closeMobileMenu,
    toggleSidebar,
  };
}
