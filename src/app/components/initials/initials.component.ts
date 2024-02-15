import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-initials',
  templateUrl: './initials.component.html',
  styleUrls: ['./initials.component.css']
})
export class InitialsComponent {
  title = 'initials';

  letters: ElementRef[] = [];

  intervals = [500, 1000, 1500]

  ngAfterViewInit() {
    this.letters = this.getLetterElements();

    this.letters.forEach((letter, index) => {
      this.animateJump(letter, index); 
    });
  }

  getLetterElements() {

    return Array.from(document.querySelectorAll('.letter-container'))
      .map(element => {
        return {
          nativeElement: element
        } as ElementRef;
      });
  
  }
  

  animateJump(letter: ElementRef, index: number) {

    const interval = this.intervals[index];

    let lastJump = 0;

    setInterval(() => {
      
      const now = Date.now();

      if (now > lastJump + interval) {
        this.jump(letter);
        lastJump = now;  
      }

    }, 100);

  }

  jump(letter: ElementRef) {
   
    letter.nativeElement.classList.add('jump');

    setTimeout(() => {
      letter.nativeElement.classList.remove('jump');
    }, 500);

  }
}
