#!/usr/bin/env python
# coding=utf-8

"""Serverside rendering test."""

from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def entry():
    """Entrypoint."""
    return render_template("test.html")


def main():
    app.run()


if __name__ == '__main__':
    main()
