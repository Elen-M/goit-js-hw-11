import{a as c,S as u,i as n}from"./assets/vendor-BDaiwwc1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();c.defaults.baseURL="https://pixabay.com";function p(e){const s="https://pixabay.com/api/",a={key:"48901588-d5168312fb6e442ccb66c926a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0},o=s;return c.get(o,{params:a})}function m(e){return`<li class="gallery-item">
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
</li>`}new u(".gallery a",{captionsData:"alt",captionDelay:250});function f(e){return e.map(m).join("")}const i={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),button:document.querySelector("#search-button"),gallery:document.querySelector(".gallery")};i.form.addEventListener("click",e=>{e.preventDefault();const s=i.input.value.trim();s!==""&&(i.gallery.innerHTML='<span class="loader"></span>',i.form.reset(),p(s).then(({data:a})=>{if(a.hits.length===0)n.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",position:"topRight",maxWidth:"432px"});else{const o=f(a.hits);i.gallery.innerHTML=o}}).catch(a=>{n.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}),e.target.reset())});
//# sourceMappingURL=index.js.map
