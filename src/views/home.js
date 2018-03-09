import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions'
import 'assets/less/main.less'
import Video from 'components/video'
import Photo from 'components/photo'
import List from 'components/list'
class homeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onHash(hash) {
    const state = this.props
    const router = state.router
    router.push(hash)
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { actions } = this.props
    const xlacon = document.getElementById('xla-container');
    xlacon.style.display = 'block';

    window.fbAsyncInit = function () {
      FB.init({
        appId: 1382678158693829,
        xfbml: true,
        version: 'v2.4'
      });
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/zh_TW/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.rcAsyncInit = function () {
      RC.init({
        appId: 100000,
        reload: false,
        redirect: ''
      });
      RC.Event.subscribe('login', function (ret) {

        if (ret && ret.uid) {
          conf.userInfo = ret;
          $('#nav-login').hide();
          $('#nav-profile').find('.t-nav-nick').text(ret.nick).end().show();
        }

      });

      RC.Event.subscribe('logout', function (ret) {
        $('#nav-profile').hide();
        $('#nav-login').show();
      });

      RC.getLoginStatus(function () {
        if (!RC.isLogin) {
          // return RC.open()
        };
      });
    };
    (function (d) {
      var js, id = 'raidcall-jssdk', ref = d.getElementsByTagName('head')[0], date = new Date();
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = '/login/all.js?v=' + date.getFullYear() + date.getMonth() + date.getDate();
      ref.appendChild(js);
    })(document);
    // actions.fetchCity()
  }

  render() {
    const { home } = this.props;
    const homeData = home;
    const profile = home.profile || {};
    return (
      <div className="warp">
        <div className="nav">
          <div className="nav-wrap">
            <div className="nav-l">
              <div className="nav-logo fl">
                <a href="/" title="返回首页"><img src={require('assets/img/logo_rcshow_v2.png') } alt="RC直播" /></a>
              </div>
              <div className="nav-menu fl">
                <a href="/">首頁</a><span className="nav-line"></span>
                <a href="/index.php?c=newHome&amp;a=family">娛樂家族</a><span className="nav-line"></span>
                <a href="/index.php?c=newHome&amp;a=ranking">排行榜</a><span className="nav-line"></span>
                <a href="/index.php?c=newHome&amp;a=act">活動中心</a>
              </div>
            </div>
            <div className="nav-r">
              <div className="nav-sub">
                <div className="nav-pane fl">
                  <div className="nav-login" id="nav-login">
                    <a href="javascript:;" onClick={() => RC && RC.login()}>登入</a>
                    <a href="javascript:;" onClick={() => RC && RC.reg()}>註冊</a>
                  </div>
                  <div className="nav-profile" id="nav-profile" style={{ display: 'none' }}>
                    <a href="/index.php?c=showroom&amp;a=baseInfo" className="nav-profile-item t-nav-nick" target="_blank">nick</a>
                    <a href="javascript:;" className="nav-profile-item t-nav-charge" onClick={() => RaidPay && RaidPay.charge()}>儲值</a>
                    <a href="javascript:;" className="nav-profile-item t-nav-logout" onClick={() => RC && RC.logout()}>退出</a>
                  </div>
                </div>
                <div className="nav-ext fl">
                  <a href="/view/sign/index.php" className="t-nav-join" target="_blank">我要做視訊藝人</a>
                  <a href="/apps/download/" id="j-t-nav-download" target="_blank">下載APP</a>
                  <a href="javascript:" onClick={() => RC && RC.feedback()}>意見反饋</a>
                  <a href="/live/livesupport">在線客服</a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-border"></div>
        </div>
        <div className="rcNew clearfix">
          <div className="bannerWarp">
            <div id="bannerWarp">
              <div className="banner" style={{ 'background': `url(${profile.banner}) top center`, 'backgroundSize': 'cover' }}>
                <div className="banner-container">
                  <div className="banner-cover" style={{ 'background': 'url() center', 'backgroundSize': '100% 100%' }}></div>
                </div>
                {/* <img src="assets/img/header/banner.jpg" /> */}
              </div>
            </div>
          </div>
          <div className="mainWrap" id="app">
            <div className="mainInfo">
              <Video homeData={homeData}></Video>
              <Photo homeData={homeData}></Photo>
              <List homeData={homeData}></List>
            </div>
          </div>
        </div>
        <div className="ft-bd clearfix">
          <p>此活動一切解釋權歸RC所有</p>
          <span className="ft-sup">
            <a href="http://www.raidcall.com.tw" target="_blank">關於我們</a>
            <a href="http://www.raidcall.com.tw/agreement.php?lang=zh-tw" target="_blank">服務協議</a>
            <a href="http://forum.raidcall.com.tw/forum.php" target="_blank">社區幫助</a>
            <a href="javascript:;">客服群 : 10</a>
          </span>
          <p className="copyright">Copyright@2015 rcshow.tv All Rights Reserved.</p>
        </div>
        <div id="fb-root"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { home: state.homeState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homeView)
