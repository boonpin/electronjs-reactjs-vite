export const PATTERNS = {
    EMAIL: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const EmailValidator: any = async (rule: any, value: any) => {
    const { message, field } = rule;
    if (rule?.required && `${value}`.trim().length === 0) {
        throw new Error(message ?? `'${field}' is require`);
    }

    if (!PATTERNS.EMAIL.test(String(value).toLowerCase())) {
        throw new Error(message ?? `'${field}' invalid email format`);
    }
};
