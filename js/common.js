/* 共通JS: シェアボタンと年号のみ。ツール固有のロジックは各ページにインラインで書く(CLAUDE.md参照) */

document.addEventListener('DOMContentLoaded', function () {
  var url = encodeURIComponent(location.href.split('#')[0]);
  var title = encodeURIComponent(document.title);

  var x = document.querySelector('.share-x');
  if (x) x.href = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url;

  var line = document.querySelector('.share-line');
  if (line) line.href = 'https://social-plugins.line.me/lineit/share?url=' + url;

  var copy = document.querySelector('.share-copy');
  if (copy) copy.addEventListener('click', function () {
    navigator.clipboard.writeText(location.href.split('#')[0]).then(function () {
      copy.textContent = 'コピーしました!';
      setTimeout(function () { copy.textContent = 'リンクをコピー'; }, 2000);
    });
  });

  var year = document.querySelector('.copyright-year');
  if (year) year.textContent = new Date().getFullYear();
});

/* 数値を「1,234,567円」形式にする(各ツールから使う) */
function yen(n) {
  return Math.round(n).toLocaleString('ja-JP') + '円';
}
