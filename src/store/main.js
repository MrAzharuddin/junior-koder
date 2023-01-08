import create from "zustand";

const useStore = create((set) => ({
  phoneNumber: "",
  email: "",
  updatePhoneNumber: (mobile) => set((state) => ({ phoneNumber: mobile })),
  updateEmail: (newemail) => set((state) => ({ email: newemail })),
}));

export { useStore };
