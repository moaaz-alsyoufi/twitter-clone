
const leftSidebar = document.querySelector(".tc-left-sidebar")
const rightSidebar = document.querySelector(".tc-right-sidebar")
const header = document.querySelector(".tc-content__main-header__main")
let leftSidebarX = leftSidebar.offsetLeft
let rightSidebarLeft = rightSidebar.offsetLeft
let leftSidebarWidth = leftSidebar.clientWidth
let rightSidebarWidth = rightSidebar.clientWidth


header.style.left = leftSidebarX + leftSidebarWidth
header.style.right = window.innerWidth - rightSidebarLeft

window.addEventListener('resize', () => {
  leftSidebarX = leftSidebar.offsetLeft
  leftSidebarWidth = leftSidebar.clientWidth
  rightSidebarLeft = rightSidebar.offsetLeft
  rightSidebarWidth = rightSidebar.clientWidth

  console.log(rightSidebar.offsetLeft);

  header.style.left = leftSidebarX + leftSidebarWidth
  header.style.right = window.innerWidth - rightSidebarLeft
})