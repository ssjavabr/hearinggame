/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {enquireScreen} from 'enquire-js';

import Nav1 from './Nav1';
import Banner1 from './Banner1';
import Content3 from './Content3';
import Content10 from './Content10';
import Content2 from './Content2';
import Content5 from './Content5';
import Content8 from './Content8';
import Content6 from './Content6';
import Footer1 from './Footer1';
import Content7 from './Content7';



import {
  Nav11DataSource,
  Banner10DataSource,
  Content33DataSource,
  Content10DataSource,
  Content31DataSource,
  Content21DataSource,
  Content30DataSource,
  Content50DataSource,
  Content80DataSource,
  Content60DataSource,
  Content51DataSource,
  Content61DataSource,
  Footer10DataSource,

} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const {location} = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({isMobile: !!b});
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {

    const children = [
      /* 导航
      <Nav1
         id="Nav1_1"
         key="Nav1_1"
         dataSource={Nav11DataSource}
         isMobile={this.state.isMobile}
       />,*/
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_3"
        key="Content3_3"
        dataSource={Content33DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_1"
        key="Content3_1"
        dataSource={Content31DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
  /*//方案文字+拼接
  <Content2
        id="Content2_1"
        key="Content2_1"
        dataSource={Content21DataSource}
        isMobile={this.state.isMobile}
      />,*/
      <Content10
        id="Content3_1"
        key="Content3_1"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content3
        id="Content3_0"
        key="Content3_0"
        dataSource={Content30DataSource}
        isMobile={this.state.isMobile}
      />,

      /*客户案例
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,*/
      /*特邀嘉宾
      <Content8
         id="Content8_0"
         key="Content8_0"
         dataSource={Content80DataSource}
         isMobile={this.state.isMobile}
       />,*/
      <Content6
        id="Content6_0"
        key="Content6_0"
        dataSource={Content60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_1"
        key="Content5_1"
        dataSource={Content51DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content6
        id="Content6_1"
        key="Content6_1"
        dataSource={Content61DataSource}
        isMobile={this.state.isMobile}
      />,
    /*  <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,*/

    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
