function button(ele){
    select = ele.id

    document.getElementById("stock").style.visibility = "visible"
    document.getElementById("stock").style.display = "block"
    $(function(){
        $(".stock").animate({opacity:1},500)
    })
}

function character(bool,ele){
    moji = ele

    document.getElementById("stock").style.visibility = "hidden"
    document.getElementById("stock").style.display = "none"
    document.getElementById("stock").style.opacity = 0
    if(bool){
    
        document.getElementById(select).children[0].innerHTML = moji
    
        judge = true
        for(let i = 0; i < 5; i++){
            ju = ""
            for(let j = 0; j < 5; j++){
                if(document.getElementById(String(i) + String(j)).children[0].innerHTML == ""){
                    ju += "　"
                }else{
                    ju += document.getElementById(String(i) + String(j)).children[0].innerHTML
                }
                
            }
            judge = judge && ju == word[num][i]
        }
    
        if(judge){
            document.getElementById("correct").style.visibility = "visible"
            document.getElementById("correct").style.display = "block"
            $(function(){
                $(".correct").animate({opacity:1},500)
            })
        }
    }
}


let select = 0

let word = [["　　　　マ",
             "　マ　　ド",
             "ダツフイー",
             "　ジ　　ラ",
             "　　　　　"],
            ["　　　　　",
             "　ゴ　　　",
             "　リ　　　",
             "　アンリ　",
             "　テ　サ　"],
            ["　マツジ　",
             "　ド　　　",
             "　ー　　　",
             "　ラピユタ",
             "　　　　　"]]


let wo_n = [["    1",
             " 2   ",
             "3    ",
             "     ",
             "     "],
            ["     ",
             " 1   ",
             "     ",
             " 2 3 ",
             "     "],
            [" 1   ",
             "     ",
             "     ",
             " 2   ",
             "     "]
            ]

let wo_d = [{"1":"|","2":"|","3":"-"},
            {"1":"|","2":"-","3":"|"},
            {"1":"x","2":"-"}]

let keyw = [{"1":"マドーラ","2":"マッジ","3":"ダッフィー"},
            {"1":"ゴリアテ","2":"アンリ","3":"リサ"},
            {"1":["マドーラ","マッジ"],"2":"ラピュタ"}]

let hint = {"ダッフィー":"「天空の城ラピュタ」のパズーの親方",
            "マッジ":"「天空の城ラピュタ」のパズーの親方夫妻の娘",
            "マドーラ":"タイガーモス号の船長",
            "ゴリアテ":"「天空の城ラピュタ」に登場する政府軍最強の飛行戦艦",
            "アンリ":"「天空の城ラピュタ」に出てくるドーラー家の三男",
            "リサ":"「千と千尋の神隠し」に出てくる千尋が書いたメッセージカードに書かれている千尋の友人の名前",
            "ラピュタ":"ムスカの本名は「ロムスカ・パロ・ウル・〇〇〇〇」"
           }

let num = 1 //Math.floor(Math.random() * word.length)

document.getElementById("id").innerHTML = num

preparation()

function preparation(){
    for(let i = 0; i < word[num].length; i++){
        for(let j = 0; j < word[num][i].length; j++){
            if(word[num][i][j] == "　"){
                document.getElementById(String(i)+String(j)).style.visibility = "hidden"
            }else{
                document.getElementById(String(i)+String(j)).style.visibility = "visible"
            }
        }
    }
    for(let i = 0; i < wo_n[num].length; i++){
        for(let j = 0; j < wo_n[num][i].length; j++){
            document.getElementById(String(i)+String(j)).children[1].innerHTML = wo_n[num][i][j]
            if(wo_d[num][wo_n[num][i][j]] == "|"){
                document.getElementById("key_t").innerHTML += wo_n[num][i][j] + ":" + hint[keyw[num][wo_n[num][i][j]]] + "<br>"
            }else if(wo_d[num][wo_n[num][i][j]] == "-"){
                document.getElementById("key_y").innerHTML += wo_n[num][i][j] + ":" + hint[keyw[num][wo_n[num][i][j]]] + "<br>"
            }else if(wo_d[num][wo_n[num][i][j]] == "x"){
                document.getElementById("key_t").innerHTML += wo_n[num][i][j] + ":" + hint[keyw[num][wo_n[num][i][j]][0]] + "<br>"
                document.getElementById("key_y").innerHTML += wo_n[num][i][j] + ":" + hint[keyw[num][wo_n[num][i][j]][1]] + "<br>"
            }
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