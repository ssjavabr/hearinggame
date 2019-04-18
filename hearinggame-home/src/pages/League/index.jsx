/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */

import React from 'react';
import { enquireScreen } from 'enquire-js';

import Share01 from './Share01';
import Share02 from './Share02';
import Share03 from './Share03';
import Share04 from './Share04';

import {
  Share01DataSource,
  Share02DataSource,
  Share03DataSource,
  Share04DataSource,
} from '../data/data.source';
import './less/antMotionStyle.less';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

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
      this.setState({ isMobile: !!b });
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
      <Share01
        id="Share01_0"
        key="Share01_0"
        dataSource={Share01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Share02
        id="Share02_0"
        key="Share02_0"
        dataSource={Share02DataSource}
        isMobile={this.state.isMobile}
      />,

      <Share03
        id="Share03_2"
        key="Share03_2"
        dataSource={Share03DataSource}
        isMobile={this.state.isMobile}
      />,
      <Share04
        id="Share04_0"
        key="Share04_0"
        dataSource={Share04DataSource}
        isMobile={this.state.isMobile}
      />,

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
