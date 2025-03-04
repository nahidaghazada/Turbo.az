const likeDiv = document.getElementById('likeDiv')
const openClose = document.getElementById('openClose')



let flag = true
function likeOpen() {
    openClose.style.right = flag ? 0 : '-100%'
    flag = !flag
}

function sifirla() {
    window.location.href = '/src/index.html';
}

let basket = JSON.parse(localStorage.getItem("basket")) || []
// if(localStorage.getItem("basket")){
//     basket = localStorage.getItem("basket")
// }else{
//     basket = []
// }

function showbasket() {
    likeDiv.innerHTML = ''
    basket.forEach((item, index) => {
        likeDiv.innerHTML += `
                              <article class="flex flex-col dark:bg-gray-50 relative">
                                <div class='relative'>
                                <div class = 'absolute right-[10px] top-[10px] text-white cursor-pointer'>
                                   <i onclick="deleteBasket(${item.id})" class= "fa-solid fa-trash"></i>
                                </div>
                                    <img alt="car" class="object-cover w-full h-52 dark:bg-gray-500 rounded-tl-[8px] rounded-tr-[8px]" src="${item.images}">
                                </div>
                                <div class="flex-col flex-1 p-6 block">
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${item.price} ${item.currency}</h3>
                                    <button onclick="basketButton(${index}, -1)" class="px-2 bg-[gray]  hover:text-red-700 text-white py-1 font-semibold w-[34px] mr-3 rounded">-</button>
                                      Quantity: ${item.count}
                                    <button onclick="basketButton(${index}, 1)" class="px-3 mx-2 text-white bg-[gray]  hover:text-red-700 w-[34px] py-1 font-semibold rounded">+</button>
                                    </h3>
                                   <span class=" flex mt-3 pl-[24px] text-[16px] capitalize hover: dark:text-default-600">${item.brand} ${item.model}</span>
                                </div>
                              </article>
                              `
    })
}
showbasket()

function deleteAll() {
    //basket = []
    basket.length = 0
    localStorage.removeItem("basket")
    likeDiv.innerHTML = ''
    data.filter(item => item.status = false)
    show()
}

function deleteBasket(id) {
    const yeniArr = basket.filter((item, i) => item.id != id)
    basket = yeniArr
    localStorage.setItem("basket", JSON.stringify(basket))
    data.filter(item => { if (item.id == id) item.status = false })
    showbasket()
    show()
}

function basketButton(index, say) {
    const element = basket[index]
    let quantity = element.count + say
    if (quantity == 0) {
        deleteBasket(element.id)
    } else {
        element.count = quantity
    }
    showbasket()
}
