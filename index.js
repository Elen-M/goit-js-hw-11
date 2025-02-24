import{a as c,S as u,i as n}from"./assets/vendor-BDaiwwc1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();c.defaults.baseURL="https://pixabay.com";function p(e){const s="https://pixabay.com/api/",o={key:"48901588-d5168312fb6e442ccb66c926a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0},a=s;return c.get(a,{params:o})}function f(e){return`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  
  <ul class="image-info">
      <li class="info-item">
        <p class="text">Likes</p>
        <p class="text-value">${e.likes}</p>
      </li>
      <li class="info-item">
        <p class="text">Views</p>
        <p class="text-value">${e.views}</p>
      </li>
      <li class="info-item">
        <p class="text">Comments</p>
        <p class="text-value">${e.comments}</p>
      </li>
      <li class="info-item">
        <p class="text">Downloads</p>
        <p class="text-value">${e.downloads}</p>
      </li>
      </ul>
</li>`}const m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(e){const s=e.map(f).join("");return m.refresh(),s}const i={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),button:document.querySelector("#search-button"),gallery:document.querySelector(".gallery")};i.form.addEventListener("click",e=>{e.preventDefault();const s=i.input.value.trim();s!==""&&(i.gallery.innerHTML='<span class="loader"></span>',i.form.reset(),p(s).then(({data:o})=>{if(o.hits.length===0)n.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",maxWidth:"432px"});else{const a=g(o.hits);i.gallery.innerHTML=a}}).catch(o=>{n.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}),e.target.reset())});
//# sourceMappingURL=index.js.map
