from typing import Dict, List,Optional,Annotated
from pydantic import BaseModel,EmailStr,AnyUrl,field_validator,model_validator, computed_field



# this is the pydantic model or class this type validation

class Patient(BaseModel):
  #schema is defined
  name:str
  age: int
  email:EmailStr
  linkedin_url:AnyUrl
  weight:float
  height:float
  married:bool

  allergies:Optional[List[str]]=None
  contact_details:Dict[str,str]

# this is decorator and having the method
  @field_validator('email')
  @classmethod
  def email_validator(cls,value):
  
      Valid_domain_list=['hdfc.com','icici.com']
      #extract the domain given by the user
      user_domain_name=value.split('@')[-1]

      if user_domain_name not in Valid_domain_list:
         raise ValueError('Not a valid domain')

      return value
  @field_validator('name')
  @classmethod
  def name_transformation(cls,value):
     return value.upper()
  
  @field_validator('age',mode='after')
  @classmethod
  def validate_age(cls,value):
     if 0<value<100:
        return value
     else:
        raise ValueError('age is in between 0 to 100')
     
  @model_validator(mode='after')
  def validate_emergency_contact(cls, model):
     if model.age>60 and 'emergency' not in model.contact_details:
        raise ValueError('Patients older than 60 must have the emergency contact')
     return model
  
  @computed_field
  @property
  def bmi(self)-> float:
     bmi = round(self.weight/(self.height**2),2)
     return bmi
         
     
     
  
def update_patient_data(patient:Patient):
  print(patient.name)
  print(patient.age)
  print(patient.weight)
  print(patient.email)
  print('BMI',patient.bmi)
  print('updated')

  print(patient.allergies)
  print('inserted')

# this is dictionary i have to 

patient_info={'name': 'nitish',
    'age': '65',
    'weight': 80,
    'height':1.72,
    'married': True,
    'email': 'nitish@hdfc.com',        
    'linkedin_url': 'https://linkedin.com/in/nitish',
     'allergies': ['pollen', 'dust'],
    'contact_details':{'phone':'234234','emergency':'49949949'                                                                        }}

patient1=Patient(**patient_info)
update_patient_data(patient1) 