function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


document.getElementsByClassName('menu-icon')[0].addEventListener('click', openMenu);
document.getElementsByClassName('folder-arrow')[0].addEventListener('click', openFolders);

step_checkboxs = document.querySelectorAll('.step-checkbox');

step_checkboxs.forEach(element => {
    element.addEventListener('click', comply)
});

menu_block = document.getElementById('menu-block');
menu_icon = document.getElementById('menu-icon');
menu_line_1 = document.getElementById('menu-line-1');
menu_line_2 = document.getElementById('menu-line-2');
menu_line_3 = document.getElementById('menu-line-3');
title = document.getElementById('title');
folders_section = document.getElementById('folder-section');
folder_head = document.getElementById('folder-head');
folder_arrow = document.getElementById('folder-arrow');
folder_btns = document.getElementById('folder-btns')
task_section = document.getElementById('task-section');
step_block = document.getElementById('steps-block');



async function openMenu(){

    menu_block_class = menu_block.getAttribute('class');

    if(menu_block_class == "menu-block"){
        menu_block.className = "menu-block-on";
        setTimeout(function(){
            menu_icon.className = "menu-icon-on";
        }, 0);
        menu_line_1.className = 'menu-line-1-on';
        menu_line_2.className = 'menu-line-2-on';
        menu_line_3.className = 'menu-line-3-on';
        title.className = 'title-on';
    } 
    else{
        setTimeout(function(){
            menu_block.className = "menu-block";
        }, 0);
        menu_icon.className = "menu-icon";
        menu_line_1.className = 'menu-line-1';
        menu_line_2.className = 'menu-line-2';
        menu_line_3.className = 'menu-line-3';
        title.className = 'title';
    }

}

function openFolders(){

    folders_section_class = folders_section.getAttribute('class');
    
    if(folders_section_class == 'folder-section'){
        folders_section.className = 'folder-section-on';
        folder_head.className = 'folder-head-on';
        folder_arrow.className = 'folder-arrow-on';
        folder_btns.className = 'folder-btns-on';
        task_section.className = 'task-section-on';
    }
    else{
        folders_section.className = 'folder-section';
        folder_head.className = 'folder-head';
        folder_arrow.className = 'folder-arrow';
        folder_btns.className = 'folder-btns';
        task_section.className = 'task-section';
    }

}

function comply(){

    step_block_class = step_block.getAttribute('class');

    if(step_block_class == 'steps-block steps-div'){
        step_block.className = 'steps-block-on steps-div';
    }
    else{
        step_block.className = 'steps-block steps-div';
    }

}