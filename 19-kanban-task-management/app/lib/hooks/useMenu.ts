import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import useMediaQuery from "./useMediaQuery";

export function useMenu() {
  const isMobile = useMediaQuery("(max-width: 768px)");
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
