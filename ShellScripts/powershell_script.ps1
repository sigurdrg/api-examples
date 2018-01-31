
# -- SETUP --
$userid= "***********"
$clientId = "**********************"
$secret = "*******"
# -- END SETUP --

$headers = @{}
$credentials = $clientId + ":"+$secret
$Bytes = [System.Text.Encoding]::UTF8.GetBytes($credentials)
$EncodedText =[Convert]::ToBase64String($Bytes)

$headers.Add("Authorization", "Basic "+$EncodedText)
$headers.Add("Content-Type", "application/x-www-form-urlencoded; charset=utf-8")
$headers.Add("Accept", "application/json")
$postParams = @{grant_type='client_credentials'}
$authResponse = Invoke-RestMethod -Uri "https://api.sbanken.no/IdentityServer/connect/token" -Method POST -Headers $headers -Body $postParams

echo "Accounts ----"
$authHeaders = @{}
$authHeaders.Add("Accept", "application/json")
$authHeaders.Add("Authorization", "Bearer "+$authResponse.access_token)
$accountUri = "https://api.sbanken.no/Bank/api/v1/Accounts/" + $userid
$response = Invoke-RestMethod -Uri $accountUri -Method GET -Headers $authHeaders
$response
