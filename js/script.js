window.addEventListener("load", () =>{
 document.querySelector(".loading").style.display="none";
})

const barger = document.getElementById('btn-barger')
const mobileList = document.querySelector('#header-mobile-list')
const mobileListBack = document.querySelector('#ML-back')

function FmobileListBack() {
  mobileList.style.right = '-100%'
  mobileList.style.top = '-100vh'
}
mobileListBack.addEventListener('click', FmobileListBack)
function Fbarger() {
  mobileList.style.right = '0'
  mobileList.style.top = '0'
}
barger.addEventListener('click', Fbarger)

const menubottom = document.querySelector('#header-bootom')
function myscroll() {
  if (window.document.documentElement.scrollTop > 100) {
    menubottom.style.bottom = '0'
    document.querySelector('.ML-log').classList.add('activeF')
    document.querySelector('.ML-log').classList.remove('none')
    document.getElementById('HB-list-search').classList.add('none')
  } else if (window.document.documentElement.scrollTop > 0) {
    LBB.style.display = 'none'
    menubottom.style.bottom = '-100%'
  }
}
window.addEventListener('scroll', myscroll)

// پایان اسکرول
const btnBargerBottom = document.getElementById('btn-barger-bottom')
const LBB = document.querySelector('.list-botton-back')
const HBListBtnSearch = document.getElementById('HB-list-btn-search')
const HBListSearch = document.getElementById('HB-list-search')
function myh() {
  mobileList.style.right = '-100%'
  mobileList.style.top = '-100vh'
}
LBB.addEventListener('click', myh)
function FbargerBottom() {
  document.querySelector('.ML-log').classList.remove('activeF')
  document.querySelector('.ML-log').classList.add('none')
  LBB.style.display = 'flex'
  mobileList.style.right = '0'
  mobileList.style.top = '0'
}
btnBargerBottom.addEventListener('click', FbargerBottom)

HBListBtnSearch.addEventListener('click', function () {
  if (HBListSearch.className == 'HB-list-search none') {
    HBListSearch.classList.remove('none')
  } else {
    HBListSearch.classList.add('none')
  }
})

const HBscrollTop = document.getElementById('HB-scrollTop')

HBscrollTop.addEventListener('click', (e) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// پایان لیست پاین

const MlistKDdrop = document.getElementById('M-list-KD-drop')
const MlistKDdropdone = document.querySelector('#M-list-KD-dropdone')

function MlistKDdropfun() {
  if (MlistKDdropdone.className === 'M-list-dropdone none') {
    MlistKDdrop.classList.add('Irotate')
    MlistKDdropdone.classList.remove('none')
    MlistKDdropdone.classList.add('activeB')
  } else if (MlistKDdropdone.className === 'M-list-dropdone activeB') {
    MlistKDdrop.classList.remove('Irotate')
    MlistKDdropdone.classList.remove('activeB')
    MlistKDdropdone.classList.add('none')
  }
}
MlistKDdrop.addEventListener('click', MlistKDdropfun)
// end KD

const MlistKHAdropconst = document.getElementById('M-list-KHA-drop')
const MlistKHAdropdone = document.querySelector('#M-list-KHA-dropdone')

function MlistKHAdropconstfun() {
  if (MlistKHAdropdone.className === 'M-list-dropdone none') {
    MlistKHAdropconst.classList.add('Irotate')
    MlistKHAdropdone.classList.remove('none')
    MlistKHAdropdone.classList.add('activeB')
  } else if (MlistKHAdropdone.className === 'M-list-dropdone activeB') {
    MlistKHAdropconst.classList.remove('Irotate')
    MlistKHAdropdone.classList.remove('activeB')
    MlistKHAdropdone.classList.add('none')
  }
}
MlistKHAdropconst.addEventListener('click', MlistKHAdropconstfun)

// end KHA

const MlistKSMdrop = document.getElementById('M-list-KSM-drop')
const MlistKSMdropdone = document.querySelector('#M-list-KSM-dropdone')

function MlistKSMdropfun() {
  if (MlistKSMdropdone.className === 'M-list-dropdone none') {
    MlistKSMdrop.classList.add('Irotate')
    MlistKSMdropdone.classList.remove('none')
    MlistKSMdropdone.classList.add('activeB')
  } else if (MlistKSMdropdone.className === 'M-list-dropdone activeB') {
    MlistKSMdrop.classList.remove('Irotate')
    MlistKSMdropdone.classList.remove('activeB')
    MlistKSMdropdone.classList.add('none')
  }
}
MlistKSMdrop.addEventListener('click', MlistKSMdropfun)

// end KSM

const MlistZSdropd = document.getElementById('M-list-ZS-dropd')
const MlistZSdropdone = document.querySelector('#M-list-ZS-dropdone')

function MlistZSdropdfun() {
  if (MlistZSdropdone.className === 'M-list-dropdone none') {
    MlistZSdropd.classList.add('Irotate')
    MlistZSdropdone.classList.remove('none')
    MlistZSdropdone.classList.add('activeB')
  } else if (MlistZSdropdone.className === 'M-list-dropdone activeB') {
    MlistZSdropd.classList.remove('Irotate')
    MlistZSdropdone.classList.remove('activeB')
    MlistZSdropdone.classList.add('none')
  }
}
MlistZSdropd.addEventListener('click', MlistZSdropdfun)

// end Zs

const MlistVSdrop = document.getElementById('M-list-VS-drop')
const MlistVSdropdone = document.querySelector('#M-list-VS-dropdone')

function MlistVSdropfun() {
  if (MlistVSdropdone.className === 'M-list-dropdone none') {
    MlistVSdrop.classList.add('Irotate')
    MlistVSdropdone.classList.remove('none')
    MlistVSdropdone.classList.add('activeB')
  } else if (MlistVSdropdone.className === 'M-list-dropdone activeB') {
    MlistVSdrop.classList.remove('Irotate')
    MlistVSdropdone.classList.remove('activeB')
    MlistVSdropdone.classList.add('none')
  }
}
MlistVSdrop.addEventListener('click', MlistVSdropfun)

//  end Vs

const MlistTPdrop = document.getElementById('M-list-TP-drop')
const MlistTPdropdone = document.querySelector('#M-list-TP-dropdone')

function MlistTPdropfun() {
  if (MlistTPdropdone.className === 'M-list-dropdone none') {
    MlistTPdrop.classList.add('Irotate')
    MlistTPdropdone.classList.remove('none')
    MlistTPdropdone.classList.add('activeB')
  } else if (MlistTPdropdone.className === 'M-list-dropdone activeB') {
    MlistTPdrop.classList.remove('Irotate')
    MlistTPdropdone.classList.remove('activeB')
    MlistTPdropdone.classList.add('none')
  }
}
MlistTPdrop.addEventListener('click', MlistTPdropfun)

//      end mobil list

const menu = document.getElementById('menu')
const menuDropdownList = document.querySelector('.menu-dropdown')
const main = document.querySelector('#main')
menu.addEventListener('mouseover', function () {
  menuDropdownList.style.display = 'block'
  HSdropdownListImgOne.classList.add('activeF')
  main.classList.add('mainB')
})
menu.addEventListener('mouseout', function () {
  menuDropdownList.style.display = 'none'
  main.classList.remove('mainB')
})

const menuDropdownItemOne = document.getElementById('menu-dropdown-item-one')
const HSdropdownListImgOne = document.querySelector('#HS-dropdown-list-img-one')

menuDropdownItemOne.addEventListener('mouseover', function () {
  menuDropdownItemOne.classList.add('active-MD')
})
menuDropdownItemOne.addEventListener('mouseout', function () {
  menuDropdownItemOne.classList.remove('active-MD')
  HSdropdownListImgOne.classList.remove('activeF')
})

const menuDropdownItemTwo = document.getElementById('menu-dropdown-item-two')
const HSdropdownListImgTwo = document.querySelector('#HS-dropdown-list-img-two')

menuDropdownItemTwo.addEventListener('mouseover', function () {
  menuDropdownItemTwo.classList.add('active-MD')
  HSdropdownListImgTwo.classList.add('activeF')
})
menuDropdownItemTwo.addEventListener('mouseout', function () {
  menuDropdownItemTwo.classList.remove('active-MD')
  HSdropdownListImgTwo.classList.remove('activeF')
})

const menuDropdownItemThree = document.getElementById(
  'menu-dropdown-item-three',
)
const HSdropdownListImgThree = document.querySelector(
  '#HS-dropdown-list-img-three',
)

menuDropdownItemThree.addEventListener('mouseover', function () {
  menuDropdownItemThree.classList.add('active-MD')
  HSdropdownListImgThree.classList.add('activeF')
})
menuDropdownItemThree.addEventListener('mouseout', function () {
  menuDropdownItemThree.classList.remove('active-MD')
  HSdropdownListImgThree.classList.remove('activeF')
})

const menuDropdownItemFour = document.getElementById('menu-dropdown-item-four')
const HSdropdownListImgFour = document.querySelector(
  '#HS-dropdown-list-img-four',
)

menuDropdownItemFour.addEventListener('mouseover', function () {
  menuDropdownItemFour.classList.add('active-MD')
  HSdropdownListImgFour.classList.add('activeF')
})
menuDropdownItemFour.addEventListener('mouseout', function () {
  menuDropdownItemFour.classList.remove('active-MD')
  HSdropdownListImgFour.classList.remove('activeF')
})

const menuDropdownItemFive = document.getElementById('menu-dropdown-item-five')
const HSdropdownListImgFive = document.querySelector(
  '#HS-dropdown-list-img-five',
)

menuDropdownItemFive.addEventListener('mouseover', function () {
  menuDropdownItemFive.classList.add('active-MD')
  HSdropdownListImgFive.classList.add('activeF')
})
menuDropdownItemFive.addEventListener('mouseout', function () {
  menuDropdownItemFive.classList.remove('active-MD')
  HSdropdownListImgFive.classList.remove('activeF')
})
const menuDropdownItemSex = document.getElementById('menu-dropdown-item-sex')
const HSdropdownListImgSex = document.querySelector('#HS-dropdown-list-img-sex')

menuDropdownItemSex.addEventListener('mouseover', function () {
  menuDropdownItemSex.classList.add('active-MD')
  HSdropdownListImgSex.classList.add('activeF')
})
menuDropdownItemSex.addEventListener('mouseout', function () {
  menuDropdownItemSex.classList.remove('active-MD')
  HSdropdownListImgSex.classList.remove('activeF')
})
const menuDropdownItemSeven = document.getElementById(
  'menu-dropdown-item-seven',
)
const HSdropdownListImgSeven = document.querySelector(
  '#HS-dropdown-list-img-seven',
)

menuDropdownItemSeven.addEventListener('mouseover', function () {
  menuDropdownItemSeven.classList.add('active-MD')
  HSdropdownListImgSeven.classList.add('activeF')
})
menuDropdownItemSeven.addEventListener('mouseout', function () {
  menuDropdownItemSeven.classList.remove('active-MD')
  HSdropdownListImgSeven.classList.remove('activeF')
})
const menuDropdownItemEight = document.getElementById(
  'menu-dropdown-item-eight',
)
const HSdropdownListImgEight = document.querySelector(
  '#HS-dropdown-list-img-eight',
)

menuDropdownItemEight.addEventListener('mouseover', function () {
  menuDropdownItemEight.classList.add('active-MD')
  HSdropdownListImgEight.classList.add('activeF')
})
menuDropdownItemEight.addEventListener('mouseout', function () {
  menuDropdownItemEight.classList.remove('active-MD')
  HSdropdownListImgEight.classList.remove('activeF')
})

//                                            end header

const introItemone = document.getElementsByClassName('intro-item-1')
const btnRight = document.getElementById('btn-right')
const btnLeft = document.getElementById('btn-left')
var n = 0

function AllintroItemonenactive() {
  for (var i = 0; i < introItemone.length; i++) {
    introItemone[i].classList.remove('active-I-i')
  }
}

function functionbtnRight() {
  n++
  if (n > introItemone.length - 1) {
    n = 0
  }
  AllintroItemonenactive()
  introItemone[n].classList.add('active-I-i')
}

btnRight.addEventListener('click', functionbtnRight)
function functionbtnLeft() {
  n--
  if (n < 0) {
    n = introItemone.length - 1
  }
  AllintroItemonenactive()
  introItemone[n].classList.add('active-I-i')
}

btnLeft.addEventListener('click', functionbtnLeft)

function functionbtnTime() {
  n++
  if (n > introItemone.length - 1) {
    n = 0
  }
  AllintroItemonenactive()
  introItemone[n].classList.add('active-I-i')
}
setInterval(functionbtnTime, 4000)

//                   end intro

const swiperSliderContac = document.querySelector('#swiper-slider-contact')
const swiperFirstSliderBtnPrive = document.getElementById(
  'swiper-first-slider-btn-prive',
)
const swiperFirstSliderBtnNext = document.getElementById(
  'swiper-first-slider-btn-next',
)

const swiperSecandSliderContact = document.querySelector(
  '#swiper-secand-slider-contact',
)
const swiperSecandtSliderBtnPrive = document.getElementById(
  'swiper-secand-slider-btn-prive',
)
const swiperSecandSliderBtnNext = document.getElementById(
  'swiper-secand-slider-btn-next',
)

swiperFirstSliderBtnNext.addEventListener('click', function () {
  if (swiperSliderContac.className == 'swiper-first-slider-contact') {
    swiperSliderContac.classList.add('swiper-slider-contact-slide-one')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-one'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-one')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-two')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-two'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-two')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-three')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-three'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-three')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-four')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-four'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-four')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-five')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-five'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-five')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-sex')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-sex'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-sex')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-seven')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-seven'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-seven')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-eight')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-eight'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-eight')
  }
})
swiperFirstSliderBtnPrive.addEventListener('click', function () {
  if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-eight'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-eight')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-seven')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-seven'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-seven')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-sex')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-sex'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-sex')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-five')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-five'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-five')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-four')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-four'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-four')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-three')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-three'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-three')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-two')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-two'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-two')
    swiperSliderContac.classList.add('swiper-slider-contact-slide-one')
  } else if (
    swiperSliderContac.className ==
    'swiper-first-slider-contact swiper-slider-contact-slide-one'
  ) {
    swiperSliderContac.classList.remove('swiper-slider-contact-slide-one')
  }
})

swiperSecandSliderBtnNext.addEventListener('click', function () {
  if (swiperSecandSliderContact.className == 'swiper-secand-slider-contact') {
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-one')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-one'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-one',
    )
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-two')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-two'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-two',
    )
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-three')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-three'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-three',
    )
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-four')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-four'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-four',
    )
    // swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-five')
  }
  // else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-five'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-five')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-sex')
  // }else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-sex'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-sex')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-seven')
  // }else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-seven'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-seven')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-eight')
  // }else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-eight'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-eight')
  // }
})

swiperSecandtSliderBtnPrive.addEventListener('click', function () {
  // if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-eight'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-eight')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-seven')
  // }else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-seven'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-seven')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-sex')
  // }else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-sex'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-sex')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-five')
  // }else if(swiperSecandSliderContact.className =='swiper-secand-slider-contact swiper-slider-contact-slide-five'){
  //   swiperSecandSliderContact.classList.remove('swiper-slider-contact-slide-five')
  //   swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-four')
  // }
  if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-four'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-four',
    )
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-three')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-three'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-three',
    )
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-two')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-two'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-two',
    )
    swiperSecandSliderContact.classList.add('swiper-slider-contact-slide-one')
  } else if (
    swiperSecandSliderContact.className ==
    'swiper-secand-slider-contact swiper-slider-contact-slide-one'
  ) {
    swiperSecandSliderContact.classList.remove(
      'swiper-slider-contact-slide-one',
    )
  }
})

//                     end swiper
const OfferListsliderBtnLeft = document.getElementById(
  'Offer-list-slider-btn-left',
)
const OfferListsliderBtnRight = document.getElementById(
  'Offer-list-slider-btn-right',
)
const OfferListSliderImg = document.querySelectorAll('.Offer-list-slider-img')
const OfferListSliderContant = document.querySelector(
  '.Offer-list-slider-contant',
)
const OfferImg = document.querySelectorAll('.Offer-img')
const OfferListSliderImg45 = document.getElementById('Offer-list-slider-img-45')
const OfferSlideBars = document.querySelectorAll('.Offer-slide-bars')

var j = 0

function DontActiveBorderOffer() {
  for (var i = 0; i < OfferListSliderImg.length; i++) {
    OfferListSliderImg[i].classList.remove('active-border-Offer')
  }
}

function DontOfferImg() {
  for (var i = 0; i < OfferImg.length; i++) {
    OfferImg[i].classList.remove('activeF')
  }
}

function DontActiveOfferSlideBars() {
  for (var i = 0; i < OfferSlideBars.length; i++) {
    OfferSlideBars[i].classList.remove('Active-Offer-slide-bars')
  }
}

function OfferListSliderContantChangTransformR() {
  if (OfferListSliderContant.className == 'Offer-list-slider-contant') {
    OfferListSliderContant.classList.add('Offer-list-slider-contant-one')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-one'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-one')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-two')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-two'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-two')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-three')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-three'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-three')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-four')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-three'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-three')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-four')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-four'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-four')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-five')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-five'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-five')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-sex')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-sex'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-sex')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-seven')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-seven'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-seven')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-eight')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-eight'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-eight')
  }
}
function OfferListSliderContantChangTransformL() {
  if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-eight'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-eight')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-seven')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-seven'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-seven')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-sex')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-sex'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-sex')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-five')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-five'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-five')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-four')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-four'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-four')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-three')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-three'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-three')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-two')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-two'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-two')
    OfferListSliderContant.classList.add('Offer-list-slider-contant-one')
  } else if (
    OfferListSliderContant.className ==
    'Offer-list-slider-contant Offer-list-slider-contant-one'
  ) {
    OfferListSliderContant.classList.remove('Offer-list-slider-contant-one')
  }
}

OfferListsliderBtnRight.addEventListener('click', function () {
  j++
  if (j > OfferListSliderImg.length - 1) {
    j = 0
  }
  DontActiveBorderOffer()
  DontOfferImg()
  OfferListSliderContantChangTransformR()
  DontActiveOfferSlideBars()
  OfferListSliderImg[j].classList.add('active-border-Offer')
  OfferImg[j].classList.add('activeF')
  OfferSlideBars[j].classList.add('Active-Offer-slide-bars')
})
OfferListsliderBtnLeft.addEventListener('click', function () {
  j--
  if (j < 0) {
    j = slide.length - 1
  }
  DontActiveBorderOffer()
  DontOfferImg()
  OfferListSliderContantChangTransformL()
  DontActiveOfferSlideBars()
  OfferListSliderImg[j].classList.add('active-border-Offer')
  OfferImg[j].classList.add('activeF')
  OfferSlideBars[j].classList.add('Active-Offer-slide-bars')
})

setInterval(function () {
  j++
  if (j > OfferListSliderImg.length - 1) {
    j = 0
  }
  DontActiveBorderOffer()
  DontOfferImg()
  OfferListSliderContantChangTransformR()
  DontActiveOfferSlideBars()
  OfferListSliderImg[j].classList.add('active-border-Offer')
  OfferImg[j].classList.add('activeF')
  OfferSlideBars[j].classList.add('Active-Offer-slide-bars')
}, 3000)

const selectionTime = new Date('2022-10-24 13:20:59').getTime()
let D = document.getElementById('d')
let H = document.getElementById('h')
let M = document.getElementById('m')
let S = document.getElementById('s')
let x = setInterval(function () {
  let now = new Date().getTime()
  let end = selectionTime - now

  var Days = Math.floor(end / (1000 * 60 * 60 * 24))
  var Hours = Math.floor((end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var Minutes = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60))
  var Seconds = Math.floor((end % (1000 * 60)) / 1000)

  D.innerHTML = Days
  H.innerHTML = Hours
  M.innerHTML = Minutes
  S.innerHTML = Seconds

  if (end < 0) {
    clearInterval(x)
  }
}, 1000)

//               end swiper

const scrollTop = document.getElementById('scrollTop')

scrollTop.addEventListener('click', (e) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
