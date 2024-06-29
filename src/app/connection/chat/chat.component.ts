import { Component } from '@angular/core';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  constructor(public _Navigation: NavigationService) { }
}
