import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import { Tooltip } from 'antd';
import 'antd/lib/tooltip/style/css'

import './styles.css'



class Day extends React.Component {
  constructor() {
    super();
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  state = {
    hovered: false,
  };

  mouseEnter = () => {
    this.setState({
      hovered: true,
    })
  }

  mouseLeave = () => {
    this.setState({
      hovered: false,
    })
  }


  render = () => {
    const { postCount, date = '05/05/2017', className = classnames('blue', 'is-level-2')} = this.props;
    const hoveredClass = {
      'is-hovered': this.state.hovered,
    };
    const text = (
      <span>
        <span>{`${postCount} pedido${postCount === 1 ? '' : 's'} `}</span>
        <span>{date}</span>
      </span>
    )
    return (
      <Tooltip
        title={text}
      >
        <div
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          className={ classnames('post-trends_day', hoveredClass, className)}
        >
        </div>
      </Tooltip>
    );
  }
}

export default Day;
