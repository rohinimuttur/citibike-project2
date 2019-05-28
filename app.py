import pandas as pd
#from shapely.geometry import Point, shape

from flask import Flask,render_template,request,redirect
# from pymongo import MongoClient
# import json
# from bson import json_util
# from bson.json_util import dumps
# from flask_pymongo import PyMongo
import json





app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def get_data():
    # Code from the previous section: Data preparation
    dfnew=pd.read_csv('project2/input/sample1.csv')
    dfnew=dfnew.dropna()
    dfnew['birth year']=dfnew['birth year'].astype(int)
    dfnew['yearofride']=dfnew.date.str[:7]
    dfnew.loc[dfnew['gender'] == 1, 'gender'] = 'Male'
    dfnew.loc[dfnew['gender'] == 2, 'gender'] = 'Female'
    dfnew.loc[dfnew['gender'] == 0, 'gender'] = 'Other' 

    bins= [0,40,120,180,250,320,1000]
    group_names=['<40','40-120','120-180','180-249','250-319','320+']
    dfnew["calories_grouped"]= pd.cut(dfnew["calories_burned"], bins, labels=group_names)  
    return dfnew.to_json(orient='records')
    


     
 
if __name__ == "__main__":
    app.run()