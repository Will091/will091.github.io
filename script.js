(function(){
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    var root=document.documentElement,transitioning=false;
    var mobileStyle=document.createElement('style');
    mobileStyle.textContent="@media(max-width:900px){html,body{width:100%;min-width:0;overflow-x:hidden}.site-header{top:max(8px,env(safe-area-inset-top));z-index:10000}.menu-toggle{display:block!important;position:relative;touch-action:manipulation;-webkit-user-select:none;user-select:none}.nav{z-index:10001;max-height:calc(100dvh - 92px);overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}.nav.open{display:flex!important}.nav a{touch-action:manipulation}.page-transition{position:fixed!important;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;min-height:-webkit-fill-available;z-index:2147483647}.page-transition:before{font-size:clamp(18px,7vw,32px);letter-spacing:.22em}.page-transition-line{left:7%;right:7%}}@media(max-width:600px){.site-header{width:calc(100% - 16px);padding-left:12px;padding-right:8px}.brand{width:88px}.menu-toggle{width:46px;height:46px;min-width:46px}.hero{padding-top:105px}.hero-visual{height:62dvh;min-height:360px}.page-transition:before{font-size:20px;letter-spacing:.2em}}@supports not (height:100dvh){@media(max-width:900px){.nav{max-height:calc(100vh - 92px)}.page-transition{height:100vh;min-height:-webkit-fill-available}}}";
    document.head.appendChild(mobileStyle);

    var perf=document.createElement('link');perf.rel='stylesheet';perf.href='performance.css';document.head.appendChild(perf);
    var revealItems=document.querySelectorAll('.reveal');for(var i=0;i<revealItems.length;i++)revealItems[i].classList.add('show');
    var menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
    if(menu&&nav){
      menu.setAttribute('type','button');
      menu.setAttribute('aria-expanded','false');
      function toggleMenu(e){if(e)e.preventDefault();var open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');}
      menu.addEventListener('click',toggleMenu,false);
      menu.addEventListener('touchend',function(e){e.preventDefault();toggleMenu(e);},{passive:false});
      nav.addEventListener('click',function(e){var link=e.target.closest&&e.target.closest('a');if(link&&window.innerWidth<=900){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}},false);
    }

    document.addEventListener('click',function(e){
      if(transitioning)return;
      var link=e.target.closest&&e.target.closest('a');
      if(!link||link.target==='_blank'||link.hasAttribute('download'))return;
      var href=link.getAttribute('href')||'';
      if(!href||href.charAt(0)==='#'||href.indexOf('mailto:')===0||href.indexOf('tel:')===0)return;
      var url;try{url=new URL(link.href,location.href)}catch(err){return;}
      if(url.origin!==location.origin)return;
      if(url.pathname===location.pathname&&url.search===location.search)return;
      e.preventDefault();transitioning=true;
      if(nav){nav.classList.remove('open');if(menu)menu.setAttribute('aria-expanded','false');}
      var layer=document.createElement('div');layer.className='page-transition';layer.setAttribute('aria-hidden','true');
      var line=document.createElement('span');line.className='page-transition-line';layer.appendChild(line);document.body.appendChild(layer);
      root.classList.add('page-leaving');
      window.setTimeout(function(){window.location.assign(url.href);},460);
    },false);

    var shopButtons=document.querySelectorAll('.shop-btn');
    for(var s=0;s<shopButtons.length;s++)shopButtons[s].addEventListener('click',function(){var item=this.getAttribute('data-item')||'merch item';window.location.href='mailto:officialjaceben@gmail.com?subject=JaceBen%20Merch%20Enquiry%20-%20'+encodeURIComponent(item)});
  });
})();