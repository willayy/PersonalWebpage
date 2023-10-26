from flask import Flask, render_template, request
from waitress import serve

app = Flask(__name__)

@app.route('/')
def display_webpage():
    return render_template('mainPage.html')

if __name__ == '__main__':
    serve(app, host="127.0.0.1", port=5000)
