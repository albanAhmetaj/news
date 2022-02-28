import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShowPostComponent } from './show-post/show-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsComponent } from './posts.component';
import { ZorroModule } from 'src/app/zorro/zorro.module';

@NgModule({
  declarations: [
    PostsComponent,
    ShowPostComponent,
    CreatePostComponent,
    EditPostComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ZorroModule,
  ],
})
export class PostsModule {}
