import React, {useState} from "react";
import {Avatar, Card, Col, Divider, Icon, List, message, Row} from 'antd';
import Http from "../../../../utils/Http";

function AttachmentComponent({blogId, title, url, _id, blogUpdated}) {
    const [loading, setLoading] = useState(false);

    async function deleteAttachment() {
        setLoading(true);
        try {
            const {data: blog} = await Http.delete(`/blogs/${blogId}/attachments/${_id}`);
            blogUpdated(blog);
        } catch (e) {
            console.error(e);
            message.error('Error Deleting Attachment');
            setLoading(false);
        }
    }

    return (
        <Col span={3}>
            <Card bodyStyle={{padding: '5px'}}>
                <List.Item>
                    <Row>
                        <Col span={20}>
                            <List.Item.Meta
                                avatar={<Avatar icon={'file-zip'}/>}
                                title={<a target="_blank" href={url}>{title}</a>}
                            />
                        </Col>
                        <Col span={4}>
                            {
                                loading ?
                                    <Icon type="loading" style={{fontSize: 18}} spin/>
                                    : (
                                        <Icon onClick={() => deleteAttachment()}
                                              style={{float: 'right', paddingLeft: '10px'}} type="close"/>
                                    )
                            }

                        </Col>
                    </Row>
                </List.Item>
            </Card>
        </Col>
    )
}

export default AttachmentComponent;