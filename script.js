// const menuItems = document.querySelectorAll(`.list a[href^="#"]`);

// menuItems.forEach(item => {
//     item.addEventListener('click', scrollToId);
// })

// function getScrollTopByHref(element) {
//     const id = element.getAttribute('href');
//     return document.querySelector(id).offsetTop;
// }

// function scrollToId(event) {
//     event.preventDefault();
//     const to = getScrollTopByHref(event.target);
//     scrollToPosition(to);
// }

// function scrollToPosition(to) {
//     window.scroll({
//         top: to,
//         behavior: "smooth",
//     });
//     alert("oi");
// }

$('nav a').click(function(e){
    e.preventDefault();
    let id = $(this).attr('href');
    targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500)
    
    
})