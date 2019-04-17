import React from 'react';

export const Nav10DataSource = {
  wrapper: {className: 'header1 home-page-wrapper'},
  page: {className: 'home-page'},
  logo: {
    className: 'header1-logo',
    children: require('../assets/logo-red.png'),
  },
  Menu: {
    className: 'header1-menu',
    children: [
      {name: 'item0', a: {children: '首页', href: '/home'}},
      {name: 'item1', a: {children: '听力现状', href: '/situation'}},
      {name: 'item2', a: {children: '合作机构', href: '/org'}},
      {name: 'item3', a: {children: '知识分享', href: '/league'}},
      {name: 'item4', a: {children: '关于我们', href: '/about'}},
    ],
  },
  mobileMenu: {className: 'header1-mobile-menu'},
  user: { className: 'user', children: '登录', href: 'http://47.95.252.122:8080/hearinggame'},
};
export const Footer10DataSource = {
  wrapper: {className: 'home-page-wrapper footer1-wrapper'},
  OverPack: {className: 'footer1', playScale: 0.2},
  block: {
    className: 'home-page',
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:require('../assets/bg2.png'),
        },
        content: {
          className: 'slogan',
          children: (
            <span>
              <p>把听力筛查能力送进千家万户</p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 5,
        className: 'block',
        title: {
          children: (
            <span>
              <p>购买渠道</p>
            </span>
          ),
        },
        content: {
          children: (
            <span>
              <p>官网</p> <p>加盟渠道</p> <p>线下零售店</p> <p>渠道招募</p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 5,
        className: 'block',
        title: {
          children: (
            <span>
              <p>关于我们</p>
            </span>
          ),
        },
        content: {
          children: (
            <span>
              <p>关于我们</p>
              <p>
                <a href="#">联系我们</a>
                <br/>
              </p>
              <p>投资机构</p>
              <p>
                FAQ<br/>
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 7,
        className: 'block',
        title: {
          children: (
            <span>
              <h2><font color="white">4008-123-456</font></h2>
              <p>
                <br/>
              </p>
              <p>邮件咨询</p>
              <p>support@hearinggame.cn</p>
            </span>
          ),
          className: 'undefined jpapp4bdgyd-editor_css',
        },
        content: {
          children: (
            <span>
              <p>
                <br/>
              </p>
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: {className: 'copyright-wrapper'},
  copyrightPage: {className: 'home-page'},
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <p>
          <i>
            版权所有©2019 听游科技(北京)有限责任公司&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;京ICP备12345678号&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 京公安网备123456789号
          </i>
        </p>
      </span>
    ),
  },
};
