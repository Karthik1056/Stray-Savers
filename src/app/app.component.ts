import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Mymainpage/navbar/navbar.component';
import { MainpageComponent } from './Page/mainpage/mainpage.component';
import { AboutpageComponent } from './About/aboutpage/aboutpage.component';
import { BlogpageComponent } from './blogs/blogpage/blogpage.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { PortfolioComponent } from './Port/portfolio/portfolio.component';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,MainpageComponent,AboutpageComponent,BlogpageComponent,ContactusComponent,PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stray-savers';
}
