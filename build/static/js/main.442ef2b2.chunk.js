(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),r=n.n(c),i=n(36),s=n.n(i),o=n(52),l=n(10),j=n(15),u=n(25),d=n(102),b=n.n(d).a.create({baseURL:"https://oktravel.herokuapp.com/"}),m=function(e){return b.get("countries?lang=".concat(e)).then((function(e){return e.data}))},h=n(224),g=n(222),O=n(2),p=Object(g.a)((function(e){return{root:{marginTop:e.spacing(16),minHeight:"calc(100vh - 380px)"}}})),x=function(e){var t=e.children,n=p();return Object(O.jsx)(h.a,{className:n.root,children:Object(O.jsx)("main",{children:t})})},f=function(e){var t=e.countryInf.country,n=t.description,a=t.image,c=a.alt,r=a.mainImage;return Object(O.jsxs)("div",{className:"country__description",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:"country__description_image",src:r,alt:c}),Object(O.jsx)("h1",{className:"country__description_town_name","data-testid":"alt",children:c})]}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{className:"country__description_text",children:n})})]})},v=n(63),y=n.n(v),_=function(e){var t=["match",["get","iso_3166_1_alpha_3"]];return t.push(e,"rgb(0, 128, 0)","rgba(0, 0, 0, 0)"),t},w={en:{currentTime:"Current Time",todayWeather:"Today Weather",feelsLike:"feels like",wind:"wind",speed:"m/s",humidity:"humidity",exchange:"Exchange Rate",EUR:"EUR",USD:"USD",RUB:"RUB",lng:"Longitude",lat:"Latitude",zoom:"Zoom",searchPlaceholder:"Search",designedBy:"Designed by"},ru:{currentTime:"\u0422\u0435\u043a\u0443\u0449\u0435\u0435 \u0412\u0440\u0435\u043c\u044f",todayWeather:"\u041f\u043e\u0433\u043e\u0434\u0430 \u0421\u0435\u0433\u043e\u0434\u043d\u044f",feelsLike:"\u043e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f",wind:"\u0432\u0435\u0442\u0435\u0440",speed:"\u043c/c",humidity:"\u0432\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c",exchange:"\u041a\u0443\u0440\u0441\u044b \u0412\u0430\u043b\u044e\u0442",EUR:"\u0415\u0432\u0440\u043e",USD:"\u0414\u043e\u043b\u043b\u0430\u0440",RUB:"\u0420\u0443\u0431\u043b\u044c",lng:"\u0414\u043e\u043b\u0433\u043e\u0442\u0430",lat:"\u0428\u0438\u0440\u043e\u0442\u0430",zoom:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431",searchPlaceholder:"\u041f\u043e\u0438\u0441\u043a",designedBy:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e"},pl:{currentTime:"Obecny Czas",todayWeather:"Dzisiejsza Pogoda",feelsLike:"czuje si\u0119 jak",wind:"wiatr",speed:"m/s",humidity:"wilgotno\u015b\u0107",exchange:"Kurs wymiany",EUR:"EUR",USD:"USD",RUB:"RUB",lng:"D\u0142ugo\u015b\u0107 geograficzna",lat:"Szeroko\u015b\u0107",zoom:"Powi\u0119kszenie",searchPlaceholder:"Szukaj",designedBy:"Zaprojektowany przez"}},S=function(e,t){return w[e][t]};y.a.accessToken="pk.eyJ1IjoiZmFudG9td2Fsa2VyIiwiYSI6ImNramxmcXd2eTIyc2Iyc2xvcTJ3cmdsNmwifQ.mU8FFb3Kc3cihmCMAk6Spw";var N=function(e){var t=e.lang,n=e.countryInf.country,c=n.alpha3Code,r=n.location,i=r.lat,s=r.long,o=Object(a.useRef)(),j=Object(a.useState)(s),u=Object(l.a)(j,2),d=u[0],b=u[1],m=Object(a.useState)(i),h=Object(l.a)(m,2),g=h[0],p=h[1],x=Object(a.useState)(4.5),f=Object(l.a)(x,2),v=f[0],w=f[1];return Object(a.useEffect)((function(){var e=new y.a.Map({container:o.current,style:"mapbox://styles/mapbox/streets-v11",center:[d,g],zoom:v});return(new y.a.Marker).setLngLat([d,g]).addTo(e),e.addControl(new y.a.FullscreenControl),e.on("move",(function(){b(e.getCenter().lng.toFixed(4)),p(e.getCenter().lat.toFixed(4)),w(e.getZoom().toFixed(2))})),e.on("load",(function(){e.addSource("countries",{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"}),e.addLayer({id:"countries-join",type:"line",source:"countries","source-layer":"country_boundaries",paint:{"line-color":_(c),"line-width":4}},"admin-1-boundary-bg"),e.getStyle().layers.filter((function(e){return/-label/.test(e.id)})).forEach((function(n){e.setLayoutProperty(n.id,"text-field",["coalesce",["get","name_".concat(t)],["get","name"]])}))})),function(){return e.remove()}}),[t]),Object(O.jsxs)("div",{className:"map_wrapper",children:[Object(O.jsx)("div",{className:"sidebar",children:"".concat(S(t,"lng"),": ").concat(d," | ").concat(S(t,"lat"),": ").concat(g," | ").concat(S(t,"zoom"),": ").concat(v)}),Object(O.jsx)("div",{className:"map-container",ref:o})]})},k=n(108),C=n.n(k),I=n(107),L=n.n(I),T=function(e){var t=e.lang,n=e.timezone,c=Object(a.useState)(""),r=Object(l.a)(c,2),i=r[0],s=r[1],o=function(){var e=new Date,a={timeZone:n,year:"numeric",month:"long",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"};s(e.toLocaleString(t,a))};return Object(a.useEffect)((function(){var e=setInterval(o,1e3);return function(){return clearInterval(e)}}),[t]),Object(O.jsxs)("div",{className:"country__widgets__datatime",children:[Object(O.jsx)("h3",{"data-testid":"currenttime",children:S(t,"currentTime")}),Object(O.jsx)("span",{children:i})]})},z=function(e){var t=e.lang,n=e.rates,a=n.EUR,c=n.USD,r=n.RUB;return Object(O.jsxs)("div",{className:"country__widgets__exchange",children:[Object(O.jsx)("h3",{children:S(t,"exchange")}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"flag flag__eu"}),Object(O.jsx)("span",{"data-testid":"EUR",children:"".concat(S(t,"EUR"),": ").concat((null===a||void 0===a?void 0:a.toFixed(2))||1..toFixed(2))})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"flag flag__us"}),Object(O.jsx)("span",{"data-testid":"USD",children:"".concat(S(t,"USD"),": ").concat(c.toFixed(2))})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"flag flag__ru"}),Object(O.jsx)("span",{children:"".concat(S(t,"RUB"),": ").concat(r.toFixed(2))})]})]})]})},R=n.p+"static/media/drizzle.8f834454.svg",D=n.p+"static/media/clear-day.320b497b.svg",U=n.p+"static/media/cloudy.8fa39863.svg",E=n.p+"static/media/rain.a619711b.svg",P=n.p+"static/media/mist.849abfda.svg",B=n.p+"static/media/snow.444171ab.svg",F=n.p+"static/media/thunder.9d4b81cc.svg",M=n.p+"static/media/partly-cloudy-day.90f88a5e.svg",A=function(e){switch(e){case"Drizzle":return R;case"Clear":return D;case"Clouds":return U;case"Rain":return E;case"Fog":case"Haze":return P;case"Snow":return B;case"Thunderstorm":return F;default:return M}},W=function(e){var t=e.lang,n=e.weatherState,a=n.main,c=a.feels_like,r=a.humidity,i=n.weather,s=n.wind.speed,o=i[0],l=o.main,j=o.description;return Object(O.jsxs)("div",{className:"country__widgets__weather",children:[Object(O.jsx)("h3",{children:S(t,"todayWeather")}),Object(O.jsx)("div",{className:"weather__temperature"}),Object(O.jsxs)("div",{className:"weather__forecast",children:[Object(O.jsx)("div",{className:"weather__cloudy",children:Object(O.jsx)("img",{src:A(l),alt:l,width:"150",height:"150"})}),Object(O.jsxs)("div",{className:"weather__description",children:[Object(O.jsx)("span",{"data-testid":"description",children:j}),Object(O.jsx)("span",{children:"".concat(S(t,"feelsLike"),": ").concat(Math.round(c),"\u2103")}),Object(O.jsx)("span",{children:"".concat(S(t,"wind"),": ").concat(Math.round(s)," ").concat(S(t,"speed"))}),Object(O.jsx)("span",{"data-testid":"humidity",children:"".concat(S(t,"humidity"),": ").concat(r,"%")})]})]})]})},Z=function(e){var t=e.lang,n=e.countryInf,c=n.rates,r=n.weatherState,i=n.country.timezone,s=Object(a.useState)(!1),o=Object(l.a)(s,2),j=o[0],u=o[1];return Object(O.jsx)("div",{className:"country__widgets",children:Object(O.jsxs)("div",{className:j?"country__widgets_block country__widgets_block_active":"country__widgets_block",children:[Object(O.jsx)(T,{lang:t,timezone:i}),Object(O.jsx)(W,{lang:t,weatherState:r}),Object(O.jsx)(z,{lang:t,rates:c}),Object(O.jsx)("div",{className:"country__widgets_button",onClick:function(){return u(!j)},children:j?Object(O.jsx)(L.a,{fontSize:"large"}):Object(O.jsx)(C.a,{fontSize:"large"})})]})})},H=(n(175),n(176),function(e){var t=e.countryInf,n=Object(a.useState)(0),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useRef)(),o=t.country.galleryImages,j=function(){document.fullscreenElement?document.exitFullscreen():s.current.requestFullscreen()};return Object(O.jsxs)("div",{className:"gallery_wrapper",ref:s,children:[Object(O.jsxs)("div",{className:"image_main_wrapper",children:[Object(O.jsxs)("div",{className:"caption_container",children:[Object(O.jsx)("p",{className:"image_main_name","data-testid":"title",children:o[r].alt}),Object(O.jsx)("p",{className:"image_main_description","data-testid":"description",children:o[r].description}),Object(O.jsx)("div",{className:"button_fullscreen",onClick:j})]}),Object(O.jsx)("div",{className:"button_prev",onClick:function(){return i(0===r?o.length-1:r-1)},children:"\u276e"}),Object(O.jsx)("div",{className:"button_next",onClick:function(){return r===o.length-1?i(0):i(r+1)},children:"\u276f"}),o.map((function(e,t){return Object(O.jsx)("img",{className:t===r?"image_main image_main_show":"image_main",src:e.mainImage,alt:e.alt,onClick:j},e.mainImage)}))]}),Object(O.jsx)("div",{className:"thumb_wrapper",children:o.map((function(e,t){return Object(O.jsx)("img",{className:t===r?"image_thumbnail image_thumbnail_active":"image_thumbnail",onClick:function(){return i(t)},src:e.thumbnail,alt:e.alt},e.thumbnail)}))})]})}),J=(n(177),function(e){var t=e.countryInf.country.video;return Object(O.jsx)("div",{className:"country_video_wrapper",children:Object(O.jsx)("iframe",{className:"country_video",title:"country-video",src:t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),K=(n(178),function(){return Object(O.jsx)("div",{className:"preloader preloader_active",children:Object(O.jsxs)("div",{className:"preloader_wrapper",children:[Object(O.jsx)("div",{className:"preloader_item preloader_item_1"}),Object(O.jsx)("div",{className:"preloader_item preloader_item_2"}),Object(O.jsx)("div",{className:"preloader_item preloader_item_3"}),Object(O.jsx)("div",{className:"preloader_item preloader_item_4"}),Object(O.jsx)("div",{className:"preloader_item preloader_item_5"})]})})}),V=n(255),Y=n(58),q=function(e){var t=e.countryId,n=e.countryInf.country.rating,c=!sessionStorage.getItem("authToken"),r=Object(a.useState)(n),i=Object(l.a)(r,2),s=i[0],o=i[1],j=Object(a.useState)(!1),u=Object(l.a)(j,2),d=u[0],b=u[1],m=Object(a.useState)(null),h=Object(l.a)(m,2),g=h[0],p=h[1];return Object(O.jsxs)("div",{className:"rating",children:[Object(O.jsx)(Y.a,{component:"legend","data-testid":"rating",children:"Rating"}),Object(O.jsx)(V.a,{name:"simple-controlled",readOnly:c,disabled:d,value:s,onChange:function(e,n){b(!0),function(e){var n="https://oktravel.herokuapp.com/countries/".concat(t,"/vote"),a=new Headers;a.append("Authorization",sessionStorage.getItem("authToken")),a.append("Content-Type","application/x-www-form-urlencoded");var c=new URLSearchParams;return c.append("rating","".concat(e)),fetch(n,{method:"POST",headers:a,body:c,redirect:"follow"}).then((function(e){return e.text()}))}(n).then((function(e){"success"!==e&&(p("something went wrong, please try again"),setTimeout(p,5e3,null)),b(!1),o(n)}))}}),g?Object(O.jsx)("span",{className:"rating__error",children:g}):null]})};q.defaultProps={countryId:""};var G=q,Q=Object(j.h)((function(e){var t=e.lang,n=e.match,c=Object(a.useState)(null),r=Object(l.a)(c,2),i=r[0],s=r[1],o=Object(a.useState)(!1),j=Object(l.a)(o,2),u=j[0],d=j[1],b=Object(a.useState)({}),m=Object(l.a)(b,2),g=m[0],p=m[1],x=n.params.countryId;return Object(a.useEffect)((function(){var e="https://oktravel.herokuapp.com/countries/".concat(x,"?lang=").concat(t);fetch(e).then((function(e){return e.json()})).then((function(e){var n=e.currencyCode,a=e.location,c=a.lat,r=a.long,i="https://api.exchangeratesapi.io/latest?base=".concat(n),o="".concat("https://api.openweathermap.org/data/2.5/forecast?","lat=").concat(c,"&lon=").concat(r,"&lang=").concat(t,"&cnt=").concat(1,"&units=").concat("metric","&appid=").concat("238369625c38823901147f9e59ee369d");Promise.all([fetch(i).then((function(e){return e.json()})),fetch(o).then((function(e){return e.json()}))]).then((function(t){var n=Object(l.a)(t,2),a=n[0],c=n[1].list[0],r=a.rates;p({country:e,rates:r,weatherState:c}),d(!0)}),(function(e){d(!0),s(e)}))}))}),[t]),i?Object(O.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430:",i.message]}):u?Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"country__container",children:[Object(O.jsxs)("div",{className:"country__information",children:[Object(O.jsx)(f,{countryInf:g}),Object(O.jsx)(G,{countryId:x,countryInf:g}),Object(O.jsx)(H,{countryInf:g}),Object(O.jsx)(J,{countryInf:g}),Object(O.jsx)(N,{lang:t,countryInf:g})]}),Object(O.jsx)(Z,{lang:t,countryInf:g})]})}):Object(O.jsx)(K,{})})),X=n(226),$=n(227),ee=n(228),te=n(229),ne=n.p+"static/media/rs_school-logo.4c632dc7.svg",ae=Object(g.a)((function(e){return{companyInformation:{display:"flex",flexDirection:"column",justifyContent:"space-around"},footer:{padding:e.spacing(6),backgroundColor:"#2f2f2f",color:e.palette.common.white,marginTop:e.spacing(10)},icon:{margin:e.spacing(.5)},logoRsSchool:{width:"100px",marginBottom:e.spacing(3)},copyright:{marginTop:e.spacing(4)}}}));function ce(e){var t=e.lang,n=ae();return Object(O.jsx)("footer",{className:n.footer,children:Object(O.jsxs)(X.a,{container:!0,children:[Object(O.jsx)(X.a,{item:!0,lg:6,md:10,sm:12,xs:12,children:Object(O.jsx)($.a,{href:"https://rs.school",children:Object(O.jsx)("img",{className:n.logoRsSchool,src:ne,alt:"logoRsSchool"})})}),Object(O.jsxs)(X.a,{className:n.companyInformation,item:!0,lg:6,md:10,sm:12,xs:12,children:[Object(O.jsxs)(Y.a,{children:[S(t,"designedBy"),":"]}),Object(O.jsxs)(X.a,{item:!0,children:[Object(O.jsx)(ee.a,{className:n.icon,children:Object(O.jsx)($.a,{href:"https://github.com/nottombraider",children:Object(O.jsx)(te.a,{})})}),Object(O.jsx)(ee.a,{className:n.icon,children:Object(O.jsx)($.a,{href:"https://github.com/dn9wkalolz",children:Object(O.jsx)(te.a,{})})}),Object(O.jsx)(ee.a,{className:n.icon,children:Object(O.jsx)($.a,{href:"https://github.com/AndreiMilashevich",children:Object(O.jsx)(te.a,{})})}),Object(O.jsx)(ee.a,{className:n.icon,children:Object(O.jsx)($.a,{href:"https://github.com/AlDemi",children:Object(O.jsx)(te.a,{})})})]})]}),Object(O.jsx)(X.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(O.jsx)(Y.a,{className:n.copyright,children:"\xa9 ".concat((new Date).getFullYear()," oktravel")})})]})})}var re=n(230),ie=n(231),se=n(232),oe=n(233),le=n(234),je=n(235),ue=n(109),de=n.n(ue),be=Object(g.a)((function(){return{card:{"&:hover":{background:"#f1f1f1"}},cardImage:{height:300}}}));function me(e){var t=e.title,n=e.image,a=e.description,c=e.id,r=e.subheader,i=e.alt,s=be();return Object(O.jsxs)(re.a,{className:s.card,children:[Object(O.jsx)(ie.a,{title:t,subheader:r}),Object(O.jsx)(u.b,{to:"/countries/".concat(c),children:n&&Object(O.jsx)(se.a,{className:s.cardImage,image:n,title:i})}),Object(O.jsx)(oe.a,{children:Object(O.jsx)(Y.a,{noWrap:!0,children:a})}),Object(O.jsx)(le.a,{children:Object(O.jsx)(u.b,{to:"/countries/".concat(c),children:Object(O.jsx)(je.a,{"aria-label":"Visit page",children:Object(O.jsx)(de.a,{})})})})]})}function he(e){var t=e.countries,n=e.filter;return 0===t.length?Object(O.jsx)(K,{}):Object(O.jsx)(X.a,{container:!0,spacing:3,children:t.map((function(e){return!(!e.name.toLowerCase().includes(n)&&!e.capital.toLowerCase().includes(n))&&Object(O.jsx)(X.a,{item:!0,lg:4,md:12,sm:12,xs:12,children:Object(O.jsx)(me,{subheader:e.capital,id:e.id,title:e.name,alt:e.image.alt,image:e.image.mainImage,description:e.description,timezone:e.timezone})},e.id)}))})}var ge=n(22),Oe=n(62),pe=n(248),xe=n(241),fe=n(242),ve=n(252),ye=n(257),_e=n(243),we=n(112),Se=n.n(we),Ne=n(236),ke=n(249),Ce=n(110),Ie=n.n(Ce),Le=Object(g.a)((function(e){return{formControl:{display:"flex",padding:"6px 0px",borderRadius:5,marginLeft:e.spacing(1),width:100,flexDirection:"row",justifyContent:"flex-start"},languageIcon:{alignSelf:"flex-start",marginTop:e.spacing(.5),marginLeft:e.spacing(1),marginRight:e.spacing(1)},select:{color:e.palette.common.white},selectEmpty:{marginTop:e.spacing(2)}}}));function Te(e){var t=e.lang,n=e.handleLanguageChange,a=Le();return Object(O.jsx)("div",{className:a.formContainer,children:Object(O.jsxs)(Ne.a,{variant:"standard",className:a.formControl,children:[Object(O.jsx)(Ie.a,{className:a.languageIcon}),Object(O.jsxs)(ke.a,{className:a.select,value:t,onChange:n,children:[Object(O.jsx)(ye.a,{value:"en",children:"en"}),Object(O.jsx)(ye.a,{value:"ru",children:"ru"}),Object(O.jsx)(ye.a,{value:"pl",children:"pl"})]})]})})}var ze=n(111),Re=n.n(ze),De=n(115),Ue=n(117),Ee=n(240),Pe=Object(g.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:300,borderRadius:25},input:{marginLeft:e.spacing(2),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}}));function Be(e){var t=e.handleSearchChange,n=e.lang,c=Pe(),r=Object(a.useRef)("");return Object(O.jsxs)(De.a,{component:"form",className:c.root,children:[Object(O.jsx)(Ue.a,{className:c.input,placeholder:S(n,"searchPlaceholder"),inputProps:{"aria-label":"search"},onChange:function(e){r.current=e.target.value,t(e.target.value)},type:"search",onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),t(r.current))},autoFocus:!0}),Object(O.jsx)(Ee.a,{className:c.divider,orientation:"vertical"}),Object(O.jsx)(je.a,{onClick:function(){t(r.current)},color:"primary",className:c.iconButton,"aria-label":"directions",children:Object(O.jsx)(Re.a,{})})]})}var Fe=Object(g.a)((function(e){return{link:{textDecoration:"none",color:e.palette.common.white,"&:hover":{color:"#e0e0e0",opacity:".7"}},siteTitle:{fontWeight:400,letterSpacing:1,marginLeft:e.spacing(1)},toolbarLarge:Object(Oe.a)({background:"#2f2f2f",display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row",justifyContent:"space-between"}),toolbarSmall:{display:"flex",background:"#2f2f2f",justifyContent:"space-between"},menuBox:Object(Oe.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row"}),menuOption:{color:e.palette.common.white,letterSpacing:1,textTransform:"none",textDecoration:"none","&:hover":{color:"#e0e0e0",opacity:".7"}},menuIcon:{color:e.palette.common.white},toggleMenu:{display:"flex",justifyContent:"space-between",padding:e.spacing(1)}}}));var Me=Object(j.h)((function(e){var t=e.handleSearchChange,n=e.lang,c=e.handleLanguageChange,r=e.location,i=Object(a.useState)({toggleMenu:!1,toggleMenuOpen:!1}),s=Object(l.a)(i,2),o=s[0],j=s[1],d=Boolean(sessionStorage.getItem("authToken")),b=Object(a.useState)(d),m=Object(l.a)(b,2),g=m[0],p=m[1],x="/countries"===r.pathname,f=o.toggleMenu,v=o.toggleMenuOpen,y=function(){sessionStorage.clear(),p(!1)};Object(a.useEffect)((function(){p(!!d)}),[d]),Object(a.useEffect)((function(){var e=function(){return window.innerWidth<960?j((function(e){return Object(ge.a)(Object(ge.a)({},e),{},{toggleMenu:!0})})):j((function(e){return Object(ge.a)(Object(ge.a)({},e),{},{toggleMenu:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var _=Fe();return Object(O.jsx)(h.a,{children:Object(O.jsx)(_e.a,{children:f?Object(O.jsxs)(fe.a,{className:_.toolbarSmall,children:[Object(O.jsx)(je.a,{onClick:function(){return j((function(e){return Object(ge.a)(Object(ge.a)({},e),{},{toggleMenuOpen:!0})}))},children:Object(O.jsx)(Se.a,{className:_.menuIcon})}),Object(O.jsx)(Y.a,{component:"h1",variant:"h5",className:_.siteTitle,children:Object(O.jsx)(u.c,{className:_.link,to:"/countries",children:"oktravel"})}),Object(O.jsx)(Te,{lang:n,handleLanguageChange:c}),Object(O.jsx)(ve.a,{anchor:"left",open:v,onClose:function(){return j((function(e){return Object(ge.a)(Object(ge.a)({},e),{},{toggleMenuOpen:!1})}))},children:Object(O.jsx)("div",{children:Object(O.jsxs)(pe.a,{className:_.toggleMenu,children:[x&&Object(O.jsx)(Be,{handleSearchChange:t,lang:n}),!g&&Object(O.jsx)(xe.a,{variant:"contained",onClick:y,color:"primary",children:Object(O.jsx)(u.c,{className:_.link,to:"/login",children:"Login"})}),g&&Object(O.jsx)(xe.a,{variant:"contained",onClick:y,color:"primary",children:"Logout"})]})})})]}):Object(O.jsxs)(fe.a,{className:_.toolbarLarge,children:[Object(O.jsx)(Y.a,{component:"h1",variant:"h6",className:_.siteTitle,children:Object(O.jsx)(u.c,{className:_.link,to:"/countries",children:"oktravel"})}),Object(O.jsxs)(pe.a,{className:_.menuBox,children:[x&&Object(O.jsx)(Be,{handleSearchChange:t,lang:n}),Object(O.jsx)(Te,{lang:n,handleLanguageChange:c}),!g&&Object(O.jsx)(ye.a,{children:Object(O.jsx)(xe.a,{className:_.menuOption,variant:"outlined",color:"inherit",size:"medium",onClick:y,children:Object(O.jsx)(u.c,{className:_.link,to:"/login",children:"Login"})})}),g&&Object(O.jsx)(ye.a,{children:Object(O.jsx)(xe.a,{className:_.menuOption,variant:"outlined",color:"inherit",size:"medium",onClick:y,children:"Logout"})})]})]})})})})),Ae=n(244),We=n(254),Ze=n(247),He=n(251),Je=n(54),Ke=n(113),Ve=n(253),Ye=function(e){var t=e.name,n=e.inputProps,a=e.validate,c=Object(Ke.a)(e,["name","inputProps","validate"]),r=Object(Je.b)(t,{validate:a,initialValue:void 0}),i=r.input,s=r.meta,o=Boolean(s.error);return Object(O.jsx)(Ve.a,Object(ge.a)(Object(ge.a)(Object(ge.a)({},i),c),{},{InputProps:n,placeholder:t,error:o,helperText:s.error,style:o?void 0:{marginBottom:"22px"}}))};Ye.defaultProps={validate:void 0,inputProps:void 0};var qe=n(245),Ge=n(246),Qe=function(e){return function(t){return t&&t.length<e?"min length 4 chars":void 0}},Xe=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(O.jsx)(Ye,{name:"password",type:n?"text":"password",validate:Qe(4),inputProps:{startAdornment:Object(O.jsx)(Ae.a,{position:"end",children:Object(O.jsx)(je.a,{"aria-label":"toggle password visibility",onClick:function(){c(!n)},onMouseDown:function(e){e.preventDefault()},children:n?Object(O.jsx)(qe.a,{}):Object(O.jsx)(Ge.a,{})})})}})},$e=function(e){var t=e.onSubmit,n=Object(j.g)(),c=Object(a.useState)(!1),r=Object(l.a)(c,2),i=r[0],s=r[1],o=function(e,t){"clickaway"!==t&&s(!1)};return Object(O.jsxs)(pe.a,{children:[Object(O.jsx)(Y.a,{variant:"h5",component:"h2",children:"Log in"}),Object(O.jsx)(Je.a,{onSubmit:t,children:function(e){var t=e.handleSubmit,a=e.invalid,c=e.submitting,r=e.form,l=e.pristine;return Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(e).then((function(){return n.push("/")})).catch((function(){s(!0),r.reset()}))},children:[Object(O.jsx)(pe.a,{children:Object(O.jsx)(Ne.a,{margin:"normal",children:Object(O.jsx)(Ye,{name:"login",validate:Qe(4),inputProps:{startAdornment:Object(O.jsx)(Ae.a,{position:"start",children:Object(O.jsx)(pe.a,{mx:1.5,children:Object(O.jsx)(Ze.a,{})})})}})})}),Object(O.jsx)(pe.a,{children:Object(O.jsx)(Ne.a,{margin:"normal",children:Object(O.jsx)(Xe,{})})}),Object(O.jsx)(pe.a,{my:1,children:Object(O.jsx)(xe.a,{color:"primary",variant:"contained",type:"submit",disabled:a||l||c,children:"Log in"})}),Object(O.jsx)(We.a,{open:i,autoHideDuration:6e3,onClose:o,children:Object(O.jsx)(He.a,{elevation:6,variant:"filled",severity:"error",onClose:o,children:"Sorry, such a user does not exist"})})]})}})]})},et="https://oktravel.herokuapp.com",tt={countries:"".concat(et,"/countries"),login:"".concat(et,"/login"),registration:"".concat(et,"/registration")},nt=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a,c,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.entries(t),a=n.map((function(e){return e.join("=")})).join("&"),e.next=4,fetch(tt.login,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:a});case 4:if(200===(c=e.sent).status){e.next=8;break}throw sessionStorage.removeItem("authToken"),new Error("Error: ".concat(c.status,", ").concat(c.statusText));case 8:return e.next=10,c.json();case 10:r=e.sent,i=r.token,sessionStorage.setItem("authToken",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),at=function(e){var t=e.onSubmit,n=Object(a.useState)(!1),c=Object(l.a)(n,2),r=c[0],i=c[1],s=function(e,t){"clickaway"!==t&&i(!1)};return Object(O.jsxs)(pe.a,{children:[Object(O.jsx)(Y.a,{variant:"h5",component:"h2",children:"Registration"}),Object(O.jsx)(Je.a,{onSubmit:t,children:function(e){var t=e.handleSubmit,n=e.invalid,a=e.submitting,c=e.form,o=e.pristine;return Object(O.jsxs)("form",{onSubmit:function(e){return t(e).then((function(){i(!0),c.reset()}))},children:[Object(O.jsx)(pe.a,{children:Object(O.jsx)(Ne.a,{margin:"normal",children:Object(O.jsx)(Ye,{name:"login",validate:Qe(4),inputProps:{startAdornment:Object(O.jsx)(Ae.a,{position:"start",children:Object(O.jsx)(pe.a,{mx:1.5,children:Object(O.jsx)(Ze.a,{})})})}})})}),Object(O.jsx)(pe.a,{children:Object(O.jsx)(Ne.a,{margin:"normal",children:Object(O.jsx)(Xe,{})})}),Object(O.jsx)(pe.a,{my:1,children:Object(O.jsx)(xe.a,{color:"primary",variant:"contained",type:"submit",disabled:n||o||a,children:"Register"})}),Object(O.jsx)(We.a,{open:r,autoHideDuration:6e3,onClose:s,children:Object(O.jsx)(He.a,{elevation:6,variant:"filled",severity:"success",onClose:s,children:"Registration success"})})]})}})]})},ct=function(){var e=Object(o.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.entries(t),a=n.map((function(e){return e.join("=")})).join("&"),e.prev=2,e.next=5,fetch(tt.registration,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:a});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("Error:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),rt=function(){return Object(O.jsxs)(X.a,{container:!0,justify:"space-around",spacing:5,children:[Object(O.jsx)(at,{onSubmit:ct}),Object(O.jsx)($e,{onSubmit:nt})]})};function it(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),u=i[0],d=i[1],b=Object(a.useState)("en"),h=Object(l.a)(b,2),g=h[0],p=h[1],f=localStorage.getItem("selectedLanguage");localStorage.getItem("selectedLanguage")||(p("en"),localStorage.setItem("selectedLanguage",g));return Object(a.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(f);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[g,f,u]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(Me,{handleSearchChange:function(e){d(e)},lang:f,handleLanguageChange:function(e){p(e.target.value),localStorage.setItem("selectedLanguage",e.target.value)}}),Object(O.jsx)(x,{children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(j.a,{from:"/",to:"/countries"})}}),Object(O.jsx)(j.b,{exact:!0,path:"/countries",render:function(){return Object(O.jsx)(he,{countries:n,filter:u})}}),Object(O.jsx)(j.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(rt,{})}}),Object(O.jsx)(j.b,{exact:!0,path:"/countries/:countryId?",render:function(){return Object(O.jsx)(Q,{lang:f})}}),Object(O.jsx)(j.b,{path:"*",render:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"404 not found"})})}})]})}),Object(O.jsx)(ce,{lang:f})]})}var st=function(){return Object(O.jsx)(u.a,{basename:"",children:Object(O.jsx)(it,{})})};r.a.render(Object(O.jsx)(st,{}),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.442ef2b2.chunk.js.map