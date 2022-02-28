import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpanelComponent } from './adminpanel.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { ManagersComponent } from './users/managers/managers.component';
import { RouteGuard } from 'src/app/guards/route.guard';
import { AuthorsComponent } from './users/authors/authors.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AdminpanelComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'posts',
      },
      {
        path: 'posts',
        children: [
          { path: '', component: PostsComponent },
          {
            path: 'create',
            component: CreatePostComponent,
          },
          {
            path: 'edit/:id',
            component: EditPostComponent,
          },
        ],
      },
      {
        path: 'managers',
        component: ManagersComponent,
        canActivate: [RouteGuard],
      },
      {
        path: 'authors',
        component: AuthorsComponent,
        canActivate: [RouteGuard],
      },
      { path: 'myprofile', component: MyProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpanelRoutingModule {}
