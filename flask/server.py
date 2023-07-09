from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd
import datetime as dt

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#importing csv data
my_data = pd.read_csv('data_adarsh.csv') 

@app.route("/")
def m():
    return 'Hello, Alvin!'

# Route for seeing data
@app.route('/auto_reports', methods=["POST", "GET"])
def auto_reports():
    data_name = my_data['Disability'].value_counts().head().index.to_list()
    data_count = my_data['Disability'].value_counts().head().values.tolist()
    
    return {
        'name': data_name,
        'count': data_count
    }

@app.route('/getchart', methods=["POST", "GET"])
def getchart():
    req = request.json
    data_name = my_data[req['field']].value_counts().head().index.to_list()
    data_count = my_data[req['field']].value_counts().head().values.tolist()

    print(data_name)
    
    return {
        'name': data_name,
        'count': data_count
    }

@app.route('/custom', methods=['POST'])
def custom():
    req = request.json
    my_data.drop(my_data.filter(regex="Unname"),axis=1, inplace=True)

    print(req)
    filtered_data = my_data

    for key in req:
        filtered_data = filtered_data[filtered_data[key] == req[key]]

    print('Adarsh')
    
    custom_data = filtered_data.to_html()

    return jsonify(custom_data)


if __name__ == '__main__':
    app.run(debug=True)
