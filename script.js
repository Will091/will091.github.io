(function(){
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    var root=document.documentElement, transitioning=false;
    var perf=document.createElement('link');perf.rel='stylesheet';perf.href='performance.css';document.head.appendChild(perf);
    var revealItems=document.querySelectorAll('.reveal');for(var i=0;i<revealItems.length;i++)revealItems[i].classList.add('show');
    var menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
    if(menu&&nav)menu.addEventListener('click',function(){var open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');},{passive:true});

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
      var layer=document.createElement('div');layer.className='page-transition';layer.setAttribute('aria-hidden','true');
      var line=document.createElement('span');line.className='page-transition-line';layer.appendChild(line);document.body.appendChild(layer);
      root.classList.add('page-leaving');
      window.setTimeout(function(){window.location.assign(url.href);},460);
    },false);

    var shopButtons=document.querySelectorAll('.shop-btn');
    for(var s=0;s<shopButtons.length;s++)shopButtons[s].addEventListener('click',function(){var item=this.getAttribute('data-item')||'merch item';window.location.href='mailto:officialjaceben@gmail.com?subject=JaceBen%20Merch%20Enquiry%20-%20'+encodeURIComponent(item)});
  });
})();