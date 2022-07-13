#use search terms to find relevant genetic counseling posts including event information and resources for prospective GC students.

from importlib import resources
import tweepy
import config
from collections import Counter

api_key = config.api_key
api_secrets = config.api_key_secret
access_token = config.access_token
access_secret = config.access_token_secret

# Authenticate to Twitter
auth = tweepy.OAuthHandler(api_key,api_secrets)
auth.set_access_token(access_token,access_secret)
api = tweepy.API(auth)

def getResources(keyWord):
    links = []
    events = []
    for tweet in tweepy.Cursor(api.search_tweets, q=keyWord, count=100).items():
        events.append(tweet.text) #get text to thrift through?
        linkList = tweet.entities.get('urls')
        for i in range(len(linkList)):
            links.append(linkList[i]['url'])
    resources = {'links':links,'events':events}
    return resources

resources = []
searchTermList = ['#GeneChat', "#GeneticCounselors", "#GeneticCounseling"]
for i in range(len(searchTermList)):
    resources.append(getResources(searchTermList[i]))
    

print(resources)