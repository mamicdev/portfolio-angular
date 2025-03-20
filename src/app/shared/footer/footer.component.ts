import { Component } from '@angular/core';

type footerMenuLinks = {
  footerSubTitle: string;
  footerContentsList: string[];
}[]

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerMenu : footerMenuLinks = [
    {
      footerSubTitle: "Footer Subtitle 1",
      footerContentsList: ["lorem bla bla", "lorem bla bla","lorem bla bla", "lorem bla bla"]
    },
    {
      footerSubTitle: "Footer Subtitle 2",
      footerContentsList: ["lorem bla bla", "lorem bla bla","lorem bla bla", "lorem bla bla"]
    },
    {
      footerSubTitle: "Footer Subtitle 3",
      footerContentsList: ["lorem bla bla", "lorem bla bla","lorem bla bla", "lorem bla bla"]
    }
  ];


}
