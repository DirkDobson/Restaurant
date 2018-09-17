50.times do
  Menu.create(
    item: Faker::Food.dish
  )
end