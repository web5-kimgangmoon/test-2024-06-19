const imgCollection = document.getElementById("img-collection");
const bigImgBox = mk_elem({
  classList: ["bigImgBox", "z-index-1", "d-none"],
  id: "bigImgBox",
  tag: "div",
});
const curtain = mk_elem(
  {
    classList: ["curtain", "d-none"],
    id: "curtain",
    tag: "div",
  },
  {
    onclick: () => {
      curtain.classList.add("d-none");
      bigImgBox.classList.add("d-none");
      bigImgBox.getElementsByTagName("img")[0].remove();
      //   bigImgBox.innerHTML = "";
    },
  }
);

const imgList = [
  mk_imgBox({
    tag: "img",
    src: "./imgs/401273_41010_1357.jpg",
  }),
  mk_imgBox({
    tag: "img",
    src: "./imgs/notification-bell.png",
  }),
  mk_imgBox({
    tag: "img",
    src: "./imgs/person.png",
  }),
  mk_imgBox({
    tag: "img",
    src: "./imgs/401273_41010_1357.jpg",
  }),
];

imgCollection.append(...imgList);
document.getElementsByClassName("root")[0].append(...[curtain, bigImgBox]);

imgCollection.onclick = (e) => {
  if (e.target.hasAttribute("src")) {
    bigImgBox.appendChild(
      mk_elem({ tag: "img", attributes: { src: e.target.src } })
    );
    curtain.classList.remove("d-none");
    bigImgBox.classList.remove("d-none");
  }
};
