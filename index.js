import{a as p,i as a,S as u}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="https://pixabay.com/api/",g="48789151-f51ae4d97727bedfe2d09c642";async function f(o){console.log("Запускаем fetchImages() с запросом:",o);const e={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};try{const s=await p.get(m,{params:e});return console.log("Ответ от API:",s.data),s.data}catch(s){return console.error("Ошибка при запросе к API:",s),a.error({position:"topRight",message:"Error fetching images. Please try again!"}),{hits:[]}}}function h(o){return o.map(e=>`
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
    `).join("")}const y=document.querySelector(".search-form"),n=document.querySelector(".search-input"),l=document.querySelector(".gallery"),d=document.querySelector(".loader");let v=new u(".gallery a",{captions:!0,captionDelay:250,captionPosition:"bottom",captionsData:"alt"});y.addEventListener("submit",async o=>{o.preventDefault();const e=n.value.trim();if(e===""){a.error({position:"topRight",message:"Please enter some text"});return}l.innerHTML="",d.classList.remove("visually-hidden");try{console.log("Отправляем запрос с:",e);const s=await f(e);console.log("Ответ от API:",s),s.hits&&s.hits.length>0?(l.insertAdjacentHTML("beforeend",h(s.hits)),v.refresh(),n.value=""):a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(s){console.error("Ошибка при запросе:",s),a.error({position:"topRight",message:"Sorry, the request can't be completed at this time. Please try again"})}finally{d.classList.add("visually-hidden")}});
//# sourceMappingURL=index.js.map
