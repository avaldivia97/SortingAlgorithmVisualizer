(this["webpackJsonpreact-app-1"]=this["webpackJsonpreact-app-1"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),u=(n(15),n(2)),i=n(5),s=n(6),l=n(7),f=n(9),m=n(8);function h(t){var e=[];if(t.length<=1)return t;var n=t.slice();return function t(e,n,r,a,o){if(n===r)return;var c=Math.floor((n+r)/2);t(a,n,c,e,o),t(a,c+1,r,e,o),function(t,e,n,r,a,o){var c=e,u=e,i=n+1;for(;u<=n&&i<=r;){var s={};s.comparison=[u,i],a[u]<=a[i]?(s.swap=[c,a[u]],t[c++]=a[u++]):(s.swap=[c,a[i]],t[c++]=a[i++]),o.push(s)}for(;u<=n;)o.push({comparison:[u,u],swap:[c,a[u]]}),t[c++]=a[u++];for(;i<=r;)o.push({comparison:[i,i],swap:[c,a[i]]}),t[c++]=a[i++]}(e,n,c,r,a,o)}(t,0,t.length-1,n,e),e}n(16);var p=function(t){Object(f.a)(n,t);var e=Object(m.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={array:[]},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var t=[],e=0;e<125;e++)t.push(v(5,1800));this.setState({array:t})}},{key:"mergeSort",value:function(){var t,e=h(this.state.array),n=[],r=Object(i.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;n.push(a.comparison),n.push(a.comparison),n.push(a.swap)}}catch(s){r.e(s)}finally{r.f()}for(var o=function(t){var e=document.getElementsByClassName("array-bar");if(t%3!==2){var r=Object(u.a)(n[t],2),a=r[0],o=r[1],c=e[a].style,i=e[o].style,s=t%3===0?"red":"black";setTimeout((function(){c.backgroundColor=s,i.backgroundColor=s}),10*t)}else setTimeout((function(){var r=Object(u.a)(n[t],2),a=r[0],o=r[1];e[a].style.width="".concat(o,"px")}),10*t)},c=0;c<n.length;c++)o(c)}},{key:"HeapSort",value:function(){}},{key:"BubbleSort",value:function(){}},{key:"QuickSort",value:function(){}},{key:"testSortingAlgorithms",value:function(){for(var t=0;t<100;t++){for(var e=[],n=v(1,1e3),r=0;r<n;r++)e.push(v(-1e3,1e3));var a=e.slice().sort((function(t,e){return t-e})),o=h(e.slice());console.log(y(a,o))}}},{key:"render",value:function(){var t=this,e=this.state.array;return a.a.createElement("div",{className:"array-container"},a.a.createElement("button",{onClick:function(){return t.resetArray()}}," Generate New Array"),a.a.createElement("button",{onClick:function(){return t.mergeSort()}}," Merge Sort"),a.a.createElement("button",{onClick:function(){return t.HeapSort()}}," Heap Sort"),a.a.createElement("button",{onClick:function(){return t.BubbleSort()}}," Bubble Sort"),a.a.createElement("button",{onClick:function(){return t.QuickSort()}}," Quick Sort"),a.a.createElement("button",{onClick:function(){return t.testSortingAlgorithms()}},"Test Algorithms"),e.map((function(t,e){return a.a.createElement("div",{className:"array-bar",key:e,style:{width:"".concat(t,"px")}})})))}}]),n}(a.a.Component);function v(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function y(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}n(17);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null," "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.90e24349.chunk.js.map