import { Base } from "./base";
import { storage } from "@/src/app/services";

import { STORAGE_KEYS } from "@/root/src/app/constants";
import { IUser } from "@/src/models/api.models";
import { IMessage } from "@/src/models/ui.models";

export class Auth extends Base {
    login(credential: { username: string; password: string }) {
        return this.http.post<any, { token: string }>("/api/auth/login", credential).then((rs) => {
            storage.local.set(STORAGE_KEYS.ACCESS_TOKEN, rs.token);
        });
    }

    get oauth() {
        return {
            ms365: (account: any, photo: string | undefined) => {
                return this.http.post<any, { token: string }>("/api/auth/login/ms365", { account, photo }).then((rs) => {
                    storage.local.set(STORAGE_KEYS.ACCESS_TOKEN, rs.token);
                });
            },
        };
    }

    profile() {
        return this.http.get<any, { user: IUser }>("/api/auth/profile");
    }

    tenants() {
        return this.http.get<any, any[]>("/api/auth/tenants");
    }

    photo() {
        return this.http.get<any, { photo: string }>("/api/auth/photo");
    }

    get token() {
        return {
            clear: (): void => {
                storage.local.remove(STORAGE_KEYS.USER);
                storage.local.remove(STORAGE_KEYS.ACCESS_TOKEN);
                storage.local.remove(STORAGE_KEYS.REFRESH_TOKEN);
            },
            is_exists: (): boolean => storage.local.has(STORAGE_KEYS.ACCESS_TOKEN),
        };
    }

    logout(): Promise<IMessage> {
        return new Promise((resolve, reject) => {
            this.token.clear();
            resolve({ message: "success" });
        });
    }

    get password() {
        return {
            forget: (email: string) => this.http.post("/api/auth/forgot-password", { email }),
            reset: (reset_code: string, password: string) =>
                this.http.post("/api/auth/reset-password", {
                    reset_code,
                    password,
                }),
            update: (current: string, new_password: string) =>
                this.http.put("/api/auth/password", {
                    current,
                    password: new_password,
                }),
        };
    }
}
