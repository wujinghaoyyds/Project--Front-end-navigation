const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    {logo: 'a', url: 'https://www.acfun.cn'},
    {logo: './images/bilibili.png',  url: 'https://www.bilibili.com'}
]
// logoType: 'text',
//logotype: 'image',

const simplityUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')//删除 /开头的内容（正则表达式）
}

const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index) => {
        let $li = $(`<li>  
        <div class="site">
        <div class="logo">${node.logo[0]}</div>
            <div class="link">${simplityUrl(node.url)           }</div>
            <div class="close">
            <svg class="icon">
                 <use xlink:href="#icon-close"></use>
            </svg>
            </div>
        </div>
    </li>`).insertBefore($lastLi)
        $li.on('click',()=>{
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation()//阻止冒泡
            hashMap.splice(index,1)
            render()
        })

    })
}

render()

$('.addButton').on('click', () => {
    let url = window.prompt(`请输入正确的网站`)
    if (url.indexOf('http') !== 0) {
        url = 'https://www.' + url
    }
    console.log(url)
    hashMap.push({
        logo: simplityUrl(url)[0],
        //logoType: 'text',
        url: url
    })
    render()
})

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}

$(document).on('keypress', (e)=>{
    const key = e.key
    for(let i=0; i<hashMap.length; i++){
        if(hashMap[i].logo.toLowerCase() === key){
            window.open(hashMap[i].url)
        }
    }
})

