export const create_list = function(books_list, list, wrapper){

    if(list){

        wrapper.innerHTML = null;

    }

    let ul = document.createElement('ul');
    ul.classList.add('list-wrapper__ul');

    books_list.forEach( book => {

        let li = document.createElement('li');
        li.classList.add('list-wrapper__ul__li');

        let figure = document.createElement('figure');
        figure.classList.add('list-wrapper__ul__li__image');
        figure.style.backgroundImage += `url('${book.volumeInfo.imageLinks.thumbnail}')`;

        let content = document.createElement('div');
        content.classList.add('list-wrapper__ul__li__content');

        let h1 = document.createElement('h1');
        h1.classList.add('list-wrapper__ul__li__content__h1');
        h1.innerHTML += book.volumeInfo.title;

        let p = document.createElement('p');
        p.classList.add('list-wrapper__ul__li__content__p');

        let snp = book.searchInfo.textSnippet.split('').splice(0, 250).join('') + '[...]';

        p.innerHTML += snp;

        content.appendChild(h1);
        content.appendChild(p);

        li.appendChild(figure);
        li.appendChild(content);

        ul.appendChild(li);

        wrapper.appendChild(ul);

    });

}