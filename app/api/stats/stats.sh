#!/bin/bash

API_KEY_SECRET="hispacep2p_default_secret"
hispace_URL="https://p2p.hispace.com/api/v1/stats"
#hispace_URL="http://localhost:3000/api/v1/stats"

curl $hispace_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --request GET
