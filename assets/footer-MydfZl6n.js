var y=(d,n,s)=>{if(!n.has(d))throw TypeError("Cannot "+s)};var E=(d,n,s)=>{if(n.has(d))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(d):n.set(d,s)};var b=(d,n,s)=>(y(d,n,"access private method"),s);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function v(d,n,s){const o=document.createElement(n),e=document.createElement("nav"),t=document.createElement("ul");for(const[a,r]of Object.entries(d)){const c=document.createElement("li");if(r){const i=document.createElement("a");if(i.href=r,i.appendChild(document.createTextNode(a)),s){const l=document.createElement("button");l.appendChild(i),c.appendChild(l)}else c.appendChild(i)}else c.appendChild(document.createTextNode(a));t.appendChild(c)}return e.appendChild(t),o.appendChild(e),o}var h,C;const m=class m{static header(n,s,o){var t;const e=b(t=m,h,C).call(t,s,o);if(typeof n=="string")for(let a of n.split(" "))e.classList.add(a);return e}static info(n,s,o,e){const t=m.header(null,"h3",n),a=t.querySelector(".wrapper");let r=document.createElement("div");r.classList.add("ml-3");for(let i of o){const l=document.createElement("p");l.classList.add("card-text"),l.appendChild(document.createTextNode(i)),r.appendChild(l)}let c=null;if(e!==null&&Object.entries(e).length!==0){console.log(`called
`),c=document.createElement("div"),c.classList.add("with-img"),c.classList.add("flex"),c.classList.add("space-bw");const i=document.createElement("h3");i.classList.add("sub_head_font"),i.appendChild(document.createTextNode(`$${e.cost}`));const l=document.createElement("img");l.classList.add("mt-3"),l.setAttribute("width","200"),l.setAttribute("alt",e.imgName),l.setAttribute("src",e.imgSrc),c.appendChild(i),c.appendChild(l)}return s==="bottom"?(a.insertBefore(r,a.lastChild),c&&a.insertBefore(c,a.lastChild)):(a.appendChild(r),c&&a.appendChild(c)),t}};h=new WeakSet,C=function(n,s){const o=document.createElement("div");o.classList.add("card");const e=document.createElement("div");e.classList.add("card-body"),e.classList.add("flex"),e.classList.add("c"),e.classList.add("g2"),e.classList.add("vcenter");const t=document.createElement("div");t.classList.add("wrapper");const a=document.createElement(n);return a.classList.add("card-heading"),a.classList.add(n==="h1"?"cursive_font":"sub_head_font"),a.appendChild(document.createTextNode(s)),t.appendChild(a),e.appendChild(t),o.appendChild(e),o},E(m,h);let g=m;const L=v({Home:"/",Contact:"/vegan_meals/contact/",Menu:"/vegan_meals/menu/"},"header",!0),u=L.querySelector("li"),p=L.querySelectorAll("li")[1],f=L.querySelectorAll("li")[2];location.href.indexOf("contact")>-1?p.classList.add("tabbed"):location.href.indexOf("menu")>-1?f.classList.add("tabbed"):u.classList.add("tabbed");u.addEventListener("click",d=>{location.href=`${window.location.origin}/`,u.className="tabbed",p.className="",f.className=""});p.addEventListener("click",d=>{location.href=`${window.location.origin}/vegan_meals/contact/`,p.className="tabbed",u.className="",f.className=""});f.addEventListener("click",d=>{location.href=`${window.location.origin}/vegan_meals/menu/`,f.className="tabbed",u.className="",p.className=""});const x=v({"© 2024 The Vegan Chef":null,Github:"https://github.com/RiteshtheSharma"},"footer",!1);export{g as C,x as f,L as h};