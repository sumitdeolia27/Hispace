#!/bin/bash

API_KEY_SECRET="hispacep2p_default_secret"
# hispace_URL="http://localhost:3000/api/v1/meeting"
hispace_URL="https://p2p.hispace.com/api/v1/meeting"
# hispace_URL="https://hispace.up.railway.app/api/v1/meeting"

curl $hispace_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --request POST