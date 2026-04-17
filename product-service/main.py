from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    price: float

products = []

@app.post("/products")
def create_product(product: Product):
    products.append(product)
    return {"message": "Product added", "product": product}

@app.get("/products")
def get_products():
    return products