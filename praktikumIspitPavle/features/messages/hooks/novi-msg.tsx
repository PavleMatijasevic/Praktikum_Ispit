

import { create } from "zustand";

type NoviMsgState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNoviMsg = create<NoviMsgState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));