# org-demo-mongo-amol

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)



:white_check_mark: - emoji checkbox example


:white_check_mark: - emoji checkbox example


| Description                         | Checkmark               |
| ----------------------------------- | ----------------------- |
| HTML Entity: check mark             | &check;                 |
| HTML Entity: heavy check mark       | &#10004;                |
| HTML Entity: ballot box with check  | &#9745;                 |
| HTML Entity: ballot box with x      | &#9746;                 |
| HTML Entity: ballot box (unchecked) | &#9744;                 |
| Emoji: heavy check mark             | :heavy_check_mark:      |
| Emoji: ballot box with check        | :ballot_box_with_check: |
| Emoji: white check mark             | :white_check_mark:      |


- [ ] unchecked
- [x] checked

<!-- # go-accountapi **Client**

## Required Go version
```
1.17.6
```

## Local setup and run 


![Codecov](https://img.shields.io/codecov/c/github/gaikwadamolraj/go-accountapi)
### Download go packages
```
make install
```


### Compose run file to start dependency(accountapi, postgresql, vault)
```
make up
```

### Local run
```
make localrun
```
## Run Tests 

### Unit tests run
```
make test
```

### Unit tests with coverage
```
make testcoverage
```

### BDD tests(Cucumber)
```
make cucumber
```

### Security scan
```
make securityscan
```


## Run Tests with docker-compose

#### Down prev compose if any and run tests with compose
```
 make down
 make testcompose
``` -->

<p align="left"> <a href="https://golang.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go"  width="320" height="320"/> </a> </p>

# Client for accountapi
## Project Status
![Codecov](https://img.shields.io/badge/codecoverage-100%-green)
![Seccan](https://img.shields.io/badge/goscan-passing-green)
![Bdd](https://img.shields.io/badge/bdd__tests-100%-green)
![Container](https://img.shields.io/badge/Containerisation-Yes-green)

 > These badges are as per local run

## This go client is created for accountapi.

To run this sample app, you'll need:

- Go 1.17

### You can run this application on your local with diff below options
## Commands ##

- ## Application Lifecycle

    ### Install modules

    ```sh
    make goinstall
    ```

    ### Build application

    ```sh
    make goprod
    ```

    ### Start application in development
    - ### Start dependency containers
        ```sh
        make dcup
        ```
    - ### Run local 
        ```sh
        make godev
        ```
- ## Testing Lifecycle

    ### Unit tests

    ```sh
    make gotest
    ```

    ### BDD tests(Cucumber)

    ```sh
    make gobdd
    ```

    ### Code coverage

    ```sh
    make gocodecov
    ```

    ### Security Scan

    ```sh
    make gosecurityscan
    ```
- ## Docker Lifecycle

    ### Docker Compose up

    ```sh
    make dcup
    ```

    ### Docker Compose stop

    ```sh
    make dcstop
    ```

    ### Docker Compose down

    ```sh
    make dcdown
    ```

    ### Docker compose for test application

    ```sh
    make dctestcompose
    ```
### Feature

:white_check_mark: Containerize Application Using Docker
- [x] Unit tested
- [x] Integration testing
- [x] Security scan
- [x] Code coverage
- [x] Prototype Design pattern
- [] Context with timeout for api
- [] Context for godog bdd
- [] Authentication
- [] Rate limit autoretry
- [] Audit Trail logs
- [] Bulk fetch/delete/create


## Author

- [Amol Gaikwad](https://github.com/gaikwadamolraj)
