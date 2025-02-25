import{a as c,S as p,i as n}from"./assets/vendor-BDaiwwc1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com";function u(t){const s="https://pixabay.com/api/",a={key:"48901588-d5168312fb6e442ccb66c926a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0},i=s;return c.get(i,{params:a})}function f(t){return`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  
  <ul class="image-info">
      <li class="info-item">
        <p class="text">Likes</p>
        <p class="text-value">${t.likes}</p>
      </li>
      <li class="info-item">
        <p class="text">Views</p>
        <p class="text-value">${t.views}</p>
      </li>
      <li class="info-item">
        <p class="text">Comments</p>
        <p class="text-value">${t.comments}</p>
      </li>
      <li class="info-item">
        <p class="text">Downloads</p>
        <p class="text-value">${t.downloads}</p>
      </li>
      </ul>
</li>`}const m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){return t.map(f).join("")}const o={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),gallery:document.querySelector(".gallery")};o.form.addEventListener("submit",t=>{t.preventDefault();const s=o.input.value.trim();s!==""&&(o.gallery.innerHTML='<span class="loader"></span>',o.form.reset(),u(s).then(({data:a})=>{o.gallery.innerHTML="",a.hits.length===0?n.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",maxWidth:"432px"}):(o.gallery.innerHTML=g(a.hits),m.refresh())}).catch(a=>{o.gallery.innerHTML="",n.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
