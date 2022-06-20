import { Button, Form, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const App = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className='App' style={{width:355}}>
    <h2>Product details</h2>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="ProductName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        name={['user', 'age']}
        label="Price"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Qauntity"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
     
      <Form.Item
        name={['user', 'name']}
        label="Brand"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default App;

