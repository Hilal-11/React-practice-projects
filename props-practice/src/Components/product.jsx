
function Product(props) {
    return (
        <div className=''>
            <div className="bg-slate-200 container  w-[500px] h-auto mx-auto my-10 shadow-[20px] shadow-md shadow-slate-600 rounded-md px-10 py-5">
                <div className="image_div flex justify-center">
                    <img className="w-[420px] h-[200]" src={props.productImage} alt="" />
                </div>
                <div className="info_div my-5">
                    <h2 className='font-medium text-xl'>{props.productName}</h2>
                    <h2 className='font-medium text-xl'>{props.producPrice}</h2>
                    <h2 className='font-medium text-xl'>{props.productCompany}</h2>
                    <h2 className='font-medium text-xl'>{props.productModel}</h2>
                    <h2 className='font-medium text-xl'>{props.productOS}</h2><br />
                    <p className='text-justify'>{props.productInfo}</p>
                </div>
            </div>
        </div>

        
    )
}
export default Product;