import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpanelRoutingModule } from './adminpanel-routing.module';
import { AdminpanelComponent } from './adminpanel.component';
import { AuthorsComponent } from './users/authors/authors.component';
import { ManagersComponent } from './users/managers/managers.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { PostsModule } from './posts/posts.module';
import { ZorroModule } from 'src/app/zorro/zorro.module';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AdminpanelComponent,
    AuthorsComponent,
    ManagersComponent,
    MyProfileComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, AdminpanelRoutingModule, PostsModule, ZorroModule],
})
export class AdminpanelModule {}
