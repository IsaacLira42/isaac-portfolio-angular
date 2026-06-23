import { Component } from '@angular/core';
import { SectionsTitles } from '../sections-titles/sections-titles';

@Component({
  selector: 'app-about',
  imports: [SectionsTitles],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
