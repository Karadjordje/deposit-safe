(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),i=a.n(c),l=(a(14),a(2)),r=a(3),o=a(5),m=a(4),u=a(6),h=a(1),d=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"screen__group"},s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"7"},"7"),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"8"},"8",s.a.createElement("span",{className:"screen__icon"},s.a.createElement("i",{className:"fas fa-arrow-up"}))),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"9"},"9")),s.a.createElement("div",{className:"screen__group"},s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"4"},"4",s.a.createElement("span",{className:"screen__icon"},s.a.createElement("i",{className:"fas fa-arrow-left"}))),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"5"},"5"),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"6"},"6",s.a.createElement("span",{className:"screen__icon"},s.a.createElement("i",{className:"fas fa-arrow-right"})))),s.a.createElement("div",{className:"screen__group"},s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"1"},"1"),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"2"},"2",s.a.createElement("span",{className:"screen__icon"},s.a.createElement("i",{className:"fas fa-arrow-down"}))),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"3"},"3")),s.a.createElement("div",{className:"screen__group"},s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"R"},"R",s.a.createElement("span",{className:"screen__icon"},"B")),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"0"},"0"),s.a.createElement("button",{onClick:this.props.handleClick,className:"screen__btn",value:"L"},"L",s.a.createElement("span",{className:"screen__icon"},"A"))))}}]),t}(n.Component)),f="",b="Error",p="Record",k="Locking...",_="Unlocking...",v="Service",g="Validating...",y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={locked:!1,segment:"",myinterface:"",idle:!1,record:!1,block:!1,password:null},a.handleBtnClick=a.handleBtnClick.bind(Object(h.a)(Object(h.a)(a))),a.idleUser=a.idleUser.bind(Object(h.a)(Object(h.a)(a))),a.runTimeout=a.runTimeout.bind(Object(h.a)(Object(h.a)(a))),a.fetchData=a.fetchData.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleBtnClick",value:function(e){var t=this.state.locked,a=e.target.value,n={idle:!1};this.state.block||(clearTimeout(this.timeout),t?n.myinterface=this.state.myinterface+a:"R"===a?(this.setState({record:!0}),n.segment=p,n.myinterface=""):"L"===a?4!==this.state.myinterface.length?(this.setState({record:!1}),n.segment=b,n.myinterface=""):this.state.record&&(n.segment=k,n.block=!0,n.password=this.state.myinterface,n.myinterface=""):n.myinterface=this.state.myinterface+a,this.setState(n,this.runTimeout),this.idleUser())}},{key:"idleUser",value:function(){var e=this;clearTimeout(this.idleUserTimer),this.idleUserTimer=setTimeout(function(){e.setState({idle:!0})},5e3)}},{key:"fetchData",value:function(){var e=this;this.setState({segment:g,myinterface:"",block:!0});var t="".concat("https://cors.io/?https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?","code=").concat(this.state.myinterface);fetch(t,{method:"GET",cache:"default"}).then(function(e){return e.json()}).then(function(t){console.log("response",t),4815162342===t.sn?e.setState({segment:_,myinterface:"",block:!0}):e.setState({segment:b,myinterface:"",block:!1})}).catch(function(t){console.log(t),e.setState({segment:b,myinterface:"",block:!1})})}},{key:"runTimeout",value:function(){var e=this;clearTimeout(this.timeout),this.state.segment===k||this.state.segment===_?this.timeout=setTimeout(function(){e.setState({block:!1,segment:f,locked:e.state.segment===k})},3e3):this.timeout=setTimeout(function(){var e=this;if(this.state.locked){if(this.state.segment===v)return void(""!==this.state.myinterface&&this.fetchData());if(4===this.state.myinterface.length)return this.state.myinterface===this.state.password?this.setState({segment:_,myinterface:"",block:!0}):this.setState({segment:b,myinterface:""}),void this.runTimeout();if("000000"===this.state.myinterface)return this.setState({segment:v,myinterface:""}),void this.runTimeout()}this.timeout=setTimeout(function(){e.setState({myinterface:"",segment:f})},500)}.bind(this),500)}},{key:"componentDidMount",value:function(){this.idleUser()}},{key:"render",value:function(){return s.a.createElement("div",{className:"panel"},s.a.createElement("div",{className:"panel__screen",style:{backgroundColor:this.state.idle?"#47b2b2":"#7fffff"}},s.a.createElement("div",{className:"panel__status"},this.state.locked?"Locked":"Unlocked"),s.a.createElement("input",{type:"text",className:"panel__value",value:this.state.myinterface||this.state.segment,readOnly:!0})),s.a.createElement(d,{handleClick:this.handleBtnClick}),s.a.createElement("span",{className:"panel__serial"},"S/N: 4815162342"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.f2637042.chunk.js.map