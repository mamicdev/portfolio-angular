import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type mainNavLinks = {
  linkName: string;
  relativeUrl: string;
}

@Component({
  selector: 'app-mainnavigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainnavigation.component.html',
  styleUrl: './mainnavigation.component.scss'
})
export class MainnavigationComponent {
  navMenu: mainNavLinks[] = [
    { linkName: "Home", relativeUrl: "/" },
    { linkName: "Newspaper", relativeUrl: "/newspaper" },
    { linkName: "Restaurant", relativeUrl: "/restaurant" },
    { linkName: "E-commerce", relativeUrl: "/ecommerce" }
  ];
}
