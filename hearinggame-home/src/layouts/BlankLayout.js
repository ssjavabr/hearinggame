import { enquireScreen } from 'enquire-js';
import React, { Suspense } from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Media from 'react-media';
import Context from './MenuContext';
import Exception403 from '../pages/Exception/403';
import Nav1 from './Nav1';
import Footer1 from './Footer1';
import './less/antMotionStyle.less';
import {
  NavDataSource,
  FooterDataSource,
} from '../pages/data/data.source';
// import * as dataSource from './data.source';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};


const { location } = window;

export default class BlankLayout extends React.PureComponent {
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
    const {
      children,
    } = this.props;

    const layout = (
      <Layout>
        <Nav1
          id="Nav1_0"
          key="Nav1_0"
          dataSource={NavDataSource}
          isMobile={isMobile}
        />
        {children}
        <Footer1
          id="Footer1_0"
          key="Footer1_0"
          dataSource={FooterDataSource}
          isMobile={isMobile}
        />
      </Layout>
    );
    return (
      <React.Fragment>
        <ContainerQuery query={query}>
          {params => (
            <Context.Provider>
              <div className={classNames(params)}>{layout}</div>
            </Context.Provider>
          )}
        </ContainerQuery>
      </React.Fragment>
    );
  }

}


