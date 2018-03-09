import React, { Component } from 'react'
import { getYoutubeURLs } from 'api/filters.js'
import { sharefacebook} from 'api/util'
export default class video extends Component {

    componentWillMount() {

    }

    shareFacebook(){
        sharefacebook()
    }

    render() {
        const propsData = this.props.homeData;
        const profile = propsData.profile || {};
        const fb = propsData.fb || {};
        const youtubeUrl = getYoutubeURLs(profile.youtube)['embed']
        // 非实体组件需显式返回 null
        return (
            <div className="data">
                <div className="dataWrap">
                    <div className="top">
                        <p className="title"></p>
                    </div>
                    <div className="warps clearfix">
                        <div className="movie">
                            <iframe className="" id="rcvideo" src={ youtubeUrl } ></iframe>
                        </div>
                        <div className="text">
                            <div className="text-fb-like">
                                <div className="fb-like" data-href={ fb.fbzan }
                                data-layout="button_count" data-action="like" data-show-faces="true" data-share="true" ></div>
                                <div className="share-facebook">
                                    <a className="btn-share" onClick={() => this.shareFacebook() }></a>
                                </div>
                            </div>
                            <p><span className="arrow">></span><span> 藝名：</span>{profile.nickname}</p>
                            <p><span className="arrow">></span><span> 英文名：</span>{profile.ename} </p>
                            <p><span className="arrow">></span><span> 常駐家族：</span>{profile.family}</p>
                            <p>
                                <span className="arrow">></span><span> 直播間網址：</span>
                                <a href={ profile.liveUrl } target="_blank">{profile.liveUrls}</a>
                            </p>
                            <p>
                                <span className="arrow">></span><span> 粉絲團：</span>
                                <a href={ profile.fansfbUrl } target="_blank">{profile.fansUrl}</a>
                            </p>
                            <p><span className="arrow">></span><span> 開播時間：</span>{profile.liveTime}</p>
                            <p><span className="arrow">></span><span> 血型：</span>{profile.boold}</p>
                            <p><span className="arrow">></span><span> 星座：</span>{profile.star}</p>
                            <p><span className="arrow">></span><span> 生日：</span>{profile.birthday}</p>
                            <p><span className="arrow">></span><span> 特長：</span>{profile.specialy}</p>
                            <p><span className="arrow">></span><span> 嗜好：</span>{profile.like}</p>
                            <p><span className="arrow">></span><span> 最喜愛食物：</span>{profile.favfood}</p>
                            <p><span className="arrow">></span><span> 最喜愛歌星：</span>{profile.favsinger}</p>
                            <p><span className="arrow">></span><span> 最喜愛運動：</span>{profile.favsport}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <img src={require('assets/img/4/info/b-bar.png')} className="title" />
                    </div>
                </div>
            </div>
        )
    }
}
