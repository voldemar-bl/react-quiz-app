(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,t,a){e.exports=a(530)},230:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},254:function(e,t){},266:function(e,t){},268:function(e,t){},527:function(e,t,a){e.exports=a.p+"static/media/html.3a0be16e.jpg"},528:function(e,t,a){e.exports=a.p+"static/media/css.77251c6a.jpg"},529:function(e,t,a){e.exports=a.p+"static/media/js3.f7d27ab8.jpg"},530:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(128),s=a.n(o),i=(a(230),a(21)),l=a.n(i),c=a(38),u=a(7),m=a(8),p=a(11),d=a(9),h=a(13),f=a(10),b=(a(232),a(233),a(85),a(3)),g=a.n(b),E=a(538),v=a(539),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).updateColor=function(){window.innerWidth<993&&a.state.collapseOpen?a.setState({color:"bg-white"}):a.setState({color:"navbar-transparent"})},a.toggleCollapse=function(){a.state.collapseOpen?a.setState({color:"navbar-transparent"}):a.setState({color:"bg-white"}),a.setState({collapseOpen:!a.state.collapseOpen})},a.toggleModalSearch=function(){a.setState({modalSearch:!a.state.modalSearch})},a.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateColor)}},{key:"render",value:function(){var e=this.props.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:g()("primary"),expand:"lg",color:"transparent"},r.a.createElement(v.a,{fluid:!0,className:"text-right",style:{display:"block"}},e?r.a.createElement("i",{className:"tim-icons icon-button-power",style:{cursor:"pointer",color:"#f3a4b5"},onClick:function(){return e()}}):null)))}}]),t}(r.a.Component),k=function(e){function t(e){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){this.props.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,this.props))}}]),t}(n.Component),w=a(540),y=a(541),N=a(542),j=a(543),q=a(544),O=a(545),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={showPass:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){var e=this.state.showPass;this.setState({showPass:!e})}},{key:"render",value:function(){var e=this.props,t=e.updateText,a=e.showLogin,n=e.register;this.state.showPass;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main-panel",style:{borderTop:"1px solid #f3a4b5",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement(w.a,{style:{border:"1px solid #f3a4b526",width:"20rem",display:"inline-block",margin:"0 0.54%",overflow:"hidden"}},r.a.createElement(y.a,{className:"text-right"},r.a.createElement("form",null,r.a.createElement(N.a,{className:"text-left"},r.a.createElement(j.a,{for:"Username"},"Username"),r.a.createElement(q.a,{className:"inputTransparent",type:"text",name:"name",id:"Username",placeholder:"Username",onChange:t})),r.a.createElement(N.a,{className:"text-left"},r.a.createElement(j.a,{for:"userEmail"},"Email address"),r.a.createElement(q.a,{className:"inputTransparent",type:"email",name:"userEmail",id:"userEmail",placeholder:"Enter email",onChange:t})),r.a.createElement(N.a,{className:"text-left"},r.a.createElement(j.a,{for:"userPassword"},"Password"),r.a.createElement(q.a,{type:"password",name:"userPassword",id:"userPassword",placeholder:"Password",onChange:t,autoComplete:"off"})),r.a.createElement(O.a,{className:"btn-link float-left",onClick:a},r.a.createElement("code",null,"Back")),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:n},r.a.createElement("code",null,"Register"))))))))}}]),t}(n.Component),T=a(546),C=a(547),z=a(548),P=function(e){function t(e){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.onPress,n=e.logout;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main-panel",style:{borderTop:"1px solid #f3a4b5"}},r.a.createElement(k,{logout:n}),r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(w.a,{style:{border:"1px solid #f3a4b526",maxWidth:"16rem",display:"inline-block",margin:"0 0.54%",overflow:"hidden"}},r.a.createElement(T.a,{top:!0,src:e.image,title:e.name,component:"img",style:{objectFit:"cover",borderRadius:"0"},height:"160",alt:"..."}),r.a.createElement(y.a,{className:"text-right"},r.a.createElement(C.a,null,r.a.createElement("h4",{className:"mb-0 text-left title-up text-uppercase"},e.name)),r.a.createElement(z.a,null,r.a.createElement("footer",{className:"blockquote-footer  text-left"},e.description)),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:function(){return a(t)}},r.a.createElement("code",null,"Join"))))}))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={showPass:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){var e=this.state.showPass;this.setState({showPass:!e})}},{key:"render",value:function(){var e=this.props,t=e.updateText,a=e.validation,n=e.showSignup;this.state.showPass;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main-panel",style:{borderTop:"1px solid #f3a4b5",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",null,r.a.createElement(w.a,{style:{border:"1px solid #f3a4b526",width:"20rem",display:"inline-block",margin:"0 0.54%",overflow:"hidden"}},r.a.createElement(y.a,{className:"text-right"},r.a.createElement("form",null,r.a.createElement(N.a,{className:"text-left"},r.a.createElement(j.a,{for:"exampleEmail"},"Email address"),r.a.createElement(q.a,{className:"inputTransparent",type:"email",name:"loginEmail",id:"exampleEmail",placeholder:"Enter email",onChange:t})),r.a.createElement(N.a,{className:"text-left"},r.a.createElement(j.a,{for:"examplePassword"},"Password"),r.a.createElement(q.a,{type:"password",name:"loginPass",id:"examplePassword",placeholder:"Password",onChange:t,autoComplete:"off"})),r.a.createElement(O.a,{className:"btn-link float-left",onClick:n},r.a.createElement("code",null,"Register")),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:a},r.a.createElement("code",null,"Login"))))))))}}]),t}(n.Component),L=a(549),Q=function(e){function t(e){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.quiz,a=e.onBack,n=e.onPress,o=e.logout;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main-panel",style:{borderTop:"1px solid #f3a4b5"}},r.a.createElement(k,{logout:o}),r.a.createElement("div",null,t.subQuiz.map(function(e,o){return r.a.createElement(w.a,{className:"text-right",style:{border:"1px solid #f3a4b526",minWidth:"256px",maxWidth:"16rem",display:"inline-block",margin:"0 0.54%",overflow:"hidden",verticalAlign:"top"}},r.a.createElement(T.a,{top:!0,src:t.image,title:e.name,component:"img",style:{objectFit:"cover",borderRadius:"0"},height:"160",alt:"..."}),e.score?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement("h4",{className:"mb-0 text-left title-up text-uppercase"},e.name)),r.a.createElement(y.a,{className:"text-right"},r.a.createElement(C.a,null,r.a.createElement("p",{className:"mb-0 text-left text-muted"},"You have attempted this Quiz.")),r.a.createElement(z.a,{className:"text-left"},r.a.createElement("footer",{className:"blockquote-footer  text-left"},"Percentage: ",r.a.createElement("code",null,e.score,"%"),r.a.createElement("br",null),"Attempted Date: ",r.a.createElement("code",null,e.attemptDate),r.a.createElement("br",null),"Attempted Time: ",r.a.createElement("code",null,e.attemptTime))),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:a},r.a.createElement("code",null,"Back")),e.score?null:r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:function(){return n(o)}},r.a.createElement("code",null,"Start")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement("h4",{className:"mb-0 text-left title-up text-uppercase"},e.name)),r.a.createElement(y.a,{className:"text-right"},r.a.createElement(C.a,null,r.a.createElement("p",{className:"mb-0 text-left text-muted"},"This Quiz is based on the following criteria:")),r.a.createElement(z.a,{className:"text-left"},r.a.createElement("footer",{className:"blockquote-footer  text-left"},"Total Questions: ",r.a.createElement("code",null,e.questions),r.a.createElement("br",null),"Total Time: ",r.a.createElement("code",null,e.time),r.a.createElement("br",null),"Passing Score: ",r.a.createElement("code",null,"60 %"))),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:a},r.a.createElement("code",null,"Back")),e.score?null:r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:function(){return n(o)}},r.a.createElement("code",null,"Start")))))}))))}}]),t}(n.Component),F=a(215),I=a.n(F),R=a(212),M=a.n(R),W=a(216),H=a.n(W),U=a(214),D=a.n(U),V=a(129),_=a(217),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).interval=void 0,a.state={isAnimated:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.repeat?this.interval=window.setInterval(function(){e.setState({isAnimated:!e.state.isAnimated})},1e3*this.props.duration):this.setState({isAnimated:!this.state.isAnimated})}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return r.a.createElement(_.a,{start:function(){return{value:e.props.valueStart}},update:function(){return{value:[e.state.isAnimated?e.props.valueEnd:e.props.valueStart],timing:{duration:1e3*e.props.duration,ease:e.props.easingFunction}}}},function(t){var a=t.value;return e.props.children(a)})}}]),t}(r.a.Component);B.defaultProps={valueStart:0};var G=B,J=a(218),X=(a(238),a(211)),Y=a.n(X),K=(a(428),a(550)),$=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],logos:[]},a.getDataFromApi=function(e){fetch("https://cors-anywhere.herokuapp.com/https://www.work.ua/jobs-kyiv-html%2C+css%2C+js/?advs=1&anyword=1").then(function(e){return e.text()}).then(function(e){var t=Y.a.load(e),n=t(".card.job-link"),r=[],o=[];n.each(function(e,a){r.push(t(this).find("h2 a").text(),t(this).find("b").text(),"https://www.work.ua"+t(this).find("h2 a").attr("href"),t(this).find("h2").siblings("p.overflow").text(),t(this).find("h2 span span").text(),"<br/>"),o.push(r),r=[]}),console.log(o),a.setState({logos:o})}).catch(function(e){a.setState({error:e})})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getDataFromApi()}},{key:"render",value:function(){var e=this.state.logos;return r.a.createElement(K.a,{className:"col-8"},e.map(function(e,t){return r.a.createElement(w.a,{style:{border:"1px solid #f3a4b526",overflow:"hidden"}},r.a.createElement(y.a,{className:"text-right"},r.a.createElement(C.a,null,r.a.createElement("h4",{className:"mb-0 text-left title-up text-uppercase"},e[0])),r.a.createElement(z.a,{className:"text-left"},e[1]," ",r.a.createElement("code",null," ",e[4])),r.a.createElement(z.a,null,r.a.createElement("footer",{className:"blockquote-footer  text-left"},e[3])),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526",color:"#f3a4b5"},href:e[2]},r.a.createElement("code",null,"Open"))))}))}}]),t}(n.Component),Z=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={radioVal:null,sec:0,min:3,correct:0,scored:!1,similey:null},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.updating=e.updating.bind(Object(h.a)(e)),e.quizTimer=e.quizTimer.bind(Object(h.a)(e)),e.timer(),e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({radioVal:e.target.value})}},{key:"updating",value:function(){var e=Object(c.a)(l.a.mark(function e(){var t,a,n,r,o,s,i,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.started,n=t.qstnNo,r=t.onPress,o=this.state,s=o.correct,i=o.radioVal,c=document.querySelector("input[type='radio']:checked"),null!=i){e.next=7;break}alert("Selection Required"),e.next=28;break;case 7:if(n!==a.qArr.length-1||!a.qArr[n].answer.match(i)){e.next=12;break}return e.next=10,this.setState({correct:s+1,min:0,sec:0});case 10:e.next=28;break;case 12:if(n!==a.qArr.length-1||a.qArr[n].answer.match(i)){e.next=17;break}return e.next=15,this.setState({min:0,sec:0});case 15:e.next=28;break;case 17:if(n===a.qArr.length-1||!a.qArr[n].answer.match(i)){e.next=24;break}return e.next=20,this.setState({correct:s+1,radioVal:null});case 20:c.checked=!1,r(n),e.next=28;break;case 24:return e.next=26,this.setState({radioVal:null});case 26:c.checked=!1,r(n);case 28:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"scoreCal",value:function(){var e=Object(c.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.started,a=this.state.correct,e.next=4,this.setState({scored:(a*(100/t.qArr.length)).toFixed(2),date:new Date});case 4:this.saveScore();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveScore",value:function(){var e=this.props.started,t=this.state,a=t.scored,n=t.date;e.score=a,e.attemptDate=n.toLocaleDateString(),e.attemptTime=n.toLocaleTimeString(),100==a?this.setState({similey:r.a.createElement(M.a,{className:"similey",color:"disabled"})}):0==a?this.setState({similey:r.a.createElement(D.a,{className:"similey",color:"disabled"})}):a>=60?this.setState({similey:r.a.createElement(I.a,{className:"similey",color:"disabled"})}):a<60&&a>0&&this.setState({similey:r.a.createElement(H.a,{className:"similey",color:"disabled"})})}},{key:"quizTimer",value:function(){var e=this.state,t=e.sec,a=e.min;0===t&&0===a?(clearInterval(this.time),this.scoreCal()):t<=0&&0!==a?this.setState({sec:59,min:a-1}):this.setState({sec:t-1})}},{key:"timer",value:function(){this.time=setInterval(this.quizTimer,1e3)}},{key:"render",value:function(){var e=this.props,t=e.started,a=e.qstnNo,n=e.back,o=e.quizName,s=e.subQuizName,i=e.logout,l=this.state,c=l.correct,u=l.scored,m=l.min,p=l.sec;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"main-panel",style:{borderTop:"1px solid #f3a4b5"}},r.a.createElement(k,{logout:i}),!1!==u?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{style:{border:"1px solid #f3a4b526",maxWidth:"20rem",display:"inline-block",margin:"0 0.54%",overflow:"hidden"}},r.a.createElement(y.a,{className:"text-right"},r.a.createElement(z.a,null,r.a.createElement("footer",{className:"blockquote-footer text-left"},o,"(",s,")")),r.a.createElement("div",{className:"text-center",style:{width:"65%",margin:"0 auto"}},r.a.createElement(G,{valueStart:0,valueEnd:u,duration:1,easingFunction:J.a},function(e){var t=Math.round(e);return r.a.createElement(V.a,{value:e,text:"".concat(t,"%"),strokeWidth:2,styles:Object(V.b)({textColor:"rgba(243, 164, 181, 0.15)",pathColor:"rgba(243, 164, 181, 0.55)",trailColor:"rgba(243, 164, 181, 0.15)",textSize:"14px"})})})),r.a.createElement(C.a,null,r.a.createElement("p",{className:"text-left text-muted"}," Total Questions: ",t.qArr.length," ",r.a.createElement("br",null),"  Correct: ",c)),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:function(){return n()}},r.a.createElement("code",null,"Back")))),r.a.createElement("hr",null),r.a.createElement($,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{style:{border:"1px solid #f3a4b526",maxWidth:"20rem",display:"inline-block",margin:"0 0.54%",overflow:"hidden"}},r.a.createElement(y.a,{className:"text-right"},r.a.createElement(z.a,null,r.a.createElement("footer",{className:"blockquote-footer text-left"},o,"(",s,") ",r.a.createElement("code",{className:"float-right"},m,":",p))),r.a.createElement(C.a,null,r.a.createElement("h4",{className:"mb-0 text-left title-up"},a+1+" . "+t.qArr[a].question)),r.a.createElement(N.a,{className:"text-left",value:this.state.radioVal,onChange:this.handleChange},r.a.createElement(N.a,{check:!0,className:"form-check-radio"},r.a.createElement(j.a,{className:"form-check-label"},r.a.createElement(q.a,{type:"radio",name:"exampleRadios1",id:"exampleRadios11",value:"1"}),t.qArr[a].option1,r.a.createElement("span",{className:"form-check-sign"}))),r.a.createElement(N.a,{check:!0,className:"form-check-radio"},r.a.createElement(j.a,{className:"form-check-label"},r.a.createElement(q.a,{type:"radio",name:"exampleRadios1",id:"exampleRadios12",value:"2"}),t.qArr[a].option2,r.a.createElement("span",{className:"form-check-sign"}))),r.a.createElement(N.a,{check:!0,className:"form-check-radio "},r.a.createElement(j.a,{className:"form-check-label"},r.a.createElement(q.a,{type:"radio",name:"exampleRadios1",id:"exampleRadios13",value:"3"}),t.qArr[a].option3,r.a.createElement("span",{className:"form-check-sign"}))),r.a.createElement(N.a,{check:!0,className:"form-check-radio "},r.a.createElement(j.a,{className:"form-check-label"},r.a.createElement(q.a,{type:"radio",name:"exampleRadios1",id:"exampleRadios14",value:"4"}),t.qArr[a].option4,r.a.createElement("span",{className:"form-check-sign"})))),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:function(){return n()}},r.a.createElement("code",null,"Back")),r.a.createElement(O.a,{className:"btn-link",style:{border:"1px solid #f3a4b526"},onClick:this.updating.bind(this)},r.a.createElement("code",null,"Next")))))))}}]),t}(n.Component),ee=(a(526),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={quizzes:[{name:"HTML",image:a(527),description:"HTML stands for HyperText Markup Language, It defines the structure of a Web document by using a variety of tags and attributes.",subQuiz:[{name:"Quiz 1",questions:"3",time:"3 min",score:!1,qArr:[{question:"What is use for image insertion?",option1:"img",option2:"h1",option3:"none",option4:"body",answer:"1"},{question:"To underline the text?",option1:"u",option2:"underline",option3:"style",option4:"none",answer:"1"},{question:"HTML stands for?",option1:"HYPER TEXT MARKUP LANGUAGE",option2:"HTPER TEXT TELESCOPR",option3:"HELP TEXT TERMINAL LANGUAGE",option4:"NONE",answer:"1"}]},{name:"Quiz 2",questions:"3",time:"3 min",score:!1,qArr:[{question:"HTML use for?",option1:"structure",option2:"styling",option3:"scripting",option4:"none",answer:"1"},{question:"To underline the text?",option1:"u",option2:"underline",option3:"style",option4:"none",answer:"1"},{question:"HTML stands for?",option1:"HYPER TEXT MARKUP LANGUAGE'",option2:"HTPER TEXT TELESCOPR",option3:"HELP TEXT TERMINAL LANGUAGE",option4:"NONE",answer:"1"}]}]},{name:"CSS",image:a(528),description:"CSS stands for Cascading Style Sheets, It describes how HTML elements are to be displayed on screen, paper, or in other media.",subQuiz:[{name:"Quiz 1",questions:"6",time:"3 min",score:!1,qArr:[{question:"Css stands for?",option1:"cascading style sheet'",option2:"cascade sheet style",option3:"color style sheet",option4:"contrast style sheet",answer:"1"},{question:"to change the color we use",option1:"color:",option2:"setColor:",option3:"color-style",option4:"change-color",answer:"1"},{question:"How to link css?",option1:"using link",option2:"using button",option3:"using javascript",option4:"using img",answer:"1"},{question:"To change the color we use?",option1:"color:",option2:"setColor:",option3:"color-style",option4:"change-color",answer:"1"},{question:"How to link css?",option1:"using link",option2:"using button",option3:"using javascript",option4:"using img",answer:"1"},{question:"How to link css?",option1:"using link",option2:"using button",option3:"using javascript",option4:"using img",answer:"1"}]}]},{name:"JavaScript",image:a(529),description:' JavaScript is a "client-side" programming language. JavaScript scripts are read, interpreted and executed in your Web browser.',subQuiz:[{name:"Quiz 1",questions:"4",time:"3 min",score:!1,qArr:[{question:"How to create alert box?",option1:"alert='hello world'",option2:"aler('hello world')",option3:"alert.('hello world')",option4:"alert('hello world')",answer:"4"},{question:"How to initialize variable?",option1:"variable name = 'ali'",option2:"var name = 'ali'",option3:"variable: 'ali'",option4:"variable. 'ali'",answer:"2"},{question:"How to push value in array?",option1:"arr.push(value)",option2:"arr.push.value",option3:"arr.(value)",option4:"arr.value.push(value)",answer:"1"},{question:"What is javascript?",option1:"programming language",option2:"scripting language",option3:"coding language",option4:"web language",answer:"2"}]},{name:"Quiz 2",questions:"6",time:"3 min",score:!1,qArr:[{question:"Which creates random number?",option1:"Math.floor()",option2:"Math.ceil()",option3:"Math.random()",option4:"Math.high",answer:"3"},{question:"What does array returns?",option1:"function",option2:"object",option3:"index number",option4:"data type",answer:"2"},{question:"Object property name & value are separated by?",option1:"semicolon ;",option2:"colon :",option3:"dot .",option4:"comma ,",answer:"2"},{question:"Object properties are separated by?",option1:"comma ,",option2:"dot .",option3:"colon :",option4:"semicolon ;",answer:"1"},{question:"What is the correct syntax for object initialization?",option1:"var var_name = {property_name:property_value}",option2:"var var_name = {property_value:property_name}",option3:"var var_value = {property_name:property_value}",option4:"object = {property_name:property_value}",answer:"1"},{question:"DOM stands for?",option1:"document object modification",option2:"document observed module",option3:"document object model",option4:"document object module",answer:"3"}]}]}],quizIndex:null,subQuizIndex:null,qstnNo:0,validFlag:!1,userFlag:!0,userName:"",userEmail:"",userPass:"",loginEmail:"",loginPass:"",user:localStorage.getItem("user")},n.updateText=n.updateText.bind(Object(h.a)(n)),n.showSignup=n.showSignup.bind(Object(h.a)(n)),n.showLogin=n.showLogin.bind(Object(h.a)(n)),n.register=n.register.bind(Object(h.a)(n)),n.checkValidation=n.checkValidation.bind(Object(h.a)(n)),n.joinQuiz=n.joinQuiz.bind(Object(h.a)(n)),n.showList=n.showList.bind(Object(h.a)(n)),n.startQuiz=n.startQuiz.bind(Object(h.a)(n)),n.nextQstn=n.nextQstn.bind(Object(h.a)(n)),n.back=n.back.bind(Object(h.a)(n)),n.logout=n.logout.bind(Object(h.a)(n)),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"updateText",value:function(){var e=Object(c.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.name,n=t.target.value,!a.match("name")){e.next=8;break}return e.next=5,this.setState({userName:n});case 5:localStorage.setItem("userName",this.state.userName),e.next=28;break;case 8:if(!a.match("userEmail")){e.next=14;break}return e.next=11,this.setState({userEmail:n});case 11:localStorage.setItem("userEmail",this.state.userEmail),e.next=28;break;case 14:if(!a.match("userPass")){e.next=20;break}return e.next=17,this.setState({userPass:n});case 17:localStorage.setItem("userPass",this.state.userPass),e.next=28;break;case 20:if(!a.match("loginEmail")){e.next=25;break}return e.next=23,this.setState({loginEmail:n});case 23:e.next=28;break;case 25:if(!a.match("loginPass")){e.next=28;break}return e.next=28,this.setState({loginPass:n});case 28:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"showSignup",value:function(){this.setState({userFlag:!1,loginEmail:"",loginPass:""})}},{key:"showLogin",value:function(){this.setState({userFlag:!0,userName:"",userEmail:"",userPass:""})}},{key:"register",value:function(){var e=this.state,t=e.userName,a=e.userEmail,n=e.userPass;""===t||""===a||""===n?alert("Fill all the fields"):this.setState({userFlag:!0,userEmail:"",userPass:""})}},{key:"checkValidation",value:function(){var e=Object(c.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.loginEmail,n=t.loginPass,!a.match(localStorage.getItem("userEmail"))||!n.match(localStorage.getItem("userPass"))){e.next=5;break}return e.next=4,this.setState({validFlag:!0,user:!0,auth:!0});case 4:localStorage.setItem("user","true");case 5:console.log("Email is Valid :",this.state.validFlag);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){this.setState({user:"false",validFlag:!1,loginEmail:"",loginPass:"",quiz:null,started:null,qstnNo:0}),localStorage.setItem("user","false")}},{key:"joinQuiz",value:function(e){var t=this.state.quizzes;this.setState({quiz:t[e],quizIndex:e,quizName:t[e].name})}},{key:"showList",value:function(){this.setState({quiz:null})}},{key:"startQuiz",value:function(e){var t=this.state,a=t.quizzes,n=t.quizIndex;this.setState({started:a[n].subQuiz[e],subQuizIndex:e,subQuizName:a[n].subQuiz[e].name})}},{key:"nextQstn",value:function(e){this.setState({qstnNo:e+1})}},{key:"back",value:function(){this.setState({started:null,qstnNo:0})}},{key:"render",value:function(){var e=this.state,t=e.userFlag,a=e.validFlag,n=e.quizzes,o=e.quiz,s=e.started,i=e.qstnNo,l=e.quizName,c=e.subQuizName,u=e.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("div",null,("false"===u||null===u)&&t&&!a&&r.a.createElement(A,{showSignup:this.showSignup,validation:this.checkValidation,updateText:this.updateText}),("false"===u||null===u)&&!t&&r.a.createElement(S,{updateText:this.updateText,showLogin:this.showLogin,register:this.register}),("true"===u||t&&a)&&!o&&!s&&r.a.createElement(P,{list:n,onPress:this.joinQuiz,logout:this.logout}),("true"===u||t&&a)&&o&&!s&&r.a.createElement(Q,{quiz:o,onPress:this.startQuiz,onBack:this.showList,logout:this.logout}),("true"===u||t&&a)&&s&&r.a.createElement(Z,{quizName:l,subQuizName:c,started:s,qstnNo:i,onPress:this.nextQstn,back:this.back,logout:this.logout}))))}}]),t}(n.Component)),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(ee,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");te?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ae(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ae(e)})}}()},85:function(e,t,a){}},[[225,1,2]]]);
//# sourceMappingURL=main.875184d0.chunk.js.map