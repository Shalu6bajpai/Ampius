from pyzipcode import ZipCodeDatabase
import sys
import requests 
import json

def findCoordinates():
    try:
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
    except:
        raise TypeError("Only integers are allowed")


if __name__ == "__main__":
    findCoordinates()
