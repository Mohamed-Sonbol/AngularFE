# MYSQL code
CREATE TABLE students (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100)NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE courses (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100)NOT NULL,
    student_id int,
    PRIMARY KEY (id)
    FOREIGN KEY (student_id) REFERENCES students(id)
);

1-create those tables then insert some values

2-edit the Mysql db connection details in the server.js file in the node-crud-api floder

3-run

PS. RUN NPM install for mysql2, cors, express and body-parser if you lack any


# CRUD

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
