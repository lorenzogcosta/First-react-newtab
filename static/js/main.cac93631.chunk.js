(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(15),n=a.n(s),c=a(6),r=a.n(c),o=a(16),l=a(17),i=a(18),d=a(21),h=a(20),u=a(4),m=(a(27),a(19)),j=a.n(m),b=a(0),p=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:[],modalopen:!1,modalA:!1,modalD:!1,indexCartao:"",username:"",userid:"",cards:[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.handleChange=this.handleChange.bind(this),this.validForm=this.validForm.bind(this),t=this.state,"https://www.mocky.io/v2/5d531c4f2e0000620081ddce",e.next=6,fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce");case 6:return a=e.sent,console.log(" res: ",a),e.next=10,a.json();case 10:s=e.sent,console.log("body:",s),t.data=s,this.setState(t);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){console.log("event.target.value ",e.target.value),this.setState({indexCartao:e.target.value})}},{key:"openModal",value:function(e){console.log("USUARIO SELECIONADO ",e),this.setState({modalopen:!0,username:e.name,userid:e.id})}},{key:"mask",value:function(){document.querySelector(".spanError").innerHTML="";var e=document.querySelector("#worthPayment"),t=e.value;t+="",t=parseInt(t.replace(/[\D]+/g,"")),(t=(t+="").replace(/([0-9]{2}$)/g,",$1")).length>6&&(t=t.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),e.value=t,"NaN"===t&&(e.value=""),"null"===t&&(e.value="")}},{key:"validForm",value:function(){console.log("indexCartao ",this.state.indexCartao),console.log("CARTAO SELECIONADO ",this.state.cards[this.state.indexCartao]);var e=document.querySelector("#worthPayment").value,t=document.querySelector(".spanError"),a=!1;""===e&&(a=!0,t.innerHTML="Digite O Valor"),a||("1"===this.state.indexCartao&&(e=e.replace(".","").replace(",",".").toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),e=parseFloat(e),document.querySelector("#worthPayment").innerText="R$ 0,00",this.setState({modalA:!0}),console.log("cartao ok"),console.log(e),j.a.post("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",{card:this.indexCartao,destination_user_id:this.state.userid,value:e}).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))),"0"===this.state.indexCartao&&this.setState({modalD:!0}))}},{key:"render",value:function(){var e=this,t=this.state.data;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:t.map((function(t){return Object(b.jsx)("div",{className:"containerList",children:Object(b.jsxs)("p",{className:"usersList",children:[Object(b.jsxs)("p",{className:"containerImg",children:[Object(b.jsxs)("div",{className:"idUser",children:[Object(b.jsx)("strong",{children:" ID:"}),t.id]}),Object(b.jsx)("img",{className:"img",src:t.img,alt:""}),Object(b.jsx)("div",{className:"userName",children:Object(b.jsxs)("strong",{children:[" ",t.username," "]})})]}),Object(b.jsxs)("p",{className:"h2",children:[" NOME: ",t.name]}),Object(b.jsx)("div",{className:"divButton",children:Object(b.jsx)("button",{onClick:function(){return e.openModal(t)},className:"button",children:"Pagar"})})]})})}))}),Object(b.jsx)("div",{onClick:function(){e.setState({modalopen:!1,modalA:!1,modalD:!1})},style:{display:this.state.modalopen?"block":"none"},className:"backdrop"}),Object(b.jsxs)("div",{style:{display:this.state.modalopen?"flex":"none"},className:"cardsModal",children:[Object(b.jsxs)("label",{style:{color:"blueviolet"},children:["Pagando ",this.state.username]}),Object(b.jsxs)("div",{className:"inputPayment",children:[Object(b.jsx)("label",{htmlFor:"worthPayment",children:"Valor Do Pagamento"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{onKeyPress:this.mask,id:"worthPayment",type:"text",placeholder:"R$  DIGITE O VALOR"})]}),Object(b.jsx)("div",{style:{color:"red"},className:"spanError"}),Object(b.jsxs)("div",{className:"selectCard",children:[Object(b.jsx)("label",{htmlFor:"cardsLabel",children:"Selecione o Cartao"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("select",{onChange:this.handleChange,children:this.state.cards.map((function(e,t){return Object(b.jsxs)("option",{value:t,children:[" Cartao Com Final: ",e.card_number.substr(-4)]})}))}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:this.validForm,className:"second_button",children:"Pagar"})})]})]}),Object(b.jsx)("div",{className:"modalA",style:{display:this.state.modalA?"flex":"none"},children:"Pagamento Realizado com Sucesso"}),Object(b.jsx)("div",{className:"modalD",style:{display:this.state.modalD?"flex":"none"},children:"Pagamento NAO Realizado"})]})}}]),a}(u.Component),v=document.getElementById("root");n.a.render(Object(b.jsx)("div",{children:Object(b.jsx)(p,{})}),v)}},[[47,1,2]]]);
//# sourceMappingURL=main.cac93631.chunk.js.map