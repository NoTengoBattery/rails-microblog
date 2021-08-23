Twixy.create({
  email: "twixy@twixy.com",
  full_name: "Twixy",
  username: "twixy",
  password: "twixy123",
  password_confirmation: "twixy123"
})

Twixy.create({
  email: "trixie@trixie.com",
  full_name: "Trixie",
  username: "trixie",
  password: "trixie123",
  password_confirmation: "trixie123"
})

Twixy.create({
  email: "tristan@tristan.com",
  full_name: "Tristan",
  username: "tristan",
  password: "tristan123",
  password_confirmation: "tristan123"
})

15.times do
  pass = Faker::Internet.password
  user = Twixy.create({
    email: Faker::Internet.email,
    full_name: Faker::Artist.name,
    username: Faker::Internet.username,
    password: pass,
    password_confirmation: pass
  })
  Follow.create({follower: Twixy.first, followed: user}) if user.persisted?
end
