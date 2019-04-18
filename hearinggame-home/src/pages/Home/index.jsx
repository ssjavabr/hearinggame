/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {enquireScreen} from 'enquire-js';


import HomeP from './HomeP';
import IndustryStatus from './IndustryStatus';
import Advantages from './Advantages';
import CoreTeam from './CoreTeam';
import AboutUs from './AboutUs';
import ProductsAndServices from './ProductsAndServices';
import ScreeningScheme from './ScreeningScheme';
import Partner from './Partner';





import {

  HomePDataSource,
  ProductsAndServicesDataSource,
  IndustryStatusDataSource,
  ScreeningSchemeDataSource,
  AdvantagesDataSource,
  AboutUsDataSource,
  CoreTeamDataSource,
  PartnerDataSource,

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
      <HomeP
        id="HomeP_0"
        key="HomeP_0"
        dataSource={HomePDataSource}
        isMobile={this.state.isMobile}
      />,
      <ProductsAndServices
        id="ProductsAndServices_0"
        key="ProductsAndServices_0"
        dataSource={ProductsAndServicesDataSource}
        isMobile={this.state.isMobile}
      />,
      <IndustryStatus
        id="IndustryStatus_1"
        key="IndustryStatus_1"
        dataSource={IndustryStatusDataSource}
        isMobile={this.state.isMobile}
      />,


      <ScreeningScheme
        id="ScreeningScheme_1"
        key="ScreeningScheme_1"
        dataSource={ScreeningSchemeDataSource}
        isMobile={this.state.isMobile}
      />,
      <Advantages
        id="Advantages_0"
        key="Advantages_0"
        dataSource={AdvantagesDataSource}
        isMobile={this.state.isMobile}
      />,

      <AboutUs
        id="AboutUs_0"
        key="AboutUs_0"
        dataSource={AboutUsDataSource}
        isMobile={this.state.isMobile}
      />,
      <CoreTeam
        id="CoreTeam_1"
        key="CoreTeam_1"
        dataSource={CoreTeamDataSource}
        isMobile={this.state.isMobile}
      />,
      <Partner
        id="Partner_1"
        key="Partner_1"
        dataSource={PartnerDataSource}
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
