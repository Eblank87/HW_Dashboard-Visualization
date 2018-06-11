//# import necessary libraries
import json
from flask import (
    Flask,
    render_template,
    jsonify,
    request)

# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Database Setup
#################################################
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///belly_button_biodiversity.sqlite"

db = SQLAlchemy(app)

class Sample(db.Model):
    __tablename__ = 'bbsamples'

    id = db.Column(db.Integer, primary_key=True)
    Age = db.Column(db.Integer)
    BBtype = db.Column(db.String(64))
    Ethnicity = db.Column(db.String(64))
    Gender = db.Column(db.String(64))
    Location = db.Column(db.String(64))
    SampleID = db.Column(db.Integer)

    def __repr__(self):
        return '<Sample %r>' % (self.BBtype)


@app.before_first_request
def setup():
    # Recreate database each time for demo
    db.drop_all()
    db.create_all()

#################################################
# Routes
#################################################
# //Returns list of sample names

@app.route("/names")
def names():
    names = [{}]
    print(names)
    return jsonify(names)

# //Returns list of OTU descriptions
@app.route("/otu")
def names():
    otu = [{}]
    print(otu)
    return jsonify(otu)

if __name__ == "__main__":
    app.run(debug=True)


# *Returns metadata for single sample
@app.route('/metadata/<sample>')
# Query the database and send the jsonified results
def data():
    results = db.session.query(*sel)
    df = pd.DataFrame(results, columns=['Age', 'BBtype','Ethnicity','Gender','Location','SampleID'])
    return jsonify(df.to_dict(orient="records"))


