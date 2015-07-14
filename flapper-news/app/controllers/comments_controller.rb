class CommentsController < ApplicationController
  before_action :set_post, only: [:create, :upvote, :downvote, :show]
  before_action :authenticate_user!, only: [:create, :upvote, :downvote]

  def show
    comments = @post.comments

    respond_with @post, comments
  end

  def create
    comment = @post.comments.create(comment_params)

    respond_with @post, comment
  end

  def upvote
    comment = @post.comments.find(params[:id])
    comment.increment!(:upvotes)

    respond_with @post, comment
  end

   def downvote
    comment = @post.comments.find(params[:id])
    comment.decrement!(:upvotes)

    respond_with @post, comment
  end

  protected
    def comment_params
      params.require(:comment).permit(:body)
    end

    def set_post
      @post = Post.find(params[:post_id])
    end
end
