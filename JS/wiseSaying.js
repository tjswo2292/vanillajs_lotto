const wiseSaying = [
    {
        say: "돈이랑 힘이고 자유이며, 모든 악의 근원이기도 한 동시에, 한편으로는 최대의 행복이 되기도 한다.",
        author: "칼 샌드버그",
    },
    {
        say: "두투한 지갑이 무조건 좋다고 말할 수는 없다. 그러나 텅 빈 지갑은 확실히 나쁘다",
        author: "탈무드",
    },
    {
        say:"돈이 없으면 방랑자, 돈이 있으면 관광객이라 부른다",
        author:"폴 리처",
    },
    {
        say:"돈에 관한 욕심은 모든 악의 근원으로 여겨지고 있다. 그러나 돈이 없는 것 또한 마찬가지이다,",
        author:"버틀러",
    },
    {
        say:"돈은 바닥이 없는 바다와도 같은 것이다. 양심도 명예도 거기에 빠져서 결코 떠오르지 않는다",
        author:"벤자민 프랭클린",
    },
    {
        say:"돈을 빌려주기 좋아하는 사람은 그냥 주는 사람이다",
        author:"조지 허버트",
    },
    {
        say:"내 주머니의 푼돈은 남의 주머니에 있는 거금보다 낫다",
        author:"세르반테스",
    },
]

const say = document.querySelector("#wiseSaying-container h3:first-child");
const author = document.querySelector("#wiseSaying-container h3:last-child");

const sayList = wiseSaying[Math.floor(Math.random() * wiseSaying.length)];

// wiseSaying.say[sayList]
say.innerText = sayList.say;
author.innerText = sayList.author;

