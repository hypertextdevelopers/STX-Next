export const search_input_controller = function(){

    const search_box = document.querySelector('.header__input');
    const search_box_placeholder = document.querySelector('.header__placeholder');
    const header = document.querySelector('.header');
    
    search_box.value = null;

    search_box.addEventListener('focus', () => {

        search_box_placeholder.style.transform = 'translateY(-50px)';
        search_box_placeholder.style.fontSize = '1.5rem';
        header.style.top = '200px';

    });

}