(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{409:function(t,e,r){var content=r(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("0a228bf2",content,!0,{sourceMap:!1})},410:function(t,e,r){"use strict";r.r(e);var n=r(411),l={props:{title:{type:String,default:"Nuove uscite"},items:{type:Array,default:function(){return[]}}},components:{TrackGridItem:n.default}},c=r(4),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",{staticClass:"text-h2 mb-1"},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),e("v-sheet",{attrs:{elevation:"0",color:"transparent"}},[e("v-slide-group",{staticClass:"ml-n2",attrs:{"center-active":""}},this._l(this.items,(function(t,i){return e("v-slide-item",{key:i},[e("track-grid-item",{attrs:{picture:t.picture,name:t.name,country:t.country,city:t.city,stream_url:t.stream_url,isHls:"hls"===t.stream_type}})],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TrackGridItem:r(411).default})},411:function(t,e,r){"use strict";r.r(e);var n={props:{picture:{type:String,default:""},name:{type:String,default:""},city:{type:String,default:""},country:{type:String,default:""},stream_url:{type:String,default:""},isHls:{type:Boolean,default:!0}},methods:{onClick:function(t,title,e,source,r){this.$store.commit("player/SET_CURRENT_TRACK",{cover:t,title:title,subtitle:e,source:source,isHls:r})}},computed:{size:function(){return this.$vuetify.breakpoint.mdAndUp?225:140}}},l=(r(413),r(4)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-3 track-grid__item",attrs:{draggable:"",flat:"",tile:"","max-width":t.size,width:t.$vuetify.breakpoint.mdAndUp?"225px":"290px",color:"transparent"}},[r("v-img",{staticStyle:{"border-radius":"6px !important"},attrs:{src:t.picture,height:t.size,width:"auto"},on:{click:function(e){return t.onClick(t.picture,t.name,t.city+", "+t.country,t.stream_url,t.isHls)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),t._v(" "),r("div",{staticClass:"pt-2 track-grid__item_title"},[r("router-link",{staticClass:"font-weight-medium",attrs:{nuxt:"",to:"/"}},[t._v(t._s(t.name))])],1),t._v(" "),r("div",{staticClass:"text-wrap track-grid__item_subtitle"},[r("router-link",{attrs:{nuxt:"",to:"/"+t.country+"/"+t.city}},[t._v(t._s(t.city))]),t._v(", "),r("router-link",{attrs:{nuxt:"",to:"/"+t.country}},[t._v(t._s(t.country))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,r){"use strict";r.r(e);var n=r(4),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"mx-auto",attrs:{md:"10"}},[this._t("default")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},413:function(t,e,r){"use strict";r(409)},414:function(t,e,r){(e=r(76)(!1)).push([t.i,".track-grid__item a:hover{text-decoration:underline!important}.theme--light .track-grid__item_title a{color:#000!important}.theme--dark .track-grid__item_title a{color:#fff!important}.theme--dark .track-grid__item_subtitle a{color:hsla(0,0%,100%,.7)}.track-grid__item_subtitle{line-height:1.5!important;font-size:.875rem;color:hsla(0,0%,100%,.7)}",""]),t.exports=e},415:function(t,e,r){var content=r(419);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("716a7992",content,!0,{sourceMap:!1})},416:function(t,e,r){"use strict";r.r(e);var n={props:{item:{type:Object,default:function(){return{}}}},methods:{onClick:function(t,title,e,source,r){this.$store.commit("player/SET_CURRENT_TRACK",{cover:t,title:title,subtitle:e,source:source,isHls:r})}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",[t.item.picture?r("v-img",{staticClass:"mr-4",attrs:{"max-width":"32","max-height":"32",src:t.item.picture},on:{click:function(e){return e.stopPropagation(),t.onClick(t.item.picture,t.item.name,t.item.city+", "+t.item.country,t.item.stream_url,"hls"===t.item.stream_type)}}}):r("v-btn",{staticClass:"mr-4 ml-n1",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(t.item.picture,t.item.name,t.item.city+", "+t.item.country,t.item.stream_url,"hls"===t.item.stream_type)}}},[r("v-icon",{attrs:{size:"22",color:"grey"}},[t._v(" mdi-radio ")])],1),t._v(" "),r("v-list-item-title",{staticClass:"font-weight-medium",domProps:{innerHTML:t._s(t.item.name)},on:{click:function(e){return t.onClick(t.item.picture,t.item.name,t.item.city+", "+t.item.country,t.item.stream_url,"hls"===t.item.stream_type)}}}),t._v(" "),r("v-list-item-title",{staticClass:"grey--text",staticStyle:{"max-width":"320px"}},[r("nuxt-link",{staticClass:"track-list__item_link",attrs:{to:t.item.country+"/"+t.item.city},domProps:{textContent:t._s(t.item.city+",")}}),t._v(" "),r("nuxt-link",{staticClass:"track-list__item_link",attrs:{to:"/"+t.item.country}},[t._v("\n      "+t._s(t.item.country)+"\n    ")])],1),t._v(" "),r("v-list-item-title",{staticClass:"grey--text"},[t._l(t.item.genres,(function(e,i){return[r("nuxt-link",{key:e,staticClass:"track-list__item_link",attrs:{to:"/genre/"+e},domProps:{textContent:t._s(e)}}),t._v(" "),i<t.item.genres.length-1?r("span",{key:i,staticClass:"ml-n1 mr-1"},[t._v("•")]):t._e()]}))],2),t._v(" "),r("v-list-item-action",{staticClass:"text-right mr-6"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-heart-outline")])],1)],1),t._v(" "),r("v-list-item-action",{staticClass:"text-right"},[r("v-btn",{attrs:{icon:"",color:"grey"}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},417:function(t,e,r){"use strict";r.r(e);var n={props:{item:{type:Object,default:function(){return{}}}},methods:{onClick:function(t,title,e,source,r){this.$store.commit("player/SET_CURRENT_TRACK",{cover:t,title:title,subtitle:e,source:source,isHls:r})}}},l=r(4),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{staticClass:"px-0"},[t.item.picture?r("v-img",{staticClass:"mr-4 ml-2",attrs:{"max-width":"32","max-height":"32",src:t.item.picture},on:{click:function(e){return e.stopPropagation(),t.onClick(t.item.picture,t.item.name,t.item.city+", "+t.item.country,t.item.stream_url,"hls"===t.item.stream_type)}}}):r("v-btn",{staticClass:"mr-4 ml-1",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(t.item.picture,t.item.name,t.item.city+", "+t.item.country,t.item.stream_url,"hls"===t.item.stream_type)}}},[r("v-icon",{attrs:{size:"22",color:"grey"}},[t._v(" mdi-radio ")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"font-weight-medium",domProps:{innerHTML:t._s(t.item.name)},on:{click:function(e){return t.onClick(t.item.picture,t.item.name,t.item.city+", "+t.item.country,t.item.stream_url,"hls"===t.item.stream_type)}}}),t._v(" "),r("v-list-item-subtitle",{staticClass:"grey--text"},[t._l(t.item.genres,(function(e,i){return[r("nuxt-link",{key:e,staticClass:"track-list__item_link",attrs:{to:"/genre/"+e},domProps:{textContent:t._s(e)}}),t._v(" "),i<t.item.genres.length-1?r("span",{key:i,staticClass:"ml-n1 mr-1"},[t._v("•")]):t._e()]}))],2)],1),t._v(" "),r("v-list-item-action",{staticClass:"text-right"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"grey"}},[t._v("mdi-heart-outline")])],1)],1),t._v(" "),r("v-list-item-action",{staticClass:"text-right ml-0"},[r("v-btn",{attrs:{icon:"",color:"grey"}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,r){"use strict";r(415)},419:function(t,e,r){(e=r(76)(!1)).push([t.i,".track-list__item_link{color:#9e9e9e!important;text-decoration:none;line-height:1.5!important;margin-right:4px}",""]),t.exports=e},420:function(t,e,r){"use strict";r.r(e);var n=r(416),l=r(417),c={props:{items:{type:Array,default:function(){return[]}}},components:{TrackListItemDesktop:n.default,TrackListItemMobile:l.default}},o=(r(418),r(4)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list",{attrs:{color:"transparent"}},[t._l(t.items,(function(e,i){return[t.$vuetify.breakpoint.mdAndUp?r("track-list-item-desktop",{key:e._id,attrs:{item:e}}):r("track-list-item-mobile",{key:e._id,attrs:{item:e}}),t._v(" "),i<t.items.length-1?r("v-divider",{key:i}):t._e()]}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TrackListItemDesktop:r(416).default,TrackListItemMobile:r(417).default})},421:function(t,e,r){"use strict";r.r(e);r(25);var n=r(5),l=r(412),c=r(410),o={components:{PageTemplate:l.default,TrackGridFeatured:c.default},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getByCountry("Italy",20);case 2:return r=e.sent,t.italy_radios=r.docs,e.next=6,t.$api.getByCountry("Spain",20);case 6:return n=e.sent,t.spain_radios=n.docs,e.next=10,t.$api.getByGenre("Ambient Chillout",20);case 10:return l=e.sent,t.chillout=l.docs,e.next=14,t.$api.getByGenre("Pop",20);case 14:return c=e.sent,t.pop=c.docs,e.next=18,t.$api.getByGenre("Electro",20);case 18:o=e.sent,t.electro=o.docs;case 20:case"end":return e.stop()}}),e)})))()},data:function(){return{italy_radios:[],spain_radios:[],chillout:[],pop:[],electro:[]}}},m=r(4),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page-template",[r("track-grid-featured",{staticClass:"mb-8",attrs:{title:"Top Radio in Italy",items:t.italy_radios}}),t._v(" "),r("track-grid-featured",{staticClass:"mb-8",attrs:{title:"Top Radio in Spain",items:t.spain_radios}}),t._v(" "),r("h2",{staticClass:"text-h2 mb-1"},[t._v("\n    Chillout Radio\n  ")]),t._v(" "),r("track-list",{staticClass:"mb-8",attrs:{items:t.chillout}}),t._v(" "),r("h2",{staticClass:"text-h2 mb-1"},[t._v("\n    Pop Radio\n  ")]),t._v(" "),r("track-list",{staticClass:"mb-8",attrs:{items:t.pop}}),t._v(" "),r("h2",{staticClass:"text-h2 mb-1"},[t._v("\n    Electro Radio\n  ")]),t._v(" "),r("track-list",{staticClass:"mb-8",attrs:{items:t.electro}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TrackGridFeatured:r(410).default,TrackList:r(420).default,PageTemplate:r(412).default})}}]);