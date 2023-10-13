import React from 'react';
import Sketch from 'react-p5';
import { ref, set } from "@firebase/database";
import { firebase } from "./firebase";


function P5Sketch() {
    // All the points
let points = [];
let mouseDown = false;
let previous;

const reset = (p5) =>{
    points = [];
    p5.setup(); 
}
const sendData = async (e) => {
    console.log(points); 
    await set(
      ref(

        firebase,
        "stars/" +
        Date.now() 

      ),
      points
    );
    points = [];
    window.location.reload(false);
  };

    const setup = (p5, canvasParentRef) => {
        previous = p5.createVector(0,0);
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.background(0, 0, 0);
        p5.rect(0, 0,window.innerWidth, window.innerHeight / 5)
        p5.rect(0,window.innerHeight - ((window.innerHeight / 10)/2),window.innerWidth, window.innerHeight / 10)
    }

    const draw = (p5) => { 
       // 
       // p5.ellipse(100, 100, 100);
    }

    const mp = (p5) => { 
        // because of weird bug, where mouse up get registered as another press event...
        mouseDown = !mouseDown;
        if(mouseDown){
        //points.add([previous.x,previous.y])
        if(p5.mouseY > window.innerHeight - (window.innerHeight / 20)){
            console.log(p5.mouseY);
            console.log()
            sendData(window.innerHeight / 2);

        }
        else if(p5.mouseY < (window.innerHeight / 5 )){
            reset(p5);
        } 
        else{
        if(previous.x !== 0){
            p5.stroke(255);
            p5.line(previous.x, previous.y, p5.mouseX, p5.mouseY);
        } 
        points[points.length] = [p5.mouseX, p5.mouseY];
        previous.x = p5.mouseX;
        previous.y = p5.mouseY;
        p5.ellipse(p5.mouseX, p5.mouseY, 10);
        console.log(p5.mouseX);
        }
    }
    else{
        mouseDown = false; 
    
    }
    }
      

    return (
        <>
        <button className='sendButton' onSubmit={() => {sendData();}}>Send</button>
        <Sketch setup={setup} draw={draw} mousePressed={mp}/>
        </>
    )
} 

export default P5Sketch;
