import { Component } from '@angular/core';
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-hero',
  imports: [FontAwesomeModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  faGithub = faGithub;
  faDownload = faDownload;
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
}
