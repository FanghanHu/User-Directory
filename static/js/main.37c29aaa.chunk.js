(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{23:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n(2),a=n.n(s),c=n(16),o=n.n(c),i=(n(23),n(3)),l=n(4),u=n(6),j=n(5),d=n(17),h=n.n(d),b=(n(42),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={nameSort:""},t.getNameSortIcon=function(){switch(t.state.nameSort){case"asc":return"fa fa-sort-up";case"dsc":return"fas fa-sort-down";default:return"fa fa-sort"}},t.handleNameSortBtn=function(){"asc"===t.state.nameSort?t.setState({nameSort:"dsc"}):t.setState({nameSort:"asc"})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.employees;return"asc"===this.state.nameSort?t.sort((function(t,e){return t.name.first.toUpperCase()<e.name.first.toUpperCase()?-1:1})):"dsc"===this.state.nameSort&&t.sort((function(t,e){return t.name.first.toUpperCase()<e.name.first.toUpperCase()?1:-1})),Object(r.jsxs)("table",{className:"table table-striped table-responsive",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsxs)("th",{children:["Name ",Object(r.jsx)("button",{className:"btn",onClick:this.handleNameSortBtn,children:Object(r.jsx)("i",{className:this.getNameSortIcon(),"aria-hidden":"true"})})]}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"Gender"}),Object(r.jsx)("th",{children:"Address"})]})}),Object(r.jsx)("tbody",{children:t.map((function(t){return Object(r.jsxs)("tr",{children:[Object(r.jsxs)("td",{children:[t.name.first," ",t.name.last]}),Object(r.jsx)("td",{children:t.email}),Object(r.jsx)("td",{children:t.phone}),Object(r.jsx)("td",{children:t.gender}),Object(r.jsxs)("td",{children:[t.location.street.number," ",t.location.street.name,", ",t.location.city,", ",t.location.state,", ",t.location.postcode,", ",t.location.country]})]},t.login.uuid)}))})]})}}]),n}(s.Component)),m=(n(43),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"input-group my-3",children:[Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",onChange:function(e){t.props.setFilter(e.target.value)}}),Object(r.jsx)("div",{className:"input-group-append",children:Object(r.jsx)("button",{className:"btn btn-secondary",type:"button",children:Object(r.jsx)("i",{className:"fa fa-search"})})})]})}}]),n}(s.Component)),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={employees:[],filter:""},t.setFilter=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=[];h.a.get("https://randomuser.me/api/?results=25").then((function(n){e=n.data.results,t.setState({employees:e})}))}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"jumbotron m-3 text-center",children:Object(r.jsx)("h1",{children:"Employee Directory"})}),Object(r.jsx)(m,{setFilter:this.setFilter}),Object(r.jsx)(b,{employees:this.state.employees.filter((function(e){return!t.state.filter||(e.name.first+" "+e.name.last).toLowerCase().includes(t.state.filter.toLowerCase())}))})]})}}]),n}(s.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,r=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),s(t),a(t),c(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),f()}},[[44,1,2]]]);
//# sourceMappingURL=main.37c29aaa.chunk.js.map