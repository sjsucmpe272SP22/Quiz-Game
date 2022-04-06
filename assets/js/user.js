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

const setHighScore = () => {
    let gameScore = parseInt(currentScore.innerText);
    if (gameScore > userHighScore.innerText && gameScore !== undefined) {
        finalLabel.innerText = "CONGRATULATIONS!!!";
        finalScore.innerText = `NEW HIGH SCORE!!! You scored ${gameScore} points`;
        userHighScore.innerText = gameScore;
        localStorage.setItem("highScore", gameScore);
        if (document.querySelector(".fa-volume-up ")) {
            fanfare.play();

        }

    } else if (gameScore <= userHighScore.innerText && gameScore !== undefined) {
        finalLabel.innerText = "RESULT";
        finalScore.innerText = `Your scored ${gameScore} points`;
        if (document.querySelector(".fa-volume-up ")) {
            finalSound.play();
        }
    } else {
        finalLabel.innerText = "UNFORTUNATELY";
        finalScore.innerText = "No point this time.Try Again!";
        if (document.querySelector(".fa-volume-up ")) {
            noPoints.play();
        }
    }
};
