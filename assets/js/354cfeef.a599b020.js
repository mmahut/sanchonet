"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Start a node",sidebar_position:1,slug:"/start-node"},s="Start a node",i={unversionedId:"tutorials/start-a-node",id:"tutorials/start-a-node",title:"Start a node",description:"Get configuration files",source:"@site/docs/tutorials/start-a-node.mdx",sourceDirName:"tutorials",slug:"/start-node",permalink:"/start-node",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/start-a-node.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Start a node",sidebar_position:1,slug:"/start-node"},sidebar:"docsSidebar",previous:{title:"Developers",permalink:"/roles/dev"},next:{title:"Create keys and address",permalink:"/address"}},c={},l=[{value:"Get configuration files",id:"get-configuration-files",level:2},{value:"Run the node",id:"run-the-node",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-a-node"},"Start a node"),(0,o.kt)("h2",{id:"get-configuration-files"},"Get configuration files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://book.world.dev.cardano.org/environments/sanchonet/config.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/topology.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/conway-genesis.json\n")),(0,o.kt)("h2",{id:"run-the-node"},"Run the node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cardano-node run --topology topology.json \\\n--database-path db \\\n--socket-path node.socket \\\n--port 3001 \\\n--config config.json \n")))}u.isMDXComponent=!0}}]);