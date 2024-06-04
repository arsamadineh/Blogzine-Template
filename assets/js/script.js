var theme_swither = document.getElementById('themech-btn');
var theme_swither_menu = document.getElementById('themech-menu');
var theme_swither_menu_items = document.getElementById('themech-menu-item');

theme_swither.addEventListener('click', (event) => {
    if(theme_swither_menu.classList.contains('show')){
        theme_swither_menu.classList.remove('show');
    }else{
        theme_swither_menu.classList.add('show');
    }
});
theme_swither_menu_items.addEventListener('click', (event) => {
    theme_swither_menu.classList.remove('remove');
});
