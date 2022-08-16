import { Modal, Form, Button } from "antd";
import { useRef, useState, useEffect } from "react";
import { editData, removeData } from "../api/apiData";


export const FormEdit = ({ dataEdit, fetchData, searchValue, itemPerPage, offset})=> {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [editValue, setEditValue] = useState(null);
    
    const FormRef = useRef();
    
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 1000);
    };

    const handleCancel = () => {    
        console.log('Cancel');
        setVisible(false);
    };

    return (
        <>
        <Button 
            type = "primary" 
            className = 'edit-button'
            onClick = {
                showModal
            }
        >
            Edit
        </Button>
        <Modal
            title = "Edit Task"
            visible = {visible}
            onOk = {handleOk}
            confirmLoading = {confirmLoading}
            onCancel = {handleCancel}
        >
            <Form 
                labelCol = {{ span: 8 }}
                wrapperCol = {{ span: 16 }}
                initialValues = {dataEdit} 
                onFinish = {(data) => {
                    // console.log(data)
                    editData(data.id,data.task).then((result) => {
                        
                        fetchData(searchValue, itemPerPage, offset).then((result) => {
                            setTimeout(() => { 
                                handleCancel()
                            }
                            , 1000);
                        })
                    })
                }}
            >
                <Form.Item 
                    name = "id"
                    label = "ID"
                    >
                        <input disabled/>
                </Form.Item>

                <Form.Item 
                    name = "task" 
                    label = "Task Name"
                    rules = {[
                        {
                            required: true,
                            message: 'Please input your task name!',
                        },
                    ]}
                >
                        <input 
                            // value={dataEdit.task}
                            onChange = {(e) => setEditValue(e.target.value)}
                        />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                <Button type="primary" htmlType="submit">
                    Edit
                </Button>
                {/* <Button 
                    type = "danger"
                    onClick = {
                        (data) => {
                            // console.log(data)
                            removeData(data.id).then((result) => {
                                
                                fetchData(searchValue, itemPerPage, offset).then((result) => {
                                    setTimeout(() => { 
                                        handleCancel()
                                    }
                                    , 1000);
                                })
                            })
                        }
                    }
                    style = {{marginLeft: "10px"}}
                >
                    Remove
                </Button> */}
                </Form.Item>
            </Form>
        </Modal>
        </>
    )
}