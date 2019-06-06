(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(51)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(15),i=n(7),l=n(11),u=n(9),s=(n(39),n(40),function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}}),m=function(e){return{type:"FETCH_BOOKS_ERROR",payload:e}},d=function(e){return function(){return function(t){var n=e.getBooks;t({type:"FETCH_BOOKS_REQUEST"}),n().then(function(e){return t(s(e))}).catch(function(e){return t(m(e))})}}},f=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},E={onDelete:function(e){return{type:"ALL_BOOKS_DELETED_FROM_CART",payload:e}},onDecrease:function(e){return{type:"BOOK_DELETED_FROM_CART",payload:e}},onIncrease:f},p=Object(i.b)(function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}},E)(function(e){var t=e.items,n=e.total,a=e.onIncrease,r=e.onDecrease,c=e.onDelete;return o.a.createElement("div",{className:"shopping-cart-table"},o.a.createElement("h2",null,"Your Order"),o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{className:"id"},"#"),o.a.createElement("th",{className:"title"},"Item"),o.a.createElement("th",{className:"count"},"Count"),o.a.createElement("th",{className:"price"},"Price"),o.a.createElement("th",{className:"action"},"Action"))),o.a.createElement("tbody",null,t.map(function(e,t){var n=e.id,i=e.title,l=e.count,u=e.total;return o.a.createElement("tr",{key:n},o.a.createElement("td",{className:"id"},t+1),o.a.createElement("td",{className:"title"},i),o.a.createElement("td",{className:"count"},l),o.a.createElement("td",{className:"price"},"$",u),o.a.createElement("td",{className:"action"},o.a.createElement("button",{className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return c(n)}},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{className:"btn btn-outline-success btn-sm float-right",onClick:function(){return a(n)}},o.a.createElement("i",{className:"fa fa-plus-circle"})),o.a.createElement("button",{className:"btn btn-outline-warning btn-sm float-right",onClick:function(){return r(n)}},o.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),o.a.createElement("div",{className:"total"},"Total: $",n))}),b=n(10),h=n(18),O=n(20),g=n(19),v=n(21),k=n(8),y=o.a.createContext(),_=y.Provider,C=y.Consumer,N=function(){return function(e){return function(t){return o.a.createElement(C,null,function(n){return o.a.createElement(e,Object.assign({},t,{bookstoreService:n}))})}}},T=n(12),j=function(e,t,n){var a=t.shoppingCart,r=t.bookList.books,o=a.cartItems,c=a.orderTotal,i=r.find(function(t){return t.id===e}),l=o.findIndex(function(t){return t.id===e}),u=o[l],s=R(i,u,n);return{cartItems:S(o,s,l),orderTotal:c+i.price*n}},S=function(e,t,n){var a=t.count;return-1===n?[].concat(Object(T.a)(e),[t]):0===a?[].concat(Object(T.a)(e.slice(0,n)),Object(T.a)(e.slice(n+1))):[].concat(Object(T.a)(e.slice(0,n)),[t],Object(T.a)(e.slice(n+1)))},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.title,c=void 0===o?e.title:o,i=t.count,l=void 0===i?0:i,u=t.total;return{id:r,title:c,count:l+n,total:(void 0===u?0:u)+e.price*n}},A=(n(41),function(){return o.a.createElement("div",null,"Loading...")}),D=(n(42),function(){return o.a.createElement("div",null,"Error!")}),L=(n(43),n(44),function(e){var t=e.book,n=e.onAdd,a=t.title,r=t.author,c=t.price,i=t.coverImage;return o.a.createElement("div",{className:"book-list-item"},o.a.createElement("div",{className:"book-cover"},o.a.createElement("img",{src:i,alt:"cover"})),o.a.createElement("div",{className:"book-details"},o.a.createElement("span",{className:"book-title"},a),o.a.createElement("span",{className:"book-author"},r),o.a.createElement("span",{className:"book-price"},c),o.a.createElement("button",{type:"button",className:"btn btn-info add-to-cart",onClick:n},"Add to cart")))}),B=function(e){var t=e.books,n=e.onAdd,a=t.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(L,{book:e,onAdd:function(){return n(e.id)}}))});return o.a.createElement("ul",{className:"book-list"},a)},I=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.isLoading,a=e.error,r=e.onAdd;return n?o.a.createElement(A,null):a?o.a.createElement(D,null):o.a.createElement(B,{books:t,onAdd:r})}}]),t}(r.Component),w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(N(),Object(i.b)(function(e){return e.bookList},function(e,t){var n=t.bookstoreService;return Object(k.b)({fetchBooks:d(n),onAdd:f},e)}))(I),F=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,null),o.a.createElement(p,null))},K=function(){return o.a.createElement("h1",null,"Cart Page")},M=(n(45),Object(i.b)(function(e){return e.shoppingCart})(function(e){var t=e.cartItems,n=e.orderTotal,a=t.reduce(function(e,t){return e+t.count},0);return o.a.createElement("header",{className:"row shop-header"},o.a.createElement(l.b,{className:"logo text-dark",to:"/"},"ReStore"),o.a.createElement(l.b,{className:"shopping-cart",to:"/cart"},o.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),a," items ($",n,")"))})),H=function(){return o.a.createElement("main",{role:"main",className:"container"},o.a.createElement(M,{numItems:5,total:100}),o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/",exact:!0,component:F}),o.a.createElement(u.a,{path:"/cart",component:K})))},x=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(O.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement(D,null):this.props.children}}]),t}(r.Component),P=n(29),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.bookList,a=void 0===n?{books:[],isLoading:!0,error:null}:n;switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],isLoading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,isLoading:!1,error:null};case"FETCH_BOOKS_ERROR":return{books:[],isLoading:!1,error:t.payload};default:return a}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.shoppingCart,a=void 0===n?{cartItems:[],orderTotal:0}:n;switch(t.type){case"BOOK_ADDED_TO_CART":return j(t.payload,e,1);case"BOOK_DELETED_FROM_CART":return j(t.payload,e,-1);case"ALL_BOOKS_DELETED_FROM_CART":var r=a.cartItems.find(function(e){return e.id===t.payload});return j(t.payload,e,-r.count);default:return a}},$=function(e,t){return{shoppingCart:U(e,t),bookList:J(e,t)}},z=Object(k.c)($,Object(k.a)(P.a,function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},function(e){var t=e.getState;return function(e){return function(n){return console.log(n.type,t()),e(n)}}}));z.dispatch((a=5e3,function(e){setTimeout(function(){return e({type:"DELAYED_ACTION"})},a)}));var Q=z,X=new function e(){var t=this;Object(b.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}],this.getBooks=function(){return new Promise(function(e,n){setTimeout(function(){Math.random()<.75?e(t.data):n(new Error("Something got wrong"))},1e3)})}};Object(c.render)(o.a.createElement(i.a,{store:Q},o.a.createElement(x,null,o.a.createElement(_,{value:X},o.a.createElement(l.a,null,o.a.createElement(H,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.1ee80ed1.chunk.js.map