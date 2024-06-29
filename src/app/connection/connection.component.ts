import { Component } from '@angular/core';
import { ScreenSizeService } from '../service/screen-size.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {
  constructor(public _screenSize: ScreenSizeService) { }
  ngOnInit(): void {
    this._screenSize.windowSize();
  }
}
