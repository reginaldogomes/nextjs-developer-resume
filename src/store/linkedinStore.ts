import { create } from 'zustand'

interface LinkedInState {
  userData: any
  setUserData: (data: any) => void
}

export const useLinkedInStore = create<LinkedInState>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}))
