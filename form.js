class form {
    constructor(){
        this.Input=createInput("name");
        this.Button=createButton("Play")
        this.Greeting=createElement("h2")
    }
    hide(){
        this.Greeting.hide();
        this.Button.hide();
        this.Input.hide();
    }

    display(){
        var Title= createElement("h2");
        Title.html("Car Racing Game ");
        Title.position(130,0);
        //var Input = createInput("Name");
        this.Input.position(130,160);
       // var Button = createButton("Play");
        this.Button.position(250,200);
        
        this.Button.mousePressed(()=>{
            this.Input.hide();
            this.Button.hide();
            player. name = this.Input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update ();
            player.updateCount(playerCount);
           // var Greeting = createElement("h3");
          this.Greeting.html("Hello"+player.name)
            this.Greeting.position(130,160);
        
        })

    }
}