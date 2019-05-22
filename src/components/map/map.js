import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
import GoogleMapReact from 'google-map-react';
import AddressFormTypeahead from 'react-thailand-address-typeahead';

const { Header, Content, Footer, Sider, } = Layout;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            collapsed: false,
        };
        this.onChange = this.onChange.bind(this);
        this.logout = this.logout.bind(this);
    };

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

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

    render() {
        return (
            <Layout>
                <Header style={{ backgroundColor: '#79bd96', height: 100 }}>
                    <img style={{ height: 80, width: 100 }} src="LOGO_White.png"></img>
                    <a href="/login" onClick={this.logout} className="logout">ออกจากระบบ</a>
                </Header>
                <Layout style={{ marginTop: 3 }}>
                    <Sider style={{ background: '#fff' }} >
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
                    <Content style={{ margin: '0 16px', height: 500 }}>
                        {/* <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                className="container karta"
                                bootstrapURLKeys={{
                                    key: 'my keyI',
                                    language: 'en',
                                }}
                                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                                defaultZoom={11}
                            >
                            </GoogleMapReact>
                        </div> */}
                        <AddressFormTypeahead
                            onAddressSelected={(addressObject) => console.log(addressObject)}
                        />

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

export default Map;

