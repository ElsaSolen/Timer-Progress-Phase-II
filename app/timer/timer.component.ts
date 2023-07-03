import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() init = 20;
  //@Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  private countdownTimerRef: any = null;
  counter = 0;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnChanges(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    if (this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(): void {
    this.countdownTimerRef = setTimeout(() => {
      this.counter -= 1;
      this.processCountdown();
      //this.onDecrease.emit(this.counter);
    }, 1000);
  }

  processCountdown(): void {
    if (this.counter === 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout(): void {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }
}
