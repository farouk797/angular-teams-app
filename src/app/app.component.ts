import { Component, OnInit } from '@angular/core';
import * as microsoftTeams from '@microsoft/teams-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent implements OnInit {
  userEmail: string | undefined;
  userId: string | undefined;

  ngOnInit() {
    microsoftTeams.app
      .initialize()
      .then(() => {
        microsoftTeams.app
          .getContext()
          .then((context) => {
            this.userEmail = context.user?.userPrincipalName;
            this.userId = context.user?.id;

            console.log('User Email:', this.userEmail);
            console.log('User ID:', this.userId);
          })
          .catch((err) => {
            console.error('Error getting Teams context:', err);
          });
      })
      .catch((err) => {
        console.error('Error initializing Teams SDK:', err);
      });
  }
}
