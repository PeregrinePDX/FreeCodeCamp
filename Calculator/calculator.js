var numberStack = [0];
var decimalPoint = false;

$(document).keypress(function(e) {
  console.log("A key was pressed");
  var key = String.fromCharCode(e.which);
  console.log("Keypressed: " + key);
  switch (key) {
    case "7":
      console.log("Inside 7");
      $("#7").trigger('click');
      break;
    case "8":
      $("#8").trigger('click');
      break;
    case "9":
      $("#9").trigger('click');
      break;
    case "4":
      $("#4").trigger('click');
      break;
    case "5":
      $("#5").trigger('click');
      break;
    case "6":
      $("#6").trigger('click');
      break;
    case "1":
      $("#1").trigger('click');
      break;
    case "2":
      $("#2").trigger('click');
      break;
    case "3":
      $("#3").trigger('click');
      break;
    case "0":
      $("#0").trigger('click');
      break;
    case ".":
      $("#decimal").trigger('click');
      break;
    case "\n":
      $("#enter").trigger('click');
      break;
    case "+":
      $("#plus").trigger('click');
      break;
    case "-":
      $("#minus").trigger('click');
      break;
    case "*":
      $("#multiply").trigger('click');
    case "x":
      $("#multiply").trigger('click');
    case "%":
      $("#percent").trigger('click');
  }
})

$("#0").click(function() {
  addToDisplay("0")
});

$("#1").click(function() {
  addToDisplay("1")
});

$("#2").click(function() {
  addToDisplay("2")
});

$("#3").click(function() {
  addToDisplay("3")
});

$("#4").click(function() {
  addToDisplay("4")
});

$("#5").click(function() {
  addToDisplay("5")
});

$("#6").click(function() {
  addToDisplay("6")
});

$("#7").click(function() {
  addToDisplay("7")
});

$("#8").click(function() {
  addToDisplay("8")
});

$("#9").click(function() {
  addToDisplay("9")
});

$("#decimal").click(function() {
  decimalPoint = true;
})

$("#enter").click(function() {
  addToStack(0);
  updateDisplayStack();
})

$("#plus").click(function() {
  var oper2 = numberStack.shift();
  var oper1 = numberStack.shift();
  console.log(numberStack);
  var answer = oper1 + oper2;
  addToStack(answer);
  updateDisplayStack();
})

$("#minus").click(function() {
  var oper2 = numberStack.shift();
  var oper1 = numberStack.shift();
  console.log(numberStack);
  var answer = oper1 - oper2;
  addToStack(answer);
  updateDisplayStack();
})

$("#multiply").click(function() {
  var oper2 = numberStack.shift();
  var oper1 = numberStack.shift();
  console.log(numberStack);
  var answer = oper1 * oper2;
  addToStack(answer);
  updateDisplayStack();
})

$("#divide").click(function() {
  var oper2 = numberStack.shift();
  var oper1 = numberStack.shift();
  console.log(numberStack);
  var answer = oper1 / oper2;
  addToStack(answer);
  updateDisplayStack();
})

$("#ac").click(function() {
  numberStack = [0];
  updateDisplayStack();
})

$("#ce").click(function() {
  numberStack.shift();
  numberStack.unshift(0);
  updateDisplayStack();
})

$("#percent").click(function() {
  var oper1 = numberStack.shift();
  var oper2 = 100;
  var answer = oper1 / oper2;
  addToStack(answer);
  updateDisplayStack();
})

$(document).ready(function() {
  console.log("Ready!");
  updateDisplayStack();
})



function addToStack(value) {
  numberStack.unshift(value);
  decimalPoint = false;
}

function addToDisplay(numPressed) {
  var disp = numberStack[0];
  if (decimalPoint) {
    disp = disp + ".";
    decimalPoint = false;
  }
  if (disp === 0) {
    disp = numPressed;
  } else {
    disp = disp + numPressed;
  }
  numberStack[0] = Number(disp);
  updateDisplayStack();
}

function updateDisplayStack() {
  console.log(numberStack);
  for (var i = 9; i >= 0; i--) {
    var element = "#disp" + i;
    console.log(element);
    console.log(numberStack[i]);
    if (numberStack[i] !== undefined) {
      $(element).text(numberStack[i]);
    } else {
      $(element).empty();
    }
  }
}
