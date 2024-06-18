function calc(arr) {
  if (arr.filter((item) => isNaN(item)).length * 2 + 1 != arr.length) {
    console.warn("expression is wrong");
    return;
  }
  let expIdx;
  while ((expIdx = arr.findIndex((item) => item == "x" || item == "/")) != -1) {
    if (arr[expIdx] == "x") {
      arr.splice(
        expIdx - 1,
        3,
        Number(arr[expIdx - 1]) * Number(arr[expIdx + 1])
      );
    } else if (arr[expIdx] == "/") {
      arr.splice(
        expIdx - 1,
        3,
        Number(arr[expIdx - 1]) / Number(arr[expIdx + 1])
      );
    }
  }
  return arr.reduce((a, b, index) => {
    if (b == "+") a += Number(arr[index + 1]);
    else if (b == "-") a -= Number(arr[index + 1]);
    return a;
  }, Number(arr[0]));
}
function strToArr(str) {
  str = str.trim();
  return str.split(" ");
}
function calcOutput(str) {
  let temp = calc(strToArr(str));
  return temp ? temp : str;
}
function remover(node) {
  if (node.innerText[node.innerText.length - 1]?.search(/[x, /, +, -]/) != -1) {
    node.innerText = node.innerText.slice(0, node.innerText.length - 3);
    node.innerText = node.innerText.trim();
  } else {
    node.innerText = node.innerText.slice(0, node.innerText.length - 1);
  }
}
function add_exp(node, exp) {
  node.innerText += ` ${exp} `;
}
let temp;
const output = document.getElementById("calc_output");
document.getElementById("calculator").onclick = (e) => {
  if (e.target.id && e.target.id != "calc_output") {
    switch (e.target.id) {
      case "calc_remover":
        remover(output);
        break;
      case "calc_div":
        add_exp(output, "/");
        break;
      case "calc_mul":
        add_exp(output, "x");
        break;
      case "calc_minus":
        add_exp(output, "-");
        break;
      case "calc_plus":
        add_exp(output, "+");
        break;
      case "calc_result":
        output.innerText = calcOutput(output.innerText);
        break;
    }
  } else {
    output.innerText += e.target.innerText;
  }
};
