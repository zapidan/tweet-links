class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user

  # response should include post with comments
  def as_json(options = {})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end
end
