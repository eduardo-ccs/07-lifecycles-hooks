import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      height: 60px;
      background-color: #333;
      color: white;
      padding: 10px;
    }
    .active {
      color: #341162;
      font-weight: bold;  
    }
    nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
    }
    nav a:hover {
      text-decoration: underline;
    }
  
  `,
})
export class NavbarComponent {}
