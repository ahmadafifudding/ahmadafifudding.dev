import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants"

export type Windows = typeof WINDOW_CONFIG

type WindowState = {
  windows: Windows
  nextZIndex: number

  openWindow: (windowKey: keyof typeof WINDOW_CONFIG, data?: any) => void
  closeWindow: (windowKey: keyof typeof WINDOW_CONFIG) => void
  focusWindow: (windowKey: keyof typeof WINDOW_CONFIG, data?: any) => void
}

const useWindowStore = create<WindowState>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey]

        if (!win) {
          return
        }

        win.isOpen = true
        win.zIndex = state.nextZIndex
        win.data = data ?? win.data
        state.nextZIndex++
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey]

        if (!win) {
          return
        }

        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX
        win.data = null
      }),

    focusWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey]
        win.zIndex = state.nextZIndex++
      }),
  })),
)

export default useWindowStore
