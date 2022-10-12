import { send } from "emailjs-com";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

export const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    send("service_zhpu8is", "template_vd21ue1", values, "cIRPZQpttqS3shP03")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contact-container main">
      <h1 className="title contact-title">contact-title</h1>
      <h2 className="contact-text">contact-text</h2>
      <div className="form-control">
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="contact-field-name"
            name="name"
            rules={[
              {
                required: true,
                message: "contact-validate-name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="contact-field-email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "contact-validate-email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={"contact-field-subject"}
            name="subject"
            rules={[
              {
                required: true,
                message: "contact-validate-subject",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="contact-field-message"
            name="message"
            rules={[
              {
                required: true,
                message: "contact-validate-message",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 24,
            }}
          >
            <Button
              style={{ backgroundColor: "#531dab", color: "#fff" }}
              htmlType="submit"
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
