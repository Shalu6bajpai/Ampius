from pyzipcode import ZipCodeDatabase
import sys
import requests 
import json

def findCoordinates():
    zcdb = ZipCodeDatabase()
    code = int(sys.argv[1])
    nomi = zcdb[code]
    URL = "http://127.0.0.1:" + sys.argv[3] + "/fetchdata"
    obj = {
        "latitude": nomi.latitude,
        "longitude": nomi.longitude,
        "username" : sys.argv[2]
    }
    res = requests.post(URL,data=obj);
    print(obj);
    # print(json.loads(json.dumps(obj)));
  

if __name__ == "__main__":
    findCoordinates()
