import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Office } from 'office.js';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


Office.initialize = reason =>{
    
    platformBrowserDynamic().bootstrapModule(AppModule)
              .catch(err => console.error(err));
    Word.run(function(context){
        context.document.body.clear();
        return context.sync();
    })
};

