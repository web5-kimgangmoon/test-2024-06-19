if (!window.localStorage.getItem("todoListArray"))
  window.localStorage.setItem("todoListArray", JSON.stringify([]));
const todoListArray = JSON.parse(window.localStorage.getItem("todoListArray"));
const todoListInput = document.forms["todoListInput"];
const todoListOl = document.getElementById("todoListOl");

todoListArray.forEach((item) => {
  todoListOl.appendChild(mk_todoListItem(item));
});

document.getElementById("todoListSubmit").onclick = (e) => {
  if (!todoListInput["title"].value || !todoListInput["description"].value) {
    console.error("need value 'title', 'description'");
    return;
  }
  todoListArray.push({
    title: todoListInput["title"].value,
    description: todoListInput["description"].value,
    isComplete: false,
  });
  todoListOl.appendChild(
    mk_todoListItem({
      title: todoListInput["title"].value,
      description: todoListInput["description"].value,
      isComplete: false,
    })
  );
  todoListInput["title"].value = "";
  todoListInput["description"].value = "";
  window.localStorage.setItem("todoListArray", JSON.stringify(todoListArray));
};
document.getElementById("todoListOl").onclick = (e) => {
  let idx;
  if (e.target.classList.item(0) == "complete_todo") {
    idx = [...document.getElementsByClassName("complete_todo")].reduce(
      (a, b, idx) => {
        a = b == e.target ? idx : a;
        return a;
      },
      -1
    );
    todoListArray[idx].isComplete = true;
    document.getElementsByTagName("li")[idx].classList.add("complete");
    window.localStorage.setItem("todoListArray", JSON.stringify(todoListArray));
  }
  if (e.target.classList.item(0) == "delete_todo") {
    idx = [...document.getElementsByClassName("delete_todo")].reduce(
      (a, b, idx) => {
        a = b == e.target ? idx : a;
        return a;
      },
      -1
    );
    todoListArray.splice(idx, 1);
    document.getElementsByTagName("li")[idx].remove();
    window.localStorage.setItem("todoListArray", JSON.stringify(todoListArray));
  }
};
