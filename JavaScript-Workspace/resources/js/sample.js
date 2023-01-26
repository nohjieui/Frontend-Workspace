function test(){
    window.alert("external 테스트");
}

let lastBtn = document.getElementById("lastBtn");

lastBtn.onclick = test;