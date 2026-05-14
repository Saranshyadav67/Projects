from pydantic import BaseModel


class Address(BaseModel):
  city: str
  state:str
  pincode:str

class Patient(BaseModel):
  name:str
  gender:str
  age:int
  address:Address


address_dict={'city': 'gurgaon','state':'haryana','pin':'229001'}

address1 =Address(**address_dict)

patient_dict={'name':'Nitish','gender':'male','age':'35','address':'address1'}

Patient1=Patient(**patient_dict)
