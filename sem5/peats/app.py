from flask import Flask, request, render_template, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/sign")
def sign():
    return render_template("sign.html");

@app.route("/help")
def help():
    return render_template("help.html");
