(this.webpackJsonpstubbystudios=this.webpackJsonpstubbystudios||[]).push([[0],{31:function(e,t,a){e.exports=a(72)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=a(28),i=a(6),s=a.n(i),m=a(20),u=a(21),d=a(22),f=a(30),h=a(29),E=a(23),p=a.n(E)()("14007530e98df328a8462b0f60f49c8d7d83860e"),b=a(24),v=(a(64),function(e){var t=e.header;return r.a.createElement("header",{role:"banner",className:"header-main",style:{backgroundImage:"url(".concat(t.hero_image,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:t.logo_image,alt:t.logo_alt}),r.a.createElement("h1",null,t.headline),r.a.createElement("h4",null,t.sub_headline)))}),g=(a(65),function(e){var t=e.article;return r.a.createElement("section",{className:"container article"},r.a.createElement("h2",null,t.title),r.a.createElement("div",null,r.a.createElement("p",null,t.body),r.a.createElement("div",{className:"btn-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/careybest/",className:"btn linkedin-btn"},"Connect on LinkedIn"),r.a.createElement("a",{href:"https://my.indeed.com/p/careyb-n8x5j7o",className:"btn indeed-btn"},"Indeed Resume"))))}),k=(a(66),function(e){var t=e.portfolio;return r.a.createElement("section",{className:"container portfolio"},r.a.createElement("h2",{className:"section-title"},t.portfolio_title),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{className:"screenshot",key:t},r.a.createElement("img",{src:e.thumbnail,alt:e.thumbnail_alt}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text))}))))}),w=(a(67),function(e){var t=e.skills;return r.a.createElement("section",{className:"container skills"},r.a.createElement("h2",{className:"section-title"},t.skills_title),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{className:"screenshot",key:t},r.a.createElement("h4",null,e.title),r.a.createElement("img",{src:e.logo,alt:e.alt}))}))))}),y=(a(68),function(e){var t=e.footer;return r.a.createElement("footer",{role:"contentinfo"},r.a.createElement("div",{className:"container page-footer"},r.a.createElement("p",null,"Powered ",r.a.createElement("a",{href:"https://buttercms.com/"},"ButterCMS")," and React"),r.a.createElement("img",{src:t.logo,alt:t.alt})))}),N=function(e){var t=e.header,a=e.article,n=e.portfolio,l=e.skills,c=e.footer;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(v,{header:t}),r.a.createElement("main",{role:"main"},r.a.createElement(g,{article:a}),r.a.createElement(k,{portfolio:n}),r.a.createElement(w,{skills:l})),r.a.createElement(y,{footer:c}))},_=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={fields:{header:"",article:"",portfolio:[],skills:[],footer:[]}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.page.retrieve("*","homepage");case 2:t=e.sent,this.setState({fields:t.data.data.fields});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.fields;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,e.header.seo_title)),r.a.createElement(N,e))}}]),a}(r.a.Component);a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6437e369.chunk.js.map