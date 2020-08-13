import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Office.initialize = function () {};
    
(async () => {
  await Office.onReady();
  console.log("Dddd");
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  Word.run(function(context){
    context.document.body.insertParagraph("Cos","Start");
    return context.sync();
  })
})();
  

