var molotovImage = "example.png";

function start(){
    setTimer(asf, 10);
    //init();
}
var molotovSize = 20;
var molotovX = 0;
var molotovY = getHeight()-molotovSize;
function asf(){
    molotov = new WebImage(molotovImage);
    molotov.setSize(molotovSize, molotovSize);
    molotov.setPosition(molotovX, molotovY*2);
    add(molotov);
    if(molotovY > getWidth()){
        molotov.setPosition(molotovX, molotovY);
    }
    molotovX += molotovSize;
}
