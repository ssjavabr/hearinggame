import React from 'react';

export const Content11DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:require('../../assets/images/free.png'),
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>
          听力现状<br />
        </p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <br/>
        <p>
          K-12阶段听力筛查缺失——国家卫生健康委要求2020年新生儿听力筛查的的普及率达到60%，但是对于学龄前儿童和学龄儿童的听力筛查目前没有引起政府部门和家长的重视。
        </p>
        <p>国内专家多次呼吁要对学龄前和学龄儿童进行常规性的筛查！</p>
      </span>
    ),
  },
};

export const Content31DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3 judiyd7a1if-editor_css' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              行业现状<br />
            </p>
          </span>
        ),
        className: 'title-h1 judj8cei66-editor_css',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <br />
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block ',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon judjfcmfhh-editor_css',
            children:require('../../assets/images/hyxz0.png'),
          },
          textWrapper: { className: 'content3-text judjj8upfx-editor_css' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>手段单一</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  目前，只有大型三甲医院才有静音室和听力师，无法满足全国5-12岁儿童对听力筛查的经常性和随时性要求，导致随访严重不足。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon judjm8z8jcf-editor_css',
            children:require('../../assets/images/hyxz1.png'),
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>政策缺失</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  目前为止，所有的听力筛查相关政策文件都是针对新生儿，对于4岁之后的少年儿童没有强制性听力监测政策，导致家长没有对孩子在这一阶段的听力筛查以足够重视。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:require('../../assets/images/hyxz2.png'),
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>成本过高</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  三甲医院需要采购大量听力检测仪，同时雇佣听力师进行测试，成本居高不下。同时，大量三、四线和乡镇儿童需要到一、二线城市大医院进行测试，成本较高且十分不方便。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:require('../../assets/images/hyxz3.png'),
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>专业要求</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  目前视力筛查要求由专业人员进行操作，费时，费力，效率非常低，而且既不易于普及。
                </p>
              </span>
            ),
          },
        },
      },
    ],
    gutter: {},
  },
};
