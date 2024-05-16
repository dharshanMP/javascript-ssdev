let computer_move = '';
let result = '';

function main_game() {
    const random_num = Math.random();
    if (random_num < 1/3) {
        computer_move = 'Rock';
    } else if (random_num < 2/3) {
        computer_move = 'Paper';
    } else {
        computer_move = 'Scissor';
    }
}

function rock() {
    main_game(); 
    if (computer_move === 'Paper') {
        result = 'lose';
    } else if (computer_move === 'Scissor') {
        result = 'win🥳';
    } else {
        result = 'tie';
    }
    alert(`You picked rock. Computer picked ${computer_move}\n${result}`);
}

function paper() {
    main_game(); 
    if (computer_move === 'Rock') {
        result = 'win🥳';
    } else if (computer_move === 'Scissor') {
        result = 'lose';
    } else {
        result = 'tie';
    }
    alert(`You picked paper. Computer picked ${computer_move}\n${result}`);
}

function scissor() {
    main_game();
    if (computer_move === 'Paper') {
        result = 'win🥳';
    } else if (computer_move === 'Rock') {
        result = 'lose';
    } else {
        result = 'tie';
    }
    alert(`You picked scissor. Computer picked ${computer_move}\n${result}`);
}
