const $faqsCard = document.querySelector('.faqs-card');

$faqsCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('icon-plus')) {
        const $response = event.target.nextElementSibling;
        // const $img = document.querySelector('.icon-plus').setAttribute('src', '/assets/images/icon-minus.svg');
        $response.classList.toggle('show-response');
    }
});