import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionDetailComponent } from './pages/question-detail/question-detail.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { ExamDetailComponent } from './pages/exam-detail/exam-detail.component';

const routes: Routes = [
  // Path '/admin/login' => Trang Login
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      // Path '/admin' => Trang Dashboard
      { path: '', component: DashboardComponent },

      // Path '/admin/users' => Trang Users
      { path: 'user/getAll', component: UsersComponent },

      // Path '/admin/questions' => Trang Questions
      { path: 'question', component: QuestionsComponent },

      // Path '/admin/exams' => Trang Exams
      { path: 'exams', component: ExamsComponent },

      // Path '/admin/exams/1' => Trang Exams detail
      { path: 'exams/:id', component: ExamDetailComponent },

      // Path '/admin/question' => Trang Create Questions
      { path: 'question/create', component: QuestionDetailComponent },

      // Path '/admin/question/1' => Trang Questions Detail
      { path: 'question/update/:id', component: QuestionDetailComponent },

      // Path '/admin/users/create' => Trang create User
      { path: 'user/create', component: UserDetailComponent },

      // Path '/admin/users/detail/:id' => Trang User Detail
      { path: 'user/update/:id', component: UserDetailComponent }
    ]
  },

  // Còn lại: Trang not found
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
