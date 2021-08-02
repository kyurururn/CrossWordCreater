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
            "　　　ム　",
            "　バルス　",
            "　　　カ　",
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


