import requests

url = "http://localhost:3000/"

r = requests.get(url)

data = r.text

print(data)

