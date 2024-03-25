import { Component, OnInit } from '@angular/core';
import VanillaTilt from "vanilla-tilt";

@Component({
  selector: 'about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.romanN') as any);
    VanillaTilt.init(document.querySelector('.marika') as any);
    VanillaTilt.init(document.querySelector('.sofia') as any);
    VanillaTilt.init(document.querySelector('.romanP') as any);
    VanillaTilt.init(document.querySelector('.pavel') as any);
  }
}
