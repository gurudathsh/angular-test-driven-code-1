# RegressionScenario

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Running unit tests in watch mode

Run `ng test --watch` to execute the unit tests via [Karma](https://karma-runner.github.io).


## About this use case

The `toJavascriptDate` utility function is designed to recursively traverse an object or array and convert all ISO date strings into JavaScript Date objects. It is particularly useful for scenarios where data fetched from APIs or external sources contains ISO date strings, and you need them as Date objects for easier manipulation and formatting in your Angular application.

## Features to cover

`Recursive Traversal`: Supports deeply nested objects and arrays.

`Type Safety`: Leaves primitive values (string, number, boolean, null, etc.) unchanged.

`Flexible Usage`: Handles both top-level and nested ISO date strings.

`Lightweight Implementation`: No additional dependencies required.