

//type frozen,lou
var convert_list = {

    //禁止用語変換
    "死ね":
    {
        "text": ["輝け(ローマ字読み)","ごSAY去遊ばせ"],
        "frozen": true
    },
    "殺":
    {
        "text": ["杀殳", "Kill"],
        "frozen": true
    },
    "殺害":
    {
        "text": ["杀殳GUY", "ホロコースト"],
        "frozen": true
    },
    "障害者":
    {
        "text": ["SHOW GUY SHA", "PerfectHuman(24時間TV)","天使ちゃん","てんす"],
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
        "text": ["糖質", "糖度が高い"],
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
        "lou": true
    },
    "クソゲー":
    {
        "text": ["ゲー無"],
        "lou": true,
    },


    //悪芋変換陽
    "私の":
    {
        "text": ["マイ"],
        "lou": true,
        "loulv":1,
    },
    "います":
    {
        "text": ["いるんだぜ"],
        "lou": true
    },
    "否":
    {
        "text": ["ノー"],
        "lou": true,
        "loulv":1,
    },
    "弟":
    {
        "text": ["リトルブラザー"],
        "lou": true,
        "loulv":2,
    },
    "名前":
    {
        "text": ["ネーム"],
        "lou": true,
        "loulv":1,
    },
    "一":
    {
        "text": ["ワン"],
        "lou": true,
        "loulv":1,
    },
    "違い":
    {
        "text": ["ディファレント"],
        "lou": true,
        "loulv":1,
    },
    "たが":
    {
        "text": ["たBut"],
        "lou": true,
        "loulv":1,
    },
    "私":
    {
        "text": ["my self","マイセルフ", "マイ"],
        "lou": true,
        "loulv":1,
    },
    "いも":
    {
        "text": ["ポテト"],
        "lou": true,
        "loulv":1,
    },
    "川":
    {
        "text": ["リバー"],
        "lou": true,
        "loulv":1,
    },
    "河":
    {
        "text": ["リバー"],
        "lou": true,
        "loulv":1,
    },
    "あっ":
    {
        "text": ["Aっ"],
        "lou": true,
        "loulv":1,
    },
    "日":
    {
        "text": ["DAY"],
        "lou": true,
        "loulv":1,
    },
    "自殺":
    {
        "text": ["殺害"],
        "lou": true,
        "frozen": false,
        "loulv":3,
    },
    "中には":
    {
        "text": ["インサイドには"],
        "lou": true,
        "loulv":3,
    },
    "中":
    {
        "text": ["in","イン"],
        "lou": true,
        "loulv":1,
    },
    "いつも":
    {
        "text": ["Yesつも"],
        "lou": true,
        "loulv":2,
    },
    //ここよりオリジナル
    "自我":
    {
        "text": ["エゴ"],
        "lou": true,
        "loulv":1,
    },
    "戦う":
    {
        "text": ["ファイト"],
        "lou": true,
        "loulv":2,
    },
    "男性":
    {
        "text": ["メン"],
        "lou": true,
        "loulv":1,
    },
    "角":
    {
        "text": ["ホーン"],
        "lou": true,
        "loulv":2,
    },
    "男":
    {
        "text": ["マン"],
        "lou": true,
        "loulv":1,
    },
    "性":
    {
        "text": ["Sex"],
        "lou": true,
        "loulv":1,
    },
    "差別":
    {
        "text": ["Hate","ヘイト"],
        "lou": true,
        "loulv":2,
    },
    "ついた":
    {
        "text": ["アタッチ"],
        "lou": true,
        "loulv":3,
    },
    "火":
    {
        "text": ["ファイア"],
        "lou": true,
        "loulv":3,
    },
    "線":
    {
        "text": ["ライン"],
        "lou": true,
        "loulv":3,
    },
    "絶対":
    {
        "text": ["絶Pair","アブソリュート"],
        "lou": true,
        "loulv":4,
    },
    "許":
    {
        "text": ["forfive"],
        "lou": true,
        "loulv":4,
    },
    "ねぇ":
    {
        "text": ["no","not exist"],
        "lou": true,
        "loulv":2,
    },
    "名":
    {
        "text": ["Name","ネーム"],
        "lou": true,
        "loulv":1,
    },
    "牛":
    {
        "text": ["Beef","ビーフ"],
        "lou": true,
        "loulv":2,
    },
    "潰して":
    {
        "text": ["Press","プレス"],
        "lou": true,
        "loulv":2,
    },
    "今":
    {
        "text": ["ナウ","now"],
        "lou": true,
        "loulv":1,
    },
    "個人":
    {
        "text": ["パーソナル"],
        "lou": true,
        "loulv":3,
    },
    "人":
    {
        "text": ["ピーブル","People"],
        "lou": true,
        "loulv":3,
    },
    "店":
    {
        "text": ["shop","ショップ"],
        "lou": true,
        "loulv":2,
    },
    "企業":
    {
        "text": ["カンパニー"],
        "lou": true,
        "loulv":2,
    },
    "戦っ":
    {
        "text": ["Fightし","ファイトし"],
        "lou": true,
        "loulv":3,
    },
    "戦い":
    {
        "text": ["duel","デュエル"],
        "lou": true,
        "loulv":2,
    },
    "全":
    {
        "text": ["Full","フル"],
        "lou": true,
        "loulv":1,
    },
    "身":
    {
        "text": ["Body","ボディ"],
        "lou": true,
        "loulv":2,
    },
    "霊":
    {
        "text": ["Ghost","Spirit","ゴースト", "スピリット"],
        "lou": true,
        "loulv":3,
    },
    "挑んで":
    {
        "text": ["チャレンジして"],
        "lou": true,
        "loulv":3,
    },
    "来たよ":
    {
        "text": ["comeよ"],
        "lou": true,
        "loulv":2,
    },
    "きたよ":
    {
        "text": ["comeよ"],
        "lou": true,
        "loulv":2,
    },
    "やる":
    {
        "text": ["try","トライ"],
        "lou": true,
        "loulv":1,
    },
    "闘志":
    {
        "text": ["テンション"],
        "lou": true,
        "loulv":3,
    },
    "法":
    {
        "text": ["Law"],
        "lou": true,
        "loulv":2,
    },
    "内":
    {
        "text": ["in","イン"],
        "lou": true,
        "loulv":1,
    },
    "使":
    {
        "text": ["use","ユーズ"],
        "lou": true,
        "loulv":1,
    },
    "手":
    {
        "text": ["hand","ハンド"],
        "lou": true,
        "loulv":1,
    },
    "やる":
    {
        "text": ["play","プレイ"],
        "lou": true,
        "loulv":1,
    },
    "異世界":
    {
        "text": ["パラレルワールド"],
        "lou": true,
        "loulv":4,
    },
    "世界":
    {
        "text": ["ワールド"],
        "lou": true,
        "loulv":3,
    },
    "異":
    {
        "text": ["ディファレンツ"],
        "lou": true,
        "loulv":4,
    },
    "さよなら":
    {
        "text": ["グッバイ","Good Bye"],
        "lou": true,
        "loulv":2,
    },
    "出来事":
    {
        "text": ["イベント","Event"],
        "lou": true,
        "loulv":2,
    },
    "凄い":
    {
        "text": ["グレート","ファニー","Great","Funny"],
        "lou": true,
        "loulv":2,
    },
    "能力":
    {
        "text": ["アビリティ","スキル"],
        "lou": true,
        "loulv":2,
    },
    "得":
    {
        "text": ["ゲット","Get"],
        "lou": true,
        "loulv":1,
    },
    "いい":
    {
        "text": ["Good","グッド"],
        "lou": true,
        "loulv":1,
    },
    "マンガ":
    {
        "text": ["コミック"],
        "lou": true,
        "loulv":1,
    },
    "漫画":
    {
        "text": ["コミック"],
        "lou": true,
        "loulv":1,
    },
    "現実":
    {
        "text": ["リアル","Real"],
        "lou": true,
        "loulv":2,
    },
    "動かす":
    {
        "text": ["ムービング","Moveing"],
        "lou": true,
        "loulv":3,
    },
    "動":
    {
        "text": ["ムーブ","Move"],
        "lou": true,
        "loulv":2,
    },
    "サヨナラ":
    {
        "text": ["グッバイ","Good Bye"],
        "lou": true,
        "loulv":2,
    },
    "今すぐ":
    {
        "text": ["ハリーアップ"],
        "lou": true,
        "loulv":3,
    },
    "今":
    {
        "text": ["ナウ","Now"],
        "lou": true,
        "loulv":1,
    },
    "心":
    {
        "text": ["マインド","Mind"],
        "lou":true,
        "loulv":2,
    },
    "命":
    {
        "text": ["ライフ","Life"],
        "lou": true,
        "loulv":2,
    },
    "できる":
    {
        "text": ["トライ","Try"],
        "lou": true,
        "loulv":2,
    },
    "出来る":
    {
        "text": ["トライ","Try"],
        "lou": true,
        "loulv":2,
    },
    "ないぞ":
    {
        "text": ["None","ノー"],
        "lou": true,
        "loulv":2,
    },
    "ない":
    {
        "text": ["None","ノー"],
        "lou": true,
        "loulv":1,
    },
    "危":
    {
        "text": ["Danger","デンジャー"],
        "lou": true,
        "loulv":2,
    },
    "会":
    {
        "text": ["ミーツ","meat"],
        "lou": true,
        "loulv":2,
    },
    "ラック":
    {
        "text": ["Luck"],
        "lou": true,
        "loulv":2,
    },
    "近":
    {
        "text": ["near"],
        "lou": true,
        "loulv":2,
    },
    "跳ね":
    {
        "text": ["ホップ","Hop"],
        "lou": true,
        "loulv":2,
    },

    //日本語変換
    "現世"://todo:分類審議中
    {
        "text": ["現し世"],
        "japanese": true
    },
    "レディース":
    {
        "text": ["女達の"],
        "japanese": true
    },
    "レディー":
    {
        "text": ["女"],
        "japanese": true
    },
    "デー":
    {
        "text": ["日"],
        "japanese": true
    },
    "デイ":
    {
        "text": ["日"],
        "japanese": true
    },
    "リベンジ":
    {
        "text": ["成り上がり"],
        "japanese": true
    },
};

function karitxt_otouto_killer() {

    const ta = document.getElementById("origin_text_area");
    var t =
        `当職の弟を当職が殺したなどという当職のアイデンティティを否定する投稿が多数なされておりました。
当職の弟は厚史という名前でした。
一つ違いの弟でした。喧嘩もしましたが、私にとってのかけがいのない弟でした。
弟は、地元の悪いもの達に、恐喝され、多摩川の河川敷で、集団暴行にあった翌日に親にもいえず自殺しました。
弟が16、私が17のことでした。私の中にはいつも弟がいます。`
        ;
    ta.value = t;

    const ota = document.getElementById("origin_text_count");
    ota.innerText = `表現の自由　文字数:${t.length}`
}

function karitxt_gyukaku_misojini() {

    const ta = document.getElementById("origin_text_area");
    var t =
        `牛角の男性差別商法
私の導火線に火がついた

絶対許さねえぞ

今まで個人店のレディースデーは数えきれないほど戦って潰してしてきたけど
今度はそれなりに名の通った企業相手だから全身全霊で戦いを挑んでやる

久々に闘志が湧いてきたよ

合法の範囲内で使える手はどんな手を使ってでも戦ってやる`;
    ta.value = t;

    const ota = document.getElementById("origin_text_count");
    ota.innerText = `表現の自由　文字数:${t.length}`
}


function karitxt_orekayo_sinegomi()
{
    
    const ta = document.getElementById("origin_text_area");
    var t =
        `最近の異世界の男はトラックに跳ねられるなりで現世からサヨナラする出来事あれば、
異世界でなんか凄い能力を得て異世界でリベンジできるらしいから、
チャレンジすればいいんじゃないかな
そのマンガが事実なら現実で心臓動かしてる場合じゃないぞ
今すぐ絶命の危機に会え！`;
    ta.value = t;

    const ota = document.getElementById("origin_text_count");
    ota.innerText = `表現の自由　文字数:${t.length}`
}

function karitxt_sorairo()
{
    
    const ta = document.getElementById("origin_text_area");
    var t =
        `どのような親に

どのような家族環境で育ち 

そのような行為いつからして 

学校ではどんな生徒で 

学校では何をみて 

空の色は何色だったか 

君は泣いたことがあるか 

何があったのか 

親の愛を感じたことはあるか 

私に殺害予告をしたときの気持ちは何で 

それは君の気持ちにどのような快感を与え 

ある日来た警察に対して君は真っ正面を向くことができたのか

そのときの親の顔を見たか 

君は親の悲しみを知っているのか 

1人淋しく過ごした夜に何を感じ 

守ってくれた弁護士の説諭に何を感じ 

君はいま何を思うのか 

ある日来た警察に対して君は真っ正面を向くことができたのか

そのときの親の顔を見たか

君は親の悲しみを知っているのか

1人淋しく過ごした夜に何を感じ

守ってくれた弁護士の説諭に何を感じ

君はいま何を思うのか

君はいま親の気持ちがわかるか

君は人を傷付ける人間なのか

君は親を殺すことができるのか

人は人を傷付けて幸せになれるのか

いま君は何を見ているのか

空は何色か

人は人を愛さなければない

君は親の愛に気が付かなくてはならない

いまが君の人生の始まりだ

君はこれからどのような大人になるのか

俺は君に人を傷付けるのではなく人を助ける人間になってほしい

俺は君の20年後を見ている
`;
    ta.value = t;

    const ota = document.getElementById("origin_text_count");
    ota.innerText = `表現の自由　文字数:${t.length}`
}

function initialize() {
    //仮

}

function changeText() {
    var ta = document.getElementById("origin_text_area");
    var text = ta.value;

    const lue_value = document.getElementById("lou_change").valueAsNumber;
    const japanese_value = document.getElementById("japanese_change").valueAsNumber;

    for (const key in convert_list) {

        if (convert_list[key].hasOwnProperty("frozen") &&
            convert_list[key]["frozen"])
        {
            const randomIndex = Math.floor(Math.random() * convert_list[key]["text"].length);
            const regex = new RegExp(key, 'g'); // 変数 apple を使って正規表現を作成
            text = text.replace(regex, convert_list[key]["text"][randomIndex]);
        }

        if (convert_list[key].hasOwnProperty("lou") &&
            convert_list[key]["lou"] &&
            Math.floor(Math.random() * 100) <= lue_value)//ルー判定
        {
            const randomIndex = Math.floor(Math.random() * convert_list[key]["text"].length);
            const regex = new RegExp(key, 'g'); // 変数 apple を使って正規表現を作成
            text = text.replace(regex, convert_list[key]["text"][randomIndex]);
        }

        if (convert_list[key].hasOwnProperty("japanese") &&
            convert_list[key]["japanese"] &&
            Math.floor(Math.random() * 100) <= japanese_value)//ルー判定
        {
            const randomIndex = Math.floor(Math.random() * convert_list[key]["text"].length);
            const regex = new RegExp(key, 'g'); // 変数 apple を使って正規表現を作成
            text = text.replace(regex, convert_list[key]["text"][randomIndex]);
        }
    }
    const ota = document.getElementById("change_text_count");
    ota.innerText = `表現の不自由　文字数:${text.length}`
    document.getElementById("change_text_area").value = text;
}

initialize();