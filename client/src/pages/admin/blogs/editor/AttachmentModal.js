import React, {useState} from "react";
import {Button, Form, Icon, Input, message, Modal, Upload} from "antd";
import PropTypes from 'prop-types';
import Http from "../../../../utils/Http";

function AttachmentModal({visible, setVisible, OnAttachmentAdded, blogId, form}) {
    const {getFieldDecorator, setFieldsValue, validateFields} = form;

    async function uploadAttachment(file, onSuccess, onError) {
        let values;
        try {
            values = await validateFields();
        } catch (e) {
            console.error(e);
            return;
        }
        const form = new FormData();
        form.set('file', file);
        form.set('title', values.title);
        try {
            const {data} = await Http.post(`/blogs/${blogId}/attachments`, form);
            console.log(data);
            OnAttachmentAdded(data.attachments);
            message.success('Attachment Upload Successful');
            setVisible(false);
        } catch (e) {
            onError(e);
            return;
        }
        onSuccess();
    }

    return (
        <Modal
            title="Upload Attachment"
            visible={visible}
            onCancel={() => setVisible(false)}
            footer={
                <Button type="primary" onClick={() => setVisible(false)}>
                    OK
                </Button>
            }
        >
            <Form layout="inline">
                <Form.Item label="Title">
                    {getFieldDecorator('title', {
                        rules: [{required: true, message: 'Title is required!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="URL: ">
                    {getFieldDecorator('url', {
                        rules: [],
                    })(<Input disabled/>)}
                </Form.Item>
                <Form.Item>
                    <Upload customRequest={({file, onSuccess, onError}) => uploadAttachment(file, onSuccess, onError)}>
                        <Button>
                            <Icon type="upload"/> Upload Attachment
                        </Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    )
}

AttachmentModal = Form.create({name: 'attachment_upload'})(AttachmentModal);

AttachmentModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    OnAttachmentAdded: PropTypes.func,
    blogId: PropTypes.string.isRequired
};

AttachmentModal.defaultProps = {
    OnAttachmentAdded: () => {
    }
};

export default AttachmentModal;