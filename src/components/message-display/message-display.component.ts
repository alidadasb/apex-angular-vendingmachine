import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-display[message]',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {

  @Input() message: any = '';
  @Input() label: any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
