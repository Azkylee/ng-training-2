import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import {appRouting} from "./app.routing";
import { UserFormComponent } from './users/user-form/user-form.component';
import {PreventUnsavedChangedGuardService} from "./shared/prevent-unsaved-changed-guard.service";
import { UserNotFoundComponent } from './users/user-not-found/user-not-found.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { PostCommentsComponent } from './posts/post-comments/post-comments.component';
import { DropdownListComponent } from './users/dropdown-list/dropdown-list.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LimitToPipe } from './shared/limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    UserFormComponent,
    UserNotFoundComponent,
    PostDetailComponent,
    LoaderComponent,
    PostCommentsComponent,
    DropdownListComponent,
    PaginationComponent,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRouting
  ],
  providers: [PreventUnsavedChangedGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
