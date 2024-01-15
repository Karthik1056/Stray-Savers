import { Routes } from '@angular/router';
import { AboutpageComponent } from './About/aboutpage/aboutpage.component';
import { BlogpageComponent } from './blogs/blogpage/blogpage.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { PortfolioComponent } from './Port/portfolio/portfolio.component';
import { NavbarComponent } from './Mymainpage/navbar/navbar.component';

export const routes: Routes = [
    {path:'', component: NavbarComponent},
    {path:'aboutpage', component: AboutpageComponent},
    {path:'blogpage', component:BlogpageComponent},
    {path:'portfolio', component:PortfolioComponent},
    {path:'contactus', component:ContactusComponent},
];
