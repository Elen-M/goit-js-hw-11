import{a as c,S as u,i}from"./assets/vendor-BDaiwwc1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com";function p(t){const s="https://pixabay.com",o="/api/",a={key:"48901588-d5168312fb6e442ccb66c926a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0},e=s+o;return c.get(e,{params:a})}function m(t){return`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="image-info">
        <p>Likes: <span class="likes">${t.likes}</span></p>
        <p>Views: <span class="views">${t.views}</span></p>
        <p>Comments: <span class="comments">${t.comments}</span></p>
        <p>Downloads: <span class="downloads">${t.downloads}</span></p>
      </div>
</li>`}const f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function d(t){const s=t.map(m).join("");return f.refresh(),s}const l={form:document.querySelector(".search-form"),input:document.querySelector("#image-input"),button:document.querySelector("#search-button"),gallery:document.querySelector(".gallery")};l.form.addEventListener("submit",t=>{t.preventDefault();const s=l.input.value.trim();if(s===""){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}p(s).then(o=>{if(o.hits.length===0)i.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{const a=d(o.hits);l.gallery.innerHTML=a}}).catch(o=>{i.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}),t.target.reset()});
//# sourceMappingURL=index.js.map
