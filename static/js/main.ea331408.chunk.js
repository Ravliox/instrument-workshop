(this["webpackJsonpinstrument-workshop"]=this["webpackJsonpinstrument-workshop"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/piano.c754b474.png"},,,function(e,t,a){e.exports=a.p+"static/media/vmaro.32688dcf.png"},function(e,t,a){e.exports=a.p+"static/media/vblack.5a22b2ea.png"},function(e,t,a){e.exports=a.p+"static/media/guitar.1ce310fe.png"},function(e,t,a){e.exports=a.p+"static/media/guitarb.2405fbe9.png"},function(e,t,a){e.exports=a.p+"static/media/flute.7196ad47.png"},function(e,t,a){e.exports=a.p+"static/media/cello.ba756bf7.png"},,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(13),r=a.n(s),o=(a(26),a(4)),c=a(5),l=a(9),u=a(6),m=a(7),d=(a(27),a(28),a(8)),p=(a(29),a(14)),g=a.n(p),h=a(15),v=a.n(h),f=a(11),q=a.n(f),b=a(16),A=a.n(b),E=a(17),y=a.n(E),x=a(18),k=a.n(x),w=a(19),I=a.n(w),T=a(2),N=a.n(T),M=a(1),O=a(20),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={movement:!1,resetting:!1,startX:0,dragReferencePointX:0,radius:window.innerWidth/2+400,angleCheckpoints:[18,90,162,234,306],points:[{angle:306,transform:"",checkPoint:4,type:"guitar",img:A.a,altImg:y.a,altImgSelected:!1},{angle:234,transform:"",checkPoint:3,type:"cello",img:I.a,altImg:null,altImgSelected:!1},{angle:162,transform:"",checkPoint:2,type:"piano",img:q.a,altImg:null,altImgSelected:!1},{angle:90,transform:"",checkPoint:1,type:"violin",img:g.a,altImg:v.a,altImgSelected:!1},{angle:18,transform:"",checkPoint:0,type:"flute",img:k.a,altImg:null,altImgSelected:!1}]},n.state.points.forEach((function(e){n.setPosition(e)})),console.log(n.state),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){var t=Object(d.a)(e.state.points),a=window.innerWidth/2+400;e.setState({radius:a}),t.forEach((function(t){e.setPosition(t)})),e.setState({points:t})}))}},{key:"switchDirection",value:function(e){this.setState({direction:e})}},{key:"startDrag",value:function(e){e.preventDefault(),e.persist(),this.state.resetting||this.props.displayTrigger||this.setState({movement:!0,dragReferencePointX:e.clientX,startX:e.clientX})}},{key:"computeAngles",value:function(e){var t=this;if(e.persist(),this.state.movement&&!this.state.resetting){var a=e.clientX>this.state.dragReferencePointX?-1:1,n=Math.abs(e.clientX-this.state.dragReferencePointX)/20,i=Object(d.a)(this.state.points);i.forEach((function(e){e.angle+=a*n,e.angle>360?e.angle=e.angle-360:e.angle<0&&(e.angle=e.angle+360),t.setPosition(e)})),this.setState({points:i,dragReferencePointX:e.clientX})}}},{key:"endDrag",value:function(e){this.state.movement&&(e.persist(),this.setState({movement:!1}),this.state.resetting||(this.setNewCheckpoints(e),this.setState({resetting:!0}),this.signalInstrumentChange(),this.moveToCheckpoint()))}},{key:"moveToCheckpoint",value:function(){var e=this,t=Object(d.a)(this.state.points),a=setInterval((function(){var n=!1,i=e.state.points.filter((function(e){return 1===e.checkPoint}))[0],s=e.calculateDelta(i,90);console.log(s),t.forEach((function(t){var a=e.state.angleCheckpoints[t.checkPoint],i=t.angle<a?1:-1;0===t.checkPoint&&t.angle<360&&t.angle>300&&(t.angle=t.angle-358),4===t.checkPoint&&t.angle>0&&t.angle<72&&(t.angle=358+t.angle),0===s&&(t.angle=a),Math.abs(t.angle-a)<.01?n=!0:(n=!1,t.angle+=i*s,e.setPosition(t))})),n?(clearInterval(a),e.setState({resetting:!1})):e.setState({points:t})}),10)}},{key:"calculateDelta",value:function(e,t){var a=e.angle<t?e.angle/t*2:t/e.angle*2,n=a*(2-a);return n>.001&&n<1?n:0}},{key:"setNewCheckpoints",value:function(e){var t=Object(d.a)(this.state.points),a=e.clientX>this.state.startX?1:-1;Math.abs(e.clientX-this.state.startX)>150&&(t.forEach((function(e){var t=Math.floor(e.angle/72),n=4===t?0:t+1;e.checkPoint=-1===a?n:t,4===t&&0===e.checkPoint&&(e.angle=e.angle-360)})),this.setState({points:t}))}},{key:"setPosition",value:function(e){var t=e.angle/180*Math.PI,a=Math.round(this.state.radius*Math.cos(t)),n=-1*Math.round(this.state.radius*Math.sin(t)/2);e.transform="translateX(".concat(a,"px) translateY(").concat(n,"px)")}},{key:"slideRight",value:function(){if(!this.state.resetting&&!this.props.displayTrigger){var e=Object(d.a)(this.state.points);e.forEach((function(e){return e.checkPoint=0===e.checkPoint?4:e.checkPoint-1})),this.setState({points:e,resetting:!0}),this.signalInstrumentChange(),this.moveToCheckpoint()}}},{key:"slideLeft",value:function(){if(!this.state.resetting&&!this.props.displayTrigger){var e=Object(d.a)(this.state.points);e.forEach((function(e){return e.checkPoint=4===e.checkPoint?0:e.checkPoint+1})),this.setState({points:e,resetting:!0}),this.signalInstrumentChange(),this.moveToCheckpoint()}}},{key:"signalInstrumentChange",value:function(){var e=this.state.points.find((function(e){return 1===e.checkPoint})),t=this.state.points.indexOf(e);this.props.slideHandler(t,e.img)}},{key:"flipAltImage",value:function(e){var t=Object(d.a)(this.state.points),a=t.find((function(e){return 1===e.checkPoint})),n=a.altImgSelected;if(a.altImgSelected=e,n!==e){var i=a.img;a.img=a.altImg,a.altImg=i}this.setState({points:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(O.a,{onSwipedLeft:function(){return e.slideLeft()},onSwipedRight:function(){return e.slideRight()}},i.a.createElement("div",{className:"point-container",style:{cursor:this.state.movement&&!this.props.displayTrigger?"grabbing":"default"},onMouseUp:function(t){return e.endDrag(t)},onMouseMove:function(t){return e.computeAngles(t)}},this.state.points.map((function(t,a){return i.a.createElement("div",{className:"point",key:a,style:{transform:t.transform}},(!e.props.displayTrigger||e.props.displayTrigger&&1==t.checkPoint)&&i.a.createElement("img",{className:"".concat(t.type," ").concat(e.props.displayTrigger?"translated":""),src:t.img,onMouseDown:function(t){return e.startDrag(t)},onMouseLeave:function(t){return e.endDrag(t)},style:{cursor:e.props.displayTrigger?"default":e.state.movement?"grabbing":"grab"}}),t.altImg&&e.props.displayTrigger&&i.a.createElement("div",{className:"alt-img ".concat(t.type," ").concat(e.props.displayTrigger?"translated":""," ").concat(e.props.animationFinished?"":"hidden")},i.a.createElement("img",{src:t.altImg}),i.a.createElement("div",{className:"expanded-button-row"},i.a.createElement("button",{onClick:function(){return e.flipAltImage(!1)},className:"".concat(t.altImgSelected?"":"selected")}),i.a.createElement("button",{onClick:function(){return e.flipAltImage(!0)},className:"".concat(t.altImgSelected?"selected":"")}))))})),!this.props.displayTrigger&&i.a.createElement("div",{className:"button-container ".concat(this.props.opacityTrigger?"hidden":"")},i.a.createElement(N.a,{path:M.c,onClick:function(t){return e.slideLeft()},size:3,color:"white"}),i.a.createElement(N.a,{path:M.d,onClick:function(t){return e.slideRight()},size:3,color:"white"})))))}}]),a}(i.a.Component),S=(a(32),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"expanded-content-wrapper"},this.props.expandedDisplay&&i.a.createElement("button",{className:"close-button ".concat(this.props.animationFinished?"":"hidden"),onClick:function(){return e.props.retract()}},i.a.createElement(N.a,{path:M.e,size:2})),this.props.expandedDisplay&&i.a.createElement("div",{className:"expanded-content ".concat(this.props.animationFinished?"":"hidden")},i.a.createElement("h2",{className:"expanded-content-title"},this.props.content.title),i.a.createElement("p",{className:"expanded-content-description"},this.props.content.description),i.a.createElement("div",{className:"expanded-content-stars"},i.a.createElement(N.a,{path:M.i,size:1}),i.a.createElement(N.a,{path:M.i,size:1}),i.a.createElement(N.a,{path:M.i,size:1}),i.a.createElement(N.a,{path:M.i,size:1}),i.a.createElement(N.a,{path:M.j,size:1})),i.a.createElement("div",{className:"expanded-content-options"},i.a.createElement(N.a,{path:M.h,size:1}),i.a.createElement(N.a,{path:M.b,size:1}),i.a.createElement(N.a,{path:M.f,size:1}))),this.props.expandedDisplay&&i.a.createElement("div",{className:"expanded-content-mobile ".concat(this.props.animationFinished?"":"hidden")}))}}]),a}(i.a.Component)),P=a(10),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={indexOfCurrentInstrument:3,expandedOpacityTrigger:!1,expandedDisplayTrigger:!1,animationTrigger:!1,animationFinishedTrigger:!1,fillTitle:!1},n.retract=n.retract.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){Object(P.a)({targets:"#anime_target",strokeDashoffset:[P.a.setDashoffset,0],easing:"easeInOutSine",duration:6500,direction:"alternate",loop:!1}),console.log(P.a)}},{key:"expand",value:function(){var e=this;this.setState({expandedOpacityTrigger:!0}),setTimeout((function(){e.setState({expandedDisplayTrigger:!0,animationTrigger:!0}),setTimeout((function(){e.setState({animationFinishedTrigger:!0})}),500)}),200)}},{key:"retract",value:function(){var e=this;this.setState({expandedDisplayTrigger:!1}),setTimeout((function(){e.setState({expandedOpacityTrigger:!1,animationTrigger:!1,animationFinishedTrigger:!1})}),500)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"home-page ".concat(this.props.instruments[this.props.currentIndex].class)},i.a.createElement("svg",{className:"title",xmlns:"http://www.w3.org/2000/svg",width:"828.625",height:"121.375",viewBox:"0 0 828.625 121.375"},i.a.createElement("path",{id:"anime_target","data-name":"Path 7",className:"cls-1 ".concat(this.state.fillTitle?"fill":""),d:"M1.25,19.875A1.2,1.2,0,0,1,.375,19.5,1.2,1.2,0,0,1,0,18.625a2.751,2.751,0,0,1,.625-1.5Q6.875,9.5,14.938-1.25T30.75-24.187A175.231,175.231,0,0,0,43.688-48.312q5.187-11.937,5.188-21.562,0-8.375-4.125-12.062a14.644,14.644,0,0,0-10.125-3.687A28.983,28.983,0,0,0,20.5-81.5,38.6,38.6,0,0,0,8-70.312,26.468,26.468,0,0,0,2.875-54.375a13.934,13.934,0,0,0,2,7.563,19.768,19.768,0,0,0,4.688,5.25A31.275,31.275,0,0,0,14.5-38.375a1.127,1.127,0,0,1,.75,1,1.325,1.325,0,0,1-.312.875,1.008,1.008,0,0,1-.812.375L13.5-36.25Q.5-43.125.5-54.375a28.54,28.54,0,0,1,5.563-17.25,41,41,0,0,1,13.563-12A32.057,32.057,0,0,1,35-88a16.808,16.808,0,0,1,11.625,4.25q4.75,4.25,4.75,13.875,0,10.375-5.5,22.813a177.685,177.685,0,0,1-13,24.125Q25.375-11.25,19-2.625q18-19.75,31.625-33.812A276.689,276.689,0,0,1,73.563-58.062Q82.875-65.625,88-65.625a5.067,5.067,0,0,1,3.75,1.375A5.792,5.792,0,0,1,93.125-60q0,5.25-4.312,14.313T79.375-27.875Q74.25-19.125,71-14.125q18.625-19.25,28.438-27.937T113-50.75q3.375,0,3.625,3.875,0,3.25-2.687,9.063T107.75-25.375q-3.5,6.625-6.312,12.625T98.625-3.375q0,2.375,2.125,2.125,2.625,0,7.813-5.187a145.232,145.232,0,0,0,9.875-10.937,93.3,93.3,0,0,0,6.313-8.375,1.355,1.355,0,0,1,1-.625,1.2,1.2,0,0,1,.875.375,1.2,1.2,0,0,1,.375.875l-.25.75a112.552,112.552,0,0,1-7.375,9.813A110.8,110.8,0,0,1,109.188-3.687Q103.875,1.25,100.75,1.25q-4.25,0-4.625-4.625,0-3.875,3.063-10.437T106-27.375q3.375-6.25,5.813-11.5t2.438-8q0-1-.25-1.187a1.816,1.816,0,0,0-1-.187q-3.125,0-13.25,9.313t-20.125,19.5q-10,10.187-14,14.563L64.75-4a1.08,1.08,0,0,1-.75.375A1.417,1.417,0,0,1,63.063-4a1.124,1.124,0,0,1-.437-.875A1.391,1.391,0,0,1,62.75-5.5q1-1.5,2.375-3.75,4.25-6.625,10.188-16.5T86-45.25Q90.75-54.875,90.75-60a3.631,3.631,0,0,0-.687-2.562A2.8,2.8,0,0,0,88-63.25q-5.125,0-16.125,9.688t-26.5,26.125Q29.875-11,10.875,9.875q-4.25,4.75-8.75,9.625A1.2,1.2,0,0,1,1.25,19.875ZM126.75-12.25a5.51,5.51,0,0,1-3.875-1.375,5.181,5.181,0,0,1-1.25-3.625q0-5.25,6-12.25a29.58,29.58,0,0,1,5.438-4.562A14.575,14.575,0,0,1,141.5-36.5a3.756,3.756,0,0,1,2.75.875,1.188,1.188,0,0,1,.5,1,1.311,1.311,0,0,1-.187.688,1.05,1.05,0,0,1-.687.438,2.055,2.055,0,0,1-.5-.062,2.442,2.442,0,0,1-.5-.187q-.25-.125-.562-.25a2.219,2.219,0,0,0-.812-.125q-6,0-12.125,6.375a26.434,26.434,0,0,0-3.875,5.5,11.178,11.178,0,0,0-1.5,5,2.547,2.547,0,0,0,.625,1.875,2.63,2.63,0,0,0,2.125.75q2.5,0,5.5-2.812A56.335,56.335,0,0,0,138-23.75q2.75-3.5,4.5-6a1.893,1.893,0,0,1,1.5-.75,2.77,2.77,0,0,1,.875.125A1.928,1.928,0,0,1,146-28.625a1.109,1.109,0,0,1-.125.5q-.25.625-.5,1.375v.25q-.75,2.375-1.437,4.813a16.133,16.133,0,0,0-.687,4.313,3.554,3.554,0,0,0,.5,2,1.415,1.415,0,0,0,.5.5,2.342,2.342,0,0,0,1.25.25,11.852,11.852,0,0,0,6.188-2.187,52.822,52.822,0,0,0,6.438-4.812q3-2.625,4.5-4.25a1.554,1.554,0,0,1,1.125-.5.848.848,0,0,1,.625.25,1.441,1.441,0,0,1,.5,1,1.2,1.2,0,0,1-.375.875l-.125.125q-.75.875-3.812,3.688a53.107,53.107,0,0,1-7.25,5.5A14.666,14.666,0,0,1,145.5-12.25a4.654,4.654,0,0,1-3.75-1.625,6.162,6.162,0,0,1-1-3.5,23.68,23.68,0,0,1,1.75-8.25,74.843,74.843,0,0,1-8.125,9.5Q130.375-12.25,126.75-12.25Zm47.75-30-.5-.25a1.008,1.008,0,0,1-.5-1v-.25l.125-.375,2.75-4.375a1.539,1.539,0,0,1,1.25-.625l.5.375a1.008,1.008,0,0,1,.5.75v.25l-.25.5-2.625,4.375A1.539,1.539,0,0,1,174.5-42.25Zm-9,32.375a5.163,5.163,0,0,1-3.312-.875,4.548,4.548,0,0,1-1.437-1.875,7.473,7.473,0,0,1-.625-3.125,20.381,20.381,0,0,1,2-8.5,38.709,38.709,0,0,1,2.625-5.625,28.656,28.656,0,0,1,2.875-4.25,1.2,1.2,0,0,1,.875-.375,1.54,1.54,0,0,1,.875.25,1.662,1.662,0,0,1,.375,1,1.344,1.344,0,0,1-.25.75,30.941,30.941,0,0,0-4.5,7.625,22.783,22.783,0,0,0-2.375,9.125A5.387,5.387,0,0,0,163-13.625a1.866,1.866,0,0,0,.625.938,2.937,2.937,0,0,0,1.875.438,18.709,18.709,0,0,0,10.188-3.25,57.911,57.911,0,0,0,8.5-6.5,41,41,0,0,0,3.938-4h.125a1.2,1.2,0,0,1,.875-.375,1.54,1.54,0,0,1,.875.25,1.662,1.662,0,0,1,.375,1,1.344,1.344,0,0,1-.25.75,40.8,40.8,0,0,1-4,4.063,59.154,59.154,0,0,1-9.187,6.938A21.217,21.217,0,0,1,165.5-9.875Zm16.875,11q-3.375,0-3.5-3.375a8.152,8.152,0,0,1,3.563-6.625A50.5,50.5,0,0,1,191.5-14.25v-1A14.885,14.885,0,0,0,190-22a26.564,26.564,0,0,1-1.25-3.625,15.988,15.988,0,0,1-.5-4.125q0-5.375,3.25-8.375a10.165,10.165,0,0,1,7-3A6.64,6.64,0,0,1,203-39.5a6.669,6.669,0,0,1,2.25,4.25V-35a.9.9,0,0,1-.312.75,2.213,2.213,0,0,1-.687.375H204a1.1,1.1,0,0,1-.812-.312,1.1,1.1,0,0,1-.312-.812,4.129,4.129,0,0,0-1.437-2.625,4.4,4.4,0,0,0-2.937-1,7.673,7.673,0,0,0-5.25,2.313,8.5,8.5,0,0,0-2.5,6.563,14.943,14.943,0,0,0,1.625,7A23.265,23.265,0,0,1,194-15.375a6.859,6.859,0,0,1,.875-.375,62.282,62.282,0,0,0,17-10.25,1.2,1.2,0,0,1,.875-.375,1.2,1.2,0,0,1,.875.375,1.08,1.08,0,0,1,.375.75,1.2,1.2,0,0,1-.375.875,65.3,65.3,0,0,1-17.25,10.5q-1.375.625-2.625,1.25a19.616,19.616,0,0,1-4.812,9.75Q185.25,1.125,182.375,1.125Zm0-2.5q1.5,0,4.313-2.75A17.871,17.871,0,0,0,191-11.25a40.113,40.113,0,0,0-7,4.313q-2.75,2.188-2.75,4.688a.97.97,0,0,0,.188.688A1.483,1.483,0,0,0,182.375-1.375Zm30.5-8.75a5.633,5.633,0,0,1-3.812-1.062,4.524,4.524,0,0,1-1.437-1.937,6.089,6.089,0,0,1-.5-2.5,12.3,12.3,0,0,1,1.438-5.5,19.057,19.057,0,0,1,3.563-5,.841.841,0,0,1,.75-.375,1.2,1.2,0,0,1,.875.375,1.2,1.2,0,0,1,.375.875,1.019,1.019,0,0,1-.25.75q-4.25,5-4.25,8.75a5.109,5.109,0,0,0,.25,1.625.944.944,0,0,0,.25.563,2.627,2.627,0,0,0,.875.625,4.352,4.352,0,0,0,1.875.313A12.949,12.949,0,0,0,221.5-16.25a8.785,8.785,0,0,1-2.25-2,12.135,12.135,0,0,1-2.625-7.875,15.492,15.492,0,0,1,2.563-8.5,7.878,7.878,0,0,1,6.938-4A6.341,6.341,0,0,1,231-36.75a7.275,7.275,0,0,1,1.375,4.625q0,6.125-5.875,14a8.159,8.159,0,0,1-.75.875,8.219,8.219,0,0,0,2,.25q7.625,0,16-9a1.2,1.2,0,0,1,.875-.375,1.54,1.54,0,0,1,.875.25,1.662,1.662,0,0,1,.375,1,1.344,1.344,0,0,1-.25.75q-9.125,9.75-17.875,9.75a14.08,14.08,0,0,1-3.875-.5Q218.25-10.125,212.875-10.125Zm13.25-26.125q-3.125,0-5.062,3.25a13.216,13.216,0,0,0-1.937,6.875,10.211,10.211,0,0,0,2,6.375A8.833,8.833,0,0,0,223.25-18a29.241,29.241,0,0,0,4.875-7.125,16.329,16.329,0,0,0,1.875-7,4.446,4.446,0,0,0-.875-3A3.806,3.806,0,0,0,226.125-36.25Zm11.125,28-.625-.125A1.228,1.228,0,0,1,236-9.5v-.375a74,74,0,0,1,5.563-12.687,80.644,80.644,0,0,1,10.063-13.562,1.662,1.662,0,0,1,1-.375,1.344,1.344,0,0,1,.75.25,1.441,1.441,0,0,1,.5,1,1.08,1.08,0,0,1-.375.75q-8.625,9.875-12,17.375a72.833,72.833,0,0,1,6.25-6.25,63.76,63.76,0,0,1,8.5-6.5q4.5-2.875,7.625-2.875,3.375,0,3,2.125a7.435,7.435,0,0,1-.75,2.938Q265.375-26,264.5-24.25a22.552,22.552,0,0,0-1.625,3.125,6.99,6.99,0,0,0-.625,2.625q0,1.5,2.125,1.625A13.677,13.677,0,0,0,270-18.312a51.927,51.927,0,0,0,6-3.25q2.875-1.812,4.75-3.187t2-1.5l.75-.25a1.441,1.441,0,0,1,1,.5l.25.625a1.554,1.554,0,0,1-.5,1.125l-.125.125q-.75.625-4.125,2.938a71.978,71.978,0,0,1-7.75,4.563,17.546,17.546,0,0,1-7.875,2.25q-2.75,0-3.812-1a3.291,3.291,0,0,1-1.062-2.5A9.764,9.764,0,0,1,260.563-22q1.063-2.25,2.188-4.25a9.469,9.469,0,0,0,1.5-3.625.331.331,0,0,0-.375-.375,23.163,23.163,0,0,0-4.625,1.813,43.223,43.223,0,0,0-9.562,6.563A70.387,70.387,0,0,0,238.25-8.75,1.188,1.188,0,0,1,237.25-8.25Zm94,.375q-4.75,0-6.75-3.187a14.175,14.175,0,0,1-2-7.687l.125-1.375a51.853,51.853,0,0,1-6.687,5.75q-4.063,3-7.562,3a5,5,0,0,1-3.75-1.187A4.444,4.444,0,0,1,303.5-15.75q0-3.625,3-8.687a37.167,37.167,0,0,1,7.188-8.812Q317.875-37,321.5-37a5.912,5.912,0,0,1,4.375,1.625,126.158,126.158,0,0,1,8.375-19.062A93.6,93.6,0,0,1,345.5-71.25q6-7,11-7a3.735,3.735,0,0,1,3,1.563A7.405,7.405,0,0,1,360.75-72q0,4.125-3.062,10.875T346.938-45A187.577,187.577,0,0,1,325.5-23.625a24.829,24.829,0,0,0-.5,4.875,12.757,12.757,0,0,0,1.313,6q1.313,2.5,4.938,2.5,4.125,0,8.938-3.25a66.127,66.127,0,0,0,8.563-6.812Q352.5-23.875,354-25.5q.375-.5.5-.5a1.081,1.081,0,0,1,.875-.5,1.08,1.08,0,0,1,.75.375,1.662,1.662,0,0,1,.375,1,1.344,1.344,0,0,1-.25.75Q356-24,353.563-21.5t-6.125,5.625a51.642,51.642,0,0,1-8,5.563A16.709,16.709,0,0,1,331.25-7.875Zm-5-19.625a178.732,178.732,0,0,0,19.875-20.437q7-8.812,9.625-14.875t2.625-9.312q0-3.625-1.875-3.625-4.375,0-10.625,7.875a107.149,107.149,0,0,0-11.75,18.938A96.924,96.924,0,0,0,326.25-27.5ZM308.375-13.75a9.651,9.651,0,0,0,4.875-1.562A27.767,27.767,0,0,0,318.125-19a49.955,49.955,0,0,0,3.688-3.812,6.389,6.389,0,0,0,1.438-2.062q.625-3.375,1.75-7.375a3.275,3.275,0,0,0-3.5-2.25q-2.875,0-6.5,3.438a38.422,38.422,0,0,0-6.312,7.813Q306-18.875,306-16.125,306-14,308.375-13.75Zm58,.125a14.78,14.78,0,0,1-8.5-2.375q-3.5-2.375-3.5-7.375,0-5.375,4.375-10.375a13.615,13.615,0,0,1,10.625-5q3.875,0,4.25,3.625,0,2.5-3.75,5.688t-13,5.438v.625a6.168,6.168,0,0,0,2.75,5.625,12.325,12.325,0,0,0,6.75,1.75,20.705,20.705,0,0,0,9.938-2.312A33.261,33.261,0,0,0,383.188-23a23.226,23.226,0,0,0,2.938-3h0a1.081,1.081,0,0,1,.875-.5,1.08,1.08,0,0,1,.75.375,1.081,1.081,0,0,1,.5.875,1.344,1.344,0,0,1-.25.75q-.25.375-2.875,3a32.694,32.694,0,0,1-7.437,5.25A23.269,23.269,0,0,1,366.375-13.625Zm-9-13Q364.625-28.5,367.938-31t3.313-4q0-1.25-1.875-1.375a10.851,10.851,0,0,0-7.5,2.938A15.518,15.518,0,0,0,357.375-26.625ZM419-7.875q-4.625,0-6.562-3.187a14.781,14.781,0,0,1-1.937-7.812q0-6.875,3.438-16.875a129.964,129.964,0,0,1,8.688-19.687,86.888,86.888,0,0,1,11.063-16.25Q439.5-78.25,444.25-78.25a3.907,3.907,0,0,1,3.063,1.563A7.149,7.149,0,0,1,448.625-72q0,5.75-3.812,12.563a92.281,92.281,0,0,1-9.437,13.625A153.584,153.584,0,0,1,423.813-33.25q-5.938,5.75-10.437,9.625a33.875,33.875,0,0,0-.375,4.75,13.691,13.691,0,0,0,1.25,6.063Q415.5-10.25,419-10.25a15,15,0,0,0,7.625-2.375,50.582,50.582,0,0,0,7.5-5.437q3.5-3.062,5.75-5.437T442.25-26a1.662,1.662,0,0,1,1-.375,1.325,1.325,0,0,1,.875.313,1.008,1.008,0,0,1,.375.813,1.2,1.2,0,0,1-.375.875q-.25.375-2.687,2.875t-6.125,5.625a51.642,51.642,0,0,1-8,5.563A16.9,16.9,0,0,1,419-7.875ZM414.125-27.5A178.389,178.389,0,0,0,433.75-47.625q7-8.75,9.75-14.875t2.75-9.5a7.743,7.743,0,0,0-.437-2.437,1.613,1.613,0,0,0-1.562-1.312q-4.25,0-10.5,7.875A107.149,107.149,0,0,0,422-48.937,96.924,96.924,0,0,0,414.125-27.5ZM444.5-12.25a5.51,5.51,0,0,1-3.875-1.375,5.181,5.181,0,0,1-1.25-3.625q0-5.25,6-12.25a29.58,29.58,0,0,1,5.438-4.562A14.575,14.575,0,0,1,459.25-36.5a3.756,3.756,0,0,1,2.75.875,1.188,1.188,0,0,1,.5,1,1.311,1.311,0,0,1-.187.688,1.05,1.05,0,0,1-.687.438,2.055,2.055,0,0,1-.5-.062,2.442,2.442,0,0,1-.5-.187q-.25-.125-.562-.25a2.219,2.219,0,0,0-.812-.125q-6,0-12.125,6.375a26.433,26.433,0,0,0-3.875,5.5,11.178,11.178,0,0,0-1.5,5,2.547,2.547,0,0,0,.625,1.875,2.63,2.63,0,0,0,2.125.75q2.5,0,5.5-2.812a56.336,56.336,0,0,0,5.75-6.312q2.75-3.5,4.5-6a1.893,1.893,0,0,1,1.5-.75,2.77,2.77,0,0,1,.875.125,1.928,1.928,0,0,1,1.125,1.75,1.109,1.109,0,0,1-.125.5q-.25.625-.5,1.375v.25q-.75,2.375-1.437,4.813A16.132,16.132,0,0,0,461-17.375a3.554,3.554,0,0,0,.5,2,1.415,1.415,0,0,0,.5.5,2.342,2.342,0,0,0,1.25.25,11.852,11.852,0,0,0,6.188-2.187,52.823,52.823,0,0,0,6.438-4.812q3-2.625,4.5-4.25a1.554,1.554,0,0,1,1.125-.5.848.848,0,0,1,.625.25,1.441,1.441,0,0,1,.5,1,1.2,1.2,0,0,1-.375.875l-.125.125q-.75.875-3.812,3.688a53.107,53.107,0,0,1-7.25,5.5,14.666,14.666,0,0,1-7.812,2.688,4.654,4.654,0,0,1-3.75-1.625,6.162,6.162,0,0,1-1-3.5,23.68,23.68,0,0,1,1.75-8.25,74.845,74.845,0,0,1-8.125,9.5Q448.125-12.25,444.5-12.25Zm62.625,32.125a1.282,1.282,0,0,1-1.25-1.25,2.751,2.751,0,0,1,.625-1.5Q512.75,9.5,520.813-1.25t15.813-22.937a175.226,175.226,0,0,0,12.938-24.125q5.187-11.937,5.188-21.562,0-8.375-4.125-12.062A14.644,14.644,0,0,0,540.5-85.625,28.983,28.983,0,0,0,526.375-81.5a38.6,38.6,0,0,0-12.5,11.188,26.468,26.468,0,0,0-5.125,15.938,13.934,13.934,0,0,0,2,7.563,19.767,19.767,0,0,0,4.688,5.25,31.276,31.276,0,0,0,4.938,3.188,1.127,1.127,0,0,1,.75,1,1.325,1.325,0,0,1-.312.875,1.008,1.008,0,0,1-.812.375l-.625-.125q-13-6.875-13-18.125a28.54,28.54,0,0,1,5.563-17.25,41,41,0,0,1,13.563-12A32.057,32.057,0,0,1,540.875-88,16.808,16.808,0,0,1,552.5-83.75q4.75,4.25,4.75,13.875,0,10.375-5.5,22.813a177.687,177.687,0,0,1-13,24.125q-7.5,11.688-13.875,20.313,18-19.75,31.625-33.812a276.689,276.689,0,0,1,22.938-21.625q9.312-7.563,14.438-7.562a5.067,5.067,0,0,1,3.75,1.375A5.792,5.792,0,0,1,599-60q0,5.25-4.312,14.313T585.25-27.875q-5.125,8.75-8.375,13.75,18.625-19.25,28.438-27.937t13.563-8.687q3.375,0,3.625,3.875,0,3.25-2.687,9.063t-6.187,12.438q-3.5,6.625-6.312,12.625T604.5-3.375q0,2.375,2.125,2.125,2.625,0,7.813-5.187a145.233,145.233,0,0,0,9.875-10.937,93.3,93.3,0,0,0,6.313-8.375,1.355,1.355,0,0,1,1-.625A1.2,1.2,0,0,1,632.5-26a1.2,1.2,0,0,1,.375.875l-.25.75a112.554,112.554,0,0,1-7.375,9.813A110.8,110.8,0,0,1,615.063-3.687Q609.75,1.25,606.625,1.25q-4.25,0-4.625-4.625,0-3.875,3.063-10.437t6.813-13.562q3.375-6.25,5.813-11.5t2.438-8q0-1-.25-1.187a1.816,1.816,0,0,0-1-.187q-3.125,0-13.25,9.313T585.5-19.437q-10,10.187-14,14.563L570.625-4a1.08,1.08,0,0,1-.75.375A1.417,1.417,0,0,1,568.938-4a1.124,1.124,0,0,1-.437-.875,1.392,1.392,0,0,1,.125-.625q1-1.5,2.375-3.75,4.25-6.625,10.188-16.5t10.688-19.5q4.75-9.625,4.75-14.75a3.631,3.631,0,0,0-.687-2.562,2.8,2.8,0,0,0-2.062-.687q-5.125,0-16.125,9.688t-26.5,26.125Q535.75-11,516.75,9.875,512.5,14.625,508,19.5A1.2,1.2,0,0,1,507.125,19.875ZM654.25-13q-3,0-4.187-1.625a6.811,6.811,0,0,1-1.187-4.125,22.248,22.248,0,0,1,1.375-7.125q-1.75,2.25-4.437,5.188a38.326,38.326,0,0,1-5.687,5.125,10,10,0,0,1-5.875,2.188q-2.875,0-4.062-1.5A5.853,5.853,0,0,1,629-18.625q0-4.75,3.125-10.75,2.75-5.25,4.25-7.75l.5-.875a1.355,1.355,0,0,1,1-.625l.75.25a1.13,1.13,0,0,1,.625,1l-.25.625a96.709,96.709,0,0,0-4.937,8.875Q631.375-22.5,631.375-19a2.8,2.8,0,0,0,2.875,3.125q3.25,0,7.625-4.25a79.184,79.184,0,0,0,8.25-9.437A102.06,102.06,0,0,0,656-38.125a1.188,1.188,0,0,1,1-.5,1.391,1.391,0,0,1,.625.125,1.13,1.13,0,0,1,.625,1l-.25.625q-1.875,3.25-4.312,8.688A23.406,23.406,0,0,0,651.25-19a4.312,4.312,0,0,0,.688,2.5,2.6,2.6,0,0,0,2.313,1,13.8,13.8,0,0,0,7.563-2.375A37.238,37.238,0,0,0,668-22.75q2.5-2.5,3-3.125V-26a1.2,1.2,0,0,1,.875-.375,1.344,1.344,0,0,1,.75.25,1.188,1.188,0,0,1,.5,1l-.25.75-.125.25q-.75.875-3.5,3.563a38.579,38.579,0,0,1-6.687,5.125A15.543,15.543,0,0,1,654.25-13ZM665.375,1.125q-3.375,0-3.5-3.375a8.152,8.152,0,0,1,3.563-6.625A50.5,50.5,0,0,1,674.5-14.25v-1A14.885,14.885,0,0,0,673-22a26.562,26.562,0,0,1-1.25-3.625,15.989,15.989,0,0,1-.5-4.125q0-5.375,3.25-8.375a10.165,10.165,0,0,1,7-3A6.64,6.64,0,0,1,686-39.5a6.669,6.669,0,0,1,2.25,4.25V-35a.9.9,0,0,1-.312.75,2.213,2.213,0,0,1-.687.375H687a1.1,1.1,0,0,1-.812-.312,1.1,1.1,0,0,1-.312-.812,4.129,4.129,0,0,0-1.437-2.625,4.4,4.4,0,0,0-2.937-1,7.673,7.673,0,0,0-5.25,2.313,8.5,8.5,0,0,0-2.5,6.563,14.944,14.944,0,0,0,1.625,7A23.265,23.265,0,0,1,677-15.375a6.858,6.858,0,0,1,.875-.375,62.282,62.282,0,0,0,17-10.25,1.2,1.2,0,0,1,.875-.375,1.2,1.2,0,0,1,.875.375,1.08,1.08,0,0,1,.375.75,1.2,1.2,0,0,1-.375.875,65.3,65.3,0,0,1-17.25,10.5q-1.375.625-2.625,1.25a19.616,19.616,0,0,1-4.812,9.75Q668.25,1.125,665.375,1.125Zm0-2.5q1.5,0,4.313-2.75A17.871,17.871,0,0,0,674-11.25a40.113,40.113,0,0,0-7,4.313q-2.75,2.188-2.75,4.688a.97.97,0,0,0,.188.688A1.483,1.483,0,0,0,665.375-1.375Zm41.75-40.875-.5-.25a1.008,1.008,0,0,1-.5-1v-.25l.125-.375L709-48.5a1.539,1.539,0,0,1,1.25-.625l.5.375a1.008,1.008,0,0,1,.5.75v.25l-.25.5-2.625,4.375A1.539,1.539,0,0,1,707.125-42.25Zm-9,32.375a5.163,5.163,0,0,1-3.312-.875,4.548,4.548,0,0,1-1.437-1.875,7.473,7.473,0,0,1-.625-3.125,20.381,20.381,0,0,1,2-8.5,38.709,38.709,0,0,1,2.625-5.625,28.655,28.655,0,0,1,2.875-4.25,1.2,1.2,0,0,1,.875-.375,1.54,1.54,0,0,1,.875.25,1.662,1.662,0,0,1,.375,1,1.344,1.344,0,0,1-.25.75,30.94,30.94,0,0,0-4.5,7.625,22.783,22.783,0,0,0-2.375,9.125,5.387,5.387,0,0,0,.375,2.125,1.866,1.866,0,0,0,.625.938,2.937,2.937,0,0,0,1.875.438,18.709,18.709,0,0,0,10.188-3.25,57.912,57.912,0,0,0,8.5-6.5,41,41,0,0,0,3.938-4h.125a1.2,1.2,0,0,1,.875-.375,1.54,1.54,0,0,1,.875.25,1.662,1.662,0,0,1,.375,1,1.344,1.344,0,0,1-.25.75,40.8,40.8,0,0,1-4,4.063,59.155,59.155,0,0,1-9.187,6.938A21.216,21.216,0,0,1,698.125-9.875ZM716,32.375a1.151,1.151,0,0,1-.937-.375,1.325,1.325,0,0,1-.312-.875v-.25q2.25-7.75,4.875-15.375.125-1.625.125-3.5a44.707,44.707,0,0,0-.5-6.062q-.5-3.562-.75-5.187l-.125-.5A7.581,7.581,0,0,1,721.5-5.875a47.8,47.8,0,0,1,8-5q1.125-2.5,2.125-5,1.5-3.5,3-6.875a32.57,32.57,0,0,1-5.375,5.563,8.816,8.816,0,0,1-5.375,2.313,3.708,3.708,0,0,1-3.187-1.437,6.266,6.266,0,0,1-1.062-3.812,17.431,17.431,0,0,1,2-7.5A22.657,22.657,0,0,1,727-34.75a11.173,11.173,0,0,1,7.625-3,7.1,7.1,0,0,1,3.313.688A6,6,0,0,1,740-35.375l1.125-2a1.355,1.355,0,0,1,1-.625,1.391,1.391,0,0,1,.625.125,1,1,0,0,1,.563.438,1.311,1.311,0,0,1,.188.688l-.125.375-.75,1.75q-4.875,10.5-9.75,22.125A75.9,75.9,0,0,0,752.625-26a1.2,1.2,0,0,1,.875-.375,1.2,1.2,0,0,1,.875.375,1.08,1.08,0,0,1,.375.75,1.2,1.2,0,0,1-.375.875,64.017,64.017,0,0,1-11.375,9A119.374,119.374,0,0,1,732.25-9.5a3.155,3.155,0,0,1-.75.375Q726.375,3.25,722,16.125a44.7,44.7,0,0,1-4.875,15.625,1.057,1.057,0,0,1-.5.438A1.474,1.474,0,0,1,716,32.375ZM722,8.5q3-8,6.125-15.875a29.065,29.065,0,0,0-5.312,3.625,5.271,5.271,0,0,0-1.937,4V.625q.125.75.375,2.313t.5,3.188A17.538,17.538,0,0,1,722,8.5Zm1.875-25.75q3,0,7.188-4.937A72.493,72.493,0,0,0,738.625-33a4.951,4.951,0,0,0-1.125-1.5,3.956,3.956,0,0,0-2.875-.875,9.164,9.164,0,0,0-6.5,2.75,19.324,19.324,0,0,0-4.437,6.375A16.281,16.281,0,0,0,722.125-20Q722.125-17.5,723.875-17.25Zm53,4.25q-3,0-4.187-1.625A6.811,6.811,0,0,1,771.5-18.75a22.248,22.248,0,0,1,1.375-7.125q-1.75,2.25-4.437,5.188a38.326,38.326,0,0,1-5.687,5.125,10,10,0,0,1-5.875,2.188q-2.875,0-4.062-1.5a5.853,5.853,0,0,1-1.187-3.75q0-4.75,3.125-10.75,2.75-5.25,4.25-7.75l.5-.875a1.355,1.355,0,0,1,1-.625l.75.25a1.13,1.13,0,0,1,.625,1l-.25.625a96.709,96.709,0,0,0-4.937,8.875Q754-22.5,754-19a2.8,2.8,0,0,0,2.875,3.125q3.25,0,7.625-4.25a79.184,79.184,0,0,0,8.25-9.437,102.06,102.06,0,0,0,5.875-8.562,1.188,1.188,0,0,1,1-.5,1.391,1.391,0,0,1,.625.125,1.13,1.13,0,0,1,.625,1l-.25.625q-1.875,3.25-4.312,8.688A23.406,23.406,0,0,0,773.875-19a4.312,4.312,0,0,0,.688,2.5,2.6,2.6,0,0,0,2.313,1,13.8,13.8,0,0,0,7.563-2.375,37.238,37.238,0,0,0,6.188-4.875q2.5-2.5,3-3.125V-26a1.2,1.2,0,0,1,.875-.375,1.344,1.344,0,0,1,.75.25,1.188,1.188,0,0,1,.5,1l-.25.75-.125.25q-.75.875-3.5,3.563a38.579,38.579,0,0,1-6.687,5.125A15.543,15.543,0,0,1,776.875-13Zm28.875-.625A14.78,14.78,0,0,1,797.25-16q-3.5-2.375-3.5-7.375,0-5.375,4.375-10.375a13.615,13.615,0,0,1,10.625-5q3.875,0,4.25,3.625,0,2.5-3.75,5.688T796.25-24v.625A6.169,6.169,0,0,0,799-17.75,12.325,12.325,0,0,0,805.75-16a20.705,20.705,0,0,0,9.938-2.312A33.26,33.26,0,0,0,822.563-23a23.228,23.228,0,0,0,2.938-3h0a1.081,1.081,0,0,1,.875-.5,1.08,1.08,0,0,1,.75.375,1.081,1.081,0,0,1,.5.875,1.344,1.344,0,0,1-.25.75q-.25.375-2.875,3a32.694,32.694,0,0,1-7.437,5.25A23.269,23.269,0,0,1,805.75-13.625Zm-9-13Q804-28.5,807.313-31t3.313-4q0-1.25-1.875-1.375a10.852,10.852,0,0,0-7.5,2.938A15.518,15.518,0,0,0,796.75-26.625Z",transform:"translate(0.5 88.5)"})),i.a.createElement("h2",{className:"subtitle"},"Pour les passions des tous les jours."),i.a.createElement("div",{className:"content ".concat(this.state.expandedDisplayTrigger?"expanded":"")},i.a.createElement("div",{className:"description ".concat(this.state.expandedDisplayTrigger?"expanded":"")},!this.state.expandedDisplayTrigger&&i.a.createElement("h1",{className:"".concat(this.state.expandedOpacityTrigger?"hidden":"")},this.props.instruments[this.props.currentIndex].expandedContent.title),!this.state.expandedDisplayTrigger&&i.a.createElement("p",{className:"".concat(this.state.expandedOpacityTrigger?"hidden":"")},this.props.instruments[this.props.currentIndex].description),i.a.createElement(S,{expandedDisplay:this.state.expandedDisplayTrigger,animationFinished:this.state.animationFinishedTrigger,content:this.props.instruments[this.props.currentIndex].expandedContent,retract:this.retract})),i.a.createElement("div",{className:"find-more ".concat(this.state.animationTrigger?"retracted":"")},!this.state.animationTrigger&&i.a.createElement("button",{className:"find-more-button ".concat(this.state.expandedOpacityTrigger?"hidden":""),onClick:function(){return e.expand()}},"FIND MORE"))),i.a.createElement(C,{slideHandler:this.props.slideHandler,opacityTrigger:this.state.expandedOpacityTrigger,displayTrigger:this.state.expandedDisplayTrigger,animationFinished:this.state.animationFinishedTrigger}))}}]),a}(i.a.Component),D=(a(33),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={home:!1,about:!1,contact:!1,mobileMenuOpened:!1},n}return Object(c.a)(a,[{key:"triggerMobileMenu",value:function(){var e=this.state.mobileMenuOpened;this.setState({mobileMenuOpened:!e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"navbar"},i.a.createElement(N.a,{path:M.a,color:"white",size:1.3}),i.a.createElement("div",{className:"logo"},i.a.createElement("svg",{className:this.props.instruments[this.props.currentIndex].class,xmlns:"http://www.w3.org/2000/svg",width:"67.995",height:"42.148",viewBox:"0 0 67.995 42.148"},i.a.createElement("defs",null),i.a.createElement("g",{transform:"translate(-4.447 -18)"},i.a.createElement("path",{className:"a",d:"M70.442,48.609H61.333V20L38.445,42.888,15.557,20V48.61l-9.109,0"}),i.a.createElement("path",{className:"a",d:"M66.064,59.26H52.02V44L38.669,57.351,25.318,44V59.259l-14.046,0",transform:"translate(-0.224 -1.112)"})))),i.a.createElement(N.a,{path:M.g,color:"white",size:1.5,onClick:function(){return e.triggerMobileMenu()}}),i.a.createElement("div",{className:"navbar-menu"},i.a.createElement("div",{className:"link",onMouseEnter:function(){return e.setState({home:!0})},onMouseLeave:function(){return e.setState({home:!1})}},i.a.createElement("a",{href:"https://www.google.com"},"Home"),i.a.createElement("div",{className:"".concat(this.state.home?"expanded "+this.props.instruments[this.props.currentIndex].class:"")})),i.a.createElement("div",{className:"link",onMouseEnter:function(){return e.setState({about:!0})},onMouseLeave:function(){return e.setState({about:!1})}},i.a.createElement("a",{href:"https://www.google.com"},"About us"),i.a.createElement("div",{className:"".concat(this.state.about?"expanded "+this.props.instruments[this.props.currentIndex].class:"")})),i.a.createElement("div",{className:"link",onMouseEnter:function(){return e.setState({contact:!0})},onMouseLeave:function(){return e.setState({contact:!1})}},i.a.createElement("a",{href:"https://www.google.com"},"Contact"),i.a.createElement("div",{className:"".concat(this.state.contact?"expanded "+this.props.instruments[this.props.currentIndex].class:"")})),i.a.createElement("button",{className:"sign-up-button ".concat(this.props.instruments[this.props.currentIndex].class)},"Sign up")),i.a.createElement("div",{className:"navbar-menu-mobile ".concat(this.props.instruments[this.props.currentIndex].class," ").concat(this.state.mobileMenuOpened?"opened":"")},i.a.createElement(N.a,{className:"navbar-menu-mobile-close",size:1.5,color:"white",path:M.e,onClick:function(){return e.triggerMobileMenu()}}),i.a.createElement("svg",{className:"navbar-menu-mobile-logo",xmlns:"http://www.w3.org/2000/svg",width:"67.995",height:"42.148",viewBox:"0 0 67.995 42.148"},i.a.createElement("defs",null),i.a.createElement("g",{transform:"translate(-4.447 -18)"},i.a.createElement("path",{className:"a",d:"M70.442,48.609H61.333V20L38.445,42.888,15.557,20V48.61l-9.109,0"}),i.a.createElement("path",{className:"a",d:"M66.064,59.26H52.02V44L38.669,57.351,25.318,44V59.259l-14.046,0",transform:"translate(-0.224 -1.112)"}))),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:"https://www.google.com"},"Home"),i.a.createElement("div",{className:"underline"})),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:"https://www.google.com"},"About us")),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:"https://www.google.com"},"Contact")),i.a.createElement("div",{className:"link"},i.a.createElement("a",{href:"https://www.google.com"},"Sign up"))))}}]),a}(i.a.Component)),Q=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={currentIndexOfInstrument:3,currentInstrumentImg:a(11),instruments:[{description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",class:"turqouise",expandedContent:{title:"Millenium Acoustic Guitar",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{description:"Pellentesque ut tortor vitae mauris luctus congue non at velit. Donec semper risus in ligula finibus, eget tempor nibh dictum. Nam pretium velit et nisi ultrices pretium. Nulla a lobortis mi. Duis dignissim accumsan massa quis tincidunt. Nunc vitae tristique justo. Nunc at magna sit amet ante aliquam gravida. Nunc dignissim orci id consequat elementum.",class:"bleu",expandedContent:{title:"Infinity Cello",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{description:"Phasellus a nisl dictum, aliquet lorem eget, ultricies turpis. Maecenas tempor tempus nunc quis pretium. Vestibulum feugiat, risus sit amet aliquam ultricies, orci enim faucibus diam, at placerat quam eros at magna. Curabitur mattis sodales diam quis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus.",class:"pink",expandedContent:{title:"Eternity Piano",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{description:"Ut id viverra ante. Vivamus nisi turpis, venenatis vitae erat sed, consequat suscipit nisi. Integer eget sapien augue. Praesent ligula urna, laoreet eget dapibus sit amet, rutrum sed ex. Curabitur odio tellus, sollicitudin ut ex et, dictum elementum mi. Phasellus rhoncus ullamcorper turpis a euismod",class:"bej",type:"violin",expandedContent:{title:"Infinity Violin",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}},{description:"Aliquam erat volutpat. Fusce vitae lacinia ante, vel accumsan purus. Nam at purus non ipsum maximus accumsan. Nullam dignissim arcu urna, eu blandit mi pellentesque sed. Nullam placerat bibendum dui, quis tristique nisl molestie eu. Curabitur gravida ligula tincidunt metus semper fringilla.",class:"orange",expandedContent:{title:"Flute of the Stars",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}}]},i.changeCurrentInstrument=i.changeCurrentInstrument.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"changeCurrentInstrument",value:function(e,t){this.setState({currentIndexOfInstrument:e,currentInstrumentImg:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(D,{instruments:this.state.instruments,currentIndex:this.state.currentIndexOfInstrument}),i.a.createElement(j,{instruments:this.state.instruments,slideHandler:this.changeCurrentInstrument,currentIndex:this.state.currentIndexOfInstrument}))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.ea331408.chunk.js.map