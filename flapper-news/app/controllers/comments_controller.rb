class CommentsController < ApplicationController
  before_action :set_post, only: [:create, :upvote]

  def create
    comment = @post.comments.create(comment_params)

    respond_with @post, comment
  end

  def upvote
    comment = @post.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with @post, comments
  end

  protected
    def comment_params
      params.require(:comment).permit(:body)
    end

    def set_post
      @post = Post.find(params[:post_idid])
    end
end
