import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';
import { GroupComponent } from './group/group.component';
import { ChatComponent } from './chat/chat.component';
import { MatMenuModule } from '@angular/material/menu';
import { MembersComponent } from './members/members.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ConnectionComponent,
    GroupComponent,
    ChatComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ConnectionRoutingModule
  ]
})
export class ConnectionModule { }
