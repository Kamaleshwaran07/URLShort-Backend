## URL Shortner Backend

### Sign up

Whenever a user signs up for the first time, a new user is created in the database and a mail is sent to the user to activate his account and verify his email which will change activation status in the database active and clear the token

### Login

Once the user activates his account and logs in, a toast message has been sent and redirected to the dashboard

### Dashboard

User can create short url by providing the long url and it is stored in pair in the database so that whenever the user clicks the link we can redirect to the corresponding long url

### URL Count

For url count, userId is requested from the front end and the count is returned from the database based on the userId that has url key.

### URL List


For url list, userId is requested from the front end and the list is returned from the database based on the userId that has url key. It is also mapped so that it will be easy to display the list in the frontend.


***Thank you***