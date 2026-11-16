(()=>{'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('mobile-nav'),mega=document.querySelector('.mega');
function closeMenu(restore=false){if(!menu)return;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Öppna menyn');nav.hidden=true;document.body.classList.remove('menu-open');if(restore)menu.focus()}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Stäng menyn':'Öppna menyn');nav.hidden=!open;document.body.classList.toggle('menu-open',open);if(open)mega?.removeAttribute('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(menu?.getAttribute('aria-expanded')==='true')closeMenu(true);if(mega?.open){mega.open=false;mega.querySelector('summary').focus()}}if(e.key==='Tab'&&menu?.getAttribute('aria-expanded')==='true'){const f=[menu,...nav.querySelectorAll('a,summary')].filter(x=>x.getClientRects().length);const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
document.addEventListener('click',e=>{if(mega?.open&&!mega.contains(e.target))mega.open=false});
matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
})();
