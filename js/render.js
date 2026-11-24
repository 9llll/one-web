/**
 * 渲染逻辑：把 config.js + js/content.js 的数据渲染到 index.html 的骨架上。
 * 正常情况下不需要修改这个文件；要改页面结构请改 index.html。
 */
(function () {
  var cfg = window.SITE_CONFIG || {};
  var page = window.PAGE_CONTENT || {};
  var seo = cfg.seo || {};
  var hero = cfg.hero || {};
  var intro = page.intro || {};
  var sections = (page.sections || []).filter(function (s) {
    return s && s.id;
  });

  function el(id) {
    return document.getElementById(id);
  }

  function setMeta(name, content) {
    if (!content) return;
    var tag = document.querySelector('meta[name="' + name + '"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  }

  function setLink(rel, href) {
    if (!href) return;
    var tag = document.querySelector('link[rel="' + rel + '"]');
    if (!tag) {
      tag = document.createElement("link");
      tag.setAttribute("rel", rel);
      document.head.appendChild(tag);
    }
    tag.setAttribute("href", href);
  }

  /* ---------------- 1. SEO / 标签页 ---------------- */
  if (seo.lang) document.documentElement.lang = seo.lang;
  if (seo.title) document.title = seo.title;
  setMeta("description", seo.description);
  setMeta("keywords", seo.keywords);
  setLink("icon", seo.favicon);
  setLink("shortcut icon", seo.favicon);
  setLink("bookmark", seo.favicon);

  if (seo.ogImage || seo.title || seo.description) {
    var head = document.head;
    function og(prop, content) {
      if (!content) return;
      var tag = document.createElement("meta");
      tag.setAttribute("property", prop);
      tag.setAttribute("content", content);
      head.appendChild(tag);
    }
    og("og:type", "website");
    og("og:title", seo.title || "");
    og("og:description", seo.description || "");
    og("og:image", seo.ogImage || "");
  }

  /* ---------------- 2. 首屏 ---------------- */
  el("hero-big").textContent = hero.big || "";
  el("hero-title").textContent = hero.title || "";

  var cover = el("svg");
  if (hero.cover) {
    cover.src = hero.cover;
    cover.alt = hero.coverAlt || hero.title || "";
    cover.title = hero.coverAlt || hero.title || "";
  } else {
    cover.parentNode.removeChild(cover);
  }

  if (hero.slogan || hero.sinceLabel) {
    var poet = el("poet");
    var counterOn = hero.counter && hero.counter.enabled !== false;
    var units = (hero.counter && hero.counter.units) || {};
    var info = document.createElement("span");
    info.className = "info";

    var poemHtml = "";
    if (hero.slogan) poemHtml += hero.slogan + "<br>";
    poemHtml += (hero.sinceLabel || "") + (counterOn ? hero.counter.prefix || "" : "");
    if (counterOn) {
      poemHtml +=
        "<br>" +
        '<span id="t_y"></span> <span id="t_d"></span> ' +
        '<span id="t_h"></span> <span id="t_m"></span> <span id="t_s"></span>';
    }
    info.innerHTML = poemHtml;
    poet.appendChild(info);
    poet.hidden = false;

    if (counterOn && hero.since) startCounter(hero.since, units);
  }

  /* 计时器：从 since 开始累计 年/天/时/分/秒 */
  function startCounter(since, units) {
    var start = new Date(since).getTime();
    if (isNaN(start)) return;
    var yEl = el("t_y"),
      dEl = el("t_d"),
      hEl = el("t_h"),
      mEl = el("t_m"),
      sEl = el("t_s");
    function tick() {
      var t = Date.now() - start;
      if (t < 0) t = 0;
      var y = Math.floor(t / 1000 / 60 / 60 / 24 / 365);
      var d = Math.floor((t / 1000 / 60 / 60 / 24) % 365);
      var h = Math.floor((t / 1000 / 60 / 60) % 24);
      var m = Math.floor((t / 1000 / 60) % 60);
      var s = Math.floor((t / 1000) % 60);
      if (yEl) yEl.textContent = y + " " + (units.year || "年");
      if (dEl) dEl.textContent = d + " " + (units.day || "天");
      if (hEl) hEl.textContent = h + " " + (units.hour || "时");
      if (mEl) mEl.textContent = m + " " + (units.minute || "分");
      if (sEl) sEl.textContent = s + " " + (units.second || "秒");
    }
    tick();
    setInterval(tick, 1000);
  }

  /* 首屏寄语 */
  if (cfg.note) {
    var mianhuai = document.createElement("p");
    mianhuai.id = "mianhuai";
    mianhuai.innerHTML = cfg.note;
    el("topinfo").appendChild(mianhuai);
  }

  /* ---------------- 3. 正文头部（百科风格） ---------------- */
  el("intro-title").innerHTML = intro.title || "";
  var paras = el("intro-paragraphs");
  (intro.paragraphs || []).forEach(function (p) {
    var node = document.createElement("p");
    node.innerHTML = p;
    paras.appendChild(node);
  });

  /* 基本信息：自动左右两列 */
  var facts = intro.facts || [];
  if (!facts.length) {
    el("basic-info").style.display = "none";
  } else {
    var half = Math.ceil(facts.length / 2);
    [facts.slice(0, half), facts.slice(half)].forEach(function (group, i) {
      var dl = el(i === 0 ? "facts-left" : "facts-right");
      if (!group.length) {
        dl.style.display = "none";
        return;
      }
      group.forEach(function (f) {
        var dt = document.createElement("dt");
        dt.className = "basicInfo-item name";
        dt.innerHTML = f.name;
        var dd = document.createElement("dd");
        dd.className = "basicInfo-item value";
        dd.innerHTML = f.value;
        dl.appendChild(dt);
        dl.appendChild(dd);
      });
    });
  }

  /* ---------------- 4. 目录 + 侧边菜单 ---------------- */
  if (!sections.length) {
    el("catalog-wrap").style.display = "none";
  } else {
    var perCol = Math.ceil(sections.length / 3);
    var catalog = el("catalog");
    for (var c = 0; c < sections.length; c += perCol) {
      var chunk = sections.slice(c, c + perCol);
      var ol = document.createElement("ol");
      chunk.forEach(function (s) {
        var li = document.createElement("li");
        li.className = "level1";
        li.innerHTML =
          '<span class="index"><i class="fa fa-circle" aria-hidden="true"></i></span>' +
          '<span class="text"><a href="#' +
          s.id +
          '">' +
          (s.title || "") +
          "</a></span>";
        ol.appendChild(li);
      });
      catalog.appendChild(ol);
    }

    var menu = el("menu-list");
    sections.forEach(function (s, i) {
      var li = document.createElement("li");
      li.innerHTML =
        '<a href="#' +
        s.id +
        '"' +
        (i === 0 ? ' class="current"' : "") +
        '><i class="fa fa-play" aria-hidden="true"></i> ' +
        (s.title || "") +
        "</a>";
      menu.appendChild(li);
    });
  }

  /* ---------------- 5. 正文分节 ---------------- */
  var box = el("sections");
  sections.forEach(function (s) {
    var block = document.createElement("div");
    block.innerHTML =
      '<div class="para-title level-2" label-module="para-title">' +
      '<h2 class="title-text item" id="' +
      s.id +
      '"><i class="fa fa-circle" aria-hidden="true"></i> ' +
      (s.title || "") +
      "</h2></div>" +
      (s.html || "");
    while (block.firstChild) box.appendChild(block.firstChild);
  });

  /* ---------------- 6. 页脚 ---------------- */
  var fc = cfg.footer || {};
  var author = fc.author || {};
  var li = document.createElement("li");
  var html =
    '<i class="fa fa-copyright" aria-hidden="true"></i>&nbsp;' + (fc.copyright || "");
  if (author.text) {
    var logo = author.logo
      ? '<img class="longge" style="margin-left:0em;width:16px;padding-right:2px;vertical-align:middle" src="' +
        author.logo +
        '" alt="" />'
      : "";
    html += "&nbsp;&nbsp;" + (author.url
      ? '<a title="' + (author.title || "") + '" href="' + author.url + '" target="_blank" rel="noopener">' + logo + author.text + "</a>"
      : logo + author.text);
  }
  li.innerHTML = html;
  el("footer-menu").appendChild(li);

  /* ---------------- 7. 百度统计 ---------------- */
  var ana = cfg.analytics || {};
  if (ana.baidu) {
    window._hmt = window._hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + ana.baidu;
    var first = document.getElementsByTagName("script")[0];
    first.parentNode.insertBefore(hm, first);
  }
})();
