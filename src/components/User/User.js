import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './User.css';
import { Data, CreatData } from '../../services/PostData';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Card, Col, Row, Input } from 'antd';
import '../../styles/react-confirm-alert.css';

const { Header, Content, Footer, Sider, } = Layout;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      collapsed: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logout = this.logout.bind(this);

  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  getUrl = () => {
    const user = localStorage.getItem('userUnit')
    console.log(localStorage.getItem('userUnit'), 'ppppp');

    return JSON.parse(user)
  }

  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }

  logout() {
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }

    return (
      <Layout>
        <Header style={{ backgroundColor: '#79bd96', height: 100 }}>
          <img style={{ height: 80, width: 100 }} src="LOGO_White.png"></img>
          <a href="/login" onClick={this.logout} className="logout">ออกจากระบบ</a>
        </Header>
        <Layout style={{ marginTop: 3 }}>
          <Sider style={{ background: '#fff' }}>
            <div className="logo" />
            <Menu mode="inline">
              <Menu.Item key="1">
                <Icon type="user" />
                <span>ผู้ใช้งาน</span>
                <Link to="/home">ผู้ใช้งาน</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>แผนที่</span>
                <Link to="/map">แผนที่</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="bar-chart" />
                <span>สถิติ</span>
                <Link to="/static">สถิติ</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="export" />
                <span>รายงาน</span>
                <Link to="/export">รายงาน</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
              <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                  <Col span={16}>
                    <Card title="ข้อมูลส่วนบุคคล" bordered={false}>
                      <p>name : {this.getUrl().name}</p>
                      <p>ORG : {this.getUrl().role}</p>
                      <p>ที่อยู่ : บ้านเลขที่ 1/4 ตำบลอี่หล่ำ อำเภออุทุมพรพิสัย จังหวัดศรีสะเกษ 33120</p>
                      <p>ตำแหน่ง : เจ้าหน้าที่สาธารณสุข </p>
                      <p>จบการศึกษา : ปริญญาตรี วิทยาศาสตร์การกีฬา มหาวิทยาลัยจุฬาลงกรณ์</p>
                      <p>สังกัด อุบลราชธานี,ศรีสะเกษ,สุรินทร์</p>
                      <p>เด็กชายผู้น่าสงสาร</p>
                      <ul>
                        <li>ยังจำได้ไหม</li>
                        <li>สัญญาปากเปล่า</li>
                        <li>เรื่องมีอยู่ว่า ประมาณ 6-7 ปีที่แล้ว เป็นช่วงเกณฑ์ทหารของชายไทย ก่อนเกณฑ์ทหารต้องไปบนที่นี่ นุ่นนะ คือไม่อยากเป็นทหาร ที่บ้านไม่มีคนช่วยเหลือ
                          ประมาณก่อนเกณฑ์ทหาร ก็บนปากเปล่า ที่ศาลๆหนึ่งที่คนไม่อยากเป็นทหารไม่อยากบน ขอเรียกท่านว่าแม่ ``ศาลย่านาค`` ผมไม่อยากเป็นทหารขอให้ผมไม่ติด
                          ผมมีครอบครัวลูกสาว 1 ทำงานปกติจนเกณฑ์ทหาร ผมไม่ติดเนื่องจากรายชื่อตกหล่น หลังจากเกณฑ์ทหารเสร็จประมาณ 1 เดือน สิ่งที่เปลี่ยนไปคือ สีหน้าของ ภรรยาเค้าเปลี่ยนไป
                          จากที่ร่าเริงก็เปลี่ยนไป ผ่านไปซัก ระยะ ผมกลับบ้านเลยสงสัยแฟนพาลูกกลับอยุธยา โดยที่เค้าไม่บอก
                          พอทำงานเสร็จ ไปเจอกันที่บ้าน เค้ามีคนใหม่ในช่วงไม่กี่เดือนนี้ อาจจะเป็นที่เรา  </li>
                      </ul>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 200, height: 50 }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by  Nectec
        </Footer> */}
        <Footer style={{ backgroundColor: '#202020' }}>
          <center>
            <img style={{ height: 40, width: 100 }} src="nstda.png"></img>
            <p style={{ fontSize: 16, color: '#fff', marginTop: 10 }}>สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
          </center>
        </Footer>
      </Layout>
    );
  }
}
export default User;


