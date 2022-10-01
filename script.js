// import {data} from './2/data'
const data = [
    {
        preTitle: 'GET READY',
        title: 'Save time at iPhone pre-order',
        description: 'Get ready for iPhone 13 and iPhone 13 Pro pre-order now. Then speed through checkout on 9.17.',
        img: '1',
    },
    {
        preTitle: 'PRE-ORDER 9.17',
        title: 'iPhone 13 Pro. Oh. So. Pro.',
        description: 'From $999 or $41.62/mo. for 24 mo. before trade-in*',
        img: '2',
    },

    {
        preTitle: 'IPAD MINI',
        title: 'Mega power. Mini sized. ',
        description: 'From $499 or $41.58/mo. for 12 mo.',
        img: '3',
    },

]
let body = document.body
let contOne = document.createElement('div')


contOne.classList.add('contOne')






for (let item of data) {
    let Box = document.createElement('div')
    let span = document.createElement('span')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')


    Box.classList.add('Box')
    span.classList.add('span')
    h1.classList.add('h1')
    p.classList.add('p')

    span.innerHTML = item.preTitle
    h1.innerHTML = item.title
    p.innerHTML = item.description
    Box.style.backgroundImage = `url(./2/img/${item.img}.jpg)`

    contOne.append(Box)
    Box.append(span, h1, p)

}





const dataTwo = [
    {
        title: 'MacBook Air',
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        Macswap: {
            C7C8CA: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
            B1B2B7: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
            E3CCB4: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000',
        },
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: '',
                img: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency',
                img: 'memory.png'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653509456456',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        Macswap: {
            C7C8CA: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653509456456',
            B1B2B7: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207',

        },
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor',
                img: 'm1.png'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
                ,
                img: 'm1.png'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 16”',
        price: 999,
        img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788573000',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        Macswap: {
            C7C8CA: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788573000',
            B1B2B7: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000',
        },
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: '',
                img: 'intel.png'
            },
            ram: {
                title: 'Up to 64GB memory',
                description: '',
                img: 'memory2.png'
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]


let contTwo = document.createElement('div')


contTwo.classList.add('contTwo')


body.append(contOne, contTwo)




for (let item of dataTwo) {
    let MacMain = document.createElement('div')

    let MacImgBox = document.createElement('div')
    let MacImg = document.createElement('img')
    let MacH1 = document.createElement('h1')
    let MacPrice = document.createElement('p')
    let MacColors = document.createElement('div')
    let MacBuyLink = document.createElement('a')
    let MacBuyBtn = document.createElement('button')
    MacMain.classList.add('MacMain')
    MacImgBox.classList.add('MacImgBox')
    MacImg.classList.add('MacImg')
    MacH1.classList.add('MacH1')
    MacPrice.classList.add('MacPrice')
    MacColors.classList.add('MacColors')
    MacBuyLink.classList.add('MacBuyLink')
    MacBuyBtn.classList.add('MacBuyBtn')


    MacImg.src = item.img
    MacH1.innerHTML = item.title
    MacPrice.innerHTML = `From $${item.price}`
    MacBuyBtn.innerHTML = 'Buy'
    MacBuyLink.href = item.url

    for (let color of item.colors) {
        let MacColor = document.createElement('div')
        MacColor.classList.add('MacColor')

        MacColor.style.backgroundColor = color

        // let met = MacColor.setAttribute('')  

        MacColor.onclick = () => {
            let aa = color.slice(1)
            MacImg.src = item.Macswap[aa]
        }


        MacColors.append(MacColor)
    }


    let hr = document.createElement('div')

    hr.classList.add('hr')


    let MacDisplayBox = document.createElement('div')
    let MacDisplay = document.createElement('h1')
    let MacDisplayP = document.createElement('p')

    MacDisplayBox.classList.add('MacDisplayBox')
    MacDisplay.classList.add('MacDisplay')
    MacDisplayP.classList.add('MacPrice')

    MacDisplay.innerHTML = `${item.specs.display.size}”`
    MacDisplayP.innerHTML = item.specs.display.title


    let MacchipBox = document.createElement('div')
    let MacchipImg = document.createElement('img')
    let Macchiptitle = document.createElement('p')
    let Macchipdescription = document.createElement('p')



    MacchipBox.classList.add('MacchipBox')

    MacchipImg.classList.add('MacchipImg')
    Macchiptitle.classList.add('MacPrice')
    Macchipdescription.classList.add('Macchipdescription')

    MacchipImg.src = `./3/img/${item.specs.chip.img}`

    Macchiptitle.innerHTML = item.specs.chip.title
    Macchipdescription.innerHTML = item.specs.chip.description


    let MacramBox = document.createElement('div')
    let MacramImg = document.createElement('img')
    let Macramtitle = document.createElement('p')
    let Macramdescription = document.createElement('p')



    MacramBox.classList.add('MacramBox')

    MacramImg.classList.add('MacramImg')
    Macramtitle.classList.add('MacPrice')
    Macramdescription.classList.add('Macramdescription')

    MacramImg.src = `./3/img/${item.specs.ram.img}`

    Macramtitle.innerHTML = item.specs.ram.title
    Macramdescription.innerHTML = item.specs.ram.description





    let MacmemoryBox = document.createElement('div')
    let MacmemorySixe = document.createElement('p')
    let Macmemorydescription = document.createElement('p')



    MacmemoryBox.classList.add('MacmemoryBox')

    MacmemorySixe.classList.add('MacDisplay')
    Macmemorydescription.classList.add('MacPrice')


    MacmemorySixe.innerHTML = `${item.specs.memory.size} ${item.specs.memory.type.toUpperCase()}`
    Macmemorydescription.innerHTML = 'Maximum configurable storage <sup>2</sup>'







    let MacbatteryBox = document.createElement('div')
    let MacbatteryImg = document.createElement('img')
    let Macbattery = document.createElement('p')



    MacbatteryBox.classList.add('MacramBox')

    MacbatteryImg.classList.add('MacramImg')
    Macbattery.classList.add('MacPrice')

    MacbatteryImg.src = `./3/img/battery.png`

    Macbattery.innerHTML = `Up to ${item.specs.battery} hours battery life <sup>8</sup>`



    let MaccameraBox = document.createElement('div')
    let MaccameraImg = document.createElement('img')
    let Maccameratitle = document.createElement('p')
    let Maccameradescription = document.createElement('p')



    MaccameraBox.classList.add('MacramBox')

    MaccameraImg.classList.add('MacramImg')
    Maccameratitle.classList.add('MacPrice')
    Maccameradescription.classList.add('Macramdescription')

    MaccameraImg.src = `./3/img/video.png`

    Maccameratitle.innerHTML = item.specs.camera.title
    Maccameradescription.innerHTML = item.specs.camera.description




    let MacweightBox = document.createElement('div')
    let MacweightSixe = document.createElement('p')
    let Macweightdescription = document.createElement('p')



    MacweightBox.classList.add('MacmemoryBox')

    MacweightSixe.classList.add('MacDisplay')
    Macweightdescription.classList.add('MacPrice')


    MacweightSixe.innerHTML = `${item.specs.weight}. Ib. `
    Macweightdescription.innerHTML = 'Weight'

    let MacotherBoxMain = document.createElement('div')

    let MacotherBox = document.createElement('div')
    let Macotherimg = document.createElement('img')
    let Macotherdescription = document.createElement('p')
    let Macotherimga = document.createElement('img')
    let Macotherimgd = document.createElement('img')


    MacotherBoxMain.classList.add('MacotherBoxMain')
    MacotherBox.classList.add('MacotherBox')
    Macotherdescription.classList.add('MacPrice')

    if (item.specs.other.length === 1) {
        Macotherimg.src = './3/img/fingerprint-256.webp'
        Macotherdescription.innerHTML = item.specs.other
        MacotherBox.append(Macotherimg)
    } else if (item.specs.other.length === 3) {
        Macotherimg.src = 'https://cdn1.iconfinder.com/data/icons/photo-editor-3/24/i24_photoedit_brightness-128.png'
        Macotherimga.src = 'https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/speaker-high-sound-volume-voice-128.png'
        Macotherimgd.src = './3/img/fingerprint-256.webp'
        Macotherdescription.innerHTML = `${item.specs.other[0]} , ${item.specs.other[1]} and ${item.specs.other[2]}`
        MacotherBox.append(Macotherimg, Macotherimga, Macotherimgd)
    }


    let hrTwo = document.createElement('div')

    hrTwo.classList.add('hr')


    let Lern = document.createElement('p')
    let Lernlink = document.createElement('a')


    Lernlink.classList.add('Lernlink')

    Lernlink.innerHTML = 'Learn More >'
    Lernlink.href = item.url







    contTwo.append(MacMain)
    //
    MacMain.append(MacImgBox, hr, MacDisplayBox, MacchipBox, MacramBox, MacmemoryBox, MacbatteryBox, MaccameraBox, MacweightBox, MacotherBoxMain, hrTwo, Lern)
    //
    MacImgBox.append(MacImg, MacH1, MacPrice, MacColors, MacBuyLink)
    MacBuyLink.append(MacBuyBtn)
    //
    MacDisplayBox.append(MacDisplay, MacDisplayP)
    //
    MacchipBox.append(MacchipImg, Macchiptitle, Macchipdescription)
    //
    MacramBox.append(MacramImg, Macramtitle, Macramdescription)
    //
    MacmemoryBox.append(MacmemorySixe, Macmemorydescription)
    //
    MacbatteryBox.append(MacbatteryImg, Macbattery)
    //
    MaccameraBox.append(MaccameraImg, Maccameratitle, Maccameradescription)
    //
    MacweightBox.append(MacweightSixe, Macweightdescription)
    //
    MacotherBoxMain.append(MacotherBox, Macotherdescription)
    //
    Lern.append(Lernlink)

}