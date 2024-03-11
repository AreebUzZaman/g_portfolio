import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyHeaderComponent } from './component/body-header/body-header.component';
import { BodySectionComponent } from './component/body-section/body-section.component';
import { FullRemainingBodyComponent } from './component/full-remaining-body/full-remaining-body.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { EducationComponentComponent } from './component/education-component/education-component.component';
import { SkillComponentComponent } from './component/skill-component/skill-component.component';
import { ExperianceComponentComponent } from './component/experiance-component/experiance-component.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ClientComponent } from './component/client/client.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarouselComponent } from './carousel/carousel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    BodyHeaderComponent,
    BodySectionComponent,
    FullRemainingBodyComponent,
    HeaderComponent,AboutmeComponent,
    EducationComponentComponent,
    SkillComponentComponent,
    ExperianceComponentComponent,
    ProfileComponent,
    PortfolioComponent,
    ClientComponent,
    ContactComponent,
    FooterComponent,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'website new';

  
  // images = [
  //   {
  //     imageSrc:
  //     'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     imageAlt: 'nature1',
  //   },
  //   {
  //     imageSrc:
  //     'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  //     imageAlt: 'nature2',
  //   },
  //   {
  //     imageSrc:
  //     'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
  //     imageAlt: 'person1',
  //   }
  // ]
}




