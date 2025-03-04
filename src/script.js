const content = document.getElementById('content')
const btn = document.getElementById('btn')
const money = document.getElementById('money')
const marka = document.getElementById('marka')
const model = document.getElementById('model')
const city = document.getElementById('city')
const currency = document.getElementById('currency')
const banType = document.getElementById('banType')
const yearMin = document.getElementById('yearMin')
const yearMax = document.getElementById('yearMax')
// const openClose = document.getElementById('openClose')
const btnArtir = document.getElementById('btnArtir')
const select = document.querySelectorAll('#selects select')
const umumiContent = document.getElementById("umumiContent")
const change = document.querySelector('#change')

let markaArr = [...(new Set(data.map(item => { return item.brand })))]
let modelArr = [...(new Set(data.map(item => { return item.model })))]
let cityArr = [...new Set(data.map(item => { return item.city }))]
let currencyArr = [...new Set(data.map(item => { return item.currency }))]
let banTypeArr = [...new Set(data.map(item => { return item.banType }))]
let yearMinArr = [...new Set(data.map(item => { return item.year }))]
let yearMaxArr = [...new Set(data.map(item => { return item.year }))]

let count = 8
function show() {
    let kod = ''
    if(data.length > 0){
        data.slice(0, count)
        .map((item, i) => {
            
            kod += `
                    <div>
                     <a target="_blank" href="pages/details.html?id=${item.id}&name= ${item.brand}&${item.price}">
                      <article class="flex flex-col dark:bg-gray-50">
                                     <div class='relative'>
                                         <img alt="" class="object-cover w-full h-52 dark:bg-gray-500 rounded-tl-[8px] rounded-tr-[8px]" src="${item.images[0]}">
                                         <i id= 'heart' style = 'color: ${item.status ? 'red' : 'white'}'
                                          onclick="addToWish(event, ${item.id}, ${item.price}, '${item.currency}', '${item.brand}', '${item.model}',' ${item.images[0]}', ${i})" class="cursor-pointer absolute top-3 right-2  fa-regular fa-heart"></i>
                                     </div>
                                     <div class="flex flex-col flex-1 p-6">
                                         <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">${item.price} ${item.currency}</h3>
                                         <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">${item.brand} ${item.model}</a>
                                         <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">${item.year} ${item.engine} ${item.odometer} ${item.odometerUnit}</a>
                                         <a rel="noopener noreferrer" href="#" class="text-xs tracking-wider uppercase hover: dark:text-violet-600 no-underline">${item.city} ${item.dates}</a>
                                     </div>
                     </article>
                     </a>
                    </div>
                   
    `
        })
    content.innerHTML = kod
    }else{
        handleError()
        btnArtir.style.display = 'none'
    }
   
}

show()


function artir() {
    count += 8
    show()
    if (count > data.length) btnArtir.style.display = 'none'
}




function filtr(axtar, select) {
    count = 8
    btnArtir.style.display = 'flex'
    const yeniArr = copyData.filter(item => item[axtar] == select.value)
    data = yeniArr
    show()
}

function etrafliAxtaris() {
    const marka = select[0].value
    const model = select[1].value
    const city = select[2].value
    const currency = select[3].value
    const etrafliAxtarisArr = copyData.filter(item =>
        item.brand == marka && item.model == model && item.city == city
    )
    data = etrafliAxtarisArr
    show()
}

function toggleFilter() {
    const filterDahaCox = document.getElementById("selects");
    filterDahaCox.classList.toggle("hidden");
}


function addToWish(e, id, price, currency, brand, model, images, index) {
    e.preventDefault()
    data[index].status = true
    const hearts = document.querySelectorAll('#heart')
    hearts[index].style.color = 'red'
    const obj = { id, price, currency, brand, model, images, count: 1 };
    const yoxla = basket.find((item => item.id == id))
    if (yoxla == undefined) {
        basket.push(obj)
    } else {
        yoxla.count = yoxla.count + 1
    }
    localStorage.setItem("basket",
        JSON.stringify(basket))
    showbasket()
}
// function addToWish(index) {
//     const element = data[index]
//     const id = element.id
//     const axtaris = basket.find(item => item.id == id)
//     if (!axtaris) {
//         element.count = 1
//         basket.push(element)
//     } else {
//         element.count = element.count + 1
//     }
//     showbasket()
// }

function handleSelect() {
    markaArr.map(item => {
        marka.innerHTML += `<option>${item}</option>`
    })

    modelArr.map(item => {
        model.innerHTML += `<option>${item}</option>`
    })

    cityArr.map(item => {
        city.innerHTML += `<option>${item}</option>`
    })

    currencyArr.map(item => {
        currency.innerHTML += `<option>${item}</option>`
    })

    banTypeArr.map(item => {
        banType.innerHTML += `<option>${item}</option>`
    })

    yearMinArr.map(item => {
        yearMin.innerHTML += `<option>${item}</option>`
    })

    yearMaxArr.map(item => {
        yearMax.innerHTML += `<option>${item}</option>`
    })
}
handleSelect()


function ehtiyyatHisse() {
    umumiContent.innerHTML = ""
    change.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklə ehtiyyat hissələr ve aksesuarlar əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a rel="noopener noreferrer" href="/src/index.html" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Back to homepage</a>
		</div>
	</div>
</section>`
}

 function dilerler(){
    umumiContent.innerHTML = ""
    change.innerHTML = "";
    change.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklə Dilerlər əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a rel="noopener noreferrer" href="/src/index.html" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Back to homepage</a>
		</div>
	</div>
</section>`
}

function avtoKataloq(){
    umumiContent.innerHTML = ""
    change.innerHTML = "";
    change.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklə Avtokataloq əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a rel="noopener noreferrer" href="/src/index.html" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Back to homepage</a>
		</div>
	</div>
</section>`
}

function moto(){
    umumiContent.innerHTML = ""
    change.innerHTML = "";
    change.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklə Moto əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a rel="noopener noreferrer" href="/src/index.html" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Back to homepage</a>
		</div>
	</div>
</section>`
}

function icare(){
    umumiContent.innerHTML = ""
    change.innerHTML = "";
    change.innerHTML = `<section class="flex items-center h-full p-16  dark:text-gray-800">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
				Tezliklə
			</h2>
			<p class="text-2xl font-semibold md:text-3xl">Tezliklə Icare əlavə ediləcək.</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Müvəqqəti narahatçılığa görə üzür istəyirik.</p>
			<a rel="noopener noreferrer" href="/src/index.html" class="px-8 py-3 font-semibold rounded dark: bg-red-700 dark:text-gray-50">Back to homepage</a>
		</div>
	</div>
</section>`
}



