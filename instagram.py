import requests
import json
import time

def testInstagramData(usernames, dic):

	base = "https://www.instagram.com/{user}"

	for u in usernames:
	    url = base.format(user = u)
	    resp = requests.get(url)

	    if resp.status_code == 200:
	    	data = resp.text
	    	parsed = filter(lambda x:'\"followed_by\"' in x, data.split(","))

	    	if u not in dic:
	    		dic[u] = {}
	    		dic[u]["previous"] = 0
	    		dic[u]["current"] = parsed[0].split('\"count\": ')[1][:-1].replace('}','').replace('{','').replace(']','')
	    		dic[u]["value"] = 0
	    	else:
	    		dic[u]["previous"] = dic[u]["current"]
	    		dic[u]["current"] = parsed[0].split('\"count\": ')[1][:-1].replace('}','').replace('{','').replace(']','')
	    		dic[u]["value"] = int(dic[u]["current"]) - int(dic[u]["previous"])
	
	return dic

users = ["instagram","selenagomez","taylorswift","arianagrande","beyonce","kimkardashian","cristiano","kyliejenner","justinbieber","therock"]

dic = {}
dic = testInstagramData(users, dic)
print dic

while True:
	dic = testInstagramData(users, dic)
	with open("yeehaw_memes.json", 'w') as f:
		json.dump(dic,f)
	print dic
	time.sleep(10)