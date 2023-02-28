var row1 = ["[-]", "[-]", "[-]"]
var row2 = ["[-]", "[-]", "[-]"]
var row3 = ["[-]", "[-]", "[-]"]

var turn = 0

var alertmessage = "You cannot place in that field!"

function check_rows(){
    if (row1[0] != "[-]"){
        if (row1[0] == row1[1] == row1[2]){
            if (row1[0] == "[X]"){
                alert("Player 1 Won! gz")
                reset_board()
            }
            else{
                alert("Player 2 Won! gz")
                reset_board()
            }
        }
    }

    if (row2[0] != "[-]"){
        if (row2[0] == row2[1] == row2[2]){
            if (row2[0] == "[X]"){
                alert("Player 1 Won! gz")
                reset_board()
            }
            else{
                alert("Player 2 Won! gz")
                reset_board()
            }
        }
    }

    if (row3[0] != "[-]"){
        if (row3[0] == row3[1] == row3[2]){
            if (row3[0] == "[X]"){
                alert("Player 1 Won! gz")
                reset_board()
            }
            else{
                alert("Player 2 Won! gz")
                reset_board()
            }
        }
    }
}

function check_collon(){

}

function check_diagonal(){

}

function check_all(){
    check_rows()
    check_collon()
    check_diagonal()
}

function load_field(){
    var row1str = ((row1.toString()).replace(",", " ")).replace(",", " ");
    var row2str = ((row2.toString()).replace(",", " ")).replace(",", " "); 
    var row3str = ((row3.toString()).replace(",", " ")).replace(",", " "); 

    r1 = document.getElementById("row1").innerHTML = row1str;
    r2 = document.getElementById("row2").innerHTML = row2str;
    r3 = document.getElementById("row3").innerHTML = row3str;
}

function button1(){
    console.log("Button 1 pressed")
    if (row1[0] == "[-]"){
        if (turn == 0){
            row1[0] = row1[0].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row1[0] = row1[0].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button2(){
    console.log("Button 2 pressed")
    if (row1[1] == "[-]"){
        if (turn == 0){
            row1[1] = row1[1].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row1[1] = row1[1].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button3(){
    console.log("Button 3 pressed")
    if (row1[2] == "[-]"){
        if (turn == 0){
            row1[2] = row1[2].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row1[2] = row1[2].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button4(){
    console.log("Button 4 pressed")
    if (row2[0] == "[-]"){
        if (turn == 0){
            row2[0] = row2[0].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row2[0] = row2[0].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button5(){
    console.log("Button 5 pressed")
    if (row2[1] == "[-]"){
        if (turn == 0){
            row2[1] = row2[1].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row2[1] = row2[1].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button6(){
    console.log("Button 6 pressed")
    if (row2[2] == "[-]"){
        if (turn == 0){
            row2[2] = row2[2].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row2[2] = row2[2].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button7(){
    console.log("Button 7 pressed")
    if (row3[0] == "[-]"){
        if (turn == 0){
            row3[0] = row3[0].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row3[0] = row3[0].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button8(){
    console.log("Button 8 pressed")
    if (row3[1] == "[-]"){
        if (turn == 0){
            row3[1] = row3[1].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row3[1] = row3[1].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function button9(){
    console.log("Button 9 pressed")
    if (row3[2] == "[-]"){
        if (turn == 0){
            row3[2] = row3[2].replace("-", "X")
            turn += 1
            load_field()
        }
        else{
            row3[2] = row3[2].replace("-", "O")
            turn -= 1
            load_field()
        }
    }
    else{
        alert(alertmessage)
    }
    check_all()
}

function reset_board(){
    row1 = ["[-]", "[-]", "[-]"]
    row2 = ["[-]", "[-]", "[-]"]
    row3 = ["[-]", "[-]", "[-]"]
    load_field()
    turn = 0
    check_all()
}