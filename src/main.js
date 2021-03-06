const $siteList = $('.siteList')
const $clear = $('.clear')
const $body = $('body')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    {link: '哔哩哔哩', url: 'https://www.bilibili.com'},
    {link: 'JS Bin', url: ' https://jsbin.com/?html,output'},
    {link: '知乎', url: 'https://www.zhihu.com/hot'},
    {link: '维基百科', url: 'https://zh.m.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5'},
    {link: 'MDN', url: 'https://developer.mozilla.org/zh-CN/'},
    {link: 'GitHub', url: 'https://github.com/'},
    {link: 'W3C', url: 'https://github.com/},'},
    {link: 'Google 翻译', url: 'https://translate.google.com/'},
    {link: '写代码啦', url: 'https://xiedaimala.com/'},
    {link: '网道文档', url: 'https://wangdoc.com/'},
]
const simplifyUrl = (url) => {
    url = url.replace('https://', '').replace('www.', '').replace(/\/.*/, '') // 删除 / 开头的内容
    let confirm1 = window.confirm(`您是否想以${url}来命名您添加的网站，如果您想自己重新命名此网站，请按”取消“键进入重命名输入框`)
    if (confirm1 === true) {} else {url = window.prompt(`请输入您的命名`)}
    return url
}
const render = () => {
    $siteList.find('li:not(.last)').remove()
    let i = 0
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
      <div class="site">
        <div class="logo">${i++}</div><!--暂代-->
        <div class="link">${node.link}</div>
        <div class="close">
          <svg class="icon">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </div>
    </li>`).insertBefore($lastLi)
        $li.on('click', () => {window.open(node.url)})
        $li.on('click', '.close', (e) => {
            e.stopPropagation() // 阻止冒泡
            hashMap.splice(index, 1)
            render()
        })
    })
}
render()

$('.addButton').on('click', () => {
    let url = window.prompt('请输入您要添加快捷方式的网址')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    hashMap.push({
        link: simplifyUrl(url),
        url: url
    })
    render()
})
window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}
$(document).on('keypress', (e) => {
    const {key} = e
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].link === key) {
            window.open(hashMap[i].url)
        }
    }
})
//清除按钮动态展示，未完成，
//问题所在JS代码只能判断一次，不能时时判断
// const $searchInput = $('.searchInput')
// // $searchInput.parent().children(".clear").show()
// const $clear=$('.clear')
// const $inputValue = $('input[type=text]').val()
// if ($inputValue !== ''){
//     // $clear.hide()
//     $searchInput.parent().parent().children(".clear").show();
//     console.log(`2`)
// }
// if ($inputValue === ''){
//     // $clear.hide()
//     $searchInput.parent().parent().children(".clear").hide();
//     console.log(`1`)
// }

//点× 清空输入框内容

$clear.on('click', () => {
    $('.searchInput').val('')
})
// 改换搜索引擎，target为self时只能改换一次，但为blank时可以一直改换,刷新改为最初
//待改进
$('.searchPortal1').on('click', () => {
    $('.searchForm').attr('action', 'https://www.google.com.hk/search')
    $('.searchInput').attr('name', 'q')
})
$('.searchPortal2').on('click', () => {
    $('.searchForm').attr('action', 'https://www.baidu.com/s')
    $('.searchInput').attr('name', 'wd')
})
$('.searchPortal3').on('click', () => {
    $('.searchForm').attr('action', 'https://cn.bing.com/search')
    $('.searchInput').attr('name', 'q')
})
//改换背景色，
// 待改进，切换壁纸，更多背景颜色
$('.nightMode').on('click',()=>{
    $body.css('background', '#1d1c1c')
    $('.searchForm').css('background', '#1d1c1c')
    $('.searchInput').css('background', '#1d1c1c')
    $clear.css('background', '#1d1c1c')
    $('.searchButton').css('background', '#1d1c1c')
    $('.logo').css('background', '#000000')
    $('.iconWrapper').css('background', '#1d1c1c')
    $('.webTheme').css('background', '#1d1c1c')
    $('.icon2').css('background', '#1d1c1c')
    $body.css('color','#c4bfbf')
})
$('.eyeProtection').on('click',()=>{
    $body.css('background', '#CCE8CF')
    $('.searchForm').css('background', '#CCE8CF')
    $('.searchInput').css('background', '#CCE8CF')
    $clear.css('background', '#CCE8CF')
    $('.searchButton').css('background', '#CCE8CF')
    $('.logo').css('background', '#CCE8CF')
    $('.iconWrapper').css('background', '#CCE8CF')
    $('.webTheme').css('background', '#CCE8CF')
    $('.icon2').css('background', '#CCE8CF')
    $body.css('color','#000000')
})
$('.dayMode').on('click',()=>{
    $body.css('background', '#dddddd')
    $('.searchForm').css('background', '#ffffff')
    $('.searchInput').css('background', '#ffffff')
    $clear.css('background', '#ffffff')
    $('.searchButton').css('background', '#ffffff')
    $('.logo').css('background', '#ffffff')
    $('.iconWrapper').css('background', '#ffffff')
    $('.webTheme').css('background', '#dddddd')
    $('.icon2').css('background', '#dddddd')
    $body.css('color','#000000')
})

$('.webFeedback').on('click',()=>{
    window.alert(`感谢您的反馈和建议，稍后将唤起您本地邮箱`)
})