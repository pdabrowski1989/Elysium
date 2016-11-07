import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Componets
import {MainComponent}   from './Main/main.component';
import {GameComponent}   from './Game/game.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        MainComponent,
        GameComponent
    ],
    bootstrap: [
        MainComponent,
        GameComponent
    ]
})

export class AppModule {
}