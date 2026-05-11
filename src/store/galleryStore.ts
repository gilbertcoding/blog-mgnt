"use client";

import { create } from "zustand";
import { GalleryFilter } from "@/types/gallery";

interface GalleryState extends GalleryFilter {
  setCategory: (category: string | null) => void;
  setSortBy: (sortBy: "latest" | "oldest") => void;
  reset: () => void;
}

const initialState: GalleryFilter = {
  category: null,
  sortBy: "latest",
};

export const useGalleryStore = create<GalleryState>((set) => ({
  ...initialState,
  setCategory: (category) => set({ category }),
  setSortBy: (sortBy) => set({ sortBy }),
  reset: () => set(initialState),
}));
