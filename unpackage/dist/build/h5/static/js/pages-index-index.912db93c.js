(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0105":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":e.indicatorDots,autoplay:e.autoplay,interval:e.interval,duration:e.duration}},e._l(e.slides,function(t){return i("v-uni-swiper-item",{key:t.id},[i("v-uni-image",{staticClass:"item-img",attrs:{src:t.image}}),i("v-uni-view",{staticClass:"content-wrap"},[i("v-uni-view",{staticClass:"sub_header"},[e._v(e._s(t.sub_header))]),i("v-uni-view",{staticClass:"header"},[e._v(e._s(t.header))]),i("v-uni-view",{staticClass:"description"},[e._v(e._s(t.description))])],1),i("v-uni-view",{staticClass:"mores"},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.yuyue()}}},[e._v("预约驾驶")]),i("v-uni-text",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.todetails(t.id)}}},[e._v("查看详情")])],1)],1)}),1),i("v-uni-view",{staticClass:"vehicles"},e._l(e.vehicles,function(t){return i("v-uni-view",{key:t.id,staticClass:"vehicles-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.todetails(t.id)}}},[i("v-uni-image",{attrs:{src:t.image}}),i("v-uni-view",{staticClass:"content-wrap"},[i("v-uni-view",{staticClass:"header"},[e._v(e._s(t.header))]),i("v-uni-view",{staticClass:"sub_header"},[e._v(e._s(t.sub_header))]),i("v-uni-view",{staticClass:"description"},[e._v(e._s(t.description))])],1)],1)}),1)],1)},s=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return s}),i.d(t,"a",function(){return n})},"0e05":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper[data-v-c0aedb96]{height:86vh}.swiper .item-img[data-v-c0aedb96]{width:%?750?%;height:%?420?%}.swiper .content-wrap[data-v-c0aedb96]{text-align:center;margin-top:%?80?%}.swiper .content-wrap .sub_header[data-v-c0aedb96]{font-size:%?34?%;color:#777;text-transform:uppercase;letter-spacing:%?6?%}.swiper .content-wrap .header[data-v-c0aedb96]{font-size:%?60?%;color:#3cc51f;font-weight:700;line-height:%?160?%}.swiper .content-wrap .description[data-v-c0aedb96]{color:#999;font-size:%?40?%}.swiper .mores[data-v-c0aedb96]{text-align:center;margin-top:%?100?%}.swiper .mores uni-text[data-v-c0aedb96]{background:#ddd;color:#000;font-size:%?32?%;padding:%?18?% %?26?%}.swiper .mores uni-text[data-v-c0aedb96]:nth-child(2){background:#3cc51f;color:#fff}.vehicles[data-v-c0aedb96]{padding:%?35?%}.vehicles-item[data-v-c0aedb96]{border-radius:%?14?%;box-shadow:%?0?% %?0?% %?20?% #ccc;margin-bottom:%?40?%}.vehicles-item .content-wrap[data-v-c0aedb96]{padding:%?20?%;padding-bottom:%?60?%}.vehicles-item .content-wrap .header[data-v-c0aedb96]{font-size:%?48?%;color:#3cc51f;font-weight:700;line-height:2em}.vehicles-item .content-wrap .sub_header[data-v-c0aedb96]{font-size:%?30?%;color:#3cc51f;text-transform:uppercase}.vehicles-item .content-wrap .sub_header[data-v-c0aedb96]:after{content:"";display:block;width:%?100?%;height:%?4?%;background:#3cc51f;margin-top:%?10?%}.vehicles-item .content-wrap .description[data-v-c0aedb96]{color:#777;font-size:%?32?%;margin-top:%?40?%}.vehicles-item uni-image[data-v-c0aedb96]{width:100%;height:%?450?%;border-radius:%?14?%;display:block}',""])},"0e7c":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,slides:[],vehicles:[]}},onLoad:function(){this.getindex(),this.getvehicles()},methods:{getindex:function(){var e=this;uni.request({url:"https://web58.top/zt/json/nhqc/slides.json",success:function(t){e.slides=t.data.slides}})},getvehicles:function(){var e=this;uni.request({url:"https://web58.top/zt/json/nhqc/vehicles.json",success:function(t){e.vehicles=t.data.vehicles}})},yuyue:function(){uni.showToast({title:"暂不支持",duration:2e3,icon:"none",position:"bottom"})},todetails:function(e){uni.navigateTo({url:"/pages/details/details?id="+e})}}};t.default=n},7118:function(e,t,i){"use strict";i.r(t);var n=i("0105"),a=i("ed21");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("8383");var c,r=i("f0c5"),o=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"c0aedb96",null,!1,n["a"],c);t["default"]=o.exports},8383:function(e,t,i){"use strict";var n=i("c648"),a=i.n(n);a.a},c648:function(e,t,i){var n=i("0e05");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1dc70e32",n,!0,{sourceMap:!1,shadowMode:!1})},ed21:function(e,t,i){"use strict";i.r(t);var n=i("0e7c"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a}}]);