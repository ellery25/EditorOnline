from flask import Flask, render_template

app = Flask(__name__, template_folder="config/templates", static_folder="config/static")

@app.route("/", methods=['GET'])
def index():
    return render_template("editor_syllabus.html")

if __name__ == "__main__":
    app.run(debug=True)
