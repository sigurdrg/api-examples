# API usage examples

## Introduction

This repository provides a few examples on how to use Sbankens Open Banking APIs. These will enable you to quickly get started and get familiar with the basic concepts of authorization and API usage.

### [DotNetCoreSampleApplication](./DotNetCoreSampleApplication/)

Simple .NET Core Console Application which retrieves accessToken, customer and account information.

### [NodeSampleApplication](./NodeSampleApplication/)
Simple Node client which retrieves accessToken and account information.

### [ElectronSampleApplication](./ElectronSampleApplication/)
Simple Electron App with an example GUI which retrives accessToken and account information

## Documentation 

The following links provides detailed description of the REST interfaces. This includes how to construct your requests and what response to expect.


https://api.sbanken.no/Bank/swagger

https://api.sbanken.no/Customers/swagger

## Known bugs

### Swagger documentation

* The Try Me-button will not work. This is because it will send an unauthenticated request.
* In the swagger documentation for the Transfer POST request, the example payload may appear to be missing. The format of the POST request body is as follows:

```
{
  "fromAccount": "string",
  "toAccount": "string",
  "message": "string",
  "amount": 0
}
```
* Swagger documentation for the Transfer request has a typo where FromAccount is mentioned twice. The second mention should be ToAccount.

## FAQ

### How do I find the customerId / userId?

This is your social security number. The same Id which is used when you log in with BankID.


## Availability

In order to get access to these APIs certain requirements needs to be fullfilled:
* You are a Sbanken customer
* You have to sign up for access via https://utvikler.sbanken.no
* You have to enable "Beta" in your personal settings
* Finally, you need to complete the API Beta setup wizard.

(Detailed information will be provided after you sign up for access)




