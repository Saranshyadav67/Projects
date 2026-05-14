from fastapi import FastAPI,Path ,HTTPException,Query
from fastapi.responses import JSONResponse
from pydantic import BaseModel,Field,computed_field
from typing import Annotated,Literal
import json

app=FastAPI()

# here we are creating model with help of pydantic 

class Patient(BaseModel):

  #Annotated is basically used for the description for type validation
  id:Annotated[str,Field(...,description='ID of the patient', examples=['P001'])]
  name:Annotated[str,Field(...,description='Name of the patient')]
  city:Annotated[str,Field(...,description='City wherre the patient is living')]
  age:Annotated[int,Field(..., gt=0 ,lt=120,description='Age of the patient')]
  gender:Annotated[Literal['Male','Female','Others'],Field(...,description='Gender of the patient')]
  height:Annotated[float,Field(..., gt=0, description='Height of the patient in cm')]
  weight:Annotated[float,Field(..., gt=0, description='Weight of the patient in kgs')]
  # Bmi:float


  #computed field --> It allows you to define dynamic, read-only fields that depend on other data within the model
  @computed_field
  @property

  def bmi(self) -> float:
    bmi=round(self.weight/(self.height**2),2)
    return bmi
  
  @computed_field
  @property

  def verdict(self) -> str:
      if self.bmi < 18.5:
        return 'Underweigh'
      elif self.bmi <25:
        return'Normal'
      elif self.bmi <30:
        return 'Normal'
      else:
        return 'overweight'

# this function is used to fetch the data from the patient.json
def load_data():
  with open('patient.json',"r") as f:
    data=json.load(f)
  
  return data

# here we are giving a dictionary called 'data' and we putting in to json file by json.dump
def save_data(data):
  with open('patients.json','w') as f:
    json.dump(data,f)

@app.get("/")
def hello():
  return{'message':'Patient Management System Api'}


@app.get('/about')
def about():

  return {'message':'A fully function  API to manage yor patient records'}

# this is the new endpoint and creating the route '/view'
@app.get('/view')
def view():
  # here we are just fetching the data and loading in data function
  data=load_data()
  
  # here we are returning the data
  return data

# this is new route or endpoint
#  to show how the path parameters actually works

@app.get('/patient/{patient_id}')
def view_pateint(patient_id:str = Path(...,description='ID of the patient in the DB',example='P001')):
  # load all the patients

  data=load_data()

  if patient_id in data:
    return data[patient_id]
  
  # http exception handling
  raise HTTPException(status_code=404,detail='patient is not found')


# new endpoint  '/sort'

@app.get('/sort')
def sort_patient(sort_by:str=Query(...,description='Sort on the basis of height,weight or bmi'),order:str=Query('asc',description='sort in asc or desc order')):
   
# valid_fields variable 
   valid_fields=['height','weight','bmi']

   if sort_by not in valid_fields:
     raise HTTPException(status_code=400,detail=f'Invalid field select from {valid_fields}')
   
   if order not in ['asc','dsc']:
     raise HTTPException(status_code=400,detail='Invalid Order select between asc and desc')
   

   data=load_data()

   sort_order=True if order=='desc' else False

   sorted_data=sorted(data.values(),key=lambda x: x.get(sort_by,0),reverse=sort_order)


   return sorted_data 
   



# this is the 'create' endpoint we are using post request for this endpoint
@app.post('/create')
def create_patient(patient: Patient):

  # load the existing data
  data=load_data()

  # check if the patient already exists
  if patient.id in data:
    raise HTTPException(status_code=400,detail='Patient already exists')

  # new patient add to the database

  data[patient.id]=patient.model_dump(exclude=['id'])

  # save into the json file by simpling calling the function 

  save_data(data)

# tell the client the work of creating is done for this we have to send the json responses

  return JSONResponse(status_code=201,content={'message':'Patient created successfully'})


