import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h=s=>s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e})=>`
        <div class="col">
          <div class="card shadow-sm">
            <a href="${t}" class="gallery-link">
              <img src="${o}" alt="${i}" class="gallery-img img-fluid" />
            </a>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">Likes: ${e}</small>
              </div>
            </div>
          </div>
        </div>`).join(""),f="43912806-71f58de8c72d31bf72d9e0bfd",m="https://pixabay.com/api/",y=(s="cat")=>{const o=new URLSearchParams({key:f,q:s,orientation:"horizontal"});return fetch(`${m}?${o.toString()}`).then(t=>{if(!t.ok)throw new Error(`Error ${t.status}: ${t.statusText}`);return t.json()})},g=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader");let a;function p(s){s.preventDefault();const o=s.target.elements.searchKeyword.value.trim();if(o===""){n.innerHTML="",s.target.reset(),l.show({message:"Input field cannot be empty",position:"topRight",timeout:2e3,color:"red"});return}n.innerHTML="",d.classList.remove("is-hidden"),y(o).then(t=>{if(console.log("Received data:",t),!t.hits||t.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),n.innerHTML="";return}n.innerHTML=h(t.hits),a&&a.destroy(),a=new u(".js-gallery a",{captionDelay:250})}).catch(t=>{console.error("Error fetching photos:",t),l.show({message:"An error occurred while fetching photos",position:"topRight",timeout:2e3,color:"red"})}).finally(()=>{s.target.reset(),d.classList.add("is-hidden")})}g.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
