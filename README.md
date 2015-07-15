# Tweet Links

This is an app to add links and comments and be able to vote for them. The UI has been developed using AngularJS, which is served by a Ruby on Rails Rest API to make the models persistent in the database. Angular templates are handled by [angular-rails-templates](https://github.com/pitr/angular-rails-templates) gem, which uses the Rails asset pipeline.

Only authenticated users are able to vote and add comments or links. Authentication is handled by:
* [Devise](https://github.com/plataformatec/devise) for all the heavy lifting. Basic usage with two minor customizations: adding a username for registration and overriding Session Controller so a new CSRF token is created on logout. When Devise destroys the session, the token is invalid, but the angular app still has it, so force generation of new token

* [angular_rails_csrf](https://github.com/jsanders/angular_rails_csrf) to deal with sessions and CSRF token

*Note*: for signing up a password of 8 character minimum is needed