import React from "react";
import {Button, Col, Icon, Row} from "antd";
import {Link} from "react-router-dom";

function TableHeader() {
    return (
        <div>
            <Row justify={'end'}>
                <Col span={16}>
                    <h3>Blog Posts</h3>
                </Col>
                <Col span={4} push={4}>
                    <Link to="/admin/blogs/editor"><Button style={{float: "right"}} type="primary"> <Icon type="plus"/>Add
                        Post</Button></Link>
                </Col>
            </Row>
        </div>
    )
}

export default TableHeader;