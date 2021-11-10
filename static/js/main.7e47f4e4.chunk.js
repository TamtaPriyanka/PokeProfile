(this["webpackJsonppokemon-search"]=this["webpackJsonppokemon-search"]||[]).push([[0],{26:function(e,a,s){},28:function(e,a,s){},49:function(e,a,s){"use strict";s.r(a);var t=s(2),c=s.n(t),i=s(21),r=s.n(i),n=(s(26),s(27),s(28),s(3)),l=s(4),d=s(6),o=s(5),j=s(0),h=function(e){Object(d.a)(s,e);var a=Object(o.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top",children:Object(j.jsx)("a",{className:"navbar-brand col-lg-2",children:"PokeProfiles"})})})}}]),s}(t.Component),m=s(7),b=s.n(m),p=s(11),v=s(8),x=s.n(v),O=function(e){Object(d.a)(s,e);var a=Object(o.a)(s);function s(){var e;Object(n.a)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={name:"",imageUrl:"",pokemonIndex:"",types:[],description:"",stats:{hp:"",attack:"",defence:"",speed:"",specialAttack:"",specialDefence:""},height:"",weight:"",abilities:""},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(p.a)(b.a.mark((function e(){var a,s,t,c,i,r,n,l,d,o,j,h,m,p,v,O,u,N,f=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.name,s=this.props.url,t=s.split("/")[s.split("/").length-2],c="https://pokeapi.co/api/v2/pokemon/".concat(t),i="https://pokeapi.co/api/v2/pokemon-species/".concat(t),e.next=7,x.a.get(c);case 7:return r=e.sent,n=r.data.sprites.back_default,d=(l="").hp,o=l.attack,j=l.defence,h=l.speed,m=l.specialAttack,p=l.specialDefence,r.data.stats.map((function(e){switch(e.stat.name){case"hp":d=e.base_stat;break;case"attack":o=e.base_stat;break;case"defence":j=e.base_stat;break;case"speed":h=e.base_stat;break;case"special-attack":m=e.base_stat;break;case"special-defence":p=e.base_stat}})),v=10*r.data.height,O=100*r.data.weight,u=r.data.types.map((function(e){return e.type.name})),N=r.data.abilities.map((function(e){return e.ability.name})),e.next=17,x.a.get(i).then((function(e){var a="";e.data.flavor_text_entries.some((function(e){"en"!==e.language.name||(a=e.flavor_text)})),f.setState({description:a})}));case 17:this.setState({imageUrl:n,pokemonIndex:t,name:a,types:u,stats:{hp:d,attack:o,defence:j,speed:h,specialDefence:p,specialAttack:m},height:v,weight:O,abilities:N});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{className:"col-md-6 mb-5",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-8",children:Object(j.jsxs)("h5",{children:[this.state.pokemonIndex,"."]})}),Object(j.jsx)("div",{className:"col-4",children:Object(j.jsx)("div",{className:"float-right",children:this.state.types.map((function(e){return Object(j.jsx)("span",{className:"badge badge-primary badge-pill mr-1",children:e},e)}))})})]})})}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"row align-items-center",children:[Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsx)("h4",{className:"pokemon-name",children:this.state.name}),Object(j.jsx)("img",{src:this.state.imageUrl,className:"card-img-top pokemon-image rounded-circle mx-auto mt-2",alt:"Pokemon Image"})]}),Object(j.jsxs)("div",{className:"col-md-8",children:[Object(j.jsxs)("div",{className:"row align-item-center",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:"HP"}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.hp,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(j.jsx)("small",{children:this.state.stats.hp})})})})]}),Object(j.jsxs)("div",{className:"row align-item-center",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:"Attack"}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.attack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(j.jsx)("small",{children:this.state.stats.attack})})})})]}),Object(j.jsxs)("div",{className:"row align-item-center",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:"Defence"}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.defence,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(j.jsx)("small",{children:this.state.stats.defence})})})})]}),Object(j.jsxs)("div",{className:"row align-item-center",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:"Speed"}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.speed,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(j.jsx)("small",{children:this.state.stats.speed})})})})]}),Object(j.jsxs)("div",{className:"row align-item-center",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:"S-Attack"}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialAttack,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(j.jsx)("small",{children:this.state.stats.specialAttack})})})})]}),Object(j.jsxs)("div",{className:"row align-item-center",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:"S-Defence"}),Object(j.jsx)("div",{className:"col-12 col-md-8",children:Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress-bar",role:"progressBar",style:{width:"".concat(this.state.stats.specialDefence,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100",children:Object(j.jsx)("small",{children:this.state.stats.specialDefence})})})})]})]})]}),Object(j.jsx)("div",{className:" description row mt-1",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsx)("p",{className:"p-2",children:this.state.description})})})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:" profile card-title mt-0",children:Object(j.jsx)("u",{children:"Profile:"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("h6",{className:"float-right",children:"Height:"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("h6",{className:"float-left",children:[this.state.height," cm"]})})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("h6",{className:"float-right",children:"Weight:"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("h6",{className:"float-left",children:[this.state.weight," grams"]})})]})})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-9",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("h6",{className:"float-right",children:"Abilities:"})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("h6",{className:"float-left",children:[this.state.abilities," "]})})]})})})]})]})})}}]),s}(t.Component),u=function(e){Object(d.a)(s,e);var a=Object(o.a)(s);function s(){var e;Object(n.a)(this,s);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={url:"https://pokeapi.co/api/v2/pokemon?limit=100/",pokemon:null},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=Object(p.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(this.state.url);case 2:a=e.sent,this.setState({pokemon:a.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.state.pokemon?Object(j.jsx)("div",{className:"row",children:this.state.pokemon.map((function(e){return Object(j.jsx)(O,{name:e.name,url:e.url},e.name)}))}):Object(j.jsx)("h1",{children:"Loading Pokemon"})})}}]),s}(t.Component),N=function(e){Object(d.a)(s,e);var a=Object(o.a)(s);function s(){return Object(n.a)(this,s),a.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{})})}}]),s}(t.Component);var f=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(N,{})})})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;s(e),t(e),c(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),g()}},[[49,1,2]]]);
//# sourceMappingURL=main.7e47f4e4.chunk.js.map