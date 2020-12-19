// モーダル
const btn = document.getElementById("btn");
const box = document.getElementById("box");

function onClick(){
  box.classList.toggle("box_hidden");
}
btn.addEventListener("click", onClick, false);
box.addEventListener("click", onClick, false);


// ヘッダーのアニメーション
// ボックス要素の取得
const header_menu = document.getElementById("header_menu");

// ボタン要素の取得
const header_btn = document.getElementById("header_btn");

// ボックスにクラスを追加(削除)する関数
function onClick_header() {
    header_menu.classList.toggle("active");
}

// ボタンが押された時に関数を起動させる
header_btn.addEventListener("click", onClick_header, false);




