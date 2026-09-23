const steps=[
['Repérer le moteur','Observer les quatre faces avant de commencer.',['step_01_0.jpg','step_01_1.jpg'],'Repérer le cheminement des faisceaux et des durites.'],
['Déposer la boîte à air','Déclipser puis retirer la boîte à air.',['step_02_0.jpg','step_02_1.jpg'],'Ne pas forcer sur les clips en plastique.'],
['Débrancher le faisceau supérieur','Déverrouiller les connecteurs visibles.',['step_03_0.jpg','step_03_1.jpg'],'Appuyer sur les languettes. Ne jamais tirer sur les fils.'],
['Déposer le boîtier papillon','Retirer les vis puis sortir le boîtier papillon.',['step_04_0.jpg','step_04_1.jpg','step_04_2.jpg'],'Replacer les vis sur la pièce après la dépose.'],
['Déposer le collecteur admission','Débrancher les capteurs puis retirer le collecteur.',['step_05_0.jpg','step_05_1.jpg','step_05_2.jpg','step_05_3.jpg'],"Protéger immédiatement les conduits d'admission."],
['Débrancher la sonde lambda','Libérer la fixation puis séparer le connecteur.',['step_06_0.jpg','step_06_1.jpg','step_06_2.jpg','step_06_3.jpg'],'Déverrouiller le connecteur avant de tirer.'],
['Déposer la patte de levage avant','Retirer la patte fixée côté échappement.',['step_07_0.jpg','step_07_1.jpg','step_07_2.jpg'],'Remettre les vis dans leurs taraudages.'],
['Déposer écran thermique',"Retirer les vis puis dégager l'écran.",['step_08_0.jpg','step_08_1.jpg'],'Attention aux bords coupants.'],
['Déposer le collecteur échappement','Desserrer les écrous puis sortir le collecteur.',['step_09_0.jpg','step_09_1.jpg','step_09_2.jpg','step_09_3.jpg'],'Desserrer progressivement. Ranger les écrous.'],
['Déposer le répartiteur air','Retirer le répartiteur fixé sur le côté du moteur.',['step_10_0.jpg','step_10_1.jpg','step_10_2.jpg'],'Replacer les écrous sur les goujons.'],
['Libérer le faisceau moteur','Débrancher les capteurs et retirer les attaches.',['step_11_0.jpg','step_11_1.jpg','step_11_2.jpg','step_11_3.jpg'],'Photographier chaque passage avant de dégager le faisceau.'],
['Déposer les bobines',"Retirer les bobines d'allumage.",['step_12_0.jpg'],'Identifier leur position pour le remontage.'],
['Déposer la rampe injecteurs','Retirer les vis, les agrafes puis la rampe avec les injecteurs.',['step_13_0.jpg','step_13_1.jpg','step_13_2.jpg','step_13_3.jpg'],'Ne pas abîmer les joints des injecteurs.'],
['Déposer la patte de levage arrière','Retirer la seconde patte de levage.',['step_14_0.jpg','step_14_1.jpg','step_14_2.jpg'],'Replacer les vis après la dépose.'],
['Déposer la courroie accessoires','Détendre le galet puis retirer la courroie.',['step_15_0.jpg'],'Repérer le sens de montage si la courroie est réutilisée.'],
['Déposer la poulie de vilebrequin','Bloquer correctement puis retirer la vis et la poulie.',['step_16_0.jpg','step_16_1.jpg','step_16_2.jpg'],'Utiliser la méthode de blocage prévue par le constructeur.'],
['Déposer les carters de distribution','Retirer les carters inférieur puis supérieur.',['step_17_0.jpg','step_17_1.jpg','step_17_2.jpg','step_17_3.jpg'],'Classer les vis par carter.'],
['Déposer la distribution','Desserrer le galet tendeur puis retirer la courroie.',['step_18_0.jpg','step_18_1.jpg','step_18_2.jpg'],'Avant remontage, effectuer le calage avec la documentation constructeur.'],
['Déposer la pompe de direction assistée','Retirer le petit support puis la pompe.',['step_19_0.jpg','step_19_1.jpg','step_19_2.jpg'],'Ne pas suspendre une pompe par ses conduites.'],
['Déposer le compresseur de climatisation','Retirer les fixations du compresseur.',['step_20_0.jpg'],'Circuit chargé : ne pas ouvrir les canalisations.'],
['Déposer le support accessoires','Retirer toutes les vis puis dégager le support.',['step_21_0.jpg','step_21_1.jpg','step_21_2.jpg','step_21_3.jpg'],'Comparer la longueur des vis avant rangement.'],
['Déposer le boîtier eau','Retirer les vis puis séparer le boîtier de la culasse.',['step_22_0.jpg','step_22_1.jpg','step_22_2.jpg','step_22_3.jpg'],"Prévoir l'écoulement du liquide et protéger les ouvertures."],
['Déposer le reniflard','Retirer le reniflard et ranger ses vis.',['step_23_0.jpg','step_23_1.jpg','step_23_2.jpg','step_23_3.jpg'],'Ne pas perdre les joints ni les entretoises.'],
['Déposer le couvre culasse','Desserrer les vis puis soulever le couvre culasse.',['step_24_0.jpg','step_24_1.jpg'],'Décoller sans faire levier sur le plan de joint.'],
['Déposer les arbres à cames','Desserrer les paliers progressivement puis sortir les arbres.',['step_25_0.jpg','step_25_1.jpg'],"Conserver l'ordre et le sens des paliers."],
['Déposer les linguets','Retirer puis classer les seize linguets.',['step_26_0.jpg','step_26_1.jpg','step_26_2.jpg'],"Chaque linguet doit retrouver sa position d'origine."],
['Déposer la pipe admission','Retirer les fixations puis dégager la pièce.',['step_27_0.jpg','step_27_1.jpg','step_27_2.jpg','step_27_3.jpg'],'Replacer les vis autour de la pièce pour les identifier.'],
['Déposer le tuyau eau','Retirer les fixations puis extraire le tuyau.',['step_28_0.jpg','step_28_1.jpg','step_28_2.jpg'],"Contrôler le joint et l'état du tube."],
['Déposer la culasse',"Desserrer les vis dans l'ordre inverse du serrage puis lever la culasse.",['step_29_0.jpg'],'Culasse lourde : travailler à deux. Protéger le plan de joint.']
];

const stepsRoot=document.querySelector('#steps');
const nav=document.querySelector('#navList');
const pad=n=>String(n).padStart(2,'0');
steps.forEach((step,index)=>{
  const n=index+1;
  const article=document.createElement('article');
  article.className='step';article.id=`step-${n}`;article.dataset.step=n;
  const photos=step[2].map((src,j)=>`<button class="photo-button" data-src="assets/${src}?v=20260923-photos2" data-caption="Étape ${pad(n)} · Photo ${j+1}"><img src="assets/${src}?v=20260923-photos2" alt="${step[0]} · vue ${j+1}" loading="lazy"><span>Photo ${j+1}</span></button>`).join('');
  article.innerHTML=`<div class="step-head"><span class="step-number">${pad(n)}</span><h2>${step[0]}</h2><p class="action">${step[1]}</p></div><div class="photos ${step[2].length===1?'one':''}">${photos}</div><p class="warning"><strong>Vigilance</strong>${step[3]}</p>`;
  stepsRoot.append(article);
  nav.insertAdjacentHTML('beforeend',`<a href="#step-${n}" data-step="${n}"><b>${pad(n)}</b><span>${step[0]}</span></a>`);
});

const links=[...nav.querySelectorAll('a')],progressText=document.querySelector('#progressText'),progressBar=document.querySelector('#progressBar');
const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;const n=Number(visible.target.dataset.step);links.forEach(a=>a.classList.toggle('active',Number(a.dataset.step)===n));progressText.textContent=`${n} / ${steps.length}`;progressBar.style.width=`${n/steps.length*100}%`;},{rootMargin:'-30% 0px -55%',threshold:[0,.2,.6]});
document.querySelectorAll('.step').forEach(el=>observer.observe(el));

const menu=document.querySelector('#menuButton'),sidebar=document.querySelector('#stepNav');
menu.addEventListener('click',()=>{const open=sidebar.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.addEventListener('click',()=>{sidebar.classList.remove('open');menu.setAttribute('aria-expanded','false')});

const box=document.querySelector('#lightbox'),boxImg=document.querySelector('#lightboxImage'),boxCaption=document.querySelector('#lightboxCaption');
document.addEventListener('click',e=>{const button=e.target.closest('.photo-button');if(!button)return;boxImg.src=button.dataset.src;boxImg.alt=button.querySelector('img').alt;boxCaption.textContent=button.dataset.caption;box.showModal();});
document.querySelector('#closeLightbox').addEventListener('click',()=>box.close());
box.addEventListener('click',e=>{if(e.target===box)box.close()});
