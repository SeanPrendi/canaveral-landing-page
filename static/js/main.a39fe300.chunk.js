(this["webpackJsonpcanaveral-landing-page"]=this["webpackJsonpcanaveral-landing-page"]||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/canaveral-logo.7c4b4684.png"},34:function(e,a,t){e.exports=t.p+"static/media/github-logo.76d344f0.svg"},41:function(e,a,t){e.exports=t(51)},46:function(e,a,t){},47:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),o=t.n(r),c=(t(46),t(28)),s=t(33),i=t.n(s),d=t(34),m=t.n(d),h=t(76),p=t(77),v=t(75),u=t(36),g=t(72),E=t(73),w=t(78),b=t(74),x=(t(47),Object(u.a)({shadows:["none"]})),N=Object(g.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,shadows:["none"]},list:{borderColor:"#a46ddb !important",borderWidth:1},dropdownHeaderText:{fontSize:e.typography.pxToRem(18),fontWeight:e.typography.fontWeightRegular,color:"#878787"},dropdownText:{fontSize:e.typography.pxToRem(14),fontWeight:e.typography.fontWeightRegular,color:"#878787"}}}));function f(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var y=function(){var e=l.a.useState(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=function(e){return function(a,t){r(!!t&&e)}},s=function(){var e=Object(n.useState)(f()),a=Object(c.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){function e(){l(f())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),d=s.height,u=s.width,g=N(),y=.75*d<u;return l.a.createElement(E.a,{theme:x},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:i.a,className:"App-logo",alt:"canaveral-logo",style:{paddingTop:y?"":"5vh"}}),l.a.createElement("div",{className:"Body-content",style:{flexDirection:y?"":"column"}},l.a.createElement("div",{className:"Quick-install-container"},l.a.createElement("div",{className:"Quick-install-header"},l.a.createElement("div",{className:"Title-text"},"Quick Install:"),"Homebrew"),l.a.createElement("div",{className:"Install-box",style:{width:y?"":"80vw"}},l.a.createElement("div",{className:"Install-box-inner-container",style:{width:y?"":"80vw"}},l.a.createElement("div",{className:"Install-box-text-container"},l.a.createElement("div",{className:"Install-box-dollar-sign"},"$\xa0"),l.a.createElement("div",{className:"Install-box-text"},"brew tap jchengjr77/homebrew-private https://github.com/jchengjr77/homebrew-private.git")),l.a.createElement("div",{className:"Install-box-text-container"},l.a.createElement("div",{className:"Install-box-dollar-sign"},"$\xa0"),l.a.createElement("div",{className:"Install-box-text"},"brew install canaveral")))),l.a.createElement("div",{className:"Quick-install-method-spacing"}),l.a.createElement("div",{className:"Quick-install-header"},"Go Modules"),l.a.createElement("div",{className:"Install-box",style:{width:y?"":"80vw"}},l.a.createElement("div",{className:"Install-box-inner-container",style:{width:y?"":"80vw"}},l.a.createElement("div",{className:"Install-box-text-container"},l.a.createElement("div",{className:"Install-box-dollar-sign"},"$\xa0"),l.a.createElement("div",{className:"Install-box-text"},"go get github.com/jchengjr77/canaveral")),l.a.createElement("div",{className:"Install-box-text-container"},l.a.createElement("div",{className:"Install-box-dollar-sign"},"$\xa0"),l.a.createElement("div",{className:"Install-box-text"},"go install github.com/jchengjr77/canaveral"))))),y&&l.a.createElement("div",{className:"Vertical-bar"}),!y&&l.a.createElement("div",null,l.a.createElement("div",{style:{padding:"3vmin"}}),l.a.createElement("div",{className:"Horizontal-bar"}),l.a.createElement("div",{style:{padding:"3vmin"}})),l.a.createElement("div",{className:"Info-container"},l.a.createElement("div",null,"Explore:",l.a.createElement("div",{className:"Github-container"},y&&l.a.createElement("a",{href:"https://github.com/jchengjr77/canaveral"},l.a.createElement("img",{src:m.a,className:"Github-logo",alt:"canaveral-logo"})),l.a.createElement("a",{className:"Github-link",href:"https://github.com/jchengjr77/canaveral"},l.a.createElement(b.a,{className:g.dropdownHeaderText,style:{fontSize:y?"":"5vmin"}},"Github.com/jchengjr77/canaveral")))),l.a.createElement("div",{className:"Right-entity-spacing"}),l.a.createElement("div",null,"FAQ:",l.a.createElement("div",{className:g.root,style:{width:y?"":"80vw"}},l.a.createElement(h.a,{expanded:"panel1"===t,onChange:o("panel1")},l.a.createElement(p.a,{expandIcon:l.a.createElement(w.a,null)},l.a.createElement(b.a,{className:g.dropdownHeaderText},"What is Canaveral?")),l.a.createElement(v.a,null,l.a.createElement(b.a,{className:g.dropdownText},"Canaveral is a Command Line Interface (CLI) tool that can add, remove, and view your projects. It is a tool built by developers for developers. Don't worry about where your projects are located, how they are organized, what their names are, or how to set them up. Canaveral does that for you."))),l.a.createElement(h.a,{expanded:"panel2"===t,onChange:o("panel2")},l.a.createElement(p.a,{expandIcon:l.a.createElement(w.a,null)},l.a.createElement(b.a,{className:g.dropdownHeaderText},"Who is it for?")),l.a.createElement(v.a,null,l.a.createElement(b.a,{className:g.dropdownText},"Canaveral is for anyone who doesn't want to deal with setting up projects, ensuring that projects are created the same way every time, or making sure all of their projects are in the same place. In short, Canaveral is for developers everywhere."))),l.a.createElement(h.a,{expanded:"panel3"===t,onChange:o("panel3")},l.a.createElement(p.a,{expandIcon:l.a.createElement(w.a,null)},l.a.createElement(b.a,{className:g.dropdownHeaderText},"How do I use it?")),l.a.createElement(v.a,null,l.a.createElement(b.a,{className:g.dropdownText},"Install Canaveral through either of the methods listed under Quick Install. For more details, click the Github link above to see our project repo and documentation!")))),l.a.createElement("div",{style:{padding:"1vh"}}),l.a.createElement("div",{style:{width:y?"":"80vw"}},"Creators and Contributors",l.a.createElement("div",{className:"Creators-contributors-text"},l.a.createElement("a",{href:"https://github.com/jchengjr77"},l.a.createElement(b.a,{className:g.dropdownHeaderText},"JJ Cheng")),"\xa0",l.a.createElement(b.a,{className:g.dropdownHeaderText},"and"),"\xa0",l.a.createElement("a",{href:"https://github.com/SeanPrendi"},l.a.createElement(b.a,{className:g.dropdownHeaderText},"Sean Prendi"))),l.a.createElement("div",{style:{paddingLeft:"1vw",paddingTop:"1vh"}},l.a.createElement("a",{href:"https://github.com/jchengjr77/canaveral/#contributing"},l.a.createElement(b.a,{className:g.dropdownText},"Interested in helping out?"))))))),l.a.createElement("div",{style:{paddingTop:y?"":"5vh"}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a39fe300.chunk.js.map