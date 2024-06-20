class Slide {
  wrapper;
  slide;
  isMove;
  autoMover;
  moveTime;
  currentIdx;
  imgCount;
  constructor(moveTime, imgs) {
    this.wrapper = mk_elem({ classList: ["wrapper"], tag: "div" });
    this.slide = mk_elem({ classList: ["slide"], tag: "div" });
    this.wrapper.appendChild(this.slide);

    this.setImgs(imgs);

    this.moveTime = moveTime;
    this.isMove = false;
    this.autoMove();
    this.rightNRightButtonMake();
  }
  moveCheck() {
    return this.isMove ? true : false;
  }
  sliding(idx) {
    this.currentIdx = idx;
    this.slide.style.transform = `translateX(-${this.currentIdx * 100}%)`;
  }
  goNoneSlide(idx) {
    setTimeout(() => {
      this.slide.style.transition = "";
      this.sliding(idx);
    }, this.moveTime * 1000);
  }
  boundCheck() {
    if (this.currentIdx > this.imgCount - 2) {
      this.goNoneSlide(1);
    } else if (this.currentIdx < 1) {
      this.goNoneSlide(this.imgCount - 2);
    }
  }
  moveIdx(idx) {
    if (this.moveCheck()) {
      return;
    }
    this.isMove = true;
    if (this.slide.style.transition == "")
      this.slide.style.transition = `${this.moveTime}s transform`;
    this.sliding(idx);
    this.boundCheck();
    setTimeout(() => {
      this.isMove = false;
    }, this.moveTime * 1000);
  }
  setImgs(imgs) {
    if (!Array.isArray(imgs)) {
      console.error("imgs is not array!");
      return this;
    }
    this.slide.innerHTML = "";
    this.imgCount = imgs.length;
    this.slide.appendChild(
      mk_elem({ tag: "img", attributes: { src: imgs[this.imgCount - 1] } })
    );
    for (let item of imgs) {
      this.slide.appendChild(
        mk_elem({ tag: "img", attributes: { src: item } })
      );
    }
    this.slide.appendChild(
      mk_elem({ tag: "img", attributes: { src: imgs[0] } })
    );
    this.imgCount += 2;
    this.currentIdx = 1;
    this.slide.style.transform = `translateX(-${this.currentIdx * 100}%)`;
    return this;
  }
  autoMove() {
    if (!this.autoMover) {
      this.autoMover = setInterval(() => {
        this.moveIdx(this.currentIdx + 1);
      }, this.moveTime * 1000 + 500);
      return true;
    } else if (this.autoMover) {
      clearInterval(this.autoMover);
      this.autoMover = null;
      return false;
    }
  }
  getSlide() {
    return this.wrapper;
  }
  rightNRightButtonMake() {
    let count = 0;
    this.wrapper.appendChild(
      mk_elem(
        {
          classList: ["z-1", "rightButton", "button"],
          tag: "div",
          innerText: ">",
        },
        {
          onclick: () => {
            this.moveIdx(this.currentIdx + 1);
          },
        }
      )
    );
    this.wrapper.appendChild(
      mk_elem(
        {
          classList: ["z-1", "leftButton", "button"],
          tag: "div",
          innerText: "<",
        },
        {
          onclick: () => {
            this.moveIdx(this.currentIdx - 1);
          },
        }
      )
    );
    while (++count < this.imgCount - 1) {
      let number = count;
      let node = mk_elem(
        {
          classList: ["z-1", "button", "indexButton"],
          tag: "div",
          innerText: count,
        },
        {
          onclick: () => {
            this.moveIdx(number);
          },
        }
      );
      node.style.transform = `translateX(${count * 2.5}rem)`;
      this.wrapper.appendChild(node);
    }
    this.wrapper.appendChild(
      mk_elem(
        {
          classList: ["z-1", "button", "autoButton", "pause"],
          tag: "div",
        },
        {
          onclick: (e) => {
            if (this.autoMove()) {
              e.target.classList.add("pause");
              e.target.classList.remove("play");
            } else {
              e.target.classList.remove("pause");
              e.target.classList.add("play");
            }
          },
        }
      )
    );
  }
}
document
  .getElementsByClassName("body")[0]
  .appendChild(
    new Slide(1, [
      "../imgGallary/imgs/notification-bell.png",
      "../imgGallary/imgs/person.png",
      "../imgGallary/imgs/401273_41010_1357.jpg",
    ]).getSlide()
  );

document
  .getElementsByClassName("body")[0]
  .appendChild(
    new Slide(2, [
      "../imgGallary/imgs/notification-bell.png",
      "../imgGallary/imgs/person.png",
      "../imgGallary/imgs/401273_41010_1357.jpg",
    ]).getSlide()
  );
document
  .getElementsByClassName("body")[0]
  .appendChild(
    new Slide(3, [
      "../imgGallary/imgs/notification-bell.png",
      "../imgGallary/imgs/person.png",
      "../imgGallary/imgs/401273_41010_1357.jpg",
    ]).getSlide()
  );
