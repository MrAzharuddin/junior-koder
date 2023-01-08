import create from "zustand";

const useStore = create((set) => ({
  phoneNumber: "",
  updatePhoneNumber: (mobile) => set((state) => ({ phoneNumber: mobile })),
}));

export { useStore };
