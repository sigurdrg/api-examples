#!/bin/bash 


# setup 
clientId='*******************'
secret='******************************'

# headers
acceptHeader='Accept: application/json'
contentTypeHeader='Content-Type: application/x-www-form-urlencoded; charset=utf-8'

# request body
requestBody='grant_type=client_credentials'

curl -u $clientId:$secret -H '$acceptHeader' -H '$contentTypeHeader' -d $requestBody 'https://api.sbanken.no/identityserver/connect/token'
