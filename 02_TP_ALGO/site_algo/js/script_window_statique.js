window.addEventListener('load', () => {
    const savedScroll = sessionStronge.getItem('scrollPosition');
    if (savedScroll !== null) {
        windowscrollTo(0, parseInt(savedScroll));
    }
});
window.addEventListener('beforeunload', ()=> {
    sessionStorage.setItem('scrollPosition', window.scroll.scrollY);
})