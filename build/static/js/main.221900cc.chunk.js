(this.webpackJsonpstubbystudios=this.webpackJsonpstubbystudios||[]).push([[0],{23:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(4),i=a.n(o),s=a(14),m=a(15),u=a(16),h=a(22),f=a(21),d=a(17),E=a.n(d)()("14007530e98df328a8462b0f60f49c8d7d83860e"),p=a(18),g=(a(57),a(58),function(e){return console.log("THE DATA","".concat(e.header.headline)),r.a.createElement("header",{role:"banner",className:"header-main",style:{backgroundImage:"url(".concat(e.header.hero_image,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:e.header.logo_image,alt:e.header.logo_alt}),r.a.createElement("h1",null,e.header.headline),r.a.createElement("h4",null,e.header.sub_headline)))}),b=(a(59),function(e){return r.a.createElement("section",{className:"container article"},r.a.createElement("h2",null,e.article.title),r.a.createElement("div",null,r.a.createElement("p",null,e.article.body)))}),v=(a(60),function(e){return r.a.createElement("section",{className:"container portfolio"},r.a.createElement("h2",{className:"section-title"},e.portfolio_title),r.a.createElement("ul",null,e.portfolio.map((function(e,t){return r.a.createElement("li",{className:"screenshot",key:t},r.a.createElement("img",{src:e.thumbnail,alt:e.thumbnail_alt}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text))}))))}),k=(a(61),function(e){return r.a.createElement("section",{className:"container skills"},r.a.createElement("h2",{className:"section-title"},e.skills_title),r.a.createElement("ul",null,e.skills.map((function(e,t){return r.a.createElement("li",{className:"screenshot",key:t},r.a.createElement("h4",null,e.title),r.a.createElement("img",{src:e.logo,alt:e.alt}))}))))}),w=(a(62),function(e){return r.a.createElement("footer",{role:"contentinfo"},r.a.createElement("div",{className:"container page-footer"},r.a.createElement("p",null,"Powered ",r.a.createElement("a",{href:"https://buttercms.com/"},"ButterCMS")," and React"),r.a.createElement("img",{src:e.footer.logo,alt:e.footer.alt})))}),y=function(e){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(g,e),r.a.createElement("main",{role:"main"},r.a.createElement(b,e),r.a.createElement(v,e),r.a.createElement(k,e)),r.a.createElement(w,e))},N=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={fields:{header:"",article:"",portfolio:[],skills:[],footer:[]}},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.match,e.next=3,E.page.retrieve("*","homepage");case 3:t=e.sent,this.setState({fields:t.data.data.fields});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.fields;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement("title",null,e.header.seo_title)),r.a.createElement(y,e))}}]),a}(r.a.Component);a(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.221900cc.chunk.js.map