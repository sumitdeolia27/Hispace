#!/bin/bash

# Configuration
API_KEY_SECRET="hispacep2p_default_secret"
hispace_URL="https://p2p.hispace.com/api/v1/join"
# Alternative URLs:
# hispace_URL="http://localhost:3000/api/v1/join"
# hispace_URL="https://hispace.up.railway.app/api/v1/join"

# Join request data
REQUEST_DATA='{
    "room": "test",
    "name": "hispace",
    "avatar": false,
    "audio": false,
    "video": false,
    "screen": false,
    "chat": false,
    "hide": false,
    "notify": true,
    "token": {
        "username": "username",
        "password": "password",
        "presenter": true,
        "expire": "1h"
    }
}'

# Make the API request
curl -X POST "$hispace_URL" \
    -H "authorization: $API_KEY_SECRET" \
    -H "Content-Type: application/json" \
    -d "$REQUEST_DATA"