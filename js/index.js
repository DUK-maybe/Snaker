const dictionary = {
    Bungarus_fasciatus:{
        length:[2],
        color:["vàng sọc đen","vàng kèm đen","vàng","kem"],
        link:"./snake/Bungarus_fasciatus.html",
        img:"./img/Bungarus_fasciatus.jpg",
        name:"Bungarus fasciatus"
    },
    Ophiophagus_hannah:{
        length:[2,5],
        color:["vàng lục","vàng","nâu","đen"],
        link:"./snake/Ophiophagus_hannah.html",
        img:"./img/Ophiophagus_hannah.jpg",
        name:"Ophiophagus hannah"
    }
}
//have to fixed later
function find(){
    const inputColor = document.getElementById("color")
    const lengthInput = document.getElementById("length1")
    const lengthInput2 = document.getElementById("length2")
    const city = document.getElementById("city")
    if (lengthInput2.value==''||lengthInput2.value==undefined){
        lengthInput2.value="-"
    }
    const div = document.getElementById("result")
    const div2 = document.getElementById("removedDictionary")
    
    div.innerHTML="Kết quả tìm kiếm: có thể bạn đã gặp phải:"
    div2.innerHTML=""
    if (dictionary.Bungarus_fasciatus.color.includes(inputColor.value.toLowerCase()) && (Number(lengthInput.value)>=dictionary.Bungarus_fasciatus.length[0] || Number(lengthInput2.value)>=dictionary.Bungarus_fasciatus.length[1])){
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
        dict.appendChild(dict_but)
        dict_but.appendChild(image)
        overlay.appendChild(text)
        dict_but.appendChild(overlay)
        div.innerHTML+=dictionary.Bungarus_fasciatus.name+","
        text.innerHTML=dictionary.Bungarus_fasciatus.name
        dict_but.setAttribute("href",dictionary.Bungarus_fasciatus.link)
        image.setAttribute("src",dictionary.Bungarus_fasciatus.img)
        div2.appendChild(dict)
        // const desc = document.createElement("p")
        // desc.innerHTML="Nhấn vào ảnh để biết thêm chi tiết"
        // div2.appendChild(desc)
    } 
    if (dictionary.Ophiophagus_hannah.color.includes(inputColor.value.toLowerCase()) && (Number(lengthInput.value)>=dictionary.Ophiophagus_hannah.length[0] || Number(lengthInput2.value)<=dictionary.Ophiophagus_hannah.length[1])){
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
        dict.appendChild(dict_but)
        dict_but.appendChild(image)
        overlay.appendChild(text)
        dict_but.appendChild(overlay)
        div.innerHTML+=dictionary.Ophiophagus_hannah.name,
        text.innerHTML=dictionary.Ophiophagus_hannah.name
        dict_but.setAttribute("href",dictionary.Ophiophagus_hannah.link)
        image.setAttribute("src",dictionary.Ophiophagus_hannah.img)
        div2.appendChild(dict)
        
    }
    const div3 = document.getElementById("afterInsert")
    const desc = document.createElement("p")
    desc.innerHTML="Nhấn vào ảnh để biết thêm chi tiết"
    div3.appendChild(desc)
}