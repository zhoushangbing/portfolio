/* ============================================================
   页面逻辑：主题切换 / 渲染项目列表 / 导航滚动高亮 / 年份更新
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 深浅色主题切换（localStorage 记忆用户选择） ---------- */
  var THEME_KEY = "theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  /* 初始化：读取上次选择，默认浅色 */
  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* 忽略受限环境 */ }
  if (savedTheme === "dark" || savedTheme === "light") applyTheme(savedTheme);

  var themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    function syncToggleState() {
      themeToggle.setAttribute(
        "aria-label",
        currentTheme() === "dark" ? "切换到浅色主题" : "切换到深色主题"
      );
    }
    syncToggleState();
    themeToggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      syncToggleState();
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* 忽略受限环境 */ }
    });
  }

  /* ---------- 渲染项目列表（数据来自 data.js，便于后续扩展） ---------- */
  var list = document.getElementById("project-list");

  function renderProjects(projects) {
    if (!list) return;
    list.innerHTML = projects.map(function (p, i) {
      var num = String(i + 1).padStart(2, "0");
      var flip = i % 2 === 1 ? " project--flip" : ""; /* 偶数项图文左右交替 */
      var stack = p.stack.map(function (t) { return "<li>" + t + "</li>"; }).join("");
      return (
        '<article class="project' + flip + '">' +
          '<figure class="project__media">' +
            '<div class="project__frame">' +
              '<img src="' + p.image + '" alt="' + (p.alt || p.name) + '" loading="lazy">' +
            "</div>" +
          "</figure>" +
          '<div class="project__body">' +
            '<div class="project__top">' +
              '<span class="project__num">' + num + "</span>" +
              '<span class="project__cat">' + p.category + "</span>" +
            "</div>" +
            '<h3 class="project__title">' + p.name + "</h3>" +
            '<p class="project__desc">' + p.desc + "</p>" +
            '<ul class="project__stack">' + stack + "</ul>" +
            '<p class="project__date">完成时间 · ' + p.date + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  renderProjects(window.PROJECTS || []);

  /* ---------- 侧边导航滚动高亮 ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- 年份自动更新 ---------- */
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
