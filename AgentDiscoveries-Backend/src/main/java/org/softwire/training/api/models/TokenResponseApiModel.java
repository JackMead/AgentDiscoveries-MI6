package org.softwire.training.api.models;

public class TokenResponseApiModel {

    private String token;
    private String expires;
    private int userId;

    public TokenResponseApiModel(String token, String expires, int userId) {
        this.token = token;
        this.userId = userId;
        this.expires = expires;
    }

    public String getToken() {
        return token;
    }

    public String getExpires() {
        return expires;
    }

    public int getUserId(){return userId;}
}
