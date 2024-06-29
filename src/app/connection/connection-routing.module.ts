import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ConnectionComponent } from './connection.component';

const routes: Routes = [
  {
    path: '', component: ConnectionComponent,
    children: [
      { path: '', redirectTo: 'c', pathMatch: 'full' },
      { path: 'c', component: ChatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
