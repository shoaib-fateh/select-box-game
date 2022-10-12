var color;
var score = document.querySelector( ".btn.score b" );
var err = document.querySelector( ".btn.err b" );
var boxes = document.querySelectorAll( ".boxes .box" );
boxes[ Math.round( Math.random() * 14 ) + 1 ].classList += " different";
colorChange();

function box(val) {
    var boxClass = boxes[val].attributes.class.value;

    if (boxClass.search("different") > -1) {
        // create sound and play that
        new Audio("sounds/score.mp3").play();
        
        // add scores
        scoreVal = score.innerHTML;
        score.innerHTML = Number(scoreVal) + 1;

        // change the different color//boxes
        document.querySelector( ".boxes .different" ).classList = "box";
        boxes[ Math.round( Math.random() * 14 ) + 1 ].classList += " different";

        colorChange();
    } else {
        // create and play the sound
        new Audio("sounds/wrong.mp3").play();

        // add errs
        errVal = err.innerHTML;
        err.innerHTML = Number( errVal ) + 1;

        if(score.innerHTML / err.innerHTML <= 3) {
            alert( "It's wrong!" );
        }
    }
}

// change the color//boxes
function colorChange() {
    var red = Math.floor( Math.random() * 255 );
    var green = Math.floor( Math.random() * 255 );
    var blue = Math.floor( Math.random() * 255 );

    for (x in boxes) {
        boxes[x].style.backgroundColor = "rgb(" + red + " " + green + " " + blue + ")";
    }
}


// none click on the page
function noKeyPress(event) {
    if (event.buttons == 2) {
        alert( "You can't use it." );
    }
}