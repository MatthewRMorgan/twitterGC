#test to try and scrape data from twitter 2.0

import tweepy
import config

api_key = config.api_key
api_secrets = config.api_key_secret
access_token = config.access_token
access_secret = config.access_token_secret

# Authenticate to Twitter
auth = tweepy.OAuthHandler(api_key,api_secrets)
auth.set_access_token(access_token,access_secret)
api = tweepy.API(auth)

user = api.get_user(screen_name='SinaiGenetics')
print(user.followers)
#expect 1339

#public_tweets = api.home_timeline()
#for tweet in public_tweets:
#    print(tweet.text)
