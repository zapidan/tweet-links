## Sessions Controller that overrides Devise to provide a new csrf token
# when the session is destroyed (on logout). This fixes an Invalid token
# error that required a page refresh after logout
# see https://technpol.wordpress.com/2014/04/17/rails4-angularjs-csrf-and-devise/ 

class SessionsController < Devise::SessionsController
  after_action :set_csrf_headers, only: :destroy

  protected
  def set_csrf_headers
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
end