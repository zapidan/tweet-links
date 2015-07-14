Rails.application.routes.draw do

  root 'application#angular'

  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:show, :create] do
      put 'upvote', to: 'comments#upvote', on: :member
    end

    put 'upvote', to: 'posts#upvote', on: :member
    put 'downvote', to: 'posts#downvote', on: :member
  end
end
