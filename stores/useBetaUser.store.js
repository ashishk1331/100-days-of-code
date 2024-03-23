import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBetaUserStore = create(
  persist(
    (set) => ({
      emails: [],
      addEmail: (email) => set((state) => ({ emails: [...state.emails, email] })),
    }),
    {
      name: "proxy-club-beta-user-store",
      partialize: (state) => ({ emails: state.emails }),
    },
  ),
);
