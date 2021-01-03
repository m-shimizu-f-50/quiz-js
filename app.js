const question ="ゲーム市場、最も売れたゲーム機は次の内どれ？";
const answers=[
    "スーパーファミコン",
    "プレイステーション",
    "ニンテンドースイッチ",
    "ニンテンドーDS"
];
const correct ="ニンテンドーDS";

const $button=document.getElementsByTagName('button');

document.getElementById('js-question').textContent=question;


let buttonIndex=0;
let buttonLength = $button.length;
while(buttonIndex<buttonLength){
  $button[buttonIndex].textContent=answers[buttonIndex];
  buttonIndex++;
}
// ボタンをクリックしたら正誤判定
$button[0].addEventListener("click",()=>{
  if(correct==$button[0].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解');
  }
});

$button[1].addEventListener("click",()=>{
  if(correct==$button[1].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解');
  }
});

$button[2].addEventListener("click",()=>{
  if(correct==$button[2].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解');
  }
});

$button[3].addEventListener("click",()=>{
  if(correct==$button[3].textContent){
    window.alert('正解！');
  }else{
    window.alert('不正解');
  }
});