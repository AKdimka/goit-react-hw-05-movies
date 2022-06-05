"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[687],{307:function(t,n,e){e.d(n,{e:function(){return _}});var r,o,i,a,c,s,p,d=e(871),x=e(168),u=e(31),l=e(504),f=u.ZP.li(r||(r=(0,x.Z)(["\n\tmax-width: 300px;\n\tmargin: 5px;\n\n\tbackground-color: rgba(0, 0, 0, 0.07);\n\tborder: 1px solid #eeeeee;\n\tborder-top: none;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\t:hover{\n\t\tbox-shadow:\n\t\t0px 1px 1px rgba(255, 0, 0, 0.12),\n\t\t0px 4px 4px rgba(255, 0, 0, 0.16),\n\t\t1px 4px 6px rgba(255, 0, 0, 0.26);\n\t}\n"]))),h=(0,u.ZP)(l.rU)(o||(o=(0,x.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: #000;\n\ttext-decoration: none;\n"]))),g=u.ZP.img(i||(i=(0,x.Z)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 450px;\n"]))),v=u.ZP.div(a||(a=(0,x.Z)(["\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n"]))),b=u.ZP.h3(c||(c=(0,x.Z)(["\n\twidth: 250px;\n\tfont-weight: 700;\n\tfont-size: 18px;\n"]))),m=u.ZP.div(s||(s=(0,x.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\n"]))),Z=e(184),j=function(t){var n=t.id,e=t.movieTitle,r=t.poster,o=t.vote_average,i=t.vote_count,a=(0,d.TH)();return(0,Z.jsx)(f,{children:(0,Z.jsxs)(h,{to:"/movies/".concat(n),state:{from:a},children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:"".concat(e," poster")})}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(b,{children:e}),(0,Z.jsxs)(m,{children:[(0,Z.jsxs)("p",{children:["Voted:",i]}),(0,Z.jsxs)("p",{children:["Average:",o]})]})]})]})})},w=u.ZP.ul(p||(p=(0,x.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\tlist-style: none;\n"]))),_=function(t){var n=t.movies;return(0,Z.jsx)(w,{children:n.map((function(t){var n=t.id,e=t.title,r=t.poster_path,o=t.name,i=t.vote_average,a=t.vote_count;return(0,Z.jsx)(j,{id:n,movieTitle:e||o,poster:r,vote_average:i,vote_count:a},n)}))})}},979:function(t,n,e){e.r(n),e.d(n,{default:function(){return g}});var r,o,i,a=e(152),c=e(791),s=e(307),p=e(168),d=e(31),x=d.ZP.form(r||(r=(0,p.Z)(["\n\tdisplay:flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tcolor: inherit;\n\tborder-radius: 4px;\n"]))),u=d.ZP.input(o||(o=(0,p.Z)(["\n\tcolor: white;\n\tletter-spacing: 1px;\n\tfont-size: 17px;\n\twidth: 50%;\n\tpadding:5px;\n  border-radius:10px;\n\tborder: 2px solid #eee;\n\tbackground: inherit;\n\t\n\t:focus{\n\t\toutline: none;\n\t\tborder-color: darkred;\n\t}\n"]))),l=d.ZP.button(i||(i=(0,p.Z)(["\n\tmargin-left: 15px;\n\tcursor: pointer;\n\tpadding:10px;\n  border:none;\n  background-color:rgb(139,0,0);\n  color:#000;\n  font-weight:600;\n  border-radius:15px;\n\t:hover{\n\t\tbackground-color: rgb(255,0,0);\n\t\tbox-shadow:\n\t\t\t0px 1px 1px rgba(255, 0, 0, 0.2),\n\t\t\t0px 4px 4px rgba(255, 0, 0, 0.25),\n\t\t\t1px 4px 6px rgba(255, 0, 0, 0.33);\n\t}\n"]))),f=e(184),h=function(t){var n=t.setQuery,e=(0,c.useState)(""),r=(0,a.Z)(e,2),o=r[0],i=r[1];return(0,f.jsxs)(x,{onSubmit:function(t){if(t.preventDefault(),""!==o.trim()){var e=o.toLowerCase();n(e)}},children:[(0,f.jsx)(u,{type:"text",value:o,onChange:function(t){return i(t.target.value)}}),(0,f.jsx)(l,{type:"submit",children:"Search"})]})};function g(){var t=(0,c.useState)([]),n=(0,a.Z)(t,2),e=n[0],r=n[1],o=(0,c.useState)(""),i=(0,a.Z)(o,2),p=i[0],d=i[1];return(0,c.useEffect)((function(){""!==p&&fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("2fcef87760cac0a14e527e71c6ea2c67","&language=en-US&query=").concat(p,"&page=1&include_adult=false")).then((function(t){return t.json()})).then((function(t){return r(t.results)}))}),[p]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{setQuery:d}),e.length>0&&(0,f.jsx)(s.e,{movies:e})]})}}}]);
//# sourceMappingURL=movie-page.03b2be92.chunk.js.map