(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t){e.exports={BASE_URL:"https://api.d-sektionen.se"}},22:function(e,t,a){e.exports={topBar:"loggedIn_topBar__1iO--"}},25:function(e,t,a){e.exports={path:"pixels_path__2IsGG"}},26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),i=(a(31),a(1)),l=a(2),c=a(5),u=a(3),h=a(4),d=a(6),m=a(10),p=a.n(m),b=a(11),v=a(22),f=a.n(v),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:f.a.topBar},r.a.createElement("div",null,"Inloggad som: ",this.props.name),r.a.createElement("a",{href:"#",className:"button",onClick:this.props.logout},"Logga ut"))}}]),t}(n.Component),j=a(8),E=a.n(j),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.above},this.props.children)}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.content},this.props.children)}}]),t}(n.Component),_=a(12),w=a(23),k=a.n(w),y=a(9),z=a.n(y),M=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),e.user.profile||(e.user.profile={}),a.state={liuCardId:e.user.profile.liu_card_id,firstName:e.user.first_name,lastName:e.user.last_name,errors:{}},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(_.a)({},e,t.target.value))}},{key:"handleSubmit",value:function(e){var t=this,a=b.BASE_URL+"/account/user/me/",n=p.a.get("token");this.setState({error:void 0,success:void 0,errors:{}}),k.a.put(a,{first_name:this.state.firstName,last_name:this.state.lastName,profile:{liu_card_id:this.state.liuCardId}},{headers:{Authorization:"JWT "+n}}).then(function(e){e.status<300&&t.setState({success:"\xc4ndringarna har sparats."})}).catch(function(e){e.response?400===e.response.status?t.setState({errors:e.response.data}):t.setState({error:"N\xe5got gick fel."}):t.setState({error:"N\xe4tverksfel."})}),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{className:z.a.inputLabel},"F\xf6rnamn:",r.a.createElement("input",{value:this.state.firstName,onChange:function(t){return e.handleChange("firstName",t)}})),this.state.errors.first_name&&r.a.createElement("div",{className:z.a.error},this.state.errors.first_name)),r.a.createElement("div",null,r.a.createElement("label",{className:z.a.inputLabel},"Efternamn:",r.a.createElement("input",{value:this.state.lastName,onChange:function(t){return e.handleChange("lastName",t)}})),this.state.errors.last_name&&r.a.createElement("div",{className:z.a.error},this.state.errors.last_name)),r.a.createElement("div",null,r.a.createElement("label",{className:z.a.inputLabel},"LiU-kortnummer:",r.a.createElement("input",{value:this.state.liuCardId,onChange:function(t){return e.handleChange("liuCardId",t)}})),this.state.errors.profile&&this.state.errors.profile.liu_card_id&&r.a.createElement("div",{className:z.a.error},this.state.errors.profile.liu_card_id)),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Spara",className:"".concat(z.a.submit," button")})),r.a.createElement("div",null,this.state.error&&r.a.createElement("div",{className:z.a.error},this.state.error),this.state.success&&r.a.createElement("div",{className:z.a.success},this.state.success)))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loading:!0},a.success=a.success.bind(Object(d.a)(Object(d.a)(a))),a.failure=a.failure.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=b.BASE_URL+"/account/user/me",t=p.a.get("token");fetch(e,{headers:new Headers({Authorization:"JWT "+t})}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(this.success).catch(this.failure),this.props.setLoading(!0)}},{key:"success",value:function(e){this.props.setLoading(!1),this.setState({loading:!1,success:!0,data:e})}},{key:"failure",value:function(){this.props.setLoading(!1),this.setState({loading:!1,success:!1})}},{key:"render",value:function(){return this.state.loading?r.a.createElement(r.a.Fragment,null):this.state.success?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(g,{name:this.state.data.username,logout:t.logout})),r.a.createElement(C,null,r.a.createElement("div",null,0!==this.state.data.sections.length?"Du \xe4r medlem i ".concat(this.state.data.sections.map(function(e){return e.name}).join(", "),"."):"Du saknar sektionsmedlemsskap."),r.a.createElement(M,{user:this.state.data}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement("a",{href:"#",className:"button",onClick:t.logout},"Logga ut")),r.a.createElement(C,null,r.a.createElement("p",null,"Inloggningen misslyckades, testa igen.")))}}],[{key:"logout",value:function(){p.a.remove("token"),window.location.reload()}}]),t}(n.Component),H=a(24),L=a(25),x=a.n(L),S=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).dColors={blue:"#20407C",yellow:"#F7E623",cerise:"#E5398D",brown:"#754022",green:"#70BD44"},e.originalPixels={"M52.742 74.106h10.769v10.485H52.742z":e.dColors.blue,"M76.128 74.106h10.769v10.485H76.128z":e.dColors.green,"M87.825 74.106h10.764v10.485H87.825z":e.dColors.cerise,"M98.589 96H87.825V85.517h10.764z":e.dColors.yellow,"M98.589 107.411H87.825V96.926h10.764z":e.dColors.brown,"M87.825 131.156h10.764v10.484H87.825z":e.dColors.brown,"M86.897 107.411H76.128V96.926h10.769z":e.dColors.blue,"M64.436 119.748h10.766v10.483H64.436z":e.dColors.brown,"M75.202 96H64.436V85.517h10.766z":e.dColors.brown,"M87.825 142.567h10.764v10.483H87.825z":e.dColors.yellow,"M99.516 142.567h10.77v10.483h-10.77z":e.dColors.cerise,"M121.978 164.46h-10.766v-10.483h10.766z":e.dColors.green,"M63.51 118.821H52.741v-10.485H63.51z":e.dColors.blue,"M75.202 118.821H64.436v-10.485h10.766z":e.dColors.green,"M41.049 74.106h10.767v10.485H41.049z":e.dColors.brown,"M41.049 96.926h10.767v10.485H41.049z":e.dColors.yellow,"M52.742 131.156h10.769v10.484H52.742z":e.dColors.yellow,"M75.202 153.05H64.436v-10.483h10.766z":e.dColors.blue,"M29.355 119.748h10.768v10.483H29.355z":e.dColors.cerise,"M87.825 165.386h10.764v10.485H87.825z":e.dColors.brown,"M134.597 165.386h10.768v10.485h-10.768z":e.dColors.cerise,"M64.436 62.697h10.766v10.482H64.436z":e.dColors.yellow,"M29.355 62.697h10.768v10.482H29.355z":e.dColors.green,"M76.128 51.284h10.769V61.77H76.128z":e.dColors.blue,"M75.202 107.411H64.436V96.926h10.766z":e.dColors.cerise,"M87.825 108.336h10.766v10.485H87.825z":e.dColors.cerise,"M63.51 96H52.741V85.517H63.51z":e.dColors.green,"M99.516 62.697h10.77v10.482h-10.77z":e.dColors.brown},e.state={pixels:e.originalPixels},e.setRandomColors=e.setRandomColors.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateLoaderInterval()}},{key:"componentDidUpdate",value:function(e){e.loading!==this.props.loading&&this.updateLoaderInterval()}},{key:"render",value:function(){var e=this;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 154.68 166.116"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"a"},r.a.createElement("path",{d:"M0 226.77h850.39V0H0z"}))),r.a.createElement("g",{clipPath:"url(#a)",transform:"matrix(1.33333 0 0 -1.33333 -39.13999942 234.4946576)"},Object.keys(this.state.pixels).map(function(t){return r.a.createElement("path",{key:t,className:x.a.path,d:t,fill:e.state.pixels[t]})})))}},{key:"updateLoaderInterval",value:function(){this.props.loading?this.interval=window.setInterval(this.setRandomColors,300):(this.interval&&window.clearInterval(this.interval),this.interval=null,this.setState({pixels:this.originalPixels}))}},{key:"setRandomColors",value:function(){var e=this;this.setState({pixels:Object.keys(this.originalPixels).reduce(function(t,a){return Object(H.a)({},t,Object(_.a)({},a,e.randomColor()))},{})})}},{key:"randomColor",value:function(){var e=Object.keys(this.dColors);return this.dColors[e[e.length*Math.random()<<0]]}}]),t}(n.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.app},r.a.createElement("div",{className:E.a.pixels},r.a.createElement(S,{loading:this.props.loading})),r.a.createElement("div",{className:E.a.containerWrapper},r.a.createElement("div",{className:E.a.container},this.props.children)))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.below},this.props.children)}}]),t}(n.Component),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={loading:!1},e.setLoading=e.setLoading.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=b.BASE_URL+"/account/token?redirect="+window.location.href,t=p.a.get("token");return r.a.createElement(I,{loading:this.state.loading},void 0!==t?r.a.createElement(N,{setLoading:this.setLoading}):r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement("p",null,"Genom att logga in h\xe4r kan du uppdatera din profil i v\xe5r databas, inloggningen sker via LiUs centrala inloggningssystem.")),r.a.createElement(B,null,r.a.createElement("a",{href:e,className:"button"},"Logga in"))))}},{key:"setLoading",value:function(e){this.setState({loading:e})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(20),V=a(10);!function(){var e=D.parse(window.location.search.slice(1));void 0!==e.token&&(V.set("token",e.token),window.history.replaceState(window.history.state,window.history.pageTitle,window.location.pathname))}(),o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports={app:"layout_app__2wCEk",pixels:"layout_pixels__3PuTl",containerWrapper:"layout_containerWrapper__Dkm3Z",container:"layout_container__2i9B0",above:"layout_above__2z1lt",content:"layout_content__GxKJl",below:"layout_below__13ap8"}},9:function(e,t,a){e.exports={inputLabel:"preferences_inputLabel__WQPtR",submit:"preferences_submit__2Rndh",error:"preferences_error__2Vehg",success:"preferences_success__3S5iZ"}}},[[26,2,1]]]);
//# sourceMappingURL=main.5f8bca39.chunk.js.map