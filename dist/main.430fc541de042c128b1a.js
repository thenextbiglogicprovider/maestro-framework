webpackJsonp([0],[function(e,t,n){(function(e){"use strict";n(1);var t=n(3);(0,t.getUsers)().then(function(n){var r="",u=0;n.forEach(function(e){u++,r+="<tr>\n<td>"+u+"</td>\n<td>"+e.id+"</td>\n<td>"+e.email+"</td>\n<td>"+e.firstName+"</td>\n<td>"+e.lastName+"</td>\n<td><a href='#' data-id="+e.id+" class='deleteuser'>Delete</a></td>\n</tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteuser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(t,function(){return this}())},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return c("users")}function o(e){return a("users/"+e)}function c(e){return fetch(f+e).then(d,s)}function a(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(d,s)}function d(e){return e.json()}function s(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=u,t.deleteUser=o,n(4);var i=n(5),l=r(i),f=(0,l["default"])()},,function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:3001/":"/"}function r(e,t){console.log("Called"),t||(t=window.location.href),e=e.replace("/[/[/]]/g","$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.430fc541de042c128b1a.js.map