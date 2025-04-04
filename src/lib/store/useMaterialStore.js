import { create } from 'zustand'
import materialData from '../data/material'
// import type {itemType} from  '../data/material'

// interface MaterialState {
//     all: void
//     items: void
//     update: (data: void) => void
// }

const useMaterialStore = create((get, set) => ({
  all: [...materialData],
  items: [...materialData],
  update: (data) => set({
    items: [...data]
  }),
  delete: (id) => set(state => ({
    items: get(state.items).filter(item => item.id !== id)
  })),
  add: item => set(state => ({
    items: [item, get(state.items)]
  }))

}))
export default useMaterialStore
