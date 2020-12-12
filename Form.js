class Form {

  constructor() {
    this.Q1 = createElement('h2');
    this.answer1a = createButton('56');
    this.answer1b = createButton('23');
    this.answer1c = createButton('79');
    this.answer1d = createButton('82');

    this.title = createElement('h1');
    this.title2 = createElement('h4');
    
    this.message = createElement('h2');
    this.message2 = createElement('h2');

  }

  display(){

    this.title.html("Honesty Test");
    this.title2.html("(Try not to use the internet)");
    this.Q1.html("How many moons does Jupiter have?");

    this.title.position(displayWidth/2 - 50, 0);
    this.title2.position(displayWidth/2 - 50, 50);

    this.Q1.position(100, 100);
    this.answer1a.position(100, 175);
    this.answer1b.position(200, 175);
    this.answer1c.position(300, 175);
    this.answer1d.position(400, 175);
  

    this.answer1c.mousePressed(()=>{
      this.message.html("Correct Answer. Good going!")
      this.message.position(displayWidth/2-100, displayHeight/2 + 150);
      this.message2.hide();
   
    });

    this.answer1a.mousePressed(()=>{
      this.message2.html("Um, that's not correct. Keep trying")
      this.message2.position(displayWidth/2-100, displayHeight/2 + 200);
      this.message.hide();

    });

    this.answer1b.mousePressed(()=>{
      this.message2.html("Um, that's not correct. Keep trying")
      this.message2.position(displayWidth/2-100, displayHeight/2 + 250);
      this.message.hide();
   
    });

    this.answer1d.mousePressed(()=>{
      this.message2.html("Um, that's not correct. Keep trying")
      this.message2.position(displayWidth/2-100, displayHeight/2 + 300);
      this.message.hide();

    });
  }
}
