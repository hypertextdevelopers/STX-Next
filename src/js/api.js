import axios from 'axios';
import { create_list } from './create-list';

export const api_res = function(string, loading_box){

    let url = `https://www.googleapis.com/books/v1/volumes?q=${string}+intitle:keyes`;
    let list_wrapper = document.querySelector('.list-wrapper');

    axios.get(url)
            .then( res => {

                let books = res.data.items;
                let list = true;
                loading_box.style.display = 'none';
                create_list(books, list, list_wrapper);

            })
            .catch( error => {

                console.log(error);
                alert("Whoops, the problem has appeared, maybe the book you are looking for isn't in the database.")

            });

}