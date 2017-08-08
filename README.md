# vue-proto

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## 版本历史

* v0.4.2, 识别mp4，使用native方式播放，iPhone video play inline
* v0.4.1, 识别移动浏览器和safari，使用native hls，其他情况，使用hls.js
* v0.4, 实现video标签支持hls播放，同时确定放弃videojs+hls插件方案
* v0.3，实现封装videojs的video组件
* v0.2, 实现最简单的video组件
* v0.1，最简单的html5 mp4 video播放
