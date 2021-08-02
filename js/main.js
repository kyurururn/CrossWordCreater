function button(ele){
    select = ele.id

    document.getElementById("stock").style.visibility = "visible"
    document.getElementById("stock").style.display = "block"
    $(function(){
        $(".stock").animate({opacity:1},500)
    })
}

function character(ele){
    moji = ele

    document.getElementById("stock").style.visibility = "hidden"
    document.getElementById("stock").style.display = "none"
    document.getElementById("stock").style.opacity = 0

    document.getElementById(select).innerHTML = moji

    judge = true
    for(let i = 0; i < 5; i++){
        ju = ""
        for(let j = 0; j < 5; j++){
            if(document.getElementById(String(i) + String(j)).innerHTML == ""){
                ju += "　"
            }else{
                ju += document.getElementById(String(i) + String(j)).innerHTML
            }
            
        }
        judge = judge && ju == word[i]
    }

    if(judge){
        document.getElementById("correct").style.visibility = "visible"
        document.getElementById("correct").style.display = "block"
        $(function(){
            $(".correct").animate({opacity:1},500)
        })
    }
}


let select = 00

let word = ["　　　　　",
            "　　ム　　",
            "バルス　　",
            "　　カバン",
            "　　　　　"]

for(let i = 0; i < word.length; i++){
    for(let j = 0; j < word[i].length; j++){
        if(word[i][j] == "　"){
            document.getElementById(String(i)+String(j)).style.visibility = "hidden"
        }else{
            document.getElementById(String(i)+String(j)).style.visibility = "visible"
        }
    }
}


document.addEventListener("keypress",(event) => {
    let key = event.key
    if(key == "r"){
        document.getElementById("correct").style.visibility = "hidden"
        document.getElementById("correct").style.display = "none"
        document.getElementById("correct").style.opacity = 0
        document.getElementById("00").innerHTML = "　"
        document.getElementById("01").innerHTML = "　"
        document.getElementById("02").innerHTML = "　"
        document.getElementById("03").innerHTML = "　"
        document.getElementById("04").innerHTML = "　"
        document.getElementById("10").innerHTML = "　"
        document.getElementById("11").innerHTML = "　"
        document.getElementById("12").innerHTML = "　"
        document.getElementById("13").innerHTML = "　"
        document.getElementById("14").innerHTML = "　"
        document.getElementById("20").innerHTML = "　"
        document.getElementById("21").innerHTML = "　"
        document.getElementById("22").innerHTML = "　"
        document.getElementById("23").innerHTML = "　"
        document.getElementById("24").innerHTML = "　"
        document.getElementById("30").innerHTML = "　"
        document.getElementById("31").innerHTML = "　"
        document.getElementById("32").innerHTML = "　"
        document.getElementById("33").innerHTML = "　"
        document.getElementById("34").innerHTML = "　"
        document.getElementById("40").innerHTML = "　"
        document.getElementById("41").innerHTML = "　"
        document.getElementById("42").innerHTML = "　"
        document.getElementById("43").innerHTML = "　"
        document.getElementById("44").innerHTML = "　"
    }
})