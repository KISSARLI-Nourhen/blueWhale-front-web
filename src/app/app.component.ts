import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/model/country.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blueWhale-front-web';
  private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;

    constructor(private tokenStorageService: TokenStorageService) {

    }

      ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
          const user = this.tokenStorageService.getUser();
          this.roles = user.roles;

          this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
          this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

          this.username = user.first_name;
        }
      }

      logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
      }

}
