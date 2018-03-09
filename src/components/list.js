import React, { Component } from 'react'
// import Swiper from 'swiper'
const Swiper = require('swiper').default
export default class video extends Component {

    componentDidMount() {

    }


    render() {
        const propsData = this.props.homeData;
        const profile = propsData.profile || {};
        const fb = propsData.fb || {};
        // 非实体组件需显式返回 null
        return (
            <div className="main-container">
                <div className="main-bottom">
                    <div className="current-event fl">
                        {profile.contentListLeft.map((item,index)=>
                            <div className="item" key={index}>
                                <div className="topic-title">
                                    <img src={item.topic_title} alt="" />
                                </div>
                                <div className="topic-content"
                                    style={{ 'background':`url(${item.topic_center}) center repeat-y`,'backgroundSize': '100%'}}>
                                    <div className="item-content" dangerouslySetInnerHTML={{ __html: item.topic_content }} ></div>
                                </div>
                                <div className="topic-bottom">
                                    <img src={item.topic_bar} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="finance fr">
                        {profile.contentListLRight.map((item, index) =>
                            <div className="item" key={index}>
                                <div className="topic-title">
                                    <img src={item.topic_title} alt="" />
                                </div>
                                <div className="topic-content"
                                    style={{ 'background': `url(${item.topic_center}) center repeat-y`, 'backgroundSize': '100%' }}>
                                    <div className="item-content" dangerouslySetInnerHTML={{ __html: item.topic_content }} ></div>
                                </div>
                                <div className="topic-bottom">
                                    <img src={item.topic_bar} alt="" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{'marginTop': '30px'}} className="fb-comments" data-href={fb.fbComment} data-width="100%" data-numposts="5"></div>
            </div>
        )
    }
}
