function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


document.getElementsByClassName('menu-icon')[0].addEventListener('click', openMenu);

async function openMenu(){

    menu_block = document.getElementById('menu-block');
    menu_block_class = menu_block.getAttribute('class');
    menu_icon = document.getElementById('menu-icon');
    menu_line_1 = document.getElementById('menu-line-1');
    menu_line_2 = document.getElementById('menu-line-2');
    menu_line_3 = document.getElementById('menu-line-3');
    title = document.getElementById('title');

    if(menu_block_class == "menu-block"){
        menu_block.className = "menu-block-on";
        setTimeout(function(){
            menu_icon.className = "menu-icon-on";
        }, 50);
        menu_line_1.className = 'line-1-on';
        menu_line_2.className = 'line-2-on';
        menu_line_3.className = 'line-3-on';
        title.className = 'title-on';
    } 
    else if(menu_block_class == "menu-block-on"){
        setTimeout(function(){
            menu_block.className = "menu-block";
        }, 50);
        menu_icon.className = "menu-icon";
        menu_line_1.className = 'line-1';
        menu_line_2.className = 'line-2';
        menu_line_3.className = 'line-3';
        title.className = 'title';
    }

}