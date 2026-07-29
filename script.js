const imageInput = document.getElementById("imageInput");
const unranked = document.getElementById("unrankedItems");
const showNames = document.getElementById("showNames");
const printButton = document.getElementById("printButton");


// 画像追加
imageInput.addEventListener("change", (event) => {

    const files = event.target.files;

    [...files].forEach(file => {

        const name = prompt(
            "この画像の名前を入力してください（空欄なら表示なし）"
        );

        createItem(file, name);

    });

    imageInput.value = "";

});


// アイテム作成
function createItem(file, name){

    const reader = new FileReader();

    reader.onload = function(e){

        const item = document.createElement("div");
        item.className = "item";


        const img = document.createElement("img");
        img.src = e.target.result;


        const text = document.createElement("div");
        text.className = "item-name";
        text.textContent = name || "";


        item.appendChild(img);
        item.appendChild(text);


        item.dataset.name = name || "";


        unranked.appendChild(item);

    }


    reader.readAsDataURL(file);

}


// 名前表示切替
showNames.addEventListener("change",()=>{

    document.querySelectorAll(".item-name")
    .forEach(name=>{

        name.style.display =
        showNames.checked ? "block" : "none";

    });

});


// 印刷
printButton.addEventListener("click",()=>{

    window.print();

});



// ドラッグ&ドロップ
document.querySelectorAll(".tier-drop")
.forEach(area=>{

    new Sortable(area,{
        group:"shared",
        animation:150
    });

});
