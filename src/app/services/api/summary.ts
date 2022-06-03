import {Base} from "@src/app/services/api/base";

export class Summary extends Base {

    get customers() {
        return {
            summary: () => this.http.get(`/api/summary/customers`),
            recent: async (last: number = 5): Promise<any[]> => {
                return this.http.get(`/api/summary/recent-customers?last=${last}`)
            }
        }
    }

    get companies() {
        return {
            summary: () => this.http.get(`/api/summary/companies`),
            recent: async (last: number = 5): Promise<any[]> => {
                return this.http.get(`/api/summary/recent-companies?last=${last}`)
            }
        }
    }
}
