// ** Third Party Imports
import { create } from "zustand";

// ** Type Imports
import { SideNavState } from "@/lib/types/nav";

// Global states for side navigation
const useSideNavStore = create<SideNavState>(() => ({
  open: false,
}));

/**
 * Set open state of side navigation
 * @param value {boolean}
 */
export const setSideNav = (value: boolean) =>
  useSideNavStore.setState({ open: value });

export default useSideNavStore;
