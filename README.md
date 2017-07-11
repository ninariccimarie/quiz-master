# QUIZ MASTER
> Quiz Master is a quiz app to test my knowledge in web development

A web application to test your knowledge on various topics. 
Users may manage questions and enter quiz mode. They can also choose a
difficulty level (easy, medium hard) or play all the questions.

 * [Tech / Framework Used](#tech-or-frameworks-used)
 * [Installation](#installation)
 * [Getting Started](#getting-started)

## Tech or Framework Used

<b>Built with</b>
- [Ruby v2.4.1](https://www.ruby-lang.org/en/)
- [Ruby on Rails v5.1.2](http://rubyonrails.org/)
- ES2015
- [React](https://facebook.github.io/react/)

<b>Testing</b>
<b>Backend</b>
- [RSpec v3.6.0](https://github.com/rspec/rspec-rails)
- [Shoulda](https://github.com/thoughtbot/shoulda)
- [FactoryGirl for Rails](https://github.com/thoughtbot/factory_girl_rails)
- [Faker](https://github.com/stympy/faker)
- [DatabaseCleaner](https://github.com/DatabaseCleaner/database_cleaner)
<b>Frontend</b>
- [mocha](https://mochajs.org/)
- [sinon](http://sinonjs.org/)
- [enzyme](https://github.com/airbnb/enzyme)
- [chai](http://chaijs.com/)

<b>Back-end Dependencies</b>
- [numbers_in_words](https://github.com/markburns/numbers_in_words)
- [rack-cors](https://github.com/cyu/rack-cors)

<b>Front-end Dependencies</b>
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
- [node-sass](https://github.com/sass/node-sass)
- [rc-table](https://github.com/react-component/table)
- [axios](https://github.com/mzabriskie/axios)
- [react-render-html](https://github.com/noraesae/react-render-html)
- [react-toastify](https://github.com/fkhadra/react-toastify)


## Installation
A quick introduction to get the application started.

1. Clone the repository
    - Under the repository name, click <b>Clone</b> or <b>download.</b>
    - In the Clone with HTTPs section, click the clipboard icon to copy the clone URL for the repository.
    - Open your terminal

```
$ git clone https://github.com/ninariccimarie/quiz-master.git
```

    * Press Enter. Your local clone will be created.

2. Make sure to install Ruby and Ruby on Rails with the same version as the project.

3. Install backend and frontend dependencies.
```
$ bundle
$ npm install
```

## Getting Started

Navigate to the location of the project. Open separate terminals for the backend and frontend.
Start both servers.
```
$ cd backend
$ rake db:reset
$ rails s
```
```
$ cd frontend
$ npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

To run the app on testing environment and run all tests:

```
$ # backend test
$ rake db:test:prepare
$ exec rspec spec 
$ # frontend test
$ npm test
```