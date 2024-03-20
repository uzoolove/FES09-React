import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'saveip',
  storage: localStorage
});

export const saveIPState = atom({
  key: 'saveIP',
  default: false,
  effects: [persistAtom]
});