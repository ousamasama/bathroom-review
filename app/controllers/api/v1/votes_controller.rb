class Api::V1::VotesController < ApplicationController
  def create
    vote = Vote.find_by user_id: vote_params[:user_id], review_id: vote_params[:review_id]
    if vote
      vote.update_attribute(:vote, vote_params[:vote])
    else
      vote = Vote.create(vote_params)
    end
    render json: { status: 'SUCCESS', message: 'Loaded vote', vote: vote }, status: :created
  end

  private
  def vote_params
    params.require(:vote).permit(:user_id, :review_id, :vote)
  end
end
