import { Layouts } from "@/src/app/components";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

export const Landing: React.FC<any> = () => {
    return (
        <Layouts.Full>
            <Result
                icon={<LoadingOutlined />}
                //status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </Layouts.Full>
    );
};
