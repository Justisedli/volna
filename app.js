const trips=[{name:'Morava v lehkosti',place:'JIŽNÍ MORAVA · ČESKO',date:'21.–23. května 2027',length:'Víkend · 3 dny',type:'cz',sport:'SILNICE & JÓGA',image:'photo-1504279577054-acfeccf8fc52',alt:'Zelené vinice v kopcovité krajině',desc:'Mezi vinicemi, s větrem ve vlasech. Pomalá rána a večery u společného stolu.',program:['Pátek: příjezd, jemné protažení a seznamovací večeře.','Sobota: ranní jóga, společná silniční vyjížďka a večer s lokálním jídlem.','Neděle: pilates, snídaně a krátká rozlučková vyjížďka.']},{name:'Toskánsko všemi smysly',place:'TOSKÁNSKO · ITÁLIE',date:'12.–18. června 2027',length:'Týden · 7 dní',type:'abroad',sport:'GRAVEL & PILATES',image:'photo-1464822759023-fed622ff2c3b',alt:'Horská krajina zalitá sluncem',desc:'Cesty za obzor, italská lehkost a čas ochutnávat. Na kole i mimo něj.',program:['První den: příjezd, společná večeře a představení programu.','Během týdne: gravelové vyjížďky střídají jóga, pilates a volné odpoledne.','Součástí konceptu je společné vaření, sdílení a prostor pro vlastní odpočinek.']},{name:'Šumava po svém',place:'ŠUMAVA · ČESKO',date:'10.–12. září 2027',length:'Víkend · 3 dny',type:'cz',sport:'GRAVEL & JÓGA',image:'photo-1448375240586-882707db888b',alt:'Lesní cesta mezi vysokými stromy',desc:'Lesní ticho, svěží vzduch a štěrkové cesty. Vypni hlavu, zapni všechny smysly.',program:['Pátek: příjezd a zklidnění s večerní jógou.','Sobota: gravelová vyjížďka lesní krajinou, piknik a prostor pro seberozvoj.','Neděle: lehké pilates, společná snídaně a návrat domů.']}];
// Podporuje celé URL obrázků i původní identifikátory Unsplash.
const img = (id, w = 900) => {
  if (id.startsWith('https://') || id.startsWith('http://')) {
    return id;
  }
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
};
const cards=document.querySelector('#cards');
function render(filter='all'){cards.innerHTML=trips.map((t,i)=>t.type===filter||filter==='all'?`<article class="card"><div class="cover"><img loading="lazy" src="${img(t.image)}" alt="${t.alt}"><span class="tag">${t.sport}</span></div><div class="card-meta">${t.place}</div><h3>${t.name}</h3><p>${t.desc}</p><div class="card-bottom"><span>${t.date}<br>${t.length}</span><button class="text-button" data-trip="${i}">Prozkoumat pobyt ↗</button></div></article>`:'').join('')};render();
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)}));
cards.addEventListener('click',e=>{const b=e.target.closest('[data-trip]');if(!b)return;const t=trips[Number(b.dataset.trip)];document.querySelector('#detail-content').innerHTML=`<p class="eyebrow">${t.place}</p><h2>${t.name}</h2><p class="detail-tag">${t.date} · ${t.length}</p><p>${t.desc}</p><h3>Jak může pobyt vypadat</h3><ul>${t.program.map(x=>`<li>${x}</li>`).join('')}</ul><p><strong>Ukázkový termín, rezervace nejsou otevřené.</strong> Cena, ubytování, délky tras, náročnost a kompletní podmínky budou doplněny při vypsání pobytu. Fotografie jsou ilustrační.</p><button class="button" id="ask-trip">Připravit dotaz ↗</button>`;document.querySelector('#detail').showModal();document.querySelector('#ask-trip').onclick=()=>{document.querySelector('#detail').close();document.querySelector('[name=trip]').value=t.name;document.querySelector('#contact-dialog').showModal()}});
const photos=[{id:'photo-1472396961693-142e6e269027',alt:'Setkání s přírodou na cestách'},{id:'photo-1512621776951-a57141f2eefd',alt:'Barevné čerstvé jídlo na společném stole'},{id:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3HSW-7aLKv6FsbojOoqQo4Qg7zxkKgOd8u__EIIDww&s=10',alt:'Cyklistická vyjížďka v přírodě'}];document.querySelector('#gallery-grid').innerHTML=photos.map((p,i)=>`<button data-photo="${i}" aria-label="Zvětšit: ${p.alt}"><img loading="lazy" src="${img(p.id)}" alt="${p.alt}"></button>`).join('');document.querySelector('#gallery-grid').onclick=e=>{const b=e.target.closest('[data-photo]');if(!b)return;const p=photos[+b.dataset.photo],d=document.querySelector('#lightbox');d.querySelector('img').src=img(p.id,1600);d.querySelector('img').alt=p.alt;d.querySelector('p').textContent=p.alt+' · ilustrační fotografie';d.showModal()};
document.querySelectorAll('dialog').forEach(d=>{d.querySelector('.close').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}})});
document.querySelector('#contact-open').onclick=()=>document.querySelector('#contact-dialog').showModal();document.querySelector('#contact-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);document.querySelector('#draft').textContent=`Text si můžeš označit a zkopírovat. Zatím nebyl odeslán.\n\nDobrý den, jmenuji se ${f.get('name')}.\nZajímá mě: ${f.get('trip')}.\n\n${f.get('message')}`};
const menu=document.querySelector('.menu');menu.onclick=()=>{const open=document.querySelector('nav').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Zavřít menu':'Otevřít menu')};document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>{document.querySelector('nav').classList.remove('open');menu.setAttribute('aria-expanded','false')});
// FLOW členství – předplatné a jeho výhody
(() => {
  if (document.querySelector('#clenstvi')) return;

  const benefits = [
    {
      title: 'Středy s jógou',
      text: 'Každou středu živá online lekce jógy a přístup ke knihovně záznamů. Zacvič si s námi naživo, nebo kdykoliv podle svého času.'
    },
    {
      title: 'Věrnostní program',
      text: 'Automatická sleva 5 % na pobyty, která se podle počtu absolvovaných pobytů postupně zvyšuje až na 12 %.'
    },
    {
      title: 'Přednostní rezervace',
      text: 'Přístup k novým pobytům o 7 dní dříve než ostatní zákaznice. Vyber si svůj termín mezi prvními.'
    },
    {
      title: 'FLOW komunita',
      text: 'Uzavřená skupina pro členky, kde můžeš sdílet zkušenosti, seznamovat se, domlouvat společné cestování a zapojovat se do různých výzev.'
    },
    {
      title: 'Mystery Retreat',
      text: 'Jednou ročně speciální pobyt pouze pro předplatitelky, jehož destinace je překvapením. Předem znáš termín, cenu a náročnost. Místo a část programu se dozvíš až před odjezdem. Pobyt se hradí samostatně.'
    }
  ];

  const section = document.createElement('section');
  section.id = 'clenstvi';
  section.className = 'wrap flow-membership';
  section.setAttribute('aria-labelledby', 'flow-title');

  section.innerHTML = `
    <div class="section-top">
      <div>
        <p class="eyebrow">TVŮJ FLOW I MEZI POBYTY</p>
        <h2 id="flow-title">
          Chvíle pro sebe.<br>
          <em>Každý měsíc.</em>
        </h2>
      </div>
      <p class="flow-price">
        <strong>299 Kč</strong> / měsíc<br>
        <span>FLOW členství</span>
      </p>
    </div>

    <p class="flow-intro">
      Pobytem to nekončí. Dopřej si pravidelný pohyb,
      propojení s ostatními a něco, na co se můžeš těšit.
      S předplatným FLOW zůstáváme v kontaktu po celý rok.
    </p>

    <div class="flow-benefits">
      ${benefits.map((benefit, index) => `
        <article class="flow-benefit">
          <span class="eyebrow">0${index + 1}</span>
          <h3>${benefit.title}</h3>
          <p>${benefit.text}</p>
        </article>
      `).join('')}
    </div>

    <p class="flow-note">
      Členství připravujeme. Podmínky předplatného a úrovně
      věrnostního programu zveřejníme před spuštěním.
    </p>
  `;

  const stays = document.querySelector('#pobyty');

  if (stays) {
    stays.after(section);
  } else {
    document.querySelector('main')?.append(section);
  }

  const style = document.createElement('style');
  style.textContent = `
    .flow-membership {
      padding-top: 72px;
      padding-bottom: 72px;
      scroll-margin-top: 100px;
    }

    .flow-membership .flow-price {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .flow-price strong {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 500;
    }

    .flow-price span {
      font-size: 0.95rem;
    }

    .flow-intro {
      max-width: 720px;
      margin-bottom: 32px;
      line-height: 1.8;
    }

    .flow-benefits {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }

    .flow-benefit {
      padding: clamp(20px, 3vw, 36px);
      border: 1px solid #d7d8ce;
      border-radius: 16px;
      background: #f5f4ed;
      color: #303c31;
    }

    .flow-benefit h3 {
      margin: 12px 0;
      font-size: 1.5rem;
    }

    .flow-benefit p {
      margin-bottom: 0;
      line-height: 1.75;
    }

    .flow-benefit:last-child {
      grid-column: 1 / -1;
    }

    .flow-note {
      margin-top: 24px;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      .flow-benefits {
        grid-template-columns: 1fr;
      }

      .flow-membership .section-top {
        display: block;
      }
    }
  `;

  document.head.append(style);

  // Odkaz na členství v hlavní navigaci
  const nav = document.querySelector('header nav');

  if (nav && !nav.querySelector('a[href="#clenstvi"]')) {
    const link = document.createElement('a');
    link.href = '#clenstvi';
    link.textContent = 'FLOW členství';

    link.addEventListener('click', () => {
      nav.classList.remove('open');
      const menuButton = document.querySelector('.menu');
      menuButton?.setAttribute('aria-expanded', 'false');
      menuButton?.setAttribute('aria-label', 'Otevřít menu');
    });

    const galleryLink = nav.querySelector('a[href="#galerie"]');
    nav.insertBefore(link, galleryLink);
  }
})();
