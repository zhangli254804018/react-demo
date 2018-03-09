import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'
import * as types from './mutation-types'
import initState from './state'
// import axios from 'axios'
// fetch(`http://www.subreddit.com/r/${subreddit}.json`)
// .then(response => response.json())
// .then(json =>

//   // 可以多次 dispatch！
//   // 这里，使用 API 请求结果来更新应用的 state。

//   dispatch(receivePosts(subreddit, json))
// )
// fetchJsonp('/users.jsonp', {
//     timeout: 3000,
//     jsonpCallback: 'custom_callback'
//   })
//   .then(function(response) {
//     return response.json()
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })

// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

function receiveUser(subreddit) {
    return {
        type: types.USER_INFO,
        subreddit
    }
}

function receiveCity(subreddit) {
    return {
        type: types.HOME_INFO,
        subreddit
    }
}

export const fetchUser = (obj) => {
    if (!obj) obj = {}
    return dispatch => {
    fetchJsonp(initState.request.PGuser)
        .then(response => response.json())
        .then(json =>
            dispatch(receiveUser(subreddit, json))
        )
    }
}

export const fetchCity = (obj) => {
    if (!obj) obj = {}
    return dispatch => {
        fetch(initState.request.PGcity)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveCity(json))
            )
    }
}




export default {
    fetchUser,
    fetchCity
}