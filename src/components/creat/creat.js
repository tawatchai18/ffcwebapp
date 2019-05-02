import React, { Component } from 'react';
import { CreatUser, CreatData } from '../../services/PostData';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import './creat.css';
import { Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Col, } from 'reactstrap';
import { AvForm, AvGroup, AvField, AvInput, AvFeedback, TextInput, FileInput } from 'availity-reactstrap-validation';
import AddressFormTypeahead from 'react-thailand-address-typeahead';
import validator from 'validator'

class Creat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      data: [
        {
          "name": "",
          "password": "",
          "confirmpassword": "",
          "role": "USER",
          "type": "",
          "file": "",
          "email": "",
          "phoneNo": "",
          "timestamp": new Date(),
          redirectToReferrer: false
        }]
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.name = this.name.bind(this);
    this.password = this.password.bind(this);
    this.confirmpassword = this.confirmpassword.bind(this);
    this.type = this.type.bind(this);
    this.file = this.file.bind(this);
    this.email = this.email.bind(this);
    this.phoneNo = this.phoneNo.bind(this);
  };

  handleValidSubmit() {
    if (this.state.data) {
      const da = localStorage.getItem('userdata')
      const userdata = JSON.parse(da)
      // console.log('test da', userdata)
      console.log(this.state.data, 'dekqqqq');
      CreatUser(userdata.user.orgId, this.state.data).then((result) => {
        this.setState({ redirectToReferrer: true });
        let responseJson = result;
        console.log(responseJson, 'oooooooo123');
        if (responseJson.role) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
        }
      });
      // alert('สมัครสมาชิกสำเร็จ')
    }
  }

  name = (e) => {
    const data = this.state.data;
    data[0].name = e.target.value;
    this.setState({
      data
    });
  };

  password = (e) => {
    const data = this.state.data;
    data[0].password = e.target.value;
    this.setState({
      data
    });
  };

  confirmpassword = (e) => {
    const data = this.state.data;
    data[0].confirmpassword = e.target.value;
    this.setState({
      data
    });
  };

  type = (e) => {
    const data = this.state.data;
    data[0].type = e.target.value;
    this.setState({
      data
    });
  };
  file = (e) => {
    const data = this.state.data;
    data[0].file = e.target.value;
    this.setState({
      data
    });
  };

  email = (e) => {
    const data = this.state.data;
    data[0].email = e.target.value;
    this.setState({
      data
    });
  };

  phoneNo = (e) => {
    const data = this.state.data;
    data[0].phoneNo = e.target.value;
    this.setState({
      data
    });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  filter = (data, name) => {
    return data.map((d) => d.name === name ? d.name : {})

  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <div className="off-canvas-wrapper">
        <Header />
        <div style={{ width: '75%', marginLeft: 180, }}>
          <div style={{ width: '100%', marginTop: 70, }}>
            <h5>เพิ่มสมาชิก</h5>
          </div>

          <AvForm style={{ marginLeft: 60, fontSize:18 }} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
            <AvGroup row style={{ marginTop: 70 }}>
              <Label for="exampleagName" sm={2}>ชื่อผู้ใช้</Label>
              <Col xs="6">
                {
                  this.state.data.map((d) => (
                    <AvInput name="data[0].name" placeholder="ชื่อผู้ใช้" onChange={this.name} required />
                  ))
                }
                <AvFeedback>This field is Name!</AvFeedback>
              </Col>
            </AvGroup>
            <AvGroup row >
              <Label for="exampleagEncy" sm={2}>รหัสผ่าน</Label>
              <Col xs="6">
                <AvField type="password" name='data[0].password' placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.password} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
                  validate={{
                    required: { value: true },
                    pattern: { value: '^[0-9,a-z]+$' },
                    minLength: { value: 8 },
                    maxLength: { value: 16 }
                  }}
                />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>ยืนยันรหัสผ่าน</Label>
              <Col xs="6">
                <AvField type="password" name="confirmpassword" placeholder="ไม่ต่ำกว่า 8 หลัก" onChange={this.confirmpassword} errorMessage="ต้องไม่ต่ำกว่า 8 ตัวขึ้นไป"
                  validate={{
                    required: { value: true },
                    pattern: { value: '^[0-9,a-z]+$' },
                    minLength: { value: 8 },
                    maxLength: { value: 16 },
                    match: { value: 'data[0].password' }
                  }} />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleType" sm={2}>ระดับผู้ใช้งาน</Label>
              <Col xs="6">
                <AvField name='data[0].type' placeholder="Admin / User" onChange={this.type} errorMessage="กรุณากรอกระดับผู้ใช้งาน "
                  validate={{
                    required: { value: true },
                    pattern: { value: '^[Admin,User]+$' }
                  }}
                />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleFile" sm={2}>อัพโหลดภาพ</Label>
              <Col xs="6">
                <AvField type="file" name="data[0].file" id="exampleFile" onChange={this.file} errorMessage="กรุณาอัพโหลดภาพ" validate={{
                  required: { value: true },
                }} />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>เบอร์โทร</Label>
              <Col xs="6">
                <AvField name="data[0].phoneNo" placeholder="0875631234" onChange={this.phoneNo} errorMessage="กรุณากรอกเบอร์โทรศัพท์จำนวน 10 หลัก (0-9)" validate={{
                  required: { value: true },
                  pattern: { value: '^[0-9]+$' },
                  minLength: { value: 10 },
                  maxLength: { value: 10 }
                }} />
              </Col>
            </AvGroup>
            <AvGroup row>
              <Label for="exampleagEncy" sm={2}>Mail</Label>
              <Col xs="6">
                <AvField name="data[0].email" id="email" type="email" placeholder="example@gmail.com" onChange={this.email} errorMessage="กรุณากรอก mail" validate={{
                  required: { value: true },
                }} />
              </Col>
            </AvGroup>
            {/* <AvGroup row>
              <Label for="exampleAddress" sm={2}>ที่อยู่</Label>
              <Col xs="6">
                <AvInput name="address" placeholder="1/4 หมู่บ้าน" onChange={this.onChange} required />
                <AddressFormTypeahead
                  onAddressSelected={(addressObject) => console.log(addressObject)}
                />
                <AvFeedback>This field is name!</AvFeedback>
              </Col>
            </AvGroup> */}
            <div className="small-6 large-centered columns">
              <Button color="primary">Submit</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="primary" onClick={this.toggle}>Cancel</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                  You are sure cancel?
              </ModalBody>
                <ModalFooter>
                  <Button color="primary" href="/home">ok</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
            <hr />
          </AvForm>
        </div>
      </div>
    )
  }
}
export default Creat;