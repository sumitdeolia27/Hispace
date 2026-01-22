# pip3 install requests
import requests
import json

API_KEY_SECRET = "hispacep2p_default_secret"
hispace_URL = "https://p2p.hispace.com/api/v1/join"
# hispace_URL = "http://localhost:3000/api/v1/join"
# hispace_URL = "https://hispace.up.railway.app/api/v1/join"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

data = {
    "room": "test",
    "name": "hispace",
    "avatar": "false",
    "audio": "false",
    "video": "false",
    "screen": "false",
    "chat": "false",
    "hide": "false",
    "notify": "true",
    "token": {
        "username": "username",
        "password": "password",
        "presenter": "true",
        "expire": "1h",
    }
}

response = requests.post(
    hispace_URL,
    headers=headers,
    json=data,
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("join:", data["join"])
