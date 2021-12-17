const first = document.querySelector('.itm1');
const second = document.querySelector('.itm2');
const third = document.querySelector('.itm3');
const onelist = document.querySelector('.list1');
const twolist = document.querySelector('.list2');
const threelist = document.querySelector('.list3');
const mbfirst = document.querySelector('.mitm1');
const mbsecond = document.querySelector('.mitm2');
const mbthird = document.querySelector('.mitm3');

first.addEventListener('click', () => first.classList.toggle('dactive'));
first.addEventListener('click', () => second.classList.remove('dactive'));
first.addEventListener('click', () => third.classList.remove('dactive'));
first.addEventListener('click', () => onelist.classList.toggle('active'));
first.addEventListener('click', () => twolist.classList.remove('active'));
first.addEventListener('click', () => threelist.classList.remove('active'));

second.addEventListener('click', () => second.classList.toggle('dactive'));
second.addEventListener('click', () => first.classList.remove('dactive'));
second.addEventListener('click', () => third.classList.remove('dactive'));
second.addEventListener('click', () => twolist.classList.toggle('active'));
second.addEventListener('click', () => onelist.classList.remove('active'));
second.addEventListener('click', () => threelist.classList.remove('active'));

third.addEventListener('click', () => third.classList.toggle('dactive'));
third.addEventListener('click', () => second.classList.remove('dactive'));
third.addEventListener('click', () => first.classList.remove('dactive'));
third.addEventListener('click', () => threelist.classList.toggle('active'));
third.addEventListener('click', () => onelist.classList.remove('active'));
third.addEventListener('click', () => twolist.classList.remove('active'));


//
mbfirst.addEventListener('click', () => onelist.classList.toggle('active-list'));
mbfirst.addEventListener('click', () => twolist.classList.remove('active-list'));
mbfirst.addEventListener('click', () => threelist.classList.remove('active-list'));
mbfirst.addEventListener('click', () => mbthird.classList.toggle('mactive'));
mbfirst.addEventListener('click', () => mbsecond.classList.toggle('mactive'));
//
mbsecond.addEventListener('click', () => twolist.classList.toggle('active-list'));
mbsecond.addEventListener('click', () => onelist.classList.remove('active-list'));
mbsecond.addEventListener('click', () => threelist.classList.remove('active-list'));
mbsecond.addEventListener('click', () => mbfirst.classList.toggle('mactive'));
mbsecond.addEventListener('click', () => mbthird.classList.toggle('mactive'));
//
mbthird.addEventListener('click', () => threelist.classList.toggle('active-list'));
mbthird.addEventListener('click', () => onelist.classList.remove('active-list'));
mbthird.addEventListener('click', () => twolist.classList.remove('active-list'));
mbthird.addEventListener('click', () => mbfirst.classList.toggle('mactive'));
mbthird.addEventListener('click', () => mbsecond.classList.toggle('mactive'));


const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const link1 = document.querySelector('.item1');
const link2 = document.querySelector('.item2');
const link3 = document.querySelector('.item3');
const link4 = document.querySelector('.item4');
const link5 = document.querySelector('.item5');
link1.addEventListener('click', () => burger.classList.toggle('active'));
link1.addEventListener('click', () => nav.classList.toggle('active'));
link1.addEventListener('click', () => black.classList.toggle('active'));
link1.addEventListener('click', () => white.classList.toggle('active'));

link2.addEventListener('click', () => burger.classList.toggle('active'));
link2.addEventListener('click', () => nav.classList.toggle('active'));
link2.addEventListener('click', () => black.classList.toggle('active'));
link2.addEventListener('click', () => white.classList.toggle('active'));

link3.addEventListener('click', () => burger.classList.toggle('active'));
link3.addEventListener('click', () => nav.classList.toggle('active'));
link3.addEventListener('click', () => black.classList.toggle('active'));
link3.addEventListener('click', () => white.classList.toggle('active'));

link4.addEventListener('click', () => burger.classList.toggle('active'));
link4.addEventListener('click', () => nav.classList.toggle('active'));
link4.addEventListener('click', () => black.classList.toggle('active'));
link4.addEventListener('click', () => white.classList.toggle('active'));

link5.addEventListener('click', () => burger.classList.toggle('active'));
link5.addEventListener('click', () => nav.classList.toggle('active'));
link5.addEventListener('click', () => black.classList.toggle('active'));
link5.addEventListener('click', () => white.classList.toggle('active'));


const med = document.querySelector('.med');
const health = document.querySelector('.sport');
const sportList = document.querySelector('.sport-list');
const medList = document.querySelector('.med-list');

health.addEventListener('click', () => sportList.classList.toggle('sport-active'));
med.addEventListener('click', () => medList.classList.toggle('med-active'));