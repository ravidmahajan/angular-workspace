# AngularWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Angular Workspace and Application Management

This document provides an overview of commands used for creating and managing an Angular workspace and applications within it. These commands are essential for developers working on Angular projects, enabling the efficient setup and development of scalable web applications.

## Prerequisites

Before proceeding, ensure you have the following installed:

- Node.js (Preferably the latest LTS version)
- npm (Node Package Manager), which comes with Node.js
- Angular CLI: Install it globally using `npm install -g @angular/cli`

## Creating a New Workspace

A workspace is a container for Angular projects; it's possible to have multiple projects (applications and libraries) in a single workspace.

1. **Create a New Workspace** without the default application:

ng new [workspaceName] --create-application=false

Replace `[workspaceName]` with your desired workspace name. This command creates a new workspace directory and populates it with workspace-specific files (e.g., configuration files).

## Adding a New Application to the Workspace

Within the workspace, you can generate multiple applications that can share libraries and assets.

1. **Generate a New Application**:

ng generate application [appName]

Replace `[appName]` with your application name. This command adds a new application to your workspace, complete with its own source folder and configuration files.

## Running the Application

To view your application in a browser, you'll need to serve it using the Angular CLI.

1. **Serve the Application**:

ng serve --project=[appName]


Replace `[appName]` with the name of the application you want to serve. This command compiles the application and starts a web server. By default, the application is available at `http://localhost:4200/`.

## Further Commands

The Angular CLI supports various other commands for development, testing, and deployment. Here are a few common ones:

- **Building for Production**: `ng build --prod`
- **Running Unit Tests**: `ng test`
- **Running End-to-End Tests**: `ng e2e`

For a comprehensive list of commands, refer to the [Angular CLI documentation](https://angular.io/cli).

## Bootstrap commands

npm install bootstrap --save

npm install bootstrap-icons --save

# import bootstrap in styles.css

@import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

## Conclusion

This README provides a basic overview of creating and managing an Angular workspace and applications. By following the outlined steps, you can set up a development environment ready for building scalable web applications with Angular.


==============================================================================================
# Angular Bootstrapping Process:

In most Angular applications, the bootstrapping process (the process of starting up the Angular application) is handled by the platformBrowserDynamic function for just-in-time (JIT) compilation, or by Angular CLI automatically behind the scenes for ahead-of-time (AOT) compilation. The standard way to bootstrap an application in a development environment looks something like this:

## For JIT Compilation (Development):

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
This code is usually found in the main.ts file of an Angular project.

## Angular Standalone Components and bootstrapApplication Method
With the introduction of Angular Standalone Components in later versions (Angular version 14 and beyond), there's a new way to bootstrap applications that don't rely on Angular modules (NgModule). This is where bootstrapApplication comes into play. It is used to bootstrap applications that use standalone components or when initiating an application in a more granular and potentially more performance-optimized way. The usage, however, is slightly different from what you've shown:

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
Here, AppComponent is expected to be a standalone component or a component with direct references to all dependencies it needs without the use of an NgModule.

## Addressing Your Code
Misuse of bootstrapApplication: Your attempt to bootstrap the AppModule with bootstrapApplication is incorrect based on Angular's standard practices. bootstrapApplication is designed for components, not modules.

## Commented Code: 
The commented-out code attempting to bootstrap AppComponent is closer to the correct use of bootstrapApplication, but it lacks context on whether AppComponent is set up as a standalone component.

## Configuration Object: 

Passing appConfig directly to bootstrapApplication or platformBrowserDynamic().bootstrapModule is not standard. Usually, configuration would be handled within the component or module, or through Angular's environment files.

## Conclusion
If you're working with Angular modules (which include AppModule), use platformBrowserDynamic().bootstrapModule.
If you're experimenting with standalone components in Angular version 14 or later, you can use bootstrapApplication but ensure your starting point is a component, not a module.


