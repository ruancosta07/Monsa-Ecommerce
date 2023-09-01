document.querySelector('body').addEventListener('click', (e) => {
    e.preventDefault()
})

let grid = document.querySelectorAll('[data-anime]')

function showGrid() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.98)
    grid.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate')
        }
        else {
            element.classList.remove('animate')
        }
    })
}

showGrid()

window.addEventListener('scroll', function () {
    showGrid()
})





let imgEnter1 = document.querySelector('.sale-img1').addEventListener('mouseenter', () => {
    document.querySelector('.sale-img1 img').classList.add('img-mouse-enter')
    document.querySelector('.a1').classList.add('a-mouse-enter')
})

let imgOut1 = document.querySelector('.sale-img1').addEventListener('mouseleave', () => {
    document.querySelector('.sale-img1 img').classList.remove('img-mouse-enter')
    document.querySelector('.a1').classList.remove('a-mouse-enter')
})


let imgEnter2 = document.querySelector('.sale-img2').addEventListener('mouseenter', () => {
    document.querySelector('.sale-img2 img').classList.add('img-mouse-enter')
    document.querySelector('.a2').classList.add('a-mouse-enter')
})

let imgOut2 = document.querySelector('.sale-img2').addEventListener('mouseleave', () => {
    document.querySelector('.sale-img2 img').classList.remove('img-mouse-enter')
    document.querySelector('.a2').classList.remove('a-mouse-enter')
})

let imgEnter3 = document.querySelector('.sale-img3').addEventListener('mouseenter', () => {
    document.querySelector('.sale-img3 img').classList.add('img-mouse-enter')
    document.querySelector('.a3').classList.add('a-mouse-enter')
})

let imgOut3 = document.querySelector('.sale-img3').addEventListener('mouseleave', () => {
    document.querySelector('.sale-img3 img').classList.remove('img-mouse-enter')
    document.querySelector('.a3').classList.remove('a-mouse-enter')
})

let imgClick1 = document.querySelector('.sale-img1').addEventListener('click', () => {
    document.querySelector('.sale-img1 img').classList.toggle('img-click')
    document.querySelector('.a1').classList.toggle('a-click')
})

let imgClick2 = document.querySelector('.sale-img2').addEventListener('click', () => {
    document.querySelector('.sale-img2 img').classList.toggle('img-click')
    document.querySelector('.a2').classList.toggle('a-click')
})

let imgClick3 = document.querySelector('.sale-img3').addEventListener('click', () => {
    document.querySelector('.sale-img3 img').classList.toggle('img-click')
    document.querySelector('.a3').classList.toggle('a-click')
})


//funcionalidade must have

let all = document.querySelectorAll('.mh-grid div')
let allBtn = document.querySelector('.mh-a-1')

let man = document.querySelectorAll('.man')

let manBtn = document.querySelector('.mh-a-2')

let woman = document.querySelectorAll('.woman')

let womanBtn = document.querySelector('.mh-a-3')

let bag = document.querySelectorAll('.bag')

let bagBtn = document.querySelector('.mh-a-4')

let shoes = document.querySelectorAll('.shoes')

let shoesBtn = document.querySelector('.mh-a-5')


//evento que mostra todos os elementos do container must have
allBtn.addEventListener('click', () => {
    all.forEach((element) => {
        element.classList.remove('displayNone')
    })
})
//evento que mostra apenas os acessórios masculinos
manBtn.addEventListener('click', () => {
    woman.forEach((element) => {
        element.classList.add('displayNone')
    })
    bag.forEach((element) => {
        element.classList.add('displayNone')
    })
    shoes.forEach((element) => {
        element.classList.add('displayNone')
    })
    man.forEach((element) => {
        element.classList.remove('displayNone')
    })
})

womanBtn.addEventListener('click', () => {
    man.forEach((element) => {
        element.classList.add('displayNone')
    })
    shoes.forEach((element) => {
        element.classList.add('displayNone')
    })
    bag.forEach((element) => {
        element.classList.add('displayNone')
    })
    woman.forEach((element) => {
        element.classList.remove('displayNone')
    })
})

bagBtn.addEventListener('click', () => {
    man.forEach((element) => {
        element.classList.add('displayNone')
    })
    shoes.forEach((element) => {
        element.classList.add('displayNone')
    })
    bag.forEach((element) => {
        element.classList.remove('displayNone')
    })
    woman.forEach((element) => {
        element.classList.add('displayNone')
    })
})

shoesBtn.addEventListener('click', () => {
    man.forEach((element) => {
        element.classList.add('displayNone')
    })
    bag.forEach((element) => {
        element.classList.add('displayNone')
    })
    woman.forEach((element) => {
        element.classList.add('displayNone')
    })
    shoes.forEach((element) => {
        element.classList.remove('displayNone')
    })
})

