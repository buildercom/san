// Анимация при скроле
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        // if (!animItem.classList.contains('class')){};
        animItem.classList.remove('active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(() => {
    animOnScroll();
  }, 300)
}
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function u(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())},!0),a(),e.addEventListener("focus",function(e){var n,o,u;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(u=n.tagName)&&d[o]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&s(e.target)},!0),e.addEventListener("blur",function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)});
//# sourceMappingURL=focus-visible.min.js.map

// Плавный переход к блокам
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    if (iconMenu.classList.contains('_active')){
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active')

    }
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })

  })
}
// прилипающее меню
function getBodyScrollTop() {
  var offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
  if (offset > 300) {
    document.querySelector('#header').className = "header";
  }
  if (offset > screen.height - 300) {
    document.querySelector('#header').className = "fixed";
  }
}
window.addEventListener("scroll", getBodyScrollTop);
// Табы

var $tabs = function (target) {
var
  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
  _eventTabsShow,
  _showTab = function (tabsLinkTarget) {
    var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.menu-btn--active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.menu-content--active');
    // если следующая вкладка равна активной, то завершаем работу
    if (tabsLinkTarget === tabsLinkActive) {
      return;
    }
    // удаляем классы у текущих активных элементов
    if (tabsLinkActive !== null) {
      tabsLinkActive.classList.remove('menu-btn--active');
    }
    if (tabsPaneShow !== null) {
      tabsPaneShow.classList.remove('menu-content--active');
    }
    // добавляем классы к элементам (в завимости от выбранной вкладки)
    tabsLinkTarget.classList.add('menu-btn--active');
    tabsPaneTarget.classList.add('menu-content--active');
    document.dispatchEvent(_eventTabsShow);
  },
  _switchTabTo = function (tabsLinkIndex) {
    var tabsLinks = _elemTabs.querySelectorAll('.menu-btn');
    if (tabsLinks.length > 0) {
      if (tabsLinkIndex > tabsLinks.length) {
        tabsLinkIndex = tabsLinks.length;
      } else if (tabsLinkIndex < 1) {
        tabsLinkIndex = 1;
      }
      _showTab(tabsLinks[tabsLinkIndex - 1]);
    }
  };

_eventTabsShow = new CustomEvent('menu-content', { detail: _elemTabs });

_elemTabs.addEventListener('click', function (e) {
  var tabsLinkTarget = e.target;
  // завершаем выполнение функции, если кликнули не по ссылке
  if (!tabsLinkTarget.classList.contains('menu-btn')) {
    return;
  }
  // отменяем стандартное действие
  e.preventDefault();
  _showTab(tabsLinkTarget);
});

return {
  showTab: function (target) {
    _showTab(target);
  },
  switchTabTo: function (index) {
    _switchTabTo(index);
  }
}

}

$tabs('.tabs');
document.querySelector('.menu-btn').click();
