 function clickcard($){
    const type = $.getAttribute('type')
    const product = $.getAttribute('product')
    const page = $.getAttribute('page')
    console.log($)
    window.location.href = `../item-view/?page=${page}&type=${type}&product=${product}`
 }
var cards = document.querySelectorAll('.card')

// cards.onclick = (card) =>{
//     console.log(card)
//     click(this)
// }