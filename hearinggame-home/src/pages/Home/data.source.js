import React from 'react';
export const Nav11DataSource = {
  wrapper: { className: 'header1 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header1-logo header1-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header1-menu',
    children: [
      {
        name: 'item0',
        a: {
          children: '首页',
          href: '',
          className: 'undefined index-editor_css',
        },
      },
      {
        name: 'item1',
        a: {
          children: '听力现状',
          href: '',
          className: 'undefined current-editor_css',
        },
      },
      { name: 'item2', a: { children: '合作机构', href: '' } },
      { name: 'item3', a: { children: '知识分享', href: '' } },
      { name: 'item~jpt4z893l76', a: { children: '关于我们', href: '' } },
    ],
  },
  mobileMenu: { className: 'header1-mobile-menu' },
  help: {
    className: 'help',
    children: (
      <span>
        <p>
          帮助<br />
        </p>
      </span>
    ),
  },
  user: {},
};


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
          className: 'banner1-title ',
          children:require('../../assets/images/check-children.png'),
        },
        content: {
          className: 'banner1-content ',
          children: (
            <span>
              <p>听力影响的不仅仅是儿童的耳朵， 而是儿童的全部身心健康。</p>
            </span>
          ),
        },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title juk1zmwo9tr-editor_css',
          children:require('../../assets/images/children-01.png'),
        },
        content: {
          className: 'banner1-content juk20wrz7c-editor_css ',
          children: (
            <span>
              <p>
                听力损失直接影响儿童身心发展——基础学语期是最关键的时期，如果由于听力障碍而未能建立正常的语言学习过程，可能会导致语言能力的终身障碍，甚至继发自闭症和聋哑。
              </p>
            </span>
          ),
        },

      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title juk22v844sr-editor_css',
          children:require('../../assets/images/check-02.png'),
        },
        content: {
          className: 'banner1-content juk23mn0648-editor_css',
          children: (
            <span>
              <p>
                儿童听力障碍的要点在于以预防为主，做到“早发现、早干
                </p>
               <p>
                预、早治疗”，但是很多家长并没有意识到问题的严重性。
              </p>
            </span>
          ),
        },
     /*   button: {
          className: 'banner1-button',
          children: (
            <span>
              <p>
                了解更多<br />
              </p>
            </span>
          ),
        },*/
      },

    ],
  },
};



//home没有
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
                <p>游戏免费玩，结果免费看！22</p>
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
//home没有
/*export const Content10DataSource = {
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
};*/
//听力+视力筛查整体方案
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  OverPack: { className: 'home-page content10', playScale: 0.3 },
  imgWrapper: { className: 'content10-img', md: 24, xs: 24 },
  img: {
    children: require('../../assets/images/scfangan.png'),
    className: 'juh4w1v5l9p-editor_css',
  },
  textWrapper: { className: 'content10-text', md: 24, xs: 24 },
  title: { className: 'content10-title', children: '听力+视力筛查整体方案' },
  content: {
    className: 'content10-content',
    children:'',
  },
};

export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4 juinpkhwy7-editor_css' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>我们的优势</p>
          </span>
        ),
        className: 'title-h1',
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
    className: 'content4-block-wrapper',
    gutter: 8,
    children: [
      {
        name: 'block0',
        className: 'content4-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content4-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content4-text' },
          title: {
            className: 'content4-title',
            children: (
              <span>
                <p>&emsp;</p>
                <p><font color="white" size="22px">
                  “听音捕萤火虫”是市场上唯一一款，专为儿童设计的具有听力筛查功能的手机游戏！该游戏大幅提高儿童的兴趣和参与感，
                  从而改善听力筛查的质量。这和简单的“音频”测试APP有着本质的区别！</font>
                </p>
              </span>
            ),
          },
          content: {
            className: 'content4-content',
            children: (
              <span>
                <br />
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content4-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content4-icon juinmupop4a-editor_css',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content4-text' },
          title: {
            className: 'content4-title juinlfdenvo-editor_css',
            children: (
              <span>
                 <p>&emsp;</p>
                <p><font color="white">
                  基于“机器学习”的声学算法，在筛查过程中，减少对专业医生(声学师)的依赖。把儿童听力筛查的能力送进“千家万户”，便于儿童听力筛查的普及和降低成本。
                </font></p>
              </span>
            ),
          },
          content: {
            className: 'content4-content',
            children: (
              <span>
                <br />
              </span>
            ),
          },
        },
      },

      {
        name: 'block3',
        className: 'content4-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content4-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content4-text' },
          title: {
            className: 'content4-title',
            children: (
              <span>
                 <p>&emsp;</p>
                <p><font color="white">
                  听力游戏由美国耳鼻喉科医生和专家设计， 经国内外临床试验验证，
                  确保筛查效果！</font>
                </p>
              </span>
            ),
          },
          content: {
            className: 'content4-content',
            children: (
              <span>
                <br />
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content4-block',
        md: 6,
        xs: 24,
        children: {
          icon: {
            className: 'content4-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content4-text' },
          title: {
            className: 'content4-title',
            children: (
              <span><font color="white">
                 <p>&emsp;</p>
                <p>丰富经验的管理和技术团队，具有多年开发一流产品的经验！</p>
              </font></span>
            ),
          },
          content: {
            className: 'content4-content',
            children: (
              <span>
                <br />
              </span>
            ),
          },
        },
      },
    ],
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
        className: 'content3-block judjfwv9y3c-editor_css',
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


export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title',
        children:
          <span>
            <b>产品与服务</b>
          </span>
        ,
        className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '——筛查--出报告--出档案',
      },
    ],
  },
  block: {
    className: 'content7-img-wrapper',
    gutter: 8,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content7-block-content' },
          img: {
            children:require('../../assets/images/productService0.png'),
          },
          content: { children:
              <span>
                <p>&emsp;</p>
                <h1><strong><font color="#fff">&nbsp;&nbsp;基于软件的纯音听力筛查</font></strong></h1>
                <p>&emsp;</p>
                <p><em>&emsp;轻度听力缺损</em></p>
                <p><em>&emsp;中度听力缺损</em></p>
                <p><em>&emsp;重度听力缺损</em></p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
              </span> },
        },
      },
      {
        name: 'block1',
        className: 'block2',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content7-block-content' },
          img: {
            children:require('../../assets/images/productService1.png'),
          },
          content: { children:
              <span>
                <p>&emsp;</p>
                <h2 align="left"><strong ><font color="#fff">&nbsp;&nbsp;基于硬件的视力筛查</font></strong></h2>
                <p>&emsp;</p>
                <p align="left"><em>&emsp;近视</em> </p>
                <p align="left"><em>&emsp;远视</em>  </p>
                <p align="left"><em>&emsp;散光（视力模糊）</em></p>
                <p align="left"><em>&emsp;屈光参差（不同的屈光率）</em></p>
                <p align="left"><em>&emsp;斜视（眼位偏斜） </em></p>
                <p align="left"><em>&emsp;瞳孔不等（瞳孔大小不等）</em></p>
                <p>&emsp;</p>
              </span>
          },
        },
      },
      {
        name: 'block2',
        className: 'block3',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content7-block-content' },
          img: {
            children:require('../../assets/images/productService3.jpg'),
          },
          content: { children:
              <span>
                <p>&emsp;</p>
                <h2 ><strong><font color="#fff">&nbsp;&nbsp;学生及各级筛查分析报告</font></strong></h2>
                <p>&emsp;</p>
                <p><em>&emsp;针对学生的情况，出具详细的筛查报告;</em></p>
                <p><em>&emsp;对学校、区县、市筛查数据进行分析;</em></p>
                <p><em>&emsp;筛查学校、年级、区县、城镇、农村分布等;</em></p>
                <p><em>&emsp;筛查年龄、人数、性别分布，程度分布等；</em></p>
                <p><em>&emsp;筛查正常与异常对比。</em></p>
                <p>&emsp;</p>
                <p>&emsp;</p>
              </span>
          },
        },
      },
    ],
  },
};

export const Content80DataSource = {
  wrapper: {
    className: 'home-page-wrapper content8-wrapper juc7oaw3rql-editor_css',
  },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特邀嘉宾', className: 'title-h1' },
    ],
  },
  block: {
    className: 'content-wrapper',
    children: [
      {
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block juc7omz57j-editor_css',
          img: {
            className: 'content8-img',
            children:require('../../assets/images/td1zzg.jpg'),
          },
          title: {
            className: 'content8-title',
            children: (
              <span>
                <p>赵子果&nbsp; &nbsp;CEO</p>
              </span>
            ),
          },
          content: {
            className: 'content8-content jptktcuz5ka-editor_css',
            children: (
              <span>
                <br />
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block1',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block3',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block4',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block5',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block6',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
    ],
  },
};
export const Content60DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6 judiwp4pmfs-editor_css' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              关于我们<br />
            </p>
          </span>
        ),
        className: 'title-h1 judjdblns99-editor_css',
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
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>公司名称</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>听游（北京）科技有限公司</p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>
                公司宗旨<br />
              </p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>把听力筛查送进千家万户</p>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>
                未来愿景<br />
              </p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                依托先进的医学科研成果，填补中国儿童听力筛查的空白，把儿童听力筛查的能力“免费”送到幼儿园，学校和家庭，
                以及偏远的地区
              </p>
            </span>
          ),
        },
      },
/*      {
        name: 'block~judk2111gyo',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>产品特点</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                把儿童听力筛查变成一件简单易行并不被儿童反感的事情。让儿童在“玩”手机游戏的同时，
                即完成了有关听力的筛查。产品能够提供筛查，问诊，确诊和治疗的一条龙闭环服务。
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block~judk2q7bd4',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>核心资源</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                公司持有美国Kids Hearing
                Game在中国的独家使用权，创始团队与国内外耳科专家、儿科专家拥有良好的合作伙伴关系，可以随时获取专业医学知识的支撑，线下医疗行业资源丰富，渠道拓展能力强。
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block~judk3bjim8',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>强大团队</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <p>
                创始团队深耕健康、医疗和互联网行业多年，对医疗、传媒和互联网行业有深刻的行业理解，同时拥有广泛的线下医疗行业资源。
              </p>
            </span>
          ),
        },
      },*/
    ],
  },
};
export const Content51DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              核心团队<br />
            </p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper judni5xyx4-editor_css',
    gutter: 8,
children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:require('../../assets/images/td1zzg.jpg'),
          },
          content: {
            children: (
              <span>
                <p>
                  赵子果 <br />
                </p>
                <p>CEO</p>
                <p>
                  联合创始人，曾在中国健康云担任集团副总经理。并成功与北京协和医院VIP体检中心建立近年来唯一的官方合作关系。赵先生同时担任北京市总工会下属首都职工健康管理委员会秘书长。多年来，赵先生和有关政府部门及北京的各大三甲医院建立了长期和稳定的关系。赵先生拥有伦敦大学心理学学士学位和英国纽卡斯尔大学信息系统学士学位。
                </p>
              </span>
            ),
            className: 'judmseafsv-editor_css',
          },
        },
      },
      {
        name: 'block~judkazz4q77',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:require('../../assets/images/td2wxj.jpg'),
          },
          content: {
            children: (
              <span>
                <p>王学军</p>
                <p>COO</p>
                <p>
                  联合创始人，拥有20多年的高科技公司的从业和创业经验；具有丰富的企业管理经验。曾在著名的BOSTON的电讯咨询公司洋基集团担任高级分析师及亚太地区的副总裁；后在美国Vesta公司，担任公司副总裁和大中华地区的总经理。
                  王先生拥有重庆邮电大学的学士学位，美国东北大学的电子工程硕士学位和美国波士顿大学的计算机硕士学位。
                </p>
              </span>
            ),
            className: 'judkb1gw4gq-editor_css',
          },
        },
      },
      {
        name: 'block~judo2f49eu',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:require('../../assets/images/td3barber.jpg'),
          },
          content: {
            children: (
              <span>
                <p>Dr. Wayne </p>
                <p>Chief Hearing Officer</p>
                <p>
                  Dr. Wayne
                  是美国著名耳鼻喉外科医生，毕业于耶鲁大学医学院，在麻省总院耳鼻喉科医院做住院医生，
                  后执业于夏威夷以及旧金山的Kaiser集团，从事精细和高难度的耳鼻喉科的外科手术工作。Dr.
                  Wayne
                  目前已经从手术台退休，专注于听力测试和听力恢复的研究。Dr.
                  Wayne负责公司的在听力产品方面的理论依据,
                  产品路线图以及对接美国的一流耳鼻喉科研究人员。
                </p>
              </span>
            ),
            className: 'judkb1gw4gq-editor_css',
          },
        },
      },
      {
        name: 'block~judo3lx7h4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:require('../../assets/images/td4yhb.png'),
          },
          content: {
            children: (
              <span>
                <p>姚红兵教授</p>
                <p>Chief Hearing Officer</p>
                <p>
                  联合创始人，姚红兵教授是重庆医科大学附属儿童医院耳鼻喉科的主任，博士导师。姚教授领导下的儿童医院耳鼻喉科是西南地区最大的儿童耳鼻喉科，年门诊量超过25万人次。和Dr.
                  Wayne 一起，姚教授将国际领先的理念和中国具体国情相结合，
                  对公司的产品在中国的使用进行论证和评估，为公司听力产品和路线图把关。
                </p>
              </span>
            ),
            className: 'judkb1gw4gq-editor_css',
          },
        },
      },
      {
        name: 'block~judo43hpmkj',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:require('../../assets/images/td5miller.png'),
          },
          content: {
            children: (
              <span>
                <p>
                  Dave Miller<br />
                </p>
                <p>
                  CTO<br />
                </p>
                <p>
                  拥有美国麻省理工学院学士学位和 斯坦福大学硕士学位。Dave
                  是一个在美国硅谷生活和工作的技术专家和企业家。先后在Adobe和Silicon
                  Graphics Inc. 任职，具有多次创业经验， 并在初创公司Pixo,
                  Airzip 和 Chromatic Research 担任高管职位。Dave
                  负责公司的整体技术方向，以及Machine
                  Learning的算法。并在美国对接像Kaiser这样的保险公司，
                  确保公司的技术和产品路线处于市场前列。
                </p>
              </span>
            ),
            className: 'judkb1gw4gq-editor_css',
          },
        },
      },
      {
        name: 'block~judo549v3rf',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:require('../../assets/images/td6yxj.jpg'),
          },
          content: {
            children: (
              <span>
                <p>游小军 </p>
                <p>VP of Engineering </p>
                <p>
                  联合创始人，毕业于电子科技大学计算机学院。10多年来，长期致力于通信、互联网和移动互联网领域。从业经历横跨通讯运营商通讯类大型数据类项目、企业信息化发展与集成、医疗健康信息化业务发展、体育运动等移动互联网应用。
                  游先生负责公司的平台运营和运营相关的计算开发工作。
                </p>
              </span>
            ),
            className: 'judkb1gw4gq-editor_css',
          },
        },
      },
    ],
  },
};
export const Content61DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>
              合作机构<br />
            </p>
          </span>
        ),
        className: 'title-h1',
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
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>重庆医科大学附属儿童医院耳鼻喉科（重庆儿童听力障碍诊治中心） </p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <br />
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>中国健康云及中国妇女儿童发展中心</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <br />
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>北京儿科研究所耳鼻喉科</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <br />
            </span>
          ),
        },
      },
      {
        name: 'block3',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>美国Hearing.Game, LLC</p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <br />
            </span>
          ),
        },
      },
      {
        name: 'block4',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <p>云南云水环保科技集团公司 </p>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <br />
            </span>
          ),
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
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
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        content: {
          className: 'slogan',
          children: (
            <span>
              <p>听游使命用语</p>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
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
        md: 6,
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
                <a href>联系我们</a>
                <br />
              </p>
              <p>投资机构</p>
              <p>
                FAQ<br />
              </p>
            </span>
          ),
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <h2><font color="white">4008-123-456</font></h2>
              <p>
                <b>
                  <br />
                </b>
              </p>
              <p>
                <b>邮件咨询</b>
              </p>
            </span>
          ),
          className: 'jpapp4bdgyd-editor_css',
        },
        content: {
          children: (
            <span>
              <p>
                <br />
              </p>
            </span>
          ),
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <p>
          <i>
            版权所有©2019 听游(北京)科技有限责任公司&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;京ICP备12345678号&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 京公安网备123456789号
          </i>
        </p>
      </span>
    ),
  },
};
