const dictionary = {
    Bungarus_fasciatus:{
        length:["2 mét","2m","2 meters","khoảng 2 mét"],
        color:["vàng sọc đen","vàng kèm đen","vàng","kem"]
    }
}
function find(){
    const inputColor = document.getElementById("color")
    const lengthInput = document.getElementById("length")
    const div = document.getElementById("result")
    div.innerHTML="Kết quả tìm kiếm:"
    if (inputColor.value.toLowerCase()=="vàng".toLowerCase() && lengthInput.value.toLowerCase()=="2m"){
        div.innerHTML="Kết quả tìm kiếm:"
        var down = document.createElement("br")
        var find = document.createElement("a")
        find.setAttribute("href","Bungarus_fasciatus.html" )
        var textNode = document.createTextNode("lmao")
        find.appendChild(textNode)
        div.appendChild(down)
        div.appendChild(find)

    }
}