from pyzipcode import ZipCodeDatabase
import sys
import requests 

URL = "http://127.0.0.1:8000/fetchdata"
def findCoordinates():
    # print(sys.argv[1]);
    zcdb = ZipCodeDatabase()
    code = int(sys.argv[1])
    # print(sys.argv[1],type(sys.argv[1]));
    nomi = zcdb[code]
    obj = {
        "latitude": nomi.latitude,
        "longitude": nomi.longitude,
        "username" : sys.argv[2]
    }
    # obj = {}
    res = requests.post(URL,data=obj);
    print(obj);
    # print(obj);
  

if __name__ == "__main__":
    findCoordinates()
