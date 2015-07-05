Rails.application.routes.draw do
  resource :homepage, only: [:show]
  resource :rsvp, only: [:show]
  root "homepages#show"
end
