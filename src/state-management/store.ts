import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Store, DataOfStore } from "../models/store";

const persistedStateName = 'app-golbal-store'

const useStore = create<Store, any>(
    persist((set, _) =>
    ({
        token: null,
        user: null,
        login: ({ token, user }: DataOfStore) => {
            set({ token, user });
        },
        logout: () => {
            set({ token: null, user: null });
        },
    }),
        {
            name: persistedStateName,
            getStorage: () => localStorage,
        }
    )
);

export default useStore;