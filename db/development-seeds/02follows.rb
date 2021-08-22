Follow.create({follower: Twixy.first, followed: Twixy.last})

Follow.create({follower: Twixy.last, followed: Twixy.all[1]})
