"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{3:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,i,a,o,c,s,d,l,f,h=e(152),x=e(791),p=e(871),u=e(168),g=e(31),m=g.ZP.li(r||(r=(0,u.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n\tborder: 1px solid #fff;\n\tborder-radius: 5px;\n\tmax-width: 120px;\n\tpadding: 5px;\n\tmargin: 5px;\n\tword-wrap: break-word;\n"]))),w=g.ZP.img(i||(i=(0,u.Z)(["\nmax-width: 120px;\nmax-height: 180px;\nborder-radius: 5px;\noverflow: hidden;\n"]))),Z=g.ZP.div(a||(a=(0,u.Z)(["\nwidth: 120px;\nheight: 180px;\nbackground-color:#fff; \nborder-radius: 5px;\noverflow: hidden;\n"]))),j=g.ZP.span(o||(o=(0,u.Z)(["\ndisplay: block;\ntext-align: center;\nfont-size: 100px;\nfont-weight: 700;\n"]))),v=g.ZP.p(c||(c=(0,u.Z)(["\ntext-align: center;\nfont-size: 15px;\nfont-weight: 700;\n"]))),b=g.ZP.div(s||(s=(0,u.Z)(["\ndisplay: flex;\nflex-direction: column;\n"]))),_=g.ZP.h3(d||(d=(0,u.Z)(["\nfont-weight: 700;\n"]))),P=g.ZP.h3(l||(l=(0,u.Z)(["\nfont-weight: 500;\n"]))),k=e(184),y=function(n){var t=n.img,e=n.name,r=n.role;return(0,k.jsxs)(m,{children:[t?(0,k.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(t),alt:e}):(0,k.jsxs)(Z,{children:[(0,k.jsx)(j,{children:"?"}),(0,k.jsx)(v,{children:"'Oops no photo'"})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)(_,{children:e}),(0,k.jsx)(P,{children:r})]})]})},C=g.ZP.ul(f||(f=(0,u.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tlist-style: none;\n"]))),U=function(n){var t=n.cast;return(0,k.jsx)(C,{children:t?t.map((function(n){var t=n.id,e=n.name,r=n.character,i=n.profile_path;return(0,k.jsx)(y,{img:i,name:e,role:r},t)})):(0,k.jsx)("h2",{children:"Unfortunately no information about cast"})})};function z(){var n=(0,x.useState)(null),t=(0,h.Z)(n,2),e=t[0],r=t[1],i=(0,p.UO)().movieId;return(0,x.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"/credits?api_key=").concat("2fcef87760cac0a14e527e71c6ea2c67","&language=en-US")).then((function(n){return n.json()})).then((function(n){var t=n.cast;return r(t)}))}),[i]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h1",{children:"Cast"}),(0,k.jsx)(U,{cast:e})]})}}}]);
//# sourceMappingURL=cast.17772806.chunk.js.map