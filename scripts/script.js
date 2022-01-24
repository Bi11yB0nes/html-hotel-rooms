"use strict"

let cardButtonsArr = document.getElementsByClassName("card__button");
for (let i = 0; i < cardButtonsArr.length; i++) {
    cardButtonsArr[i].addEventListener("click", function (event){setReserved(event)}, false);
}

let reservedLinksArr = document.getElementsByClassName("reserved-container__link");
for (let i = 0; i < reservedLinksArr.length; i++){
    reservedLinksArr[i].addEventListener("click", function (event){event.stopPropagation()}, false);
}

function setReserved(event)
{
    event.preventDefault();
    let card = event.target.closest('.card');
    card.addEventListener('mouseleave', reserve);
}

function reserve (event) {
    let card = event.target.closest('.card');
    card.classList.add('card_is-reserved');
    card.addEventListener('click', cancelOrder);
    card.removeEventListener('mouseleave', reserve);
}

function cancelOrder(event)
{
    event.preventDefault();
    let card = event.target.closest('.card');
    card.classList.remove('card_is-reserved');
}

(function() {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function(css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
}