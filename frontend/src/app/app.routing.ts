import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { DetailsComponent } from './components/details/details.component';

import { AuthGuard } from './auth/auth.guard';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'admin', component: AdminpanelComponent, canActivate: [ AuthGuard ] },
    { path: 'quiz', component: QuizComponent }
];