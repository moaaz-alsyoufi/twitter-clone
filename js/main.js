const leftSidebar = document.querySelector(".tc-left-sidebar")
const rightSidebar = document.querySelector(".tc-right-sidebar")
const header = document.querySelector(".tc-content__main-header__main")
const content = document.querySelector(".tc-content__inner")
let leftSidebarX = leftSidebar.offsetLeft
let rightSidebarLeft = rightSidebar.offsetLeft
let leftSidebarWidth = leftSidebar.clientWidth
let rightSidebarWidth = rightSidebar.clientWidth

content.addEventListener('wheel', (e) => {
  console.log(content.clientTop);
})


header.style.left = leftSidebarX + leftSidebarWidth
header.style.right = window.innerWidth - rightSidebarLeft

window.addEventListener('resize', () => {
  leftSidebarX = leftSidebar.offsetLeft
  leftSidebarWidth = leftSidebar.clientWidth
  rightSidebarLeft = rightSidebar.offsetLeft
  rightSidebarWidth = rightSidebar.clientWidth

  header.style.left = leftSidebarX + leftSidebarWidth
  header.style.right = window.innerWidth - rightSidebarLeft
})