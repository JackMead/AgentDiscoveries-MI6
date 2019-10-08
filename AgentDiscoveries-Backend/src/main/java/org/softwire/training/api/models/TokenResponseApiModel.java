package org.softwire.training.api.models;

public class TokenResponseApiModel {

    private String token;
    private String expires;
    private int userId;
    private boolean isAdmin;
    private int agentId;

    public TokenResponseApiModel(String token, String expires, int userId, boolean isAdmin, int agentId) {
        this.token = token;
        this.userId = userId;
        this.expires = expires;
        this.isAdmin = isAdmin;
        this.agentId = agentId;
    }

    public String getToken() {
        return token;
    }

    public String getExpires() {
        return expires;
    }

    public int getUserId(){return userId;}

    public boolean getIsAdmin(){return isAdmin;}
}
