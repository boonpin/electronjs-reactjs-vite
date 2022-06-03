import { USER_ROLES, USER_TYPES } from "@/root/src/app/constants";

export const ACL_ACTIONS = {
    CRM: {
        VIEW_ALL: "crm.view_all",
        SEARCH_CUSTOMERS: "crm.search_customers",
        ASSIGN_PERSON_IN_CHARGE: "crm.assign_person_in_charge",
        DELETE_CUSTOMER: "crm.delete_customer",
        DELETE_COMPANY: "crm.delete_company",
        EXPORT_CUSTOMERS: "export_customers",
        EDIT_COMPANY: "crm.edit_company",
    },
    EDM: {
        REQUEST: {
            CREATE: "edm.request.create",
            UPDATE: "edm.request.update",
            ACCEPT: "edm.request.accept",
        },
        DRAFT: {
            SUBMIT: "edm.draft.submit",
            APPROVAL: "edm.draft.approval",
        },
        ARTWORK: {
            APPROVAL: "edm.artwork.approval",
        },

        RESET: "edm.reset",
        CLOSE: "edm.close",
    },
    SYSTEM: {
        VIEW_LOGS: "system.view_logs",
        CONTROL: "system.control",
    },
    SLAES: {
        PRODUCT: {
            VIEW_ORIGINAL_PRICE: "sales.prouct.view_ori_price",
            VIEW: "sales.product.view",
            CREATE: "sales.product.create",
            EDIT: "sales.product.edit",
            DELETE: "sales.product.delete",
        },
        QUOTATION: {
            VIEW_ALL: "sales.quotation.view_all",
            VIEW: "sales.quotation.view",
            CREATE: "sales.quotation.create",
            EDIT: "sales.quotation.edit",
            DELETE: "sales.quotation.delete",
        },
    },
};

export const ACL = {
    [USER_ROLES.ADMIN]: [
        ...Object.values(ACL_ACTIONS.EDM.REQUEST),
        ...Object.values(ACL_ACTIONS.EDM.DRAFT),
        ...Object.values(ACL_ACTIONS.EDM.ARTWORK),
        ...[ACL_ACTIONS.EDM.RESET, ACL_ACTIONS.EDM.CLOSE],
        ...Object.values(ACL_ACTIONS.CRM),
        ...Object.values(ACL_ACTIONS.SYSTEM),
        ...Object.values(ACL_ACTIONS.SLAES.PRODUCT),
    ],
    [USER_ROLES.IT_EXECUTIVE]: [
        ACL_ACTIONS.SYSTEM.VIEW_LOGS,
        ACL_ACTIONS.CRM.VIEW_ALL,
        ACL_ACTIONS.CRM.EDIT_COMPANY,
        ACL_ACTIONS.EDM.REQUEST.CREATE,
        ACL_ACTIONS.EDM.REQUEST.UPDATE,
    ],
    [USER_ROLES.INSIDE_SALES_REPRESENTATIVE]: [
        ACL_ACTIONS.CRM.VIEW_ALL,
        ACL_ACTIONS.CRM.SEARCH_CUSTOMERS,
        ACL_ACTIONS.CRM.EDIT_COMPANY,
        ACL_ACTIONS.EDM.REQUEST.CREATE,
        ACL_ACTIONS.EDM.REQUEST.UPDATE,
    ],
    [USER_ROLES.ACCOUNT_MANAGER]: [
        ACL_ACTIONS.CRM.VIEW_ALL,
        ACL_ACTIONS.CRM.SEARCH_CUSTOMERS,
        ACL_ACTIONS.CRM.EDIT_COMPANY,
        ACL_ACTIONS.EDM.REQUEST.CREATE,
        ACL_ACTIONS.EDM.REQUEST.UPDATE,
    ],
    [USER_ROLES.PRODUCT_MANAGER]: [ACL_ACTIONS.CRM.VIEW_ALL, ACL_ACTIONS.CRM.EDIT_COMPANY, ACL_ACTIONS.EDM.REQUEST.CREATE, ACL_ACTIONS.EDM.REQUEST.UPDATE],
    [USER_ROLES.E_MARKETING]: [
        ACL_ACTIONS.CRM.VIEW_ALL,
        ACL_ACTIONS.CRM.VIEW_ALL,
        ACL_ACTIONS.CRM.DELETE_CUSTOMER,
        ACL_ACTIONS.CRM.EXPORT_CUSTOMERS,
        ACL_ACTIONS.CRM.EDIT_COMPANY,
        ACL_ACTIONS.CRM.DELETE_COMPANY,

        ACL_ACTIONS.EDM.REQUEST.CREATE,
        ACL_ACTIONS.EDM.REQUEST.UPDATE,
        ACL_ACTIONS.EDM.REQUEST.ACCEPT,
        ACL_ACTIONS.EDM.DRAFT.SUBMIT,
        ACL_ACTIONS.EDM.ARTWORK.APPROVAL,
    ],
    [USER_ROLES.NORMAL_STAFF]: [ACL_ACTIONS.EDM.REQUEST.CREATE],
};

type IsAllowedFunction = (action: string) => boolean;

export interface IUserPermissions {
    permissions: string[];
    is_allowed: IsAllowedFunction;
    is_admin: boolean;
}

export const UserPermissions = (user: any): IUserPermissions => {
    const permissions = ACL[user.role] ?? [];
    const is_admin_type = [USER_TYPES.SUPER_ADMIN, USER_TYPES.ADMIN].includes(user?.type);
    const is_admin_role = user?.role === USER_ROLES.ADMIN;
    return {
        permissions,
        is_allowed: (action: string) => is_admin_type || permissions.includes(action),
        is_admin: is_admin_type || is_admin_role,
    };
};
