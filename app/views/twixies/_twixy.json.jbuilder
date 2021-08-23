# This need caching to avoid N+1 queries
json.fullName twixy.full_name
json.username twixy.username
json.followings twixy.followings.size
json.followers twixy.followers.size
json.following current_twixy.following?(twixy) unless twixy == current_twixy
json.followed twixy.following?(current_twixy) unless twixy == current_twixy
