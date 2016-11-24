import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

// Components
import {GameComponent} from './components/game/game.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        GameComponent
    ],
    bootstrap: [
        GameComponent
    ]
})
export class AppModule {
}