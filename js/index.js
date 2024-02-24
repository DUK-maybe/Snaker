const dictionary = {
    Bungarus_fasciatus:{
        length:["2 mét","2m","2 meters","khoảng 2 mét"],
        color:["vàng sọc đen","vàng kèm đen","vàng","kem"],
        link:"./Bungarus_fasciatus.html",
        img:"./img/Bungarus_fasciatus.jpg",
        name:"Bungarus fasciatus"
    }
}
//have to fixed later
function find(){
    const inputColor = document.getElementById("color")
    const lengthInput = document.getElementById("length")
    const div = document.getElementById("result")
    const div2 = document.getElementById("removedDictionary")
    const dict = document.createElement("div")
    dict.setAttribute("class","dict")
    const dict_but = document.createElement("a")
    dict_but.setAttribute("class","dict_but")
    const image = document.createElement("img")
    image.setAttribute("class","image")
    const overlay = document.createElement("div")
    overlay.setAttribute("class","overlay")
    const text = document.createElement("div")
    text.setAttribute("class","text")
    div.innerHTML="Kết quả tìm kiếm:"
    dict.appendChild(dict_but)
    dict_but.appendChild(image)
    overlay.appendChild(text)
    dict_but.appendChild(overlay)
    if (dictionary.Bungarus_fasciatus.color.includes(inputColor.value.toLowerCase()) && dictionary.Bungarus_fasciatus.length.includes(lengthInput.value.toLowerCase())){
        div.innerHTML="Kết quả tìm kiếm:\n có thể bạn đã gặp phải:"+dictionary.Bungarus_fasciatus.name
        text.innerHTML=dictionary.Bungarus_fasciatus.name
        dict_but.setAttribute("href",dictionary.Bungarus_fasciatus.link)
        image.setAttribute("src",dictionary.Bungarus_fasciatus.img)
        div2.innerHTML=""
        div2.appendChild(dict)
    }
}