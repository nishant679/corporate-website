import React from "react";
import {Button, Col, Icon, Row} from "antd";

function TableHeader() {
    return (
        <div>
            <Row justify={'end'}>
                <Col span={16}>
                    <h3>Blog Posts</h3>
                </Col>
                <Col span={4} push={4}>
                    <Button style={{float: "right"}} type="primary"> <Icon type="plus"/>Add Post</Button>
                </Col>
            </Row>
        </div>
    )
}

export default TableHeader;