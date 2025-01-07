////////////////////////////////////////////////
// 変数                                       //
//                                            //
////////////////////////////////////////////////
let $worksPhotoImg = 0;

////////////////////////////////////////////////
// Handler                                    //
//                                            //
////////////////////////////////////////////////
// =============================================
// Main
// =============================================
(() => {
  Init();
  AddWorksPhotoImgEvent();
})();

// =============================================
//
// =============================================
function Init()
{
  $worksPhotoImg = document.getElementsByClassName("works-contents-article-photo-img");
}

// =============================================
//
// =============================================
function AddWorksPhotoImgEvent()
{
  let count = $worksPhotoImg.length;

  for(let i = 0 ; i < count ; i++){
    $worksPhotoImg[i].addEventListener('mouseenter', WorksPhotoImgMouseEnterEvent);
    $worksPhotoImg[i].addEventListener('mouseover', WorksPhotoImgMouseOverEvent);
    $worksPhotoImg[i].addEventListener('mouseout', WorksPhotoImgMouseOutEvent);
    $worksPhotoImg[i].addEventListener('mouseleave', WorksPhotoImgMouseLeaveEvent);
    $worksPhotoImg[i].addEventListener('transitionend', WorksPhotoImgTransitionEndEvent);
  }
}

// =============================================
// WorksPhotoImg MouseEnter Event
// =============================================
function WorksPhotoImgMouseEnterEvent(e)
{
  let target = e.currentTarget;
}

// =============================================
// WorksPhotoImg MouseOver Event
// =============================================
function WorksPhotoImgMouseOverEvent(e)
{
  let target = e.currentTarget;

  target.style.transform = "scale(1.2, 1.2)";
  target.style.transition = "1s ease";
}

// =============================================
// WorksPhotoImg MouseOut Event
// =============================================
function WorksPhotoImgMouseOutEvent(e)
{
  let target = e.currentTarget;
}

// =============================================
// WorksPhotoImg MouseLeave Event
// =============================================
function WorksPhotoImgMouseLeaveEvent(e)
{
  let target = e.currentTarget;

  target.style.transform = "scale(1.0, 1.0)";
}

// =============================================
// WorksPhotoImg TransitionEnd Event
// =============================================
function WorksPhotoImgTransitionEndEvent(e)
{
  let target = e.currentTarget;

  target.style.transition = "none";
}
