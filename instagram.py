import requests
import json
import time
import re

# retrieves number of followers for given users and stores information in a dict
def testInstagramData(usernames, dic):

	base = "https://www.instagram.com/{user}"

	# iterate through the usernames
	for u in usernames:

		# get HTML for user's profile
	    url = base.format(user = u)
	    resp = requests.get(url)

	    # if http request was successful
	    if resp.status_code == 200:

	    	# store html
	    	data = resp.text

	    	# retrieve followers
	    	parsed = filter(lambda x:'\"followed_by\"' in x, data.split(","))

	    	# if a new dict/key, then initiate the dict
	    	if u not in dic:
	    		dic[u] = {}
	    		dic[u]["previous"] = 0
	    		dic[u]["current"] = re.sub("[^0-9]", "", parsed[0].split('\"count\": ')[1][:-1])
	    		dic[u]["20values"] = []
	    	# else, update the current dictionary value
	    	else:
	    		# replace "previous" with the current value
	    		dic[u]["previous"] = dic[u]["current"]

	    		# replace "current" with the new value
	    		dic[u]["current"] = re.sub("[^0-9]", "", parsed[0].split('\"count\": ')[1][:-1])

	    		if(len(dic[u]["20values"]) < 20):
	    			dic[u]["20values"].append(dic[u]["current"])
	    		else:
	    			dic[u]["20values"].pop(0)
	    			dic[u]["20values"].append(dic[u]["current"])
	
	return dic

users = ["katyperry","selenagomez","mileycyrus","pewdiepie","beyonce","kimkardashian","kanyewest","kyliejenner","justinbieber","therock"]

dic = {}
dic = testInstagramData(users, dic)
print dic

while True:
	dic = testInstagramData(users, dic)
	with open("yeehaw_memes.json", 'w') as f:
		json.dump(dic,f)
	print dic
	time.sleep(10)