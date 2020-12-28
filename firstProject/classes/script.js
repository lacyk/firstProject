"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

}

class ColoredRecrangleWithText extends Rectangle {
    constructor(height, width, text, bgclr) {
        super(height, width);
        this.text = text;
        this.bgclr = bgclr;
    }

    showMyProps() {
        console.log(`This text ${this.text}, and this colour ${this.bgclr}`);
    }

    h() {
        console.log('Hey you, yes you, lemme tell you 1 thing, you are beautifull )))');
    }
}

// const sq = new Rectangle (10, 10);
// const long = new Rectangle (20, 100);
// console.log(sq.calcArea());
// console.log(long.calcArea());

const prop = new ColoredRecrangleWithText(10, 10, "this is me", 'red');
console.log(prop.calcArea());
prop.h();
prop.showMyProps();