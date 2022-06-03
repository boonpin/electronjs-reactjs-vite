import { Layouts } from "@/src/app/components";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

export const Bootstrap: React.FC<any> = () => {
    return (
        <Layouts.Full>
            <Result icon={<LoadingOutlined />} status="404" title="App Initializing" subTitle="Startup...." extra={<Button type="primary">Back Home</Button>} />
        </Layouts.Full>
    );
};
