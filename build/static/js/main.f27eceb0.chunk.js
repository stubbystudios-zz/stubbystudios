(this.webpackJsonpstubbystudios=this.webpackJsonpstubbystudios||[]).push([[0],{36:function(e,t,a){e.exports=a(78)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=a(17),i=a(9),s=a.n(i),m=a(11),u=a(12),f=a(13),d=a(15),h=a(14),E=a(31),p=a.n(E)()("14007530e98df328a8462b0f60f49c8d7d83860e"),v=a(32),b=(a(69),function(e){var t=e.header;return r.a.createElement("header",{role:"banner",className:"header-main",style:{backgroundImage:"url(".concat(t.hero_image,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:t.logo_image,alt:t.logo_alt}),r.a.createElement("h1",null,t.headline),r.a.createElement("h4",null,t.sub_headline)))}),g=(a(70),function(e){var t=e.article;return r.a.createElement("section",{className:"container article"},r.a.createElement("h2",null,t.title),r.a.createElement("div",null,r.a.createElement("p",null,t.body),r.a.createElement("div",{className:"btn-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/careybest/",className:"btn linkedin-btn"},"Connect on LinkedIn"),r.a.createElement("a",{href:"https://my.indeed.com/p/careyb-n8x5j7o",className:"btn indeed-btn"},"Indeed Resume"))))}),k=(a(71),function(e){var t=e.portfolio;return r.a.createElement("section",{className:"container portfolio"},r.a.createElement("h2",{className:"section-title"},t.portfolio_title),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{className:"screenshot",key:t},r.a.createElement("img",{src:e.thumbnail,alt:e.thumbnail_alt}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text))}))))}),w=(a(72),function(e){var t=e.skills;return r.a.createElement("section",{className:"container skills"},r.a.createElement("h2",{className:"section-title"},t.skills_title),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{className:"screenshot",key:t},r.a.createElement("h4",null,e.title),r.a.createElement("img",{src:e.logo,alt:e.alt}))}))))}),y=(a(73),function(e){var t=e.footer;return r.a.createElement("footer",{role:"contentinfo"},r.a.createElement("div",{className:"container page-footer"},r.a.createElement("p",null,"Powered ",r.a.createElement("a",{href:"https://buttercms.com/"},"ButterCMS")," and React"),r.a.createElement("img",{src:t.logo,alt:t.alt})))}),N=function(e){var t=e.header,a=e.article,n=e.portfolio,c=e.skills,l=e.footer;return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement(b,{header:t}),r.a.createElement("main",{role:"main"},r.a.createElement(g,{article:a}),r.a.createElement(k,{portfolio:n}),r.a.createElement(w,{skills:c})),r.a.createElement(y,{footer:l}))},_=a(2),j=(a(74),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={fields:{contact_me:[]}},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.page.retrieve("*","contact-page");case 2:t=e.sent,this.setState({fields:t.data.data.fields});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.fields;return r.a.createElement("section",{className:"container contact-page"},r.a.createElement("h2",null,e.contact_me.title),r.a.createElement("div",{className:"form-wrapper"},e.contact_me.contact_form))}}]),a}(r.a.Component)),O=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={fields:{header:"",article:"",portfolio:[],skills:[],footer:[]}},n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.page.retrieve("*","homepage");case 2:t=e.sent,this.setState({fields:t.data.data.fields});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.fields;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement("title",null,e.header.seo_title)),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,e)}}),r.a.createElement(_.a,{path:"/ContactPage",component:j})))}}]),a}(r.a.Component);a(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f27eceb0.chunk.js.map