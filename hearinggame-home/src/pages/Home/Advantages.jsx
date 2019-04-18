import React from 'react';
import { Row, Col } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Advantages extends React.PureComponent {
  getChildrenToRender = (data) =>
    data.map((item,index) => {
      return (

        /*   <div >
             <img src={item.children.img.children}  width="40%" alt="柔性显示屏"/>
             <p {...item.children.content}>{item.children.content.children}</p>
       </div>*/

        <Col key={item.name} {...item}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>
              <img src={item.children.icon.children} height="200px" width="100%" alt="img" />
            </span>
            <p {...item.children.textWrapper}>{item.children.title.children}</p>
          </div>
        </Col>

      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div key="title" {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map((item, i) =>
              React.createElement(
                item.name.indexOf('title') === 0 ? 'h1' : 'div',
                { key: i.toString(), ...item },
                typeof item.children === 'string' &&
                item.children.match(
                  /\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/
                )
                  ? React.createElement('img', {
                    src: item.children,
                    alt: 'img',
                  })
                  : item.children
              )
            )}
          </div>
          <OverPack
            className={`content-template ${props.className}`}
            {...dataSource.OverPack}
          >
            <TweenOneGroup
              component={Row}
              key="ul"
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              {...dataSource.block}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default Advantages;
