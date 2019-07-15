from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_login import LoginManager, current_user, login_user, logout_user, login_required
import random

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)



@app.route('/', defaults={'path': ''}, methods=['GET'])
@app.route('/<path:path>', methods=['GET'])
def index(path):
    return render_template("index.html")

#@login_required

#@app.route('/login', methods=['GET', 'POST'])
#def login():
    #if current_user.is_authenticated:
    #    return redirect(url_for('index'))
    # From guide using WTForms, see if alternative implementation can be done with forms in React form = LoginForm()
#    if form.validate_on_submit():
    #    user = User.query.filter_by(username=form.username.data).first()
    #    if user is None or not user.check_password(form.password.data):
    #        flash('Invalid username or password')
    #        return redirect(url_for('login'))
    #    login_user(user, remember=form.remember_me.data)
    #    next_page = request.args.get('next')
    #    if not next_page or url_parse(next_page).netloc != '':
    #        next_page = url_for('index')
    #    return redirect(next_page)
    #    return redirect(url_for('index'))
    #return render_template('login.html', title='Sign In', form=form)

#@app.route('/logout')
#def logout():
#    logout_user()
#    return redirect(url_for('index'))


def get_hello():
  greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
  return random.choice(greeting_list)

@app.route("/hello")
def hello():
    return get_hello()



if __name__ == "__main__":
    app.run()
