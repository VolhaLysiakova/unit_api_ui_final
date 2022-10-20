# unit_api_ui_final_tms
Final project TMS: unit (mocha), API (superagent), ui tests (wdio+cucumber)

1. Unit tests for class Registration. Used `mocha` framework for tests running. Covers positive and exception cases. 

To run `unit` test print in your console:

    `npm run unit:test`

2. API tests for 'https://reqres.in/api'. Covers 5 basic methods: `GET`, `POST`, `PATCH`, `PUT`, and `DELETE`.
  `Superagent` API library and `jest` test runner are used. 
  
To run `API` test print in your console:

    `npm run api:test`
    
3. UI tests for 'https://chessarena.com'. Used frameworks are: `webdriverio` + `cucumber`. Implemented `PageObject` and `PageFactory` patterns. Used different selector     and locator types (`css` and `xpath`). `Allure` reported is used to analize test results. 

To run `UI` test print in your console:

    `npm run ui:test`
    
To run `allure` reporter print in your console:

     `npm run ui:report`
       
