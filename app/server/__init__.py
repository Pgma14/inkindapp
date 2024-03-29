from server.app import app, db, LoginManager
from server.models import User, Post

@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Post': Post}

login = LoginManager(app)
login.login_view = 'login'
