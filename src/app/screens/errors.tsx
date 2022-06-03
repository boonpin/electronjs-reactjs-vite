import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Result, Typography } from "antd";
import React from "react";

type GenericProps = { message?: string; extra?: React.ReactElement };
export const Generic: React.FC<GenericProps> = (props) => {
    const { message = `Ooops, Something went wrong.`, extra } = props;

    return <Result status="warning" title="Unauthorized" subTitle={<Typography.Text>{message}</Typography.Text>} extra={extra} />;
};
