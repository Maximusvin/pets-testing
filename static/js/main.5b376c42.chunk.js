(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],{12:function(e,t,n){e.exports={counter:"Counter_counter__w1vBx",title:"Counter_title__2iQLU",value:"Counter_value__1YeQp",controls:"Counter_controls__3yxfQ",button:"Counter_button__1FDPD"}},14:function(e,t,n){e.exports={colorPicker:"ColorPicker_colorPicker__vJeSt",title:"ColorPicker_title__3hwqK",span:"ColorPicker_span__Qk_KO",option:"ColorPicker_option__3PNox",activeOptions:"ColorPicker_activeOptions__3S5mh ColorPicker_option__3PNox"}},25:function(e,t,n){e.exports={nav:"NavBar_nav__20Iu6",list:"NavBar_list__2DiGF"}},32:function(e,t,n){e.exports={container:"Layout_container__KvZNJ"}},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n.n(r),a=n(10),i=n(17),s=n.n(i),l=n(11),u=n(9),d="counter/Increment",j="counter/Decrement",p=Object(u.combineReducers)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case d:return e+o;case j:return e-o;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return e}}),b=n(31),h=n(28),m=n(33),x="todos/add",f="todos/delete",O="todos/toggleCompleted",_="todos/filterS",v=Object(u.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case x:return[o].concat(Object(m.a)(e));case f:return e.filter((function(e){return e.id!==o}));case O:return e.map((function(e){return e.id===o?Object(h.a)(Object(h.a)({},e),{},{completed:!e.completed}):e}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case _:return o;default:return e}}}),g=Object(u.combineReducers)({counter:p,todos:v}),C=Object(u.createStore)(g,Object(b.composeWithDevTools)()),y=(n(43),n(32)),k=n.n(y),N=function(e){var t=e.children;return Object(o.jsx)("div",{className:k.a.container,children:t})},L=n(18),T=n(19),P=n(21),W=n(20),I=n(14),S=n.n(I),w=function(e){Object(P.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(L.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={activeIdx:0},e.setActiveIdx=function(t){e.setState({activeIdx:t})},e.makeClassesName=function(t){return e.state.activeIdx===t?S.a.activeOptions:S.a.option},e}return Object(T.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeIdx,n=this.props.options;return Object(o.jsxs)("div",{className:S.a.colorPicker,children:[Object(o.jsx)("h2",{className:S.a.title,children:"ColorPicker"}),Object(o.jsxs)("p",{className:S.a.span,children:["\u0412\u044b\u0431\u0440\u0430\u043d \u0446\u0432\u0435\u0442: ",n[t].label]}),Object(o.jsx)("div",{children:n.map((function(t,n){var r=t.color;return Object(o.jsx)("button",{type:"button",className:e.makeClassesName(n),style:{backgroundColor:r},onClick:function(){return e.setActiveIdx(n)}},r)}))})]})}}]),n}(r.Component),D=n(12),A=n.n(D),F=Object(a.b)((function(e){return{value:e.counter.value,step:e.counter.step}}),(function(e){return{onIncrement:function(t){return e({type:d,payload:t})},onDecrement:function(t){return e({type:j,payload:t})}}}))((function(e){var t=e.value,n=e.step,r=e.onIncrement,c=e.onDecrement;return Object(o.jsxs)("div",{className:A.a.counter,children:[Object(o.jsx)("h2",{className:A.a.title,children:"Counter"}),Object(o.jsx)("span",{className:A.a.value,children:t}),Object(o.jsxs)("div",{className:A.a.controls,children:[Object(o.jsxs)("button",{className:A.a.button,onClick:function(){return c(n)},children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",n]}),Object(o.jsxs)("button",{className:A.a.button,onClick:function(){return r(n)},children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",n]})]})]})})),B=n(48),E=n(7),J=n.n(E),K=function(e,t){var n=t.toLocaleLowerCase();return e.filter((function(e){return e.text.toLocaleLowerCase().includes(n)}))},Q=Object(a.b)((function(e){var t=e.todos,n=t.todos,o=t.filter;return{todos:K(n,o)}}),(function(e){return{onDelete:function(t){return e(function(e){return{type:f,payload:e}}(t))},onToggleCompleted:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))((function(e){var t=e.todos,n=e.onDelete,r=e.onToggleCompleted;return Object(o.jsx)("div",{children:t.length>0&&Object(o.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.text,a=e.completed;return Object(o.jsxs)("li",{className:a?J.a.itemListCompleted:J.a.itemList,children:[Object(o.jsxs)("p",{children:[" ",c]}),Object(o.jsxs)("div",{className:J.a.controlsWrap,children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(){return r(t)},checked:a}),Object(o.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},t)}))})})})),U=function(e){Object(P.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(L.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.handleChangeMessage=function(t){e.setState({message:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddTodo(e.state.message),e.setState({message:""})},e}return Object(T.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:J.a.todoEditorWrap,onSubmit:this.handleSubmit,children:[Object(o.jsx)("textarea",{className:J.a.textArea,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u043c\u0435\u0442\u043a\u0438",onChange:this.handleChangeMessage,value:this.state.message}),Object(o.jsx)("button",{type:"submit",disabled:!this.state.message,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"})]})}}]),n}(r.Component),M=Object(a.b)(null,(function(e){return{onAddTodo:function(t){return e(function(e){return{type:x,payload:{id:Object(B.a)(),text:e,completed:!1}}}(t))}}}))(U),R=Object(a.b)((function(e){return{filter:e.todos.filter}}),(function(e){return{onChangeFilter:function(t){return e((n=t.target.value,{type:_,payload:n}));var n}}}))((function(e){var t=e.filter,n=e.onChangeFilter;return Object(o.jsx)("div",{className:J.a.filterWrap,children:Object(o.jsx)("input",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",value:t,onChange:n})})})),Y=function(){return Object(o.jsxs)("div",{className:J.a.todoWrap,children:[Object(o.jsx)("h2",{className:J.a.title,children:"Todo List"}),Object(o.jsx)(M,{}),Object(o.jsx)(R,{}),Object(o.jsx)(Q,{})]})},q=n(25),G=n.n(q),H=function(){return Object(o.jsx)("nav",{className:G.a.nav,children:Object(o.jsxs)("ul",{className:G.a.list,children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/counter",children:"Counter"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/todo",children:"Todo"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/colorpicker",children:"ColorPicker"})})]})})},X=n(3),Z=(n(45),[{label:"red",color:"#F44336"},{label:"green",color:"#4CAF50"},{label:"blue",color:"#2196F3"},{label:"grey",color:"#607D8B"},{label:"pink",color:"#E91E63"},{label:"indigo",color:"#3F51B5"}]),z=[{id:1,text:"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u0420\u0435\u0430\u043a\u0442",completed:!1},{id:2,text:"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u0440\u043e\u0443\u0442\u044b",completed:!1},{id:3,text:"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u0420\u0435\u0434\u0430\u043a\u0441",completed:!1},{id:4,text:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",completed:!1}],V=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(N,{children:[Object(o.jsx)(H,{}),Object(o.jsxs)(X.c,{children:[Object(o.jsx)(X.a,{path:"/counter",component:F}),Object(o.jsx)(X.a,{path:"/todo",children:Object(o.jsx)(Y,{todos:z})}),Object(o.jsx)(X.a,{path:"/colorpicker",children:Object(o.jsx)(w,{options:Z})})]})]})})};console.log(C.getState()),s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(a.a,{store:C,children:Object(o.jsx)(V,{})})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={todoWrap:"TodoList_todoWrap__192Kg",title:"TodoList_title__2lYIT",count:"TodoList_count__1aolH",itemList:"TodoList_itemList__1UT35",itemListCompleted:"TodoList_itemListCompleted__1gqvg TodoList_itemList__1UT35",todoEditorWrap:"TodoList_todoEditorWrap__nCYgn",textArea:"TodoList_textArea__1vyUe",controlsWrap:"TodoList_controlsWrap__1gfXG",filterWrap:"TodoList_filterWrap__3OB73"}}},[[46,1,2]]]);
//# sourceMappingURL=main.5b376c42.chunk.js.map