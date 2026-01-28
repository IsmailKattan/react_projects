import ProductCard from "./components/ProductCard"
import Button from "./components/ui/Button"
import Input from "./components/ui/Input"
import Modal from "./components/ui/Modal"
import { colors, formInputsList, productList } from "./data/index"
import './index.css'
import {useState, type ChangeEvent, type FormEvent} from "react"
import type { IProduct } from "./interfaces"
import { productValidation } from "./validation"
import ErrorMessage from "./components/ui/ErrorMessage"
import CircleColor from "./components/ui/CircleColor"

const App = () => {

  const defaultProductObj = {
    title: '', 
    description: '', 
    imageURL: '', 
    price: '', 
    colors: [], 
    category: {
      imageURL:'', 
      name: ''
    }
  }

  /** ---- STATE ---- */

  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({title: '', description: '', imageURL: '', price: ''});
  const [isOpen, setIsOpen] = useState(false);

  const closeModel = () => setIsOpen(false);
  const openModel = () => setIsOpen(true);
  const onChangeHandler = (event : ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    
    setProduct({
      ...product,
      [name]: value
    });

    setErrors({
      ... errors, 
      [name]: ''
    })
  }

  const onCancel = () => {
    console.log("Cancel");
    setProduct(defaultProductObj)
    closeModel()
  }
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    const {title, description, price, imageURL} = product; 

    const errors = productValidation({
      title, 
      description, 
      price, 
      imageURL
    });
    console.log(errors);

    const hasErrorMsg = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value ==='')

    if(hasErrorMsg) {
      return; 
    }

    if(!hasErrorMsg) {
      setErrors(errors); 
      return;
    }
  }

/** ---- render ---- */

  const renderProductList = () => {
    return productList.map(product => <ProductCard key={product.id} product={product}/>)
  }

  const renderFormInputList = () => {
    return formInputsList.map(
      input => 
        <div className="flex flex-col" key={input.id}>
          <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.label}</label>
          <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
          <ErrorMessage msg={errors[input.name]}/>
        </div>
      
    )
  }
  
  const renderProductColors = () => {
    return colors.map(color => <CircleColor key={color} color={color} />)
  }
  
  
  return (
    <main className=" container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModel}>ADD</Button> 
      <div>
        <div className="bg-white m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 lg:gap-4 p-2 rounded-md">
          {renderProductList()}
        </div>
        <Modal isOpen={isOpen} closeModal={closeModel} title="ADD NEW PRODUCT">
          
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputList()}
            <div className="flex items-center space-x-2">
              {renderProductColors()}
            </div>
            <div className="flex items-center space-x-2">
              <Button className="bg-indigo-700 hover:bg-indigo-800">Submit</Button> 
              <Button className="bg-gray-500 hover:bg-gray-600" onClick={onCancel}>Cancel</Button> 
            </div>
          </form>

        </Modal>
      </div>
    </main>
  )

}

export default App
