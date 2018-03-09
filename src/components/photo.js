import React, { Component } from 'react'
// import Swiper from 'swiper'
// const Swiper = require('swiper').default
import Swiper from 'swiper/dist/js/swiper.js'
import { addEvent} from 'api/util'
export default class video extends Component {

    componentDidMount() {
        var vm  =this
        var mySwiper = vm.mySwipers()
        mySwiper.onResize();
        // mySwiper.update();
        window.onresize = function(){
            vm.mySwipers()
        }
    }

    mySwipers(){
        return new Swiper('#swiper-containers', {
            slidesPerView: document.body.clientWidth > 720 ? 4 : 2,
            spaceBetween: 12,
            slidesPerGroup: 2,
            loop: false,
            // loopFillGroupWithBlank: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            observer: true,
            observeParents: true
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // }
        });
    }

    componentWillMount() {
    }

    render() {
        const propsData = this.props.homeData;
        const profile = propsData.profile || {};
        // 非实体组件需显式返回 null
        return (
            <div className="photo">
                <div className="top">
                    <p className="title"></p>
                </div>
                <div className="imgWrap">
                    <div className="photo-main">
                        <div className="swiper-container" id="swiper-containers">
                            <div className="swiper-wrapper">
                                {profile.lifeList.map((item, index) =>
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.url} />
                                    </div>
                                )}
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <img src={require('assets/img/4/info/b-bar.png')} className="title" />
                </div>
            </div>
        )
    }
}
