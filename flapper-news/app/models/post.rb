class Post < ActiveRecord::Base
  has_many :comments

  # response should include post with comments
  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
