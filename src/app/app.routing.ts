import {Routes, RouterModule} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserFormComponent} from "./users/user-form/user-form.component";
import {PreventUnsavedChangedGuardService} from "./shared/prevent-unsaved-changed-guard.service";
import {UserNotFoundComponent} from "./users/user-not-found/user-not-found.component";

const appRoutes: Routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/new', component: UserFormComponent, canDeactivate: [PreventUnsavedChangedGuardService]},
    {path: 'users/:id', component: UserFormComponent, canDeactivate: [PreventUnsavedChangedGuardService]},
    {path: 'user-not-found', component: UserNotFoundComponent},
    {path: '**', component: HomeComponent}, // default route
];

export const appRouting = RouterModule.forRoot(appRoutes);