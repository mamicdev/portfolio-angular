import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type headerNavLinks = {
  linkName: string;
  relativeUrl: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navMenu: headerNavLinks[] = [
    {linkName: "Home", relativeUrl: "/"}, 
    {linkName: "Newspaper", relativeUrl: "/newspaper"},
    {linkName: "Restaurant", relativeUrl: "/restaurant"},
    {linkName: "E-commerce", relativeUrl: "/ecommerce"}
  ]; 
}
