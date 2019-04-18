import React from 'react';

//页眉
export const NavDataSource = {
  wrapper: {className: 'header1 home-page-wrapper'},
  page: {className: 'home-page'},
  logo: {
    className: 'header1-logo',
    children: require('../../assets/logo-red.png'),
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
//首页
export const HomePDataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner1-title juk22v833sr-editor_css',
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
                儿童听力障碍的要点在于以预防为主，做到“早发现、早干预、早治疗”，但是很多家长并没有意识到问题的严重性。
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
//产品与服务
export const ProductsAndServicesDataSource = {
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
//行业现状
export const IndustryStatusDataSource = {
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
//听力+视力筛查整体方案
export const ScreeningSchemeDataSource = {
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
//我们的优势
export const AdvantagesDataSource = {
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
//关于我们
export const AboutUsDataSource = {
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
//核心团队
export const CoreTeamDataSource = {
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
                <p>CEO，联合创始人</p>
                <p><div align="left">
                曾在中国健康云担任集团副总经理。并成功与北京协和医院VIP体检中心建立近年来唯一的官方合作关系。赵先生同时担任北京市总工会下属首都职工健康管理委员会秘书长。多年来，赵先生和有关政府部门及北京的各大三甲医院建立了长期和稳定的关系。赵先生拥有伦敦大学心理学学士学位和英国纽卡斯尔大学信息系统学士学位。
                </div></p>
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
                <p>COO，联合创始人</p>
                <p><div align="left">
                 拥有20多年的高科技公司的从业和创业经验；具有丰富的企业管理经验。曾在著名的BOSTON的电讯咨询公司洋基集团担任高级分析师及亚太地区的副总裁；后在美国Vesta公司，担任公司副总裁和大中华地区的总经理。
                 王先生拥有重庆邮电大学的学士学位，美国东北大学的电子工程硕士学位和美国波士顿大学的计算机硕士学位。
                </div></p>
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
                <p>Chief Hearing Officer，联合创始人</p>
                <p><div align="left">
                  Dr. Wayne
                  是美国著名耳鼻喉外科医生，毕业于耶鲁大学医学院，在麻省总院耳鼻喉科医院做住院医生，
                  后执业于夏威夷以及旧金山的Kaiser集团，从事精细和高难度的耳鼻喉科的外科手术工作。Dr.
                  Wayne
                  目前已经从手术台退休，专注于听力测试和听力恢复的研究。Dr.
                  Wayne负责公司的在听力产品方面的理论依据,
                  产品路线图以及对接美国的一流耳鼻喉科研究人员。
                </div></p>
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
                <p>Chief Medical Officer，特邀医学顾问</p>
                <p><div align="left">
                  姚红兵教授是重庆医科大学附属儿童医院耳鼻喉科的主任，博士导师。姚教授领导下的儿童医院耳鼻喉科是西南地区最大的儿童耳鼻喉科，年门诊量超过25万人次。和Dr.
                  Wayne 一起，姚教授将国际领先的理念和中国具体国情相结合，
                  对公司的产品在中国的使用进行论证和评估，为公司听力产品和路线图把关。
                </div>  </p>
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
                  CTO，联合创始人<br />
                </p>
                <p><div align="left">
                  拥有美国麻省理工学院学士学位和 斯坦福大学硕士学位。Dave
                  是一个在美国硅谷生活和工作的技术专家和企业家。先后在Adobe和Silicon
                  Graphics Inc. 任职，具有多次创业经验， 并在初创公司Pixo,
                  Airzip 和 Chromatic Research 担任高管职位。Dave
                  负责公司的整体技术方向，以及Machine
                  Learning的算法。并在美国对接像Kaiser这样的保险公司，
                  确保公司的技术和产品路线处于市场前列。
                </div></p>
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
                <p>VP of Engineering，联合创始人</p>
                <p><div align="left">
                  毕业于电子科技大学计算机学院。10多年来，长期致力于通信、互联网和移动互联网领域。从业经历横跨通讯运营商通讯类大型数据类项目、企业信息化发展与集成、医疗健康信息化业务发展、体育运动等移动互联网应用。
                  游先生负责公司的平台运营和运营相关的计算开发工作。
                </div> </p>
              </span>
            ),
            className: 'judkb1gw4gq-editor_css',
          },
        },
      },
    ],
  },
};
//合作机构
export const PartnerDataSource = {
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
              <p>重庆儿童听力障碍诊治中心（重庆医科大学附属儿童医院耳鼻喉科） </p>
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
//页脚
export const FooterDataSource = {
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
          children:require('../../assets/bg2.png'),
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
            版权所有©{new Date().getFullYear()} 听游科技(北京)有限责任公司&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;京ICP备12345678号&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 京公安网备123456789号
          </i>
        </p>
      </span>
    ),
  },
};

//知识分享1
export const Share01DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
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
        className: 'content3-block juhu17w5v4-editor_css',
        md: 24,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:require('../../assets/images/zsfx0.png'),
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title juhu10s1i9t-editor_css',
            children: (
              <span>
                <h5><div align="center">人耳的结构</div></h5>
                <p>&nbsp;</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content ',
            children: (
              <span>
                <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  人耳结构可分成三部分：外耳、中耳和内耳。在声音从自然环境中传送至人类大脑的过程中，人耳的三个部分具有不同的生理作用。
                </p>
                <b>1.外耳</b>
                <p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;外耳是指能从人体外部看见的耳朵部分，即耳廓和外耳道。耳廓对称地位于头两侧，主要结构为软骨。耳廓具有两种主要功能，它即能排御外来物体以保护外耳道和鼓膜，还能起到从自然环境中收集声音并导入外耳道的作用。将手作杯状放在耳后，很容易理解耳廓的作用效果，因为手比耳廓大，能收集到更多的声音，所以这时你听所到的声音会感觉更响。当声音向鼓膜传送时，外耳道能使声音增强，此外，外耳道具有保护鼓膜的作用，耳道的弯曲形状使异物很难直入鼓膜，耳毛和耳道分泌的耵聍也能阻止进入耳道的小物体触及鼓膜。外耳道的平均长度2.5cm，可控制鼓膜及中耳的环境，保持耳道温暖湿润，能使外部环境不影响和失策以中耳和鼓膜。外耳道外部的2∕3是由软骨组成。
                </p>
                <b>2. 中耳</b>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中耳由鼓膜、中耳腔和听骨链组成。听骨链包括锤骨、砧骨和镫骨，悬于中耳腔。中耳的基本功能是把声波传送到内耳。声音以声波方式经外耳道振动鼓膜，鼓膜斜位于外耳道的末端呈凹型，正常为珍珠白色，振动的空气粒子产生的压力变化使鼓膜振动，从而使声能通过中耳结构转换成机械能。由于鼓膜前后振动使听骨链作活塞状移动，鼓膜表面积比镫骨足板大好几倍，声能在此处放大并传输到中耳。由于表面积的差异，鼓膜接收到的声波就集中到较小的空间，声波在从鼓膜传到前庭窗的能量转换过程中，听小骨使得声音的强度增加了30分贝。为了使鼓膜有效地传输声音，必须使鼓幕布人外两侧的压力一致。当中耳腔内的压力与体外大气压的变化相同时，鼓膜才能正常的发挥作用。耳咽管连通了中耳腔与口腔，这种自然的生理结构起到平衡内外压力的作用。</p>
                <b>3. 内耳</b>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内耳的结构不容易分离出来，它是位于颞骨岩部内的一系列管道腔，我们可以把内耳看成三个独立的结构：半规管、前庭和耳蜗。前庭是卵圆窗内微小的、不规则开关的空腔，是半规管、镫骨足板、耳蜗的汇合处。半规管可以感知各个方向的运动，起到调节身体平衡的作用。耳蜗是被颅骨所包围的象蜗牛一样的结构，内耳在此将中耳传来的机械能转换成神经电冲动传送到大脑。为了便于理解耳蜗的功能，我们用来显示镫骨足板与耳蜗的前庭窗的连接。耳蜗内充满着液体并被基底膜所隔开，位于基底膜上方的是螺旋器，这是收集神经电脉冲的结构，耳蜗横断面显示了螺旋器的构造。当镫骨足板在前庭窗处前后运动时，耳蜗内的液体也随着移动。耳蜗液体的来回运动导致基底膜发生位移，基底膜的运动使包埋在覆膜内的毛细胞纤毛弯曲，而毛细胞与听神经纤维末梢相连接，当毛细胞弯曲时神经纤维就向听觉中枢传送电脉冲，大脑接收到这种电脉冲时，我们就听到了“声音”。
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
//知识分享2
export const Share02DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title',
        children:
          <span>
            <h5>中耳炎对听力的影响</h5>
          </span>
        ,
        className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中耳炎对儿童听力和语言发展的影响： </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  中耳是耳膜后面充满空气的空间，伴有振动的小骨（耳骨），放大并将声波传输到内耳听觉器官中。中耳炎作为一般术语是指中耳间隙的疾病。它包括急性中耳炎（AOM）和带有积液的中耳炎（OME）。
                </p>
                <p>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  急性中耳炎是一种细菌或病毒感染。它会导致衬里组织肿胀，感染粘液，填补中耳空间，阻塞声音。用抗生素治疗可以缩短细菌感染的症状，但许多病例在没有抗生素的情况下有所改善。抗生素在病毒感染（普通感冒）或其他不是由细菌感染引起的耳液中没有作用。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  积液的中耳炎是未被感染的液体，但也会阻塞声音。通常只有轻微的压力感或其他耳朵不适的症状。积液的中耳炎有几种发生。这是耳部感染的自然后效，即使疼痛，发热和炎症消退，听力仍然很差的原因。在大多数情况下，这种液体将逐渐被吸收或清除，并在数周内被空气取代。没有药物被证明有助于加快这一过程。如果3个月后液体不能清除并且听力仍然受阻，建议进行治疗。过敏也会导致OME发炎和增加液体产生。咽鼓管功能障碍本身可引起液体，并且是感染或过敏发作后持续液体的潜在原因。咽鼓管的正常功能是调节中耳空间的空气量。鼓膜两侧的相等压力使其能够自由振动并传递声音。咽鼓管通常会塌陷，只能通过上颚肌肉的作用才能打开。由于头部的形状和免疫系统的不成熟，咽鼓管在儿童中效果不佳。这就是为什么液体可以持续很长时间并且比成人需要更长时间才能清除。不幸的是，由此导致的听力损失特别影响语言和语言发展以及一般学习。
                </p>
              </span>
        ),
      },
    ],
  },
};
//知识分享3
export const Share03DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-block-wrapper',
    children: [
      {
        name: 'block~juhu2a4dt8p',
        className: 'content5-block',
        md: 24,
        xs: 24,
        children: {
          icon: {
            className: 'content5-icon juhu59hyw4s-editor_css',
            children:require('../../assets/images/zsfx1.jpg'),
          },
          textWrapper: { className: 'content5-text' },
          title: {
            className: 'content5-title juhu10s1i9t-editor_css',
            children: (
              <span>
                <div align="center"><h3>医学知识 鼓膜置管术</h3></div>
                <p>&nbsp;</p>
              </span>

            ),
          },
          content: {
            className: 'content5-content',
            children: (
              <span>
                <p>
                  下文摘自美国Mayo
                  Clinic原文参见：https://www.mayoclinic.org/tests-procedures/ear-tubes/about/pac-20384667
                </p>
                <h3 ><font color="#6495ed"><b>概述：</b></font></h3>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  耳管（鼓膜造口管，通气管，压力平衡管）是微小的空心圆柱体，通常由塑料或金属制成，通过外科手术插入耳膜。耳管产生呼吸道，使中耳通气并防止耳膜后面的液体积聚。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  对于在鼓膜后面持续积聚液体的儿童，通常建议使用耳管，特别是如果这种情况导致听力丧失并影响言语发展。如果您的孩子经常耳朵感染，您的孩子的医生也可能会推荐耳管。{' '}
                  <br />
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  大多数耳管在六到九个月内脱落，并且孔自行闭合。有时，可能需要手术移除管子，并且可能需要通过外科手术闭合插管的孔。
                </p>
                <h3><font color="#6495ed"><b>为什么要插耳管？</b></font></h3>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  耳管最常用于为中耳提供长期引流和通气，这些中耳具有持续的液体积聚，慢性中耳感染或频繁感染。
                </p>
                <h4><b>为了正常耳朵通气</b></h4>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  中耳的通气通常由咽鼓管完成，一对细管从每个中耳延伸到喉咙后部的高处。管子的喉部开口和关闭：
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●调节中耳的气压</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●刷新耳中的空气</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●从中耳排出正常分泌物</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  来自上呼吸道感染或过敏的咽鼓管中的肿胀，炎症和粘液可阻塞它们，导致中耳液体积聚。这个问题在儿童中更为常见，部分原因是因为他们的咽鼓管较窄且水平较高
                  - 这些因素使得它们更难以排出并且更容易被堵塞。
                </p>
                <h4><b>用耳管通气：</b></h4>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  耳管提供替代气道，以保持中耳中的空气清新，允许正常引流并均衡耳内压力。这些管最常用于有下列情况之一的儿童：
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●被困在鼓膜后面的液体导致中耳的炎症和液体积聚（积液）而没有细菌或病毒感染。这可能是因为即使耳朵感染消退后液体积聚仍然存在。也可能由于咽鼓管的一些功能障碍或非传染性阻塞而发生。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●听力下降通常是由中耳炎引起的积液引起的。听力损失可能导致语言发展延迟，沟通问题，行为问题和学校表现不佳。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●如果在六个月内有三次或更多次不同的事件或一年中有四次或更多次事件，则通常认为中耳感染是常见的。耳管可能有助于预防反复感染。
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●慢性中耳感染是中耳的长期感染，不会因抗生素治疗而改善。</p>
                <p>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●慢性化脓性中耳炎是持续性耳部感染，常常导致鼓膜撕裂或穿孔。
                </p>
                <p> </p>
                <h4><b>使用耳管的潜在风险</b></h4>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  耳管放置是一种相对安全的手术，具有严重并发症的风险较低。可能的潜在风险包括：
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●出血和感染</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●持续排出液体</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●阻塞血液，粘液或其他分泌物的管</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●鼓膜疤痕或弱化</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●管子过早掉落或停留时间过长</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●在管子掉出或被移除后鼓膜关闭失败</p>

                <h4><b>麻醉</b></h4>
                <p>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  耳管放置的手术通常需要全身麻醉，这也带来一些风险。虽然其他健康儿童的麻醉风险很低，但可能存在的问题包括：
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●过敏反应</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●呼吸困难</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●心脏不规则</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●手术后出现恶心或呕吐</p>
                <h3> <font color="#6495ed"><b>你应该如何准备？</b></font></h3>
                <p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  您将收到医院关于如何准备您的孩子进行手术以放置耳管的指示。可能的信息包括：
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●您孩子定期服用的所有药物</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●您孩子的麻醉不良反应史或家族史</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●已知对药物过敏或其他负面反应，如抗生素</p>
                <p> </p>
                <h4><b>您应该询问医生或医院工作人员的问题：</b></h4>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●我的孩子什么时候需要开始禁食？</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●手术前他或她可以服用哪些药物？</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●我们什么时候应该到医院？</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●我们需要在哪里办理登机手续？</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●预计恢复时间是多长？</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●如何使用面罩，注射或静脉注射（IV）线给予麻醉剂，谁将给予麻醉剂？
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●如何帮助你孩子的一些建议，包括：</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●在手术前几天开始谈论医院就诊。</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●说明该程序将有助于使他或她的耳朵感觉更好或更容易听到。</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●解释一种特殊的药物可以帮助他或她在手术期间入睡。</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●让您的孩子挑选一个您可以带到医院的最喜欢的舒适玩具，如毯子或填充动物。
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●说明您将在此过程中到场。</p>
                <p> </p>
                <h3><font color="#6495ed"><b>你能期待什么？</b></font></h3>
                <h4><b>手术前</b></h4>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  一位专门研究耳鼻喉疾病的外科医生为放置耳管进行手术。</p>
                <h4><b>麻醉</b></h4>
                <p >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  外科医生通常在全身麻醉期间执行该程序，因此您的孩子在手术过程中不会发现任何事情。麻醉药物可以通过面罩吸入，注入静脉或两者，并由麻醉医生（麻醉师）给药。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  手术团队在您孩子的身体上放置了几个监视器，以帮助确保他/她的心率，血压和血氧在整个手术过程中保持在安全水平。这些监护仪包括儿童手臂上的血压袖带和连接到孩子胸部的心脏监测器导线。
                </p>
                <h4><b>在手术中</b></h4>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该手术通常需要大约15分钟。外科医生：</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●用小手术刀或激光在鼓膜（鼓膜切开术）上做一个小切口</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●从中耳吸出液体</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●将管插入耳膜的孔中</p>
                <p> </p>
                <p>手术后</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●手术后，您的孩子将被转移到康复室，医疗团队会在那里监视手术和麻醉引起的并发症。如果没有任何并发症，您的孩子将能够在几个小时内回家。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●您的孩子可能会在一天的剩余时间内感到困倦和易怒，并可能因麻醉而恶心。在大多数情况下，儿童在手术后24小时内恢复正常活动。
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●由中耳液引起的听力损失可通过该手术立即解决。</p>
                <h4><b>后续护理</b></h4>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的孩子的医生将建议您在耳管放置后进行随访护理。</p>
                <b>标准的后续护理</b>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您的孩子没有并发症：</p>
                <p>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●初步随访预约将在手术后的前两到四周内安排。那时，您孩子的耳鼻喉专家将检查管的适当位置和功能。与耳鼻喉科医生或您孩子的初级保健医生的其他随访预约将安排在4至6个月的时间间隔内。
                </p>
                <p>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●您孩子的耳鼻喉专科医生可能会开出滴耳液以帮助减少耳朵液体排出。即使没有出现排水问题，也要按照医生的指示使用完整的课程。
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●如果孩子在手术前有听力损失，医生也会建议进行听力测试（听力图）以评估听力情况。
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●您孩子的医生可能会建议您的孩子在游泳或洗澡时戴耳塞。</p>
                <p> </p>
                <h3><font color="#6495ed"><b>什么时候需要联系你的医生？</b></font></h3>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●在定期安排的后续预约之外，需要去看耳鼻喉专科医生的原因包括：
                </p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●耳朵的黄色，棕色或血性分泌物（耳漏）持续超过一周。</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●持续性疼痛，听力问题或平衡问题。</p>
                <p> </p>
                <h3><font color="#6495ed"><b>结果</b></font></h3>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;耳管有助于恢复耳朵的通风和干燥。耳管放置通常会导致：</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●降低耳部感染的风险</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ● 恢复或改善听力</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ●改善言语能力</p>
                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ● 改善与频繁或持续性耳部感染有关的行为和睡眠问题</p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  即使使用耳管，您的孩子仍可能偶尔感染耳部。通常，耳管在鼓膜中停留六到九个月，然后自行脱落。有时，管子不会脱落，需要手术切除。在某些情况下，耳管会很快脱落，需要从新放入一个耳管。
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
//知识分享4
export const Share04DataSource = {
  wrapper: { className: 'home-page-wrapper content7-wrapper' },
  page: { className: 'home-page content7' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title',
        children:
          <span>
            <h5>听力下降对儿童的影响</h5>
          </span>
        ,
        className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
                <p>
                  <b>听力损失直接影响儿童身心发展：</b>基础学语期是最关键的时期，如果由于听力障碍而未能建立正常的语言学习过程，可能会导致语言能力的终身障碍，甚至继发自闭症和聋哑。
                </p>
                <p>
                  <b>儿童听力障碍的要点在于以预防为主：</b>儿童听力要做到“早发现、早干预、早治疗”，但是很多家长并没有意识到问题的严重性。
                </p>
                <p>
                  <b>中轻度听力损失不易察觉，直接影响学习成绩,社交能力和自信心：</b>儿童的中轻度听力损失不易察觉，且30%听力障碍为迟发性，仅靠新生儿听力筛查不能解决问题。
                </p>
                <p>
                  <b>轻度儿童听力损失对学习成绩有直接影响：</b>据美国权威机构研究，轻度儿童听力损失，可以造成GPA1.0的下降,
                  相当于10-15分的下降！
                </p>
                <p> <b>听力影响的不仅仅是儿童的耳朵，而是儿童的全部身心健康。</b></p>
              </span>
        ),
      },
    ],
  },
};
