import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const settingsAtom = atomWithStorage("time", {
  toggleTime: true,
  toggleFooter: true,
  toggleNPC: true,
});

export const settingsClickedAtom = atom(false);
export const darkAtom = atomWithStorage("darkMode", false);
