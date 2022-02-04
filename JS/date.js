const date = document.querySelector("#date-container h1");

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");

date.innerText = `${year}.${month}.${day}`;

//Uncaught TypeError: Cannot set properties of null (setting 'innerText')
// error가 떠서
// const date = document.querySelector("#date-container presentDay"); 이 부분에서
// #date-conntainer h1으로 변경했더니 오류가 잡혔다.
// querySelector에 대해 더 알아봐야겠디.