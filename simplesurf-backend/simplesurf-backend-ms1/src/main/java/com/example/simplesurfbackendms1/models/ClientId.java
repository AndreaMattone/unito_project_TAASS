package com.example.simplesurfbackendms1.models;

public class ClientId {
    Long clientId;

    public ClientId() {
    }

    public ClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    @Override
    public String toString() {
        return "ClientId{" +
                "clientId=" + clientId +
                '}';
    }
}
