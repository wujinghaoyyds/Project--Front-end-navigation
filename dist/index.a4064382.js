(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li.last');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem('x');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [{
    logo: 'js',
    link: 'JS Bin',
    url: ' https://jsbin.com/?html,output'
  }, {
    logo: '',
    link: '知乎',
    url: 'https://www.zhihu.com/hot'
  }, {
    logo: '维基百科',
    link: '维基百科',
    url: 'https://zh.m.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5'
  }, {
    logo: 'MDN',
    link: 'MDN',
    url: 'https://developer.mozilla.org/zh-CN/'
  }, {
    logo: 'GitHub',
    link: 'GitHub',
    url: 'https://github.com/'
  }];
  // logoType: 'text',
  // logotype: 'image',
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.last)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index) => {
      let $li = $(`<li>
        <div class="site">
        <div class="logo">${node.logo[0]}</div>
            <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplyUrl(node.url)}</div>
            <div class="close">
            <svg class="icon">
                 <use xlink:href="#icon-close"></use>
            </svg>
            </div>
        </div>
    </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        // 阻止冒泡
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt(`请输入正确的网站`);
    if (url.indexOf('http') !== 0) {
      url = 'https://www.' + url;
    }
    console.log(url);
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
      logo: simplityUrl(url)[0],
      // logoType: 'text',
      url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  });
  window.onbeforeunload = () => {
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem('x', string);
  };
  $(document).on('keypress', e => {
    const key = e.key;
    for (let i = 0; i < $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.length; i++) {
      if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].logo.toLowerCase() === key) {
        window.open($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.a4064382.js.map
