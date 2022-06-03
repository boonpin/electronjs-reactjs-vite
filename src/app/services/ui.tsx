import React from "react";
import { Modal, notification, message } from "antd";
import { ExceptionOutlined, ExclamationCircleOutlined, InfoOutlined, MessageOutlined, WarningOutlined } from "@ant-design/icons";

type EmptyFc = () => void;

export const notify = {
    success: (msg: string | React.ReactNode) => {
        notification.success({ message: msg });
    },
    warn: (msg: string | React.ReactNode) => notification.warn({ message: msg }),
    error: (err: string | Error | React.ReactNode | any) => {
        if (err instanceof Error) {
            notification.error({ message: err.message ?? err });
        } else if (typeof err === "object" && err.hasOwnProperty("message")) {
            notification.error({ message: err.message ?? err });
        } else {
            notification.error({ message: err });
        }
    },
    info: (msg: string | React.ReactNode) => notification.info({ message: msg }),
};

export const confirm = (message: string, yes?: EmptyFc, no?: EmptyFc, config?: { icon?: React.ReactNode }) => {
    Modal.confirm({
        icon: config?.icon ?? <ExclamationCircleOutlined />,
        content: message,
        onOk: yes,
        onCancel: no,
    });
};

const showModal = (title: string, content: string, icon?: React.ReactElement) => {
    const modal = Modal.info({
        title,
        closable: true,
        icon: icon ?? <MessageOutlined />,
        content,
        cancelButtonProps: { style: { display: "none" } },
        onOk: () => {
            modal.destroy();
        },
    });
};

export const notice = {
    success: (msg: string) => showModal(`Success`, msg, <MessageOutlined />),
    warn: (msg: string) => showModal(`Warning`, msg, <WarningOutlined style={{ color: "#edbd80" }} />),
    error: (msg: string) => showModal(`Error`, msg, <ExceptionOutlined style={{ color: "red" }} />),
    info: (msg: string) => showModal(`Info`, msg, <InfoOutlined />),
};

export const toast = {
    success: (msg: string) => message.success(msg),
    warn: (msg: string) => message.warn(msg),
    error: (msg: string) => message.error(msg),
    info: (msg: string) => message.info(msg),
};
