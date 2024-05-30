let p1 = [];
let p1c = 0;
let p2 = [];
let p2c = 0;
let turn = 1;
/* they can win with:
123
456
789
147
258
369
159
357
*/
function checkwinp1(){
    for (let a = 0; a<p1.length; a++){
        if (p1[a] === 1){
            for (let b = 0; b<p1.length; b++){
                if (p1[b] === 2){
                    for (let c=0; c<p1.length; c++){
                        if (p1[c] === 3){
                            return true;
                        }
                    }
                }
            }
            for (let d = 0; d<p1.length; d++){
                if (p1[d] === 4){
                    for (let e=0; e<p1.length; e++){
                        if (p1[e] === 7){
                            return true;
                        }
                    }
                }
            }
            for (let f = 0; f<p1.length; f++){
                if (p1[f] === 5){
                    for (let g = 0; g<p1.length; g++){
                        if (p1[g] === 9){
                            return true;
                        }
                    }
                }
            }
        }
        for (let h = 0; h<p1.length; h++){
            if (p1[h] === 2){
                for (let i = 0; i<p1.length; i++){
                    if (p1[i] === 5){
                        for (let j = 0; j<p1.length; j++){
                            if (p1[j] === 8){
                                return true;
                            }
                        }
                    }
                }
            }
        }
        for (let k = 0; k<p1.length; k++){
            if (p1[k] === 3){
                for (let l = 0; l<p1.length; l++){
                    if (p1[l] === 6){
                        for (let m = 0; m<p1.length; m++){
                            if (p1[m] === 9){
                                return true;
                            }
                        }
                    }
                }
                for (let n = 0; n<p1.length; n++){
                    if(p1[n] === 5){
                        for (let o = 0; o<p1.length; o++){
                            if (p1[o] === 7){
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    for (let p = 0; p<p1.length; p++){
        if (p1[p] === 4){
            for (let q = 0; q<p1.length; q++){
                if (p1[q] === 5){
                    for (let r = 0; r<p1.length; r++){
                        if (p1[r] === 6){
                            return true;
                        }
                    }
                }
            }
        }
    }
    for (let s = 0; s<p1.length; s++){
        if (p1[s] === 7){
            for (let t = 0; t<p1.length; t++){
                if (p1[t] === 8){
                    for (let u = 0; u<p1.length; u++){
                        if (p1[u] === 9){
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function checkwinp2(){
    for (let a = 0; a<p2.length; a++){
        if (p2[a] === 1){
            for (let b = 0; b<p2.length; b++){
                if (p2[b] === 2){
                    for (let c=0; c<p2.length; c++){
                        if (p2[c] === 3){
                            return true;
                        }
                    }
                }
            }
            for (let d = 0; d<p2.length; d++){
                if (p2[d] === 4){
                    for (let e=0; e<p2.length; e++){
                        if (p2[e] === 7){
                            return true;
                        }
                    }
                }
            }
            for (let f = 0; f<p2.length; f++){
                if (p2[f] === 5){
                    for (let g = 0; g<p2.length; g++){
                        if (p2[g] === 9){
                            return true;
                        }
                    }
                }
            }
        }
        for (let h = 0; h<p2.length; h++){
            if (p2[h] === 2){
                for (let i = 0; i<p2.length; i++){
                    if (p2[i] === 5){
                        for (let j = 0; j<p2.length; j++){
                            if (p2[j] === 8){
                                return true;
                            }
                        }
                    }
                }
            }
        }
        for (let k = 0; k<p2.length; k++){
            if (p2[k] === 3){
                for (let l = 0; l<p2.length; l++){
                    if (p2[l] === 6){
                        for (let m = 0; m<p2.length; m++){
                            if (p2[m] === 9){
                                return true;
                            }
                        }
                    }
                }
                for (let n = 0; n<p2.length; n++){
                    if(p2[n] === 5){
                        for (let o = 0; o<p2.length; o++){
                            if (p2[o] === 7){
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    for (let p = 0; p<p2.length; p++){
        if (p2[p] === 4){
            for (let q = 0; q<p2.length; q++){
                if (p2[q] === 5){
                    for (let r = 0; r<p2.length; r++){
                        if (p2[r] === 6){
                            return true;
                        }
                    }
                }
            }
        }
    }
    for (let s = 0; s<p2.length; s++){
        if (p2[s] === 7){
            for (let t = 0; t<p2.length; t++){
                if (p2[t] === 8){
                    for (let u = 0; u<p2.length; u++){
                        if (p2[u] === 9){
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function checkarrs(elem) {
    for (let z = 0; z < p1.length; z++) {
        if (p1[z] === elem) {
            return true;
        }
    }
    for (let y = 0; y < p2.length; y++) {
        if (p2[y] === elem) {
            return true;
        }
    }
    return false;
}
function selectsquare(x){
    if (!checkwinp1() && !checkwinp2()) {
        if (!checkarrs(x)) {
            if (turn % 2 === 1) {
                p1[p1c] = x;
                p1c++;
                turn++;
                document.getElementById("player").innerHTML = "Active Player: Player 2"
                document.getElementById(x.toString()).innerHTML = "X";
                document.getElementById("taken").innerHTML = "";
                if (checkwinp1()) {
                    document.getElementById("player").innerHTML = "Player 1 has won!";
                }
                else if (turn > 9){
                    document.getElementById("player").innerHTML = "Tie.";
                }
            } else if (turn % 2 === 0) {
                p2[p2c] = x;
                p2c++;
                turn++;
                document.getElementById("player").innerHTML = "Active Player: Player 1"
                document.getElementById(x.toString()).innerHTML = "O";
                document.getElementById("taken").innerHTML = ""
                if (checkwinp2()) {
                    document.getElementById("player").innerHTML = "Player 2 has won!";
                }
                else if (turn > 9){
                    document.getElementById("player").innerHTML = "Tie.";
                }
            }
        } else {
            document.getElementById("taken").innerHTML = "Square is taken, select a new one.";
        }
    }
    else{
        document.getElementById("taken").innerHTML = "Game over, reload to start again.";
    }
}

//single

let ap = [];
let ac = [];
let apc = 0;
let acc = 0;
let turns = 1;
function checkwinp(){
    for (let a = 0; a<ap.length; a++){
        if (ap[a] === 1){
            for (let b = 0; b<ap.length; b++){
                if (ap[b] === 2){
                    for (let c=0; c<ap.length; c++){
                        if (ap[c] === 3){
                            return true;
                        }
                    }
                }
            }
            for (let d = 0; d<ap.length; d++){
                if (ap[d] === 4){
                    for (let e=0; e<ap.length; e++){
                        if (ap[e] === 7){
                            return true;
                        }
                    }
                }
            }
            for (let f = 0; f<ap.length; f++){
                if (ap[f] === 5){
                    for (let g = 0; g<ap.length; g++){
                        if (ap[g] === 9){
                            return true;
                        }
                    }
                }
            }
        }
        for (let h = 0; h<ap.length; h++){
            if (ap[h] === 2){
                for (let i = 0; i<ap.length; i++){
                    if (ap[i] === 5){
                        for (let j = 0; j<ap.length; j++){
                            if (ap[j] === 8){
                                return true;
                            }
                        }
                    }
                }
            }
        }
        for (let k = 0; k<ap.length; k++){
            if (ap[k] === 3){
                for (let l = 0; l<ap.length; l++){
                    if (ap[l] === 6){
                        for (let m = 0; m<ap.length; m++){
                            if (ap[m] === 9){
                                return true;
                            }
                        }
                    }
                }
                for (let n = 0; n<ap.length; n++){
                    if(ap[n] === 5){
                        for (let o = 0; o<ap.length; o++){
                            if (ap[o] === 7){
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    for (let p = 0; p<ap.length; p++){
        if (ap[p] === 4){
            for (let q = 0; q<ap.length; q++){
                if (ap[q] === 5){
                    for (let r = 0; r<ap.length; r++){
                        if (ap[r] === 6){
                            return true;
                        }
                    }
                }
            }
        }
    }
    for (let s = 0; s<ap.length; s++){
        if (ap[s] === 7){
            for (let t = 0; t<ap.length; t++){
                if (ap[t] === 8){
                    for (let u = 0; u<ap.length; u++){
                        if (ap[u] === 9){
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function checkwinc(){
    for (let a = 0; a<ac.length; a++){
        if (ac[a] === 1){
            for (let b = 0; b<ac.length; b++){
                if (ac[b] === 2){
                    for (let c=0; c<ac.length; c++){
                        if (ac[c] === 3){
                            return true;
                        }
                    }
                }
            }
            for (let d = 0; d<ac.length; d++){
                if (ac[d] === 4){
                    for (let e=0; e<ac.length; e++){
                        if (ac[e] === 7){
                            return true;
                        }
                    }
                }
            }
            for (let f = 0; f<ac.length; f++){
                if (ac[f] === 5){
                    for (let g = 0; g<ac.length; g++){
                        if (ac[g] === 9){
                            return true;
                        }
                    }
                }
            }
        }
        for (let h = 0; h<ac.length; h++){
            if (ac[h] === 2){
                for (let i = 0; i<ac.length; i++){
                    if (ac[i] === 5){
                        for (let j = 0; j<ac.length; j++){
                            if (ac[j] === 8){
                                return true;
                            }
                        }
                    }
                }
            }
        }
        for (let k = 0; k<ac.length; k++){
            if (ac[k] === 3){
                for (let l = 0; l<ac.length; l++){
                    if (ac[l] === 6){
                        for (let m = 0; m<ac.length; m++){
                            if (ac[m] === 9){
                                return true;
                            }
                        }
                    }
                }
                for (let n = 0; n<ac.length; n++){
                    if(ac[n] === 5){
                        for (let o = 0; o<ac.length; o++){
                            if (ac[o] === 7){
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    for (let p = 0; p<ac.length; p++){
        if (ac[p] === 4){
            for (let q = 0; q<ac.length; q++){
                if (ac[q] === 5){
                    for (let r = 0; r<ac.length; r++){
                        if (ac[r] === 6){
                            return true;
                        }
                    }
                }
            }
        }
    }
    for (let s = 0; s<ac.length; s++){
        if (ac[s] === 7){
            for (let t = 0; t<ac.length; t++){
                if (ac[t] === 8){
                    for (let u = 0; u<ac.length; u++){
                        if (ac[u] === 9){
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}
function checkarrs1p(elem) {
    for (let z = 0; z < p1.length; z++) {
        if (p1[z] === elem) {
            return true;
        }
    }
    for (let y = 0; y < p2.length; y++) {
        if (p2[y] === elem) {
            return true;
        }
    }
    return false;
}

function pselect(x){
    if (!checkwinp && !checkwinc){
        if (!checkarrs1p(x)) {
            ap[apc] = x;
            apc++;
            turns++;
            document.getElementById(x.toString()).innerHTML = "X";
            document.getElementById("sqtaken").innerHTML = "";
            if (checkwinp()) {
                document.getElementById("winner").innerHTML = "Player has won!";
            }
            else if (turns > 9) {
                document.getElementById("winner").innerHTML = "Tie.";
            }
            aipick();
        }
    }
}
function aipick(){
    // ai part
    let x2 = "s"
    x2 += Math.random()*9+1;
    if (!checkarrs1p(x2)){
        ac[acc] = x2;
        acc++;
        turns++;
        document.getElementById(x2.toString()).innerHTML = "O";
        document.getElementById("sqtaken").innerHTML = "";
        if (checkwinc()) {
            document.getElementById("winner").innerHTML = "Computer has won!";
        }
    }
    else{
        aipick();
    }
}