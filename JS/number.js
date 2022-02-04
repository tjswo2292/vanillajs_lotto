const num = document.querySelector("#lottoNum-container span");

const numList = [];

for(let i = 1; i < 7; i++) {
    let lottoNum = Math.floor(Math.random() * 44) + 1;
    numList.push(lottoNum, );
    
    // 같은 수 제거
    if(numList[i - 1] === numList[i]) {
        lottoNum = Math.floor(Math.random() * 44) + 1;
    } 

}

num.innerText = `행운의 번호는 : ${numList}`;

// 같은 수가 완벽하게 제거가 안된다.
// 인접하는 인덱스 값만 비교하는게 아니라 멀리 있는 인덱스 값도 비교하는게 필요하다