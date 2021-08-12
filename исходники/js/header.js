let select = function () {
    let selectHeader = document.querySelectorAll('.selectHeader');
    let selectItem = document.querySelectorAll('.selectItem');
    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem .forEach(item => {
        item.addEventListener('click', selectCnange)
    });

    function selectToggle() {
        this.parentElement.classList.toggle("active")
    };

    function selectCnange() {
        let text = this.innerText;
        let select = this.closest('.select');
        let selectValue = select.querySelector('.selectValue')
        selectValue.innerText = text;
        select.classList.remove('active');
    };
}
select();