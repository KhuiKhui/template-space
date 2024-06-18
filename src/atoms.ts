import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const settingsAtom = atomWithStorage("time", {
  toggleTime: true,
  toggleFooter: true,
});

export const settingsClickedAtom = atom(false);
