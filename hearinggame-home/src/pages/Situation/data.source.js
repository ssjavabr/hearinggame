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
