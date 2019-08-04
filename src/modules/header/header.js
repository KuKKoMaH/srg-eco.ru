/* ================================================ */
/* Меню */
/* ================================================ */
$('.header__items > ul > li.menu-item-has-children > a').mouseenter(function () {
  hideSearch();
  hideMenu();
  const $li = $(this).parents('li');
  $li.addClass('menu-item-active');
  setTimeout(() => {
    $li.addClass('menu-item-active-done');
  }, 0);

  let leaved         = false;
  let lastY          = 0;
  const onMouseMove  = (e) => {
    const { pageY } = e;
    if (leaved && pageY < lastY) {
      close();
    }
    lastY = pageY;
  };
  const onMouseEnter = () => {
    leaved = false;
  };
  const onMouseLeave = () => {
    leaved = true;
  };
  const close        = () => {
    $(document).off('mousemove', onMouseMove);
    $li.off('mouseenter', onMouseEnter);
    $li.off('mouseleave', onMouseLeave);

    $li.removeClass('menu-item-active-done');
    $li.one('transitionend', () => {
      $li.removeClass('menu-item-active');
    });
  };

  $(document).on('mousemove', onMouseMove);
  $li.on('mouseenter', onMouseEnter);
  $li.on('mouseleave', onMouseLeave);
});
/* ================================================ */

/* ================================================ */
/* Поиск */
/* ================================================ */
const $search        = $('.search');
const $searchTrigger = $('.search__trigger');
const $searchInput   = $('.search__input');
const $searchContent = $('.search__content');
const $body          = $('body');
let searchVisible    = false;

$searchTrigger.on('click', () => toggleSearch());

$body.on('click', (e) => {
  const $target = $(e.target);
  if (!$target.closest($searchContent).length) {
    hideSearch();
  }
});

function toggleSearch() {
  if (searchVisible) {
    hideSearch();
  } else {
    showSearch();
  }
}

function showSearch() {
  if (searchVisible) return;
  $search.addClass('search--active');
  $searchTrigger.addClass('search__trigger--active');

  setTimeout(() => {
    $search.addClass('search--visible');
    searchVisible = true;
    $searchInput.focus();
  }, 0);
}

function hideSearch() {
  if (!searchVisible) return;
  $search.removeClass('search--visible');
  $search.one('transitionend', () => {
    $search.removeClass('search--active');
    $searchInput.val('');
  });
  $searchTrigger.removeClass('search__trigger--active');
  searchVisible = false;
}

/* ================================================ */

/* ================================================ */
/* Меню */
/* ================================================ */
const $menu        = $('.menu');
const $menuTrigger = $('.menu__trigger');
const $menuContent = $('.menu__content');
let menuVisible    = false;

$menuTrigger.on('click', () => toggleMenu());

$body.on('click', (e) => {
  const $target = $(e.target);
  if (!$target.closest($menuContent).length) {
    hideMenu();
  }
});

function toggleMenu() {
  if (menuVisible) {
    hideMenu();
  } else {
    showMenu();
  }
}

function showMenu() {
  if (menuVisible) return;
  $menu.addClass('menu--active');
  $menuTrigger.addClass('menu__trigger--active');

  setTimeout(() => {
    $menu.addClass('menu--visible');
    menuVisible = true;
  }, 0);
}

function hideMenu() {
  if (!menuVisible) return;
  $menu.removeClass('menu--visible');
  $menu.one('transitionend', () => {
    $menu.removeClass('menu--active');
  });
  $menuTrigger.removeClass('menu__trigger--active');
  menuVisible = false;
}

$menu.find('a[href*="#"]').on('click', () => hideMenu());

/* ================================================ */
