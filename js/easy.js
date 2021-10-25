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

let word = [["　　　　　",
             "　　　ム　",
             "　バルス　",
             "　　　カ　",
             "　　　　　"],
            ["　バ　　　",
             "　ル　　　",
             "ムスカ　　",
             "　　バ　　",
             "　サンプン"],
            ["　　　　　",
             "　　　ト　",
             "　カオナシ",
             "　ミ　リ　",
             "　キ　　　"],
            ["　　パ　　",
             "　　ズ　　",
             "ユバーバ　",
             "　ル　　　",
             "バステイ　"],
            ["　　ブ　　",
             "アシタカ　",
             "　　　オ　",
             "　　トナリ",
             "　　　シ　"],
            ["　　　　　",
             "　　メ　サ",
             "チヘイセン",
             "ヒ　　　プ",
             "ロ　　　ン"]

           ]




let wo_n = [["     ",
             "   1 ",
             " 2   ",
             "     ",
             "     "],
            [" 1   ",
             "     ",
             "2 3  ",
             "     ",
             " 4   "],
            ["     ",
             "   1 ",
             " 2   ",
             "     ",
             "     "],
            ["  1  ",
             "     ",
             "23   ",
             "     ",
             "4    "],
            ["  1  ",
             "2  3 ",
             "     ",
             "  4  ",
             "     "],
            ["     ",
             "  1 2",
             "3    ",
             "     ",
             "     "]


           ]

let wo_d = [{"1":"|","2":"-"},
            {"1":"|","2":"-","3":"|","4":"-"},
            {"1":"|","2":"x"},
            {"1":"|","2":"-","3":"|","4":"-"},
            {"1":"|","2":"-","3":"|","4":"-"},
            {"1":"|","2":"|","3":"x"}
           ]

let keyw = [{"1":"ムスカ","2":"バルス"},
            {"1":"バルス","2":"ムスカ","3":"カバン","4":"サンプン"},
            {"1":"トナリ","2":["カミキ","カオナシ"]},
            {"1":"パズー","2":"ユバーバ","3":"バルス","4":"バステイ"},
            {"1":"ブタ","2":"アシタカ","3":"カオナシ","4":"トナリ"},
            {"1":"メイ","2":"サンプン","3":["チヒロ","チヘイセン"]}
          ]

let hint = {"ムスカ":"「天空の城ラピュタ」に出てくる敵の大佐",
            "バルス":"ラピュタ崩壊の呪文",
            "カバン":"ナイフ　ランプ　〇〇〇に詰め込んで",
            "サンプン":"ムスカ「〇〇〇〇間待ってやる」",
            "カミキ":"「千と千尋の神隠し」に出てくる坊の声優は〇〇〇隆之介",
            "カオナシ":"「千と千尋の神隠し」に出てくる黒くて仮面を被った幽霊（？）",
            "トナリ":"〇〇〇のトトロ",
            "メイ":"「となりのトトロ」に出てくるサツキの妹は？",
            "チヒロ":"「千と〇〇〇の神隠し」",
            "ユバーバ":"「千と千尋の神隠し」に出てくる千尋を千と命名した婆",
            "バステイ":"サツキとメイがトトロと一緒にネコバスを待っていた場所",
            "アシタカ":"「もののけ姫」に出てくる17才の主人公",
            "ブタ":"「千と千尋の神隠し」で千尋の両親が変身させられた動物は？",
            "チヘイセン":"あの〇〇〇〇〇　輝くのは　どこかに君を　隠しているから",
            "パズー":"「天空の城ラピュタ」の主人公の男の子"}

let num = Math.floor(Math.random() * word.length)

document.getElementById("id").innerHTML = num + 1

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