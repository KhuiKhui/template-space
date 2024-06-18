import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const settingsAtom = atomWithStorage("time", {
  toggleTime: true,
  toggleBars: true,
});

export const settingsClickedAtom = atom(false);
