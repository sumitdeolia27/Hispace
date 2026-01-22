import requests
import json

API_KEY_SECRET = "hispacep2p_default_secret"
# hispace_URL = "http://localhost:3000/api/v1/meeting"
hispace_URL = "https://p2p.hispace.com/api/v1/meeting"
# hispace_URL = "https://hispace.up.railway.app/api/v1/meeting"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

response = requests.post(
    hispace_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
