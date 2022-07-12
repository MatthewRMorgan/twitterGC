#get common twitte hashtags related to genetic counseling (ie GCChat)
#METHOD: get tweets by searching genetic counseling keywords from an initial dataset
#go through those tweets and save the most common hashtags associated with the search
#This list will represent the common tags.

#filter through GC events to find most common keywords

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

#find and store genetic counseling tweets for prospective students
def findCommonHashTags(keyWord):
    hashtags = []
    for tweet in tweepy.Cursor(api.search_tweets, q=keyWord, count=100).items():
        hashtagList = tweet.entities.get('hashtags')
        for i in range(len(hashtagList)):
            hashtags.append(hashtagList[i]['text'])
        pass
    return hashtags

def getTweets(keyWord):
    hashtags = []
    for tweet in tweepy.Cursor(api.search_tweets, q=keyWord, count=100).items():
        hashtags.append(tweet.user)
    return hashtags

hashtags = []
searchTermList = ['prospective student genetic counseling']
for i in range(len(searchTermList)):
    #hashtags += findCommonHashTags(searchTermList[i])
    hashtags += getTweets(searchTermList[i])

counter = Counter(hashtags)
freqHashtags = counter.most_common(4)

print(hashtags)