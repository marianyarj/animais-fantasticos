export default function outsideClick(element, events, callback) {
    const outside = 'data-outside';
    const html = document.documentElement;
    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); }, 100);
        });
        element.setAttribute(outside, '');
    }
    function handleOutsideClick({ target }) {
        if (!element.contains(target)) {
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            element.removeAttribute(outside);
            callback();
        }
    }
}
