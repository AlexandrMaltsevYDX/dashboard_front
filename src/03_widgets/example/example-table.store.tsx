import {create} from "zustand";

type User = {
  id: string;
  name: string;
  username: string;
};
export interface ExampleTableInterface {
  updateContent: (users: User[]) => void;
  content: User[];
  // content: [User?];
}

export const useExampleTables = create<ExampleTableInterface>(set => ({
  updateContent: (users: User[]) => set(() => ({content: users})),
  content: [],
}));
