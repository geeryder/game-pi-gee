import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-pi';
  jumping:boolean = false;
  manIsHit:boolean = false;
  positionOfBall: boolean = false;


  obstacles = [{
    pos: -100
  },
  {
    pos: -50
  },
  {
    pos: -10
  }]
  


@HostListener('document:keydown', ['$event.key'])
keydown(key: string) {
  if( key == 'ArrowUp'){
    this.jumping = true;
    setTimeout(() => {
      this.jumping = false}
    ,500)
}
}



// @HostListener('document:keyup', ['$event.key'])
// keyup(key: string) {
//   if( key == 'ArrowDown'){
//     this.jumping = false;
// }
// }

constructor() {
  console.log(this.collision(this.obstacles));

  setInterval(() => {
    for(let obstacle of this.obstacles){
    if(obstacle.pos < -200){
      obstacle.pos = 1000 + Math.random()* 1000;
    }
    this.collision(obstacle.pos);
    obstacle.pos -= 1.5;
  }
  }, 1)

}
collision(positionOfBall) {
  if(!this.jumping){
    if(positionOfBall < 50){
      this.manIsHit = false;
    }         
    if( positionOfBall < 150 && positionOfBall > 50 ){
    this.manIsHit = true;
  }
}
}

ngOnInit(){

}
}

