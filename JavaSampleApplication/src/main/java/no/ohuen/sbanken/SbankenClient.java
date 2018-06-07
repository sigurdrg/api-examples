package no.ohuen.sbanken;

import com.google.api.client.http.ByteArrayContent;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpHeaders;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.apache.ApacheHttpTransport;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.util.Base64;

/**
 *
 * @author Timur Samkharadze
 */
public class SbankenClient {

    private static final String IDENTITY_SERVER_URL = "https://api.sbanken.no/identityserver/connect/token";
    private static final String ACCOUNT_SERVICE_URL = "https://api.sbanken.no/bank/api/v1/accounts/";
    private final static Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    /**
     * entry point
     *
     * @param args
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        if (args.length != 3) {
            throw new RuntimeException("Usage: SbankenClient <clientId> <secret> <userId>");
        }
        String clientId = args[0];
        String secret = args[1];
        String userId = args[2];
        String basicAuth = getBase64AuthString(clientId, secret);
        HttpTransport transport = new ApacheHttpTransport();
        HttpRequestFactory requestFactory = transport.createRequestFactory();
        String token = getAccessToken(requestFactory, basicAuth);
        String respStr = getAccountInfo(requestFactory, userId, token);
        System.out.println(respStr);
    }

    private static String getAccountInfo(HttpRequestFactory requestFactory, String userId, String token) throws IOException {
        //now we have token and can qury sbanken api
        HttpRequest serviceRequest = requestFactory.buildGetRequest(new GenericUrl(ACCOUNT_SERVICE_URL));
        HttpHeaders headers = new HttpHeaders();
        headers.set("customerId", userId);
        headers.setAccept("application/json");
        headers.setAuthorization("Bearer " + token);
        serviceRequest.setHeaders(headers);
        HttpResponse response = serviceRequest.execute();
        String respStr = response.parseAsString();
        return respStr;
    }

    private static String getBase64AuthString(String clientId, String secret) {
        String basicAuth = new String(Base64.getEncoder().encode(
                new StringBuilder(256).append(clientId).append(':').append(secret).toString().getBytes()));
        return basicAuth;
    }

    private static String getAccessToken(HttpRequestFactory requestFactory, String basicAuth) throws IOException {

        HttpRequest tokenRequest = requestFactory.buildPostRequest(new GenericUrl(IDENTITY_SERVER_URL), null);
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept("application/json");
        headers.setAuthorization("Basic " + basicAuth);
        tokenRequest.setHeaders(headers);
        tokenRequest.setContent(new ByteArrayContent("application/x-www-form-urlencoded; charset=utf-8",
                "grant_type=client_credentials".getBytes()));
        HttpResponse response = tokenRequest.execute();
        String respStr = response.parseAsString();
        Token tokenObj = GSON.fromJson(respStr, Token.class);
        return tokenObj.access_token;
    }

    private static class Token {

        public String access_token;
    }
}
