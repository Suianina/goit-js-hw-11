import{a as p,S as u,i}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m="https://pixabay.com/api/",f="48789151-f51ae4d97727bedfe2d09c642";async function g(a){const e={key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await p.get(m,{params:e})).data}catch{return iziToast.error({position:"topRight",message:"Error fetching images. Please try again!"}),{hits:[]}}}function y(a){return a.map(e=>`
      <li class="gallery-item">
        <div class="image-cont">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <div class="image-descr">
            <div class="descr-box">
              <p class="image-feature">Likes</p>
              <p class="image-data">${e.likes}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Views</p>
              <p class="image-data">${e.views}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Comments</p>
              <p class="image-data">${e.comments}</p>
            </div>
            <div class="descr-box">
              <p class="image-feature">Downloads</p>
              <p class="image-data">${e.downloads}</p>
            </div>
          </div>
        </div>
      </li>
    `).join("")}const h=document.querySelector(".search-form"),c=document.querySelector(".search-input"),l=document.querySelector(".gallery"),d=document.querySelector(".loader");let v=new u(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});h.addEventListener("submit",async a=>{a.preventDefault();const e=c.value.trim();if(e===""){i.error({position:"topRight",message:"Please enter some text"});return}l.innerHTML="",d.classList.remove("visually-hidden");try{const r=await g(e);r.hits.length>0?(l.insertAdjacentHTML("beforeend",y(r.hits)),v.refresh(),c.value=""):i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{i.error({position:"topRight",message:"Sorry, the request can't be completed at this time. Please try again"})}finally{d.classList.add("visually-hidden")}});
//# sourceMappingURL=index.js.map
