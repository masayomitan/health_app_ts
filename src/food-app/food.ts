import { Foodable } from "./interfaces";
import { Score } from "./score";

export class Food implements Foodable { 
  constructor(public element: HTMLDivElement){
    //bindを使うことによって(this)はクラス内のthisと定義する。
  element.addEventListener('click', this.clickEventHandler.bind(this))
  }

  clickEventHandler() {
    this.element.classList.toggle('food--active');
    const score = Score.getInstance();
    score.render();
  }
}

