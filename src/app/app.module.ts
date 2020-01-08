import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { ExamDetailComponent } from './pages/exam-detail/exam-detail.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    LoginComponent,
    NotFoundComponent,
    UserDetailComponent,
    AdminLayoutComponent,
    QuestionsComponent,
    QuestionDetailComponent,
    ExamsComponent,
    ExamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
