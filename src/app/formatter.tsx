import moment from "moment";

export const toDisplayDatetime = (value: any, empty: string = "") => {
    return !!value ? moment(value).format("YYYY-MM-DD HH:mm") : empty;
};
export const toDisplayDate = (value: any, empty: string = "") => {
    return !!value ? moment(value).format("YYYY-MM-DD") : empty;
};
