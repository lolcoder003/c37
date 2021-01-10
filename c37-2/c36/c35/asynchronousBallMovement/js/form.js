class Form{
    constructor(){
        this.input  = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');


    }

    display(){
        var title = createElement('h2');
        title.html("car game"); 
        title.position(130,0);
        this.button.position(250,200);
        this.input.position(130,160);
        var greeting = createElement('h3');
        button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = input.value();
            playerCount ++;
            player.update(name);
            player.updateCount(playerCount) ;
            this.greeting.html("hello" + name );
            this.greeting.position(130,160);

        })
    }

        hide(){
            this.greeting.hide();
            this.input.hide();
            this.button.hide();
        }


}