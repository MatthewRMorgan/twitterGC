#test to try and scrape data from twitter 2.0

import tweepy
import config
import datetime
import json
import os
import pytz
import google.oauth2.credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
#
# twitter stuff
#
api_key = config.api_key
api_secrets = config.api_key_secret
access_token = config.access_token
access_secret = config.access_token_secret

# Authenticate to Twitter
auth = tweepy.OAuthHandler(api_key,api_secrets)
auth.set_access_token(access_token,access_secret)
api = tweepy.API(auth)

user = api.get_user(screen_name='SinaiGenetics')
sinaifollowers = user.followers_count
followers = []
for tweet in tweepy.Cursor(api.search_tweets, q='#genechat', count=10).items():
    followers.append(tweet.user.followers_count)
    pass

print(len(followers))
print(sinaifollowers)
#expect 1372

#public_tweets = api.home_timeline()
#for tweet in public_tweets:
#    print(tweet.text)

#
# Google Calander API stuff
#

SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
CALENDAR_ID = '232507564730-kgh4cdp90fpc8onlutlbegnd5i423u3b.apps.googleusercontent.com'

def get_calendar_service():
    creds = None
    if os.path.exists('token.json'):
        creds = google.oauth2.credentials.Credentials.from_authorized_user_file('token.json', SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    return build('calendar', 'v3', credentials=creds)

def callo():
    creds = None
    # The file token.json stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.json'):
        creds = google.oauth2.credentials.Credentials.from_authorized_user_file('token.json', SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                r'C:\Users\mrm028\coding\twitterGC\tests\credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    try:
        service = build('calendar', 'v3', credentials=creds)

        # Call the Calendar API
        now = datetime.datetime.utcnow().isoformat() + 'Z'  # 'Z' indicates UTC time
        print('Getting the upcoming 10 events')
        events_result = service.events().list(calendarId='q87rr6mmge25582ulj40rkg76s@group.calendar.google.com', timeMin=now,
                                                maxResults=10, singleEvents=True,
                                                orderBy='startTime').execute()
        events = events_result.get('items', [])

        if not events:
            print('No upcoming events found.')
            return

        # Prints the start and name of the next 10 events
        for event in events:
            start = event['start'].get('dateTime', event['start'].get('date'))
            print(start, event['summary'])

    except HttpError as error:
        print('An error occurred: %s' % error)


callo()

###
"""
import tweepy
import datetime
import pytz
import json
import os
import google.oauth2.credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# Twitter API credentials
consumer_key = 'YOUR_CONSUMER_KEY'
consumer_secret = 'YOUR_CONSUMER_SECRET'
access_token = 'YOUR_ACCESS_TOKEN'
access_token_secret = 'YOUR_ACCESS_TOKEN_SECRET'

# Google Calendar API credentials
SCOPES = ['https://www.googleapis.com/auth/calendar']
CALENDAR_ID = 'YOUR_CALENDAR_ID'

# Authenticate Twitter API
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
twitter_api = tweepy.API(auth)

# Authenticate Google Calendar API
def get_calendar_service():
    creds = None
    if os.path.exists('token.json'):
        creds = google.oauth2.credentials.Credentials.from_authorized_user_file('token.json', SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    return build('calendar', 'v3', credentials=creds)

# Fetch latest tweets from a Twitter user
def fetch_latest_tweets(screen_name, count):
    tweets = twitter_api.user_timeline(screen_name=screen_name, count=count)
    return tweets

# Create event in Google Calendar
def create_calendar_event(service, summary, description, start_time, end_time):
    event = {
        'summary': summary,
        'description': description,
        'start': {
            'dateTime': start_time.strftime('%Y-%m-%dT%H:%M:%S'),
            'timeZone': 'UTC',
        },
        'end': {
            'dateTime': end_time.strftime('%Y-%m-%dT%H:%M:%S'),
            'timeZone': 'UTC',
        },
    }
    event = service.events().insert(calendarId=CALENDAR_ID, body=event).execute()
    print(f"Event created: {event.get('htmlLink')}")

# Fetch latest tweets and create calendar events
def fetch_tweets_and_create_events(screen_name, count):
    tweets = fetch_latest_tweets(screen_name, count)
    service = get_calendar_service()
    for tweet in tweets:
        tweet_text = tweet.text
        tweet_time = tweet.created_at
        start_time = tweet_time - datetime.timedelta(minutes=15)
        end_time = tweet_time + datetime.timedelta(minutes=15)
        create_calendar_event(service, 'New Tweet', tweet_text, start_time, end_time)

# Usage: Replace screen_name with the Twitter username and count with the number of tweets to fetch
fetch_tweets_and_create_events('screen_name', 5)
"""
###