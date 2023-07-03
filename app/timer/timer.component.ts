import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() init = 0;
  @Output() onComplete = new EventEmitter<void>();

  private countdownTimerRef: any = null;
  counter = 0;
  paused = true;

  constructor() {}

  ngOnInit(): void {
    if (this.init && this.init > 0) {
      this.counter = this.init;
    }
  }

  ngOnChanges(): void {
    this.restartCountdown();
  }

  restartCountdown(): void {
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.counter = this.init;
    }
  }

  toggleCountdown(): void {
    this.paused = !this.paused;
    if (!this.paused) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  doCountdown(): void {
    this.countdownTimerRef = setTimeout(() => {
      this.counter -= 1;
      this.processCountdown();
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
