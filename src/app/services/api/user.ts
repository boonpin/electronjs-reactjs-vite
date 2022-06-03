import { Base } from "@src/app/services/api/base";
import { IPagination } from "@src/models/ui.models";
import { IListResponse } from "@src/models/api.models";

export class User extends Base {

    list(pagination: IPagination, filter?: { username?: string, email?: string, types?: string[] }, sorter?: any): Promise<IListResponse<any>> {
        return this.http.get(`/api/users${this.toQueryString({
            ...this.toPaginationQuery(pagination),
            ...this.toSorter(sorter),
            ...filter
        })}`);
    }

    get(id: string) {
        return this.http.get(`/api/users/${id}`);
    }

    photo(id: string) {
        return this.http.get(`/api/users/${id}/photo`, { responseType: 'blob' }).then((blob: any) => {
            return blob;
        });
    }

    update(id: string, dto: any) {
        return this.http.put(`/api/users/${id}`, dto);
    }

    bulkUpdate(id: string[], dto: any) {
        return this.http.put(`/api/users/bulk/${id.join(",")}`, dto);
    }

    delete(id: string) {
        return this.http.delete(`/api/users/${id}`);
    }
}
