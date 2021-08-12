let changeText = function () {
    let circleItem = document.querySelectorAll('.circleItem');
    let circleItemText = document.querySelectorAll('.circleItemText');
    circleItem.forEach(item => {
        item.addEventListener('click', watchText)
    });

    function watchText() {
        circleItemText.forEach(item => {
           item.classList.toggle("change");
        })
    }
}
changeText();