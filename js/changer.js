

//type frozen,lou
var convert_list = {

    //禁止用語変換
    "死ね":
    {
        "text": ["輝け(ローマ字読み)"],
        "frozen": true
    },
    "殺す":
    {
        "text": ["杀殳す"],
        "frozen": true
    },
    "殺害":
    {
        "text": ["ホロコースト"],
        "frozen": true
    },
    "障害者":
    {
        "text": ["SHOW GUY SHA","PerfectHuman(24時間TV)"],
        "frozen": true
    },
    "障害":
    {
        "text": ["SHOW GUY"],
        "frozen": true
    },
    "ガイ":
    {
        "text": ["GUY"],
        "frozen": true
    },
    "害":
    {
        "text": ["GUY"],
        "frozen": true
    },
    "手帳":
    {
        "text": ["📘"],
        "frozen": true
    },
    "統合失調症":
    {
        "text": ["糖質","糖度が高い"],
        "frozen": true
    },
    "キチガイ":
    {
        "text": ["キチゲェ"],
        "frozen": true
    },
    "カスが":
    {
        "text": ["春日"],
        "frozen": true
    },
    "カス":
    {
        "text": ["春"],
        "frozen": true
    },

    //お姫語録
    "話す":
    {
        "text": ["玉音放送"],
        "low": true
    },
    "クソゲー":
    {
        "text": ["ゲー無"],
        "low": true ,
    },


    //悪芋変換陽
    "います":
    {
        "text": ["いるんだぜ"],
        "low": true
    },
    "否":
    {
        "text": ["ノー"],
        "low": true
    },
    "弟":
    {
        "text": ["リトルブラザー"],
        "low": true
    },
    "名前":
    {
        "text": ["ネーム"],
        "low": true
    },
    "一":
    {
        "text": ["ワン"],
        "low": true
    },
    "違い":
    {
        "text": ["ディファレント"],
        "low": true
    },
    "たが":
    {
        "text": ["たBut"],
        "low": true
    },
    "私":
    {
        "text": ["マイセルフ","マイ"],
        "low": true
    },
    "芋":
    {
        "text": ["ポテト"],
        "low": true
    },
    "川":
    {
        "text": ["リバー"],
        "low": true
    },
    "河":
    {
        "text": ["リバー"],
        "low": true
    },
    "あっ":
    {
        "text": ["Aっ"],
        "low": true
    },
    "日":
    {
        "text": ["DAY"],
        "low": true
    },
    "自殺":
    {
        "text": ["殺害"],
        "low": true ,
        "frozen": false
    },
    "中":
    {
        "text": ["インサイト"],
        "low": true ,
    },
    "いつも":
    {
        "text": ["Yesつも"],
        "low": true ,
    },
    //ここよりオリジナル
    "自我":
    {
        "text": ["エゴ"],
        "low": true ,
    },
    "戦う":
    {
        "text": ["ファイト"],
        "low": true ,
    },
};


function initialize() {
    //仮

    const ta = document.getElementById("origin_text_area");
    ta.value =
        `当職の弟を当職が殺したなどという当職のアイデンティティを否定する投稿が多数なされておりました。
当職の弟は厚史という名前でした。一つ違いの弟でした。喧嘩もしましたが、私にとってのかけがいのない弟でした。
弟は、地元の悪いもの達に、恐喝され、多摩川の河川敷で、集団暴行にあった翌日に親にもいえず自殺しました。
弟が16、私が17のことでした。
私の中にはいつも弟がいます。`;

}

function changeText() {
    var ta = document.getElementById("origin_text_area");
    var text = ta.value;
    for (const key in convert_list) {
        //const randomIndex = Math.floor(Math.random() * convert_list[key].length);
        const regex = new RegExp(key, 'g'); // 変数 apple を使って正規表現を作成
        text = text.replace(regex, convert_list[key]["text"][0]);
        //document.getElementById("change_text_area").value = convert_list[key]["text"][0];
    }
    document.getElementById("change_text_area").value = text;
}

initialize();