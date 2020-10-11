class dropbox {

constructor () {

var position = {

'isStatic' : true,
'friction' : 0.3

}

this.body1 = Bodies.rectangle(400,650,200,20,position);

this.body2 = Bodies.rectangle(506,610,20,100,position);

this.body3 = Bodies.rectangle(294,610,20,200,position);

this.body1.width = 200;
this.body1.height = 20;

this.body2.width = 20;
this.body2.height = 100;

this.body3.width = 20;
this.body3.height = 100;

}

display(){

    fill ("red");
    
 rect(400,650,this.body1.width,this.body1.height);

 rect(506,610,this.body2.width,this.body2.height);

 rect(294,610,this.body3.width,this.body3.height);

}


}