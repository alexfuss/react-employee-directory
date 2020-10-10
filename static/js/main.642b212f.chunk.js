(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{15:function(e,a,t){e.exports=t(47)},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),i=(t(20),t(2)),o=t(14),s=(t(21),r.a.createContext({})),m=function(){var e=Object(n.useContext)(s);return r.a.createElement("tbody",null,void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,i=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(i.date)))})):r.a.createElement(r.a.Fragment,null))},d=(t(22),function(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,e.developerState.headings.map((function(a){var t=a.name,n=a.width;return r.a.createElement("th",{className:"col",key:t,style:{width:n},onClick:function(){e.handleSort(t.toLowerCase())}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(m,null)))}),u=(t(23),function(){var e=Object(n.useContext)(s);return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(a){return e.handleSearchChange(a)}}),r.a.createElement("button",{className:"btn my-2 my-sm-0",type:"submit"},"Search")))});t(24);var f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(u,null)))},h=t(13),v=t.n(h),E=function(){return v.a.get("https://randomuser.me/api/?results=200&nat=us")},p=(t(42),function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){E().then((function(e){l(Object(i.a)(Object(i.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(s.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(a.toLowerCase())}));l(Object(i.a)(Object(i.a)({},t),{},{filteredUsers:n}))},handleSort:function(e){"descend"===t.order?l({order:"ascend"}):l({order:"descend"});var a=t.filteredUsers.sort((function(a,n){return"ascend"===t.order?void 0===a[e]?1:void 0===n[e]?-1:"name"===e?a[e].first.localeCompare(n[e].first):n[e]-a[e]:void 0===a[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(a[e].first):n[e]-a[e]}));l(Object(i.a)(Object(i.a)({},t),{},{filteredUsers:a}))}}},r.a.createElement(f,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(d,null):r.a.createElement("div",null)))});t(43);var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))};t(44);var g=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};t(45);var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,'Click on the "Name" heading to filter or use the search box to find an employee with a specific name'))};t(46);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null,r.a.createElement(N,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.642b212f.chunk.js.map