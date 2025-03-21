import { create } from 'zustand'

interface colorState {
  color: string
  setColor: (newColor: string) => void

}

export const useStore = create<colorState>((set) => ({
  color: 'slate-500',
  setColor: (newColor) => set({ color: newColor })
}))

// export default useStore
