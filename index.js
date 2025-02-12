import{a as d,S as u,i}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",m="48789151-f51ae4d97727bedfe2d09c642";async function f(a){const e={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await d.get(p,{params:e})).data}catch{throw new Error("Error fetching images")}}function g(a){return a.map(e=>`
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
    `).join("")}const y=document.querySelector(".search-form"),h=document.querySelector(".search-input"),n=document.querySelector(".gallery"),l=document.querySelector(".loader");let v=new u(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});y.addEventListener("submit",async a=>{a.preventDefault();const e=a.target.elements.query.value.trim();if(e===""){i.error({position:"topRight",message:"Please enter some text"});return}n.innerHTML="",l.classList.remove("visually-hidden");try{const s=await f(e);s.hits&&s.hits.length>0?(n.insertAdjacentHTML("beforeend",g(s.hits)),v.refresh()):i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{i.error({position:"topRight",message:"Sorry, the request can't be completed at this time. Please try again"})}finally{l.classList.add("visually-hidden")}h.value=""});
//# sourceMappingURL=index.js.map
