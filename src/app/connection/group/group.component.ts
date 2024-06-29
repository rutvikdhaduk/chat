import { Component } from '@angular/core';
import { ScreenSizeService } from '../../service/screen-size.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  dummyLoop: number[] = [];

  constructor(public _screenSize: ScreenSizeService) { }
  ngOnInit(): void {
    this.GetDummyLoop();
  }

  GetDummyLoop() {
    for (let i = 0; i < 20; i++) {
      this.dummyLoop.push(i);
    }
  }

  GetChatByUser() {
  }
}
