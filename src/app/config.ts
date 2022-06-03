export const APP = {
    //VERSION: packageJson.version,
    NAME: process.env.REACT_APP_NAME,
    COMPANY: {
        NAME: process.env.REACT_APP_COMPANY_NAME,
        WEBSITE: process.env.REACT_APP_COMPANY_WEBSITE,
    },
    POWERED_BY: {
        NAME: process.env.REACT_APP_POWERED_BY_NAME,
        WEBSITE: process.env.REACT_APP_POWERED_BY_WEBSITE,
    },
};

export const SECURE = {
    KEY: process.env.REACT_APP_KEY,
};
export const API = {
    HOST: process.env.REACT_APP_API_HOST,
    TIMEOUT: process.env.REACT_APP_API_TIMEOUT_MS ? Number(process.env.REACT_API_TIMEOUT_MS) : 30000,
};
