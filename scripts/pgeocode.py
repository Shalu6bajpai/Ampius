import pgeocode
import sys
import requests 

URL = "http://127.0.0.1:8000/fetchdata"
def findCoordinates():
    print('running the python script')
    postalCode = sys.argv[1]
    country = sys.argv[2]
    nomi = pgeocode.Nominatim(country)
    obj = nomi.to_json();
    response = requests.post(URL,data=obj);
    print(response.text);

findCoordinates()

