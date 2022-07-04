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
        console.log('clicked', mode);
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