const shareBtn = document.querySelector(".profile-btn");
const shareBtnPath = document.querySelector(".btn__path");
const shareDialog = document.querySelector(".profile__share-dialog");

shareBtn.addEventListener("click", () => {
  if (!shareDialog.classList.contains("profile__share-dialog--active")) {
    shareBtn.classList.add("profile__share-btn--active");
    shareBtnPath.classList.add("btn__path--active");
  } else {
    shareBtn.classList.remove("profile__share-btn--active");
    shareBtnPath.classList.remove("btn__path--active");
  }
  shareDialog.classList.toggle("profile__share-dialog--active");
});