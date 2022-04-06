const username = document.querySelector("#userName");
const userHighScore = document.querySelector("#highScore");
const finalLabel = document.querySelector("#finalModalLabel");

const topScore = localStorage.getItem("topScore");
userHighScore.innerText = topScore;


let user = localStorage.getItem("user");
let highScore = 0;
const checkUserData = () => {
    if (user === null || user === "") {
        localStorage.setItem("highScore", 0);
        $("#playerModal").modal("show");
        $("#playerModal").ready(function () {
            $('#user').focus();
        });

    } else {
        user = localStorage.getItem("user");
        highScore = localStorage.getItem("highScore");
        if (highScore === null) {
            highScore = 0;
        }

        displayUsernameInfo();
    }
};