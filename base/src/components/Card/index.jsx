import React from 'react'
import './index.scss'


export interface CardProps {
  title: string,
  renderTitle: Function,    //  类似vue的具名插槽
  children: React.ReactNode
}

export default function(props: CardProps) {
    let cardWrap = {
     width:'200px',
     margin:'20px'
    }

    const {title,renderTitle} = props 
    let titleEl = renderTitle? renderTitle():<span>{title}</span>
  return (
      <div style={cardWrap}>
        <div className="card">
            <div className="card__title">
                <span>{titleEl}</span>
            </div>
            <div className="card__body">
                {/**每个组件都可以获取到 props.children。它包含组件的开始标签和结束标签之间的内容 */}
                {props.children}
            </div>
        </div>
      </div>
  );
}
