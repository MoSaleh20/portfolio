let themeDots = document.getElementsByClassName('theme-dot');
let theme = document.getElementById('theme-style');

let savedTheme = localStorage.getItem('theme');
if (savedTheme==null){ 
    savedTheme = 'default' 
}
setTheme(savedTheme)

for (var i = 0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        setTheme(mode)
    })
}

function setTheme(mode){
    switch(mode){
        case 'light': theme.href='default.css'; break
        case 'green': theme.href='green.css'; break
        case 'purple': theme.href='purple.css'; break
        case 'blue': theme.href='blue.css'; break
        default: theme.href='default.css'
}
    localStorage.setItem('theme', mode)
}

    let projectImgs = document.getElementsByClassName('project-img');

let imgs = ['images/talabat.jpg','images/taqyeed1.jpg','images/talabat-mobile.jpg']
let linkes = ['https://github.com/MoSaleh20/TalabatApp-Backend','https://github.com/MoSaleh20/PubgUC','https://github.com/MoSaleh20/Talabat-mobile']
for(let i = 0; i<projectImgs.length;i++){
    let img1 = document.createElement('img')
    img1.src=imgs[i]
    img1.style.width='100%';
    img1.style.borderRadius='20px';
    // img1.style.borderTopLeftRadius='20px';
    // img1.style.borderTopRightRadius='20px';
    img1.style.height='200px';
    img1.style.backgroundSize='auto';
    img1.style.cursor = 'pointer';
    img1.style.borderBottom='2px solid var(--borderColor)'
    // img1.style.margin = '20px';
    img1.style.boxShadow= '0px 2px 0px 5px var(--mainColor)';
    img1.onclick=function(){
        window.open(linkes[i])
    }
    projectImgs[i].appendChild(img1)
}


