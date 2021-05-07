// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user')
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i')
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const extra = document.querySelector('#extra-button');
/**************************************************************************************************/
/**************************************************************************************************/

    // Newsfeed page
    // Post modal
    postBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modalWrapper.classList.add('modal-wrapper-display');
        console.log("pressed")
    })

    const changeOpacity = (x) => {
        modalPostBtn.style.opacity = x;
        modalFooterPlus.style.opacity = x;
    }

    postModalX.addEventListener('click', () => {
        modal.style.display = 'none';
        modalWrapper.classList.remove('modal-wrapper-display');

        if(modalInput.value !== "") {
            modalInput.value = "";
            changeOpacity(0.5);
        }
    });

    modalInput.addEventListener('keypress', (e) => {
        if(e.target.value !== "") {
            changeOpacity(1);
        };
    });

    modalInput.addEventListener('blur', (e) => {
        if(e.target.value === '') {
            changeOpacity(0.5);
        };
    })

// Sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display')
})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})
// Dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map((darkEl1) => darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map((darkEl2) => darkEl2.classList.toggle('dark-2'));
    Array.from(lightTexts).map((lightText) => lightText.classList.toggle('light'));
    Array.from(borders).map((border) => border.classList.toggle('border-color'));
});
