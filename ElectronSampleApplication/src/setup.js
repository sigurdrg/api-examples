


export default function setup()  {
   
  const customerId = "************";
  
  const config = {
    identityServerUrl : "https://auth.sbanken.no/identityserver/connect/token",
    accountServiceUrl : "https://api.sbanken.no/bank/api/v1/accounts/"+customerId,
    clientId : "************************",
    secret : "************************"
  };

  return config;
}
