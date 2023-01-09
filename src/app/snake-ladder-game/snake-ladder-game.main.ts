import { SnakeLadderGameModule } from './snake-ladder-game.module';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

const bootstrap = () => platformBrowserDynamic().bootstrapModule(SnakeLadderGameModule);
bootstrap().catch(err => console.error(err));