import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Home.css';
import { Data, CreatData } from '../../services/PostData';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Table, Button, Popconfirm, Input } from 'antd';
import '../../styles/react-confirm-alert.css';

const { Header, Content, Footer, Sider, } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // itdata: '',
      name: '',
      items: [],
      isLoaded: false,
      redirectToReferrer: false,
      collapsed: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logout = this.logout.bind(this);
    this.setStore = this.setStore.bind(this)
  }
  componentDidMount() {
    const data = sessionStorage.getItem('userData')
    console.log(sessionStorage.getItem('userData'), 'llllllllll');
    const dataJson = JSON.parse(data)
    const id = dataJson.user.orgId
    CreatData(id)
      .then((result) => {
        let opn = ''
        const name = localStorage.getItem('idOpn')
        result.map((d) => d.name === name ? opn = d : {})
        console.log(result, '========')
        this.setState({
          isLoaded: true,
          items: result
        })
      });
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  onChange(e) {
    this.setState({ userFeed: e.target.value });
  }

  logout() {
    sessionStorage.setItem("userData", '');
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  setStore = (user) => {
    localStorage.setItem('userUnit', JSON.stringify(user))
    // sessionStorage.getItem('userData',JSON.stringify(userData))

  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    const columns = [
      { title: 'ชื่อ', dataIndex: 'name', key: 'name' },
      { title: 'ระดับผู้ใช้งาน', dataIndex: 'role', key: 'role' },
      {
        title: 'Action', dataIndex: 'id', key: 'id', render: (id, user) => <a href={`/user?id=${id}`} onClick={() => this.setStore(user)}>view</a>
      },

      // {
      //   title: 'Action', dataIndex: 'id', key: 'id', render: (id, creat) => <a href={`/creat?id=${id}`} onClick={() => this.setStore(creat)}>add</a>
      // }
    ];
    const data = this.state.items
    const da = sessionStorage.getItem('userData')
    const dataJson = JSON.parse(da)
    const name = dataJson.user.name
    const id = dataJson.user.orgId
    console.log('da', da)
    return (
      <Layout>
        <Header style={{ backgroundColor: '#79bd96', height: 100 }}>
          <img style={{ height: 80, width: 100 }} src="LOGO_White.png"></img>
          <a href="/login" onClick={this.logout} className="logout">ออกจากระบบ</a>
        </Header>
        <Layout style={{ marginTop: 3 }}>
          <Sider style={{ background: '#fff' }}>
            <div className="logo" />
            <Menu defaultSelectedKeys={['1']}mode="inline">
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
              <div>
                {name}
                {/* <Button href={`/creat?id=${id}`} type="primary" style={{ marginBottom: 16, marginLeft:850 }}> */}
                <Button href="/creat" type="primary" style={{ marginBottom: 16, marginLeft: 850 }}>
                  + เพิ่มสมาชิก
                </Button>
              </div>
              <Table columns={columns} dataSource={data} />
            </div>
          </Content>
        </Layout>
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
export default Home;


