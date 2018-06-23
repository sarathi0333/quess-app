import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { NetworkService } from './services/network.service';
import { AuthService } from './auth/auth.service';
import { DataService } from './services/data/data.service';
import { AdminpanelComponent } from './components/adminpanel/adminpanel.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SortGradePipe } from './components/adminpanel/pipes/sort-grade.pipe';
import { SortDatePipe } from './components/adminpanel/pipes/sort-date.pipe';
import { SortZonePipe } from './components/adminpanel/pipes/sort-zone.pipe';

import { AuthGuard } from './auth/auth.guard';
import { UploadComponent } from './components/adminpanel/upload/upload.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    AdminpanelComponent,
    QuizComponent,
    SortGradePipe,
    SortDatePipe,
    SortZonePipe,
    UploadComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot()
  ],
  providers: [NetworkService, AuthService, AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
