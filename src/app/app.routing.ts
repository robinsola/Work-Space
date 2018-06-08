import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'calendar',
    component: CalendarComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'gallery',
    component: GalleryComponent
  },
  { path: 'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
