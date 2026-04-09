export default function outsideClick(element, events, callback) {
    //console.log("ativando");
    const outside = 'data-outside';
    const html = document.documentElement;
    if (!element.hasAttribute(outside)) {
        //html.addEventListener('click', handleOutsideClick);
        events.forEach(userEvent => {
            setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); }, 100);
        });
        element.setAttribute(outside, '');
    }
    function handleOutsideClick({ target }) {
        //console.log(element.contains(target));
        if (!element.contains(target)) {
            //html.removeEventListener('click', handleOutsideClick);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            element.removeAttribute(outside);
            callback();
        }
    }
}
