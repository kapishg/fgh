class Form{constructor(){

}
display(){
    var input =createInput("enter your name")
    input.position(100,100)
    var tittle = createElement(`h3`)
    tittle.position(200,50)
    tittle.html("get ready")
    var button =createButton("ready set go")
    button.position(300,350)
    var greet=createElement(`h4`)
    button.mousePressed(
        function(){
            input.hide()
            button.hide()
            var name=input.value()
            playercount++
            player.update(name)
            player.updatecount(playerount)
            greeting.html("hello"+name)
            greeting.position(350,200)

        }
    )
}
}