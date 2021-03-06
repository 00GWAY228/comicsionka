import React,{ useEffect, useState} from 'react'
import { Form, Select, InputNumber, Switch, Slider, Button, Upload, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {getSub} from '../../redux/actions/categoriesAC'
import styles from './style.module.css'

import { addProduct } from '../../redux/actions/productAc'

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};


export default function TestForm({showFrom}) {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const categories = useSelector(state => state.categories)
  const subCategoryes = useSelector(state => state.sub)
  
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] =  useState('')
  const [file, setFile] = useState(null)
  console.log('file', file);

  
  useEffect(() => {
    if(category !== '') {
      console.log('useEffect');
      dispatch(getSub(category))
    }
  }, [category])
  
  function onChange(value) {
    setCategory(value);
    setSubCategory(value)
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const selectFile = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0])
  }

  const onFinish = () => {
    const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('subCategory', subCategory)
        formData.append('userId', userId)
        formData.append('img', file)
    dispatch(addProduct(formData))
    showFrom()
  }

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
              <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                encType="multipart/form-data"
                initialValues={{
                  'input-number': 3,
                  'checkbox-group': ['A', 'B'],
                  rate: 3.5,
                }}>

                <Form.Item
                  label="????????????????"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: '?????????????? ???????????????? ????????????',
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="????????????????"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: '?????????????? ???????????????? ????????????',
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  label="????????"
                  name="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  rules={[
                    {
                      required: true,
                      message: '?????????????? ???????? ????????????',
                    },
                  ]} >
                  <Input />
                </Form.Item>

                <Form.Item
                   label="??????????????????"
                   rules={[
                    {
                      required: true,
                      message: '?????????????????? ??????????????????',
                    }]}
                    style={{ height: '31px' }}>

                  <Select
                    label="Category"
                    showSearch
                    placeholder="???????????? ?????????????????? ????????????"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className={styles.selectInput}
                    >
                    {
                      categories.length 
                        ? categories.map(category =>  <Option value={category.id}  key ={category.id} >{category.name}</Option>)
                        : null
                    }
                  </Select>
                </Form.Item>

                <Form.Item
                   label="????????????????????????"
                   rules={[
                    {
                      required: true,
                      message: '?????????????????? ????????????????????????',
                    }]}
                    style={{ height: '31px' }}>

                  <Select
                    label="Category"
                    showSearch
                    placeholder="???????????? ?????????????????? ????????????"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    className={styles.selectInput}
                    >
                    {
                      subCategoryes.length 
                        ? subCategoryes.map(category =>  <Option value={category.id}  key ={category.id} >{category.title}</Option>)
                        : null
                    }
                  </Select>
                </Form.Item>

                <Form.Item
                  type="file"
                  onChange={selectFile}
                  name="images"
                  label="????????????????"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: '???????????????? ????????',
                    }]}
                    >
                  <Upload name="logo" listType="picture">
                    <Button icon={<UploadOutlined /> } >???????????????? ????????</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    span: 12,
                    offset: 6,
                  }}>
                  <Button type="primary" htmlType="submit" className={styles.btn_submit_formADDProduct}>
                    ????????????????
                  </Button>
                </Form.Item>

              </Form>
      </div>
    </div>
  );
};

