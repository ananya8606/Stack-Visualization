var counter = -1;
var counter_arr = 0;
var pushcount = 0;
var popcount = 0;
var emptycount = 0;
var capacity = 9;
var push_algo = `PUSH_STACK(STACK,TOP,MAX,ITEM) <br/><br/>
Algorithm to push an item into stack.
<br/><br/>
1) IF TOP = MAX   then<br/>
Print "Stack is full";<br/>
Exit;<br/>
2) Otherwise<br/>
TOP: = TOP + 1;        /*increment TOP*/<br/>
STACK (TOP):= ITEM;<br/>
3) End of IF<br/>
4) Exit`;

var pop_algo = `
POP_STACK(STACK,TOP,ITEM)<br/><br/>
Algorithm to pop an element from stack.<br/><br/>
1) IF TOP = 0 then<br/>
    Print "Stack is empty";<br/>
    Exit;<br/>
2) Otherwise<br/>
    ITEM: =STACK (TOP);<br/>
    TOP:=TOP - 1;<br/>
3) End of IF<br/>
4) Exit<br/>
`;

var isempty_algo = `
IS_EMPTY(STACK,TOP,MAX,STATUS) <br/>
<br/>
    Algorithm to check stack is empty or not.<br/>
    STATUS contains the result status.<br/>
    <br/>
    1) IF TOP = 0 then<br/>
        STATUS:=true;<br/>
    2) Otherwise<br/>
        STATUS:=false;<br/>
    3)  End of IF<br/>
    4)  Exit<br/>
`;

var arr = [];
function push() {
  document.getElementById("current_algo").innerHTML = push_algo;
  if (document.getElementById("push-item").value) {
    if (counter == capacity - 1) {
      alert("Overflow : Stack full");
    } else {
      counter++;
      pushcount++;
      document.getElementById("pointer").innerHTML = counter;
      arr.push(document.getElementById("push-item").value);
      $("#stack").append(
        '<div id="r' +
          counter +
          1 +
          '" class="stack_box">  ' +
          document.getElementById("push-item").value +
          " </div>"
      );
      var scrolldiv = document.getElementById("stack")
      scrolldiv.scrollTop = -scrolldiv.scrollHeight
      document.getElementById("pushed").innerHTML =
        document.getElementById("push-item").value;
      document.getElementById("top_element").innerHTML = arr[counter];
      $("#array").append(
        '<div id="a' +
          counter +
          '" class="array_box">  ' +
          document.getElementById("push-item").value +
          " </div>"
      );
      var scrolldiv = document.getElementById("array")
      scrolldiv.scrollLeft = scrolldiv.scrollWidth
      //document.getElementById("push-item").value = "";
      document.getElementById("popped").innerHTML = "";
    }
  } else {
    alert("Input cannot be blank ");
  }
}

function pop() {
  document.getElementById("current_algo").innerHTML = pop_algo;
  if (counter >= 0) {
    if (arr[counter] == undefined) {
    } else {
      document.getElementById("popped").innerHTML = arr[counter];
      document.getElementById("pushed").innerHTML = "";
      arr.pop();
    }
    $("#r" + counter + 1).remove();
    $("#a" + counter).remove();
    counter--;
    popcount++;
    if (counter >= 0) {
      document.getElementById("top_element").innerHTML = arr[counter];
    } else {
      document.getElementById("top_element").innerHTML = "";
    }
    document.getElementById("pointer").innerHTML = counter;
  } else {
    counter = -1;
    alert("Underflow : Element cannot be popped");
    document.getElementById("top_element").innerHTML = "";
    document.getElementById("pointer").innerHTML = counter;
  }
}

function ispeak() {
  if (arr[counter] != undefined) alert("Element at Peak is : " + arr[counter]);
  else alert("Stack is empty.");
}

function isempty() {
  emptycount++;
  document.getElementById("current_algo").innerHTML = isempty_algo;
  if (counter < 0) {
    alert("Yes , the given stack is empty! You can PUSH elements into it ");
  } else {
    alert("No , the given stack is not empty. It contains items . ");
  }
}

function reset() {
  window.location.reload();
  return false;
}

function setCapacity() {
  if (document.getElementById("set-capacity").value < 0) {
    alert("Stack Size should be greater than zero.");
  } else {
    capacity = document.getElementById("set-capacity").value;
  }
  document.getElementById("set-capacity").value = "";
}

