"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_module_1 = require('./app.module');
/*
 * Bootstrap our Angular app with a top level NgModule
 */
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (e) { return console.log(e); });
//# sourceMappingURL=main.js.map