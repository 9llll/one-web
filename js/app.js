/**
 * 侧边菜单滚动高亮（scroll spy）
 * 只负责“当前看到哪一节”这一件事，菜单本身由 js/render.js 生成。
 */
$(function () {
  var $menu = $("#menu-list");

  function activeLink(href) {
    var found = null;
    $menu.find("a").each(function () {
      if ($(this).attr("href") === href) found = $(this);
    });
    return found;
  }

  function spy() {
    var scrollTop = $(document).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var items = $("#content").find(".item");
    var current = "";

    // 滚到底部时固定高亮最后一节，避免最后一节太短永远高亮不到
    if (scrollTop + winHeight >= docHeight - 2) {
      for (var i = items.length - 1; i >= 0; i--) {
        var lastHref = "#" + items[i].id;
        if (activeLink(lastHref)) {
          current = lastHref;
          break;
        }
      }
    } else {
      items.each(function () {
        var href = "#" + this.id;
        if (!activeLink(href)) return; // 菜单里没有的锚点（如小节 h3）忽略
        if (scrollTop > $(this).offset().top - 100) current = href;
      });
    }

    if (!current) return;
    var $cur = $menu.find(".current");
    if ($cur.attr("href") !== current) {
      $cur.removeClass("current");
      activeLink(current).addClass("current");
    }
  }

  $(window).on("scroll resize", spy);
  spy();
});
