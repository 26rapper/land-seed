// LAND SEED 공개 사이트 v0.2 — 모바일 메뉴와 용어 검색만 담당한다. 저장·전송하는 데이터는 없다.
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    var label = btn.querySelector('.menu-label');
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (label) label.textContent = open ? '닫기' : '메뉴';
    };
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setOpen(false); btn.focus(); }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setOpen(false);
    });
  }

  var input = document.getElementById('term-search');
  var count = document.getElementById('term-count');
  if (input && count) {
    var terms = Array.prototype.slice.call(document.querySelectorAll('.term'));
    var update = function () {
      var q = input.value.replace(/\s+/g, '').toLowerCase();
      var shown = 0;
      terms.forEach(function (t) {
        var text = t.textContent.replace(/\s+/g, '').toLowerCase();
        var hit = !q || text.indexOf(q) !== -1;
        t.hidden = !hit;
        if (hit) shown++;
      });
      count.textContent = q ? '찾은 용어 ' + shown + '개' : '용어 ' + terms.length + '개';
    };
    input.addEventListener('input', update);
    update();
  }
})();
