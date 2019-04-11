import React from 'react';
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title',
          children: require('../../assets/images/children-01.png'),
        },
        content: {
          className: 'banner1-content',
          children: '听力影响的不仅仅是儿童的耳朵，而是儿童的全部身心健康。',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:require('../../assets/images/check-children.png'),

        },
        content: {
          className: 'banner1-content',
          children: '听力损失直接影响儿童身心发展——基础学语期是最关键的时期，如果由于听力障碍而未能建立正常的语言学习过程，可能会导致语言能力的终身障碍，甚至继发自闭症和聋哑。',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:require('../../assets/images/check-children.png'),

        },
        content: {
          className: 'banner1-content',
          children: '儿童听力障碍的要点在于以预防为主，做到“早发现、早干预、早治疗”，但是很多家长并没有意识到问题的严重性。',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },{
        name: 'elem3',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:require('../../assets/images/check-children.png'),

        },
        content: {
          className: 'banner1-content',
          children: '中轻度听力损失不易察觉，直接影响学习成绩, 社交能力和自信心——儿童的中轻度听力损失不易察觉，且30%听力障碍为迟发性，仅靠新生儿听力筛查不能解决问题。',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },{
        name: 'elem4',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:require('../../assets/images/check-children.png'),

        },
        content: {
          className: 'banner1-content',
          children: '据美国权威机构研究，轻度儿童听力损失，可以造成GPA1.0的下降, 相当于10-15分的下降！',
        },
        button: { className: 'banner1-button', children: '了解更多' },
      },
      /*{
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title',
          children:
            'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        },
        content: {
          className: 'banner1-content',
          children: '一个高效的页面动画解决方案',
        },
        button: { className: 'banner1-button', children: 'Learn More' },
      },*/
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:require('../../assets/images/firefly.png'),
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>AI游戏模式筛查</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>将听力筛查技术与儿童喜欢的电子游戏结合在一起，将听力筛查用“免费玩”手机游戏的方式呈现在儿童面前；并通过AI技术，提高听力筛查的准确度</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:require('../../assets/images/free.png'),

          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>免费玩，免费筛查</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>游戏免费玩，结果免费看！</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children: require('../../assets/images/temp.png'),
          },
          title: {
            className: 'content0-title',
            children: (
              <span>
                <p>普及听力筛查的关键是进入家庭和随时性</p>
              </span>
            ),
          },
          content: {
            children: (
              <span>
                <p>体温计,体重秤已经成为家庭必备品，移动端APP随时掌握听力状况，及时发现听力下降！</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: require('../../assets/images/hospital.png'),
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '临床对比试验' },
  content: {
    className: 'content1-content',
    children:require('../../assets/images/duibi.png'),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '行业现状',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '普及听力和视力筛查面临挑战',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:require('../../assets/images/hyxz0.png'),
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '手段单一' },
          content: {
            className: 'content3-content',
            children:
              '目前，只有大型三甲医院才有静音室和听力师，无法满足全国5-12岁儿童对听力筛查的经常性和随时性要求，导致随访严重不足。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:require('../../assets/images/hyxz1.png'),
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '政策缺失' },
          content: {
            className: 'content3-content',
            children:
              '目前为止，所有的听力筛查相关政策文件都是针对新生儿，对于4岁之后的少年儿童没有强制性听力监测政策，导致家长没有对孩子在这一阶段的听力筛查以足够重视。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '成本过高' },
          content: {
            className: 'content3-content',
            children:
              '三甲医院需要采购大量听力检测仪，同时雇佣听力师进行测试，成本居高不下。同时，大量三、四线和乡镇儿童需要到一、二线城市大医院进行测试，成本较高且十分不方便。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '专业要求' },
          content: {
            className: 'content3-content',
            children:
              '目前视力筛查要求由专业人员进行操作，费时，费力，效率非常低，而且既不易于普及。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '档案缺失' },
          content: {
            className: 'content3-content',
            children:
              '缺乏系统，安全的连续性的学生视力和听力档案；不利于真正帮助儿童和学生的身心健康发展。',
          },
        },
      },
    /*  {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },*/
    ],
  },
};
