import UserModel from "./user";

export interface DataOfStore {
    token: string | null
    user: UserModel | null;
};

export interface ActionOfStore {
    login: (data: DataOfStore) => void
    logout: () => void
};

export type Store = DataOfStore & ActionOfStore;