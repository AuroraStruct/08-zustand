import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CreateNoteParams } from '@/types/note';

interface NoteStore {
  draft: CreateNoteParams;
  setDraft: (note: CreateNoteParams) => void;
  clearDraft: () => void;
}

const initialDraft: CreateNoteParams = {
  title: '',
  content: '',
  tag: 'Todo',
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set({ draft: note }),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft',
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);
