import { create } from "zustand";

const useNavLink = create((set) => ({
  activeLink: "home",
  setActiveLink: (nav) => set((state) => ({ activeLink: nav })),
}));

export default useNavLink;
