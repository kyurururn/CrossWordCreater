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
             "　　　　キ",
             "　シシガミ",
             "　　タ　　",
             "　　ク　　"],
            ["　　　　　",
             "ヒコウセキ",
             "ト　　　　",
             "キミ　　　",
             "レ　　　　"],
            ["　　　　　",
             "　ネ　　　",
             "ヒコウセキ",
             "　バ　　　",
             "ムスカ　　"],
            ["　　コダマ",
             "　　ハ　　",
             "シタク　ム",
             "　　ヌ　ス",
             "　アシタカ"],
            ["　　コ　チ",
             "　　ダ　ヘ",
             "　カマジイ",
             "　バ　　セ",
             "　ン　セン"],
            ["　　シ　　",
             "　　タ　シ",
             "コハクヌシ",
             "ダ　　　ガ",
             "マ　　キミ"],
            ["　シ　ハ　",
             "　シタク　",
             "　ガ　　　",
             "　ミヤザキ",
             "　　　　ミ"],
            ["　　　　ミ",
             "　　　　ヤ",
             "チ　ボ　ザ",
             "ヒコウセキ",
             "ロ　　　　"]
           ]




let wo_n = [["     ",
             "    1",
             " 23  ",
             "     ",
             "     "],
            ["     ",
             "1    ",
             "     ",
             "2    ",
             "     "],
            ["     ",
             " 1   ",
             "2    ",
             "     ",
             "3    "],
            ["  1  ",
             "     ",
             "2   3",
             "     ",
             " 4   "],
            ["  1 2",
             "     ",
             " 3   ",
             "     ",
             "   4 "],
            ["  1  ",
             "    2",
             "3    ",
             "     ",
             "   4 "],
            [" 1 2 ",
             " 3   ",
             "     ",
             " 4  5",
             "     "],
            ["    1",
             "     ",
             "2 3  ",
             "4    ",
             "     "]
            ]

let wo_d = [{"1":"|","2":"-","3":"|"},
            {"1":"x","2":"-"},
            {"1":"|","2":"-","3":"-"},
            {"1":"x","2":"-","3":"|","4":"-"},
            {"1":"|","2":"|","3":"x","4":"-"},
            {"1":"|","2":"|","3":"x","4":"-"},
            {"1":"|","2":"|","3":"-","4":"-","5":"|"},
            {"1":"|","2":"|","3":"|","4":"-"}]

let keyw = [{"1":"キミ","2":"シシガミ","3":"シタク"},
            {"1":["ヒトキレ","ヒコウセキ"],"2":"キミ"},
            {"1":"ネコバス","2":"ヒコウセキ","3":"ムスカ"},
            {"1":["コハクヌシ","コダマ"],"2":"シタク","3":"ムスカ","4":"アシタカ"},
            {"1":"コダマ","2":"チヘイセン","3":["カバン","カマジイ"],"4":"セン"},
            {"1":"シタク","2":"シシガミ","3":["コダマ","コハクヌシ"],"4":"キミ"},
            {"1":"シシガミ","2":"ハク","3":"シタク","4":"ミヤザキ","5":"キミ"},
            {"1":"ミヤザキ","2":"チヒロ","3":"ボウ","4":"ヒコウセキ"}]

let hint = {"キミ":"「天空の城ラピュタ」の主題歌は「〇〇をのせて」",
            "シシガミ":"「もののけ姫」に出てくる深い森に住みつく神は？",
            "シタク":"ドーラ「40秒で〇〇〇しな！」",
            "ヒコウセキ":"「天空の城ラピュタ」に登場する青色に金色の模様の入った石",
            "ヒトキレ":"さあ　出掛けよう　〇〇〇〇のパン",
            "ネコバス":"サツキとメイを病院に連れて行った乗り物",
            "ムスカ":"「天空の城ラピュタ」の敵の大佐",
            "コハクヌシ":"「千と千尋の神隠し」のハクの本名はニギハヤミ〇〇〇〇〇",
            "コダマ":"「もののけ姫」に出てくる樹木に宿っている精霊",
            "カバン":"ナイフ　ランプ　〇〇〇に詰め込んで",
            "カマジイ":"「千と千尋の神隠し」でボイラー室に住んでいる老人",
            "チヘイセン":"あの〇〇〇〇〇　輝くのは　どこかに君を　隠しているから",
            "セン":"千尋は〇〇という名前に改名させられた",
            "ハク":"千尋を助けた竜に変身することができる男の子",
            "ミヤザキ":"ジブリの監督の一人は〇〇〇〇駿",
            "チヒロ":"「千と〇〇〇の神隠し」",
            "ボウ":"「千と千尋の神隠し」に出てくる湯婆婆の息子",
            "アシタカ":"「もののけ姫」に出てくる17才の主人公"
            }

let num = Math.floor(Math.random() * word.length)

document.getElementById("id").innerHTML = num + 7

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