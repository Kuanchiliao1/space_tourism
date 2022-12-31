const tabList = document.querySelector('[role="tablist"]')
const tabs = document.querySelectorAll('[role="tab"]') // Need to select tabs
const articles = document.querySelectorAll('article')
const crewHeaders = document.querySelectorAll('main > h2')
const crewContents = document.querySelectorAll('main > p')
const images = document.querySelectorAll('.img--destination, .img--crew')

let tabFocus = 0;
tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener('click', changeTabPanel)
});

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;
  
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1)
    if (e.keyCode === keydownRight) {
      tabFocus++
    } else {
      tabFocus--
    }
    
    if (tabFocus < 0) {
      tabFocus = tabs.length - ((Math.abs(tabFocus) % tabs.length))
    } else {
      tabFocus = tabFocus % tabs.length
    };
  }

  tabs[tabFocus].setAttribute("tabindex", 0)
  tabs[tabFocus].focus()
}

function changeTabPanel(e) {
  const targetTab = e.target
  const targetIndex = [...tabs].indexOf(targetTab)
  const targetArticle = articles[targetIndex]
  const targetImage = images[targetIndex]
  const targetHeader = crewHeaders[targetIndex]
  const targetContent = crewContents[targetIndex]
  
  tabs.forEach((tab, index) => {
    tab.classList.remove("active")
    tab.ariaSelected = "false"
    tab.tabIndex = -1

    if (articles.length !== 0) {
      articles[index].hidden = true
    } else {
      crewHeaders[index].hidden = true
      crewContents[index].hidden = true
    }

    images[index].hidden = true
  })
  
  targetTab.classList.toggle("active")
  targetTab.ariaSelected = "true"
  targetTab.tabIndex = 0
  console.log(targetTab)

  if (articles.length !== 0) {
    targetArticle.hidden = false
  } else {
    targetHeader.hidden = false
    targetContent.hidden = false
  }
  targetImage.hidden = false
}


// Kevin's solution:
// function changeTabPanel(e) {
//   const targetTab = e.target;
//   const targetPanel = targetTab.getAttribute("aria-controls");
//   const targetImage = targetTab.getAttribute("data-image");
  
//   const tabContainer = targetTab.parentNode;
//   const mainContainer = tabContainer.parentNode;
  
//   tabContainer.querySelector('[aria-selected="true"]')
  
//   mainContainer
//       .querySelectorAll('[role="tabpanel"]')
//       .forEach((panel) => panel.setAttribute("hidden", true));
  
//   mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
  
//   mainContainer
//       .querySelectorAll('picture')
//       .forEach((picture) => picture.setAttribute("hidden", true));
      
//   mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');
  
//   // console.log(mainContainer);
// }