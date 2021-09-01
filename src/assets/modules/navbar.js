export function navbar() {
    const label = document.querySelector('#navbar');
    const ul = document.querySelector('#list');
    
    label.addEventListener('click', () => {
        ul.classList.toggle('menu-on');
        label.classList.toggle('image-menu');
        handleNavbarAuthentications(label);

        if(ul.classList.contains('menu-on')) {
            handleLinksNavbar(ul, label);
        }
    })
}

function handleNavbarAuthentications(label) {
    if(label.classList.contains('image-menu')) {
        const img = label.querySelector('img');

        img.src = './src/assets/public/close.svg';

        document.body.style.overflow = 'hidden';
    } else {
        const img = label.querySelector('img');

        img.src = './src/assets/public/menu.svg';

        document.body.style.overflow = '';
    }
}

function handleLinksNavbar(ul, label) {
    const links = document.querySelectorAll('header>nav>ul>li>a');
    links.forEach(value => {
        value.addEventListener('click', () => {
            const img = label.querySelector('img');
            
            ul.classList.remove('menu-on');
            label.classList.remove('image-menu');

            img.src = './src/assets/public/menu.svg';

            document.body.style.overflow = '';
        })
    })
};