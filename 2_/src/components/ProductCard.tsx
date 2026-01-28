import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProductCardProps {
    product: IProduct
}

const ProductCard  = ({product}: IProductCardProps) => {

    const {title, price, imageURL, description, category} = product;

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
        
        <Image 
            imageURL = {imageURL}
            alt = {title}
            className = "rounded-md  mb-2"
        />
        
        <h3>{title}</h3>

        <p>
            {txtSlicer(description)}
        </p>

        <div className=" flex items-center my-4 space-x-2">
            <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer" />
            <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer" />
            <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer" />
        </div>

        <div className=" flex items-center justify-between">
            <span>{` ${price}₺`}</span>
            <Image 
                imageURL = {category.imageURL}
                alt = {category.name}
                className = " w-10 h-10 rounded-full object-top"
            />
        </div>

        <div className="flex items-center justify-between space-x-2 mt-5">
            <Button
                className="bg-indigo-700 hover:bg-indigo-800"
                onClick={
                    () => {
                        console.log("Edit Button Clicked")
                    }
                }
                width="w-full"
            >EDIT
            </Button>
            <Button
                className="bg-red-700"
            >DELETE
            </Button>
            <Button
                className="bg-green-700"
            >SAVE
            </Button>
            <Button
                className="bg-gray-500"
            >CANCEL
            </Button>
        </div>
    </div>
  )
}

export default ProductCard;
