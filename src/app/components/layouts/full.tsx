import { Col, Row } from "antd";

export const Full: React.FC<any> = ({ children }) => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <Row align="middle" justify="center">
                <Col span={20}>{children}</Col>
            </Row>
        </div>
    );
};
