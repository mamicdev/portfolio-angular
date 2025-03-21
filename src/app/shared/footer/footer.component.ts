import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type footerMenuLinks = {
  footerSubTitle: string;
  footerContentsList: {footerLinkName: string, relativeUrl: string}[];
}[]

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerMenu : footerMenuLinks = [
    {
      footerSubTitle: "Footer Subtitle 1",
      footerContentsList: [
        {footerLinkName: "bla bla bla 1", relativeUrl: "/bla1"},
        {footerLinkName: "bla bla bla 2", relativeUrl: "/bla2"},
        {footerLinkName: "bla bla bla 3", relativeUrl: "/bla3"},
      ]
    },
    {
      footerSubTitle: "Footer Subtitle 2",
      footerContentsList: [
        {footerLinkName: "blo blo blo 1", relativeUrl: "/blo1"},
        {footerLinkName: "blo blo blo 2", relativeUrl: "/blo2"},
        {footerLinkName: "blo blo blo 3", relativeUrl: "/blo3"},
      ]
    },
    {
      footerSubTitle: "Footer Subtitle 3",
      footerContentsList: [
        {footerLinkName: "ble ble ble 1", relativeUrl: "/ble1"},
        {footerLinkName: "ble ble ble 2", relativeUrl: "/ble2"},
        {footerLinkName: "ble ble ble 3", relativeUrl: "/ble3"},
      ]
    }
  ];


}
