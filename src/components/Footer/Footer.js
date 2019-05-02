import React, { Component } from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './Footer.css';

class Footer extends Component {
  render() {
    const { Footer } = Layout;
    return (
      <div>
        <Layout>
          <Footer style={{ backgroundColor: '#202020' }}>
            <center>
              <img style={{ height: 40, width: 100 }} src="nstda.png"></img>
              <p style={{ fontSize: 16, color: '#fff', marginTop:10 }}>สงวนลิขสิทธิ์ ตาม พ.ร.บ.ลิขสิทธิ์ พ.ศ. 2537 โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
            </center>
          </Footer>
        </Layout>
      </div>
      // <div style={{ backgroundColor: '#303030', height: 100 }} >
      //     <p>ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ</p>
      // </div>
    );
  }
}

export default Footer;