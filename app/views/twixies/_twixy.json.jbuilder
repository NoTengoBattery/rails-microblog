# This need caching to avoid N+1 queries
json.fullName twixy.full_name
json.username twixy.username
json.following twixy.followings.size
json.followers twixy.followers.size
