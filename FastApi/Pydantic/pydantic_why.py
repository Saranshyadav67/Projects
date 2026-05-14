from typing import Dict, List,Optional,Annotated
from pydantic import BaseModel,EmailStr,AnyUrl,Field


# this is the pydantic model or class this type validation

class Patient(BaseModel):
  #schema is defined
  name:Annotated[str,Field(max_length=50,title='Name of the patient',description='Given the name of the patient in less tha 50 chars',examples=['Nitish','Amit'])]
  age: int=Field(gt=18,lt=30)
  email:EmailStr
  linkedin_url:AnyUrl
  weight:Annotated[float,Field(gt=0,strict=True)]
  married:Annotated[bool,Field(default=None,description="Is the patient is married or not")]

  allergies:Annotated[Optional[List[str]],Field(default=None,max_length=5)]
  contact_details:Dict[str,str]




def insert_patient_data(patient:Patient):
  print(patient.name)
  print(patient.age)
  print(patient.weight)
  print(patient.allergies)
  print('inserted')

# this is dictionary i have to 

patient_info={'name': 'nitish',
    'age': 29,
    'weight': 75.2,
    'married': True,
    'email': 'nitish@example.com',        
    'linkedin_url': 'https://linkedin.com/in/nitish',
     'allergies': ['pollen', 'dust'],
    'contact_details':{'email':'s@gmail.com','phone':'234234'
                                                                        }}

patient1=Patient(**patient_info)
insert_patient_data(patient1) 
