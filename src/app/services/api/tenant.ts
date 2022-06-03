import { Base } from "@src/app/services/api/base";
import { IPagination } from "@src/models/ui.models";
import { IListResponse } from "@src/models/api.models";

export class Tenant extends Base {

    list(pagination: IPagination, filter?: any, sorter?: any): Promise<IListResponse<any>> {
        return this.http.get(`/api/tenants${this.toQueryString({
            ...this.toPaginationQuery(pagination),
            ...this.toSorter(sorter),
            ...filter,
        })}`);
    }

    create(dto: any) {
        return this.http.post(`/api/tenants`, dto);
    }

    update(id: string, dto: any) {
        return this.http.put(`/api/tenants/${id}`, dto);
    }

    get(id: string): Promise<any> {
        return this.http.get(`/api/tenants/${id}`);
    }

    delete(id: string) {
        return this.http.delete(`/api/tenants/${id}`);
    }
}
