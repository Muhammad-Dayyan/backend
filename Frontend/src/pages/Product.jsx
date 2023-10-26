import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";


const Product = () => {

    const { productid } = useParams()
    const [productData, setProductData] = useState([]);
    console.log(productid)

    useEffect(() => {
        const data = async () => {

            try {

                const docRef = doc(db, "Products", productid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProductData(data)
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        }
        data()
    }, [productid])
    return (
        
         <>  <h1>PRODUCTS</h1>    <div className="PRODUCT">
         {productData ? (
           <> 
            
             <h1>Product Name: {productData.ProductName}</h1>
             <h3>Product Price: ${productData.ProductPrice}</h3>
           <h3 >Product Description: {productData.ProductDesc}</h3>
           <h4 className="pro">Product id:{productid}</h4>
           </>
         ) : (
           <p>Loading product data...</p>
         )}
       </div>
        </>
    )
}
export default Product
