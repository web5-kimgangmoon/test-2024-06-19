class MakeElem {
  node;
  constructor(node) {
    this.node = node;
  }

  add_classNId({ classList, id }) {
    if (Array.isArray(classList)) {
      this.node.classList.add(...classList);
    }
    if (id) {
      this.node.id = id;
    }
    return this;
  }

  add_ev(events) {
    if (!events) {
      return this;
    }
    if (typeof events != "object") {
      console.error("events is not object!");
      return this;
    }
    Object.entries(events).forEach((item) => {
      this.node[item[0]] = (e) => item[1](e);
    });
    return this;
  }

  add_attr(attributes) {
    if (!attributes) {
      return this;
    }
    if (typeof attributes != "object") {
      console.error("attributes is not object!");
      return this;
    }
    Object.entries(attributes).forEach((item) => {
      this.node.setAttribute(item[0], item[1]);
    });
    return this;
  }
  getNode() {
    return this.node;
  }
  add_innerText(innerText) {
    if (!innerText) {
      return this;
    }
    this.node.innerText = innerText;
    return this;
  }
}
function mk_elem({ classList, tag, id, attributes, innerText }, events) {
  return new MakeElem(document.createElement(tag))
    .add_classNId({ classList, id })
    .add_attr(attributes)
    .add_ev(events)
    .add_innerText(innerText)
    .getNode();
}

function mk_imgBox({ classList, id, src }, events) {
  if (!Array.isArray(classList)) {
    classList = [];
  }
  const box = mk_elem(
    {
      classList: ["imgBox"],
      tag: "div",
      id,
      classList: ["imgBox", ...classList],
    },
    events
  );
  box.appendChild(mk_elem({ tag: "img", attributes: { src } }));
  return box;
}

function mk_todoListItem({ title, description, isComplete }) {
  let li;
  const buttonList = mk_elem({
    classList: ["p-2", "d-flex", "flex-gap-2"],
    tag: "div",
  });
  if (isComplete) {
    li = mk_elem({ classList: ["d-flex", "border-1", "complete"], tag: "li" });
  } else {
    li = mk_elem({ classList: ["d-flex", "border-1"], tag: "li" });
  }
  buttonList.append(
    ...[
      mk_elem({
        classList: ["complete_todo", "btn-primary"],
        tag: "button",
        innerText: "완료",
      }),
      mk_elem({
        classList: ["delete_todo", "btn-primary", "btn-warning"],
        tag: "button",
        innerText: "삭제",
      }),
    ]
  );
  li.append(
    ...[
      mk_elem({
        classList: ["p-2", "border-end", "textBox", "title"],
        tag: "div",
        innerText: title,
      }),
      mk_elem({
        classList: ["p-2", "border-end", "textBox", "flex-grow"],
        tag: "div",
        innerText: description,
      }),
      buttonList,
    ]
  );
  return li;
}
