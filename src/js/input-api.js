import _ from 'lodash';
import { api_res } from './api';

export const input_value = function(){

    const search_box = document.querySelector('.header__input');
    const gif = document.querySelector('.loading-box');
    let list_wrapper = document.querySelector('.list-wrapper');

    search_box.addEventListener('keyup', _.debounce( () => {

        let api_value = search_box.value;
        gif.style.display = 'block';
        list_wrapper.innerHTML = null;
        api_res(api_value, gif);

    }, 2000));

}