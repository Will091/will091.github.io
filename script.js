(function(){
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    if(!document.querySelector('link[data-page-transition]')){var css=document.createElement('link');css.rel='stylesheet';css.href='page-transition.css';css.setAttribute('data-page-transition','');document.head.appendChild(css);}
    var layer=document.querySelector('.page-transition');
    if(!layer){layer=document.createElement('div');layer.className='page-transition';layer.setAttribute('aria-hidden','true');var line=document.createElement('span');line.className='page-transition-line';layer.appendChild(line);document.body.appendChild(layer);}
    requestAnimationFrame(function(){document.documentElement.classList.remove('page-leaving');document.documentElement.classList.add('page-ready');});
    var perf=document.createElement('link');perf.rel='stylesheet';perf.href='performance.css';document.head.appendChild(perf);
    var revealItems=document.querySelectorAll('.reveal');for(var i=0;i<revealItems.length;i++)revealItems[i].classList.add('show');
    var menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
    if(menu&&nav)menu.addEventListener('click',function(){var open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false');},{passive:true});
    document.addEventListener('click',function(e){
      var link=e.target.closest&&e.target.closest('a');
      if(!link||link.target==='_blank'||link.hasAttribute('download'))return;
      var href=link.getAttribute('href')||'';
      if(!href||href.charAt(0)==='#'||href.indexOf('mailto:')===0||href.indexOf('tel:')===0)return;
      var url;try{url=new URL(link.href,location.href)}catch(err){return;}
      if(url.origin!==location.origin)return;
      if(url.pathname===location.pathname&&url.search===location.search)return;
      e.preventDefault();
      document.documentElement.classList.remove('page-ready');
      document.documentElement.classList.add('page-leaving');
      window.setTimeout(function(){window.location.assign(url.href);},500);
    },false);
    var shopButtons=document.querySelectorAll('.shop-btn');
    for(var s=0;s<shopButtons.length;s++)shopButtons[s].addEventListener('click',function(){var item=this.getAttribute('data-item')||'merch item';window.location.href='mailto:officialjaceben@gmail.com?subject=JaceBen%20Merch%20Enquiry%20-%20'+encodeURIComponent(item)+'&body=Hi%20JaceBen%20team,%0A%0AI%27d%20like%20to%20enquire%20about%20the%20'+encodeURIComponent(item)+'%20merch%20item.'});
  });
})();