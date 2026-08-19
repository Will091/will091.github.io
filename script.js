document.addEventListener('DOMContentLoaded',function(){
  var perf=document.createElement('link');perf.rel='stylesheet';perf.href='performance.css';document.head.appendChild(perf);
  var revealItems=document.querySelectorAll('.reveal');
  for(var i=0;i<revealItems.length;i++) revealItems[i].classList.add('show');
  var menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',function(){var open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});var links=nav.querySelectorAll('a');for(var n=0;n<links.length;n++)links[n].addEventListener('click',function(){nav.classList.remove('open')})}
  var shopButtons=document.querySelectorAll('.shop-btn');
  for(var s=0;s<shopButtons.length;s++)shopButtons[s].addEventListener('click',function(){var item=this.getAttribute('data-item')||'merch item';window.location.href='mailto:officialjaceben@gmail.com?subject=JaceBen%20Merch%20Enquiry%20-%20'+encodeURIComponent(item)+'&body=Hi%20JaceBen%20team,%0A%0AI%27d%20like%20to%20enquire%20about%20the%20'+encodeURIComponent(item)+'%20merch%20item.'});
});