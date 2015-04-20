Rails.application.routes.draw do
  resource :homepage, only: [:show]
  root "homepages#show"
end
