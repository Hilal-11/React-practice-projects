import './App.css';
import Product from './Components/product';


const data = [
 
  {
    productImage : "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVsbCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    productName : "Computer" ,
    productPrice : "40000" ,
    productCompany : "Dell" ,
    productModel : "Core I8th Gneration" ,
    productOS : "64-Bit-OS" ,
    productInfo : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veniam eius ratione dolor voluptatibus id voluptatem nulla, deserunt tempora quidem cupiditate molestiae? Eaque, aspernatur? A iusto doloribus optio, quia sit, rerum itaque aut expedita nobis doloremque obcaecati iure voluptas illo. Illo, totam illum fugiat non exercitationem quia optio tempore aperiam."
  },
  {
    productImage : "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName : "MAC Book" ,
    productPrice : "120000" ,
    productCompany : "Apple" ,
    productModel : "Core I12th Gneration" ,
    productOS : "64-Bit-OS",
    productInfo : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veniam eius ratione dolor voluptatibus id voluptatem nulla, deserunt tempora quidem cupiditate molestiae? Eaque, aspernatur? A iusto doloribus optio, quia sit, rerum itaque aut expedita nobis doloremque obcaecati iure voluptas illo. Illo, totam illum fugiat non exercitationem quia optio tempore aperiam."

  }
];


function App() {

  return (
   <div className='w-full h-auto flex justify-evenly flex-wrap'>
      <Product 
          productImage={data[1].productImage}
          productName="Laptop" 
          productPrice="50000" 
          productCompany="Lenevo" 
          productModel="Core I6th Gneration" 
          productOS="64-Bit-OS" 
          productInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veniam eius ratione dolor voluptatibus id voluptatem nulla, deserunt tempora quidem cupiditate molestiae? Eaque, aspernatur? A iusto doloribus optio, quia sit, rerum itaque aut expedita nobis doloremque obcaecati iure voluptas illo. Illo, totam illum fugiat non exercitationem quia optio tempore aperiam.">
      </Product>
      <Product 
          productImage={data[0].productImage}
          productName={data[0].productName}
          productPrice={data[0].productPrice} 
          productCompany={data[0].productCompany} 
          productModel={data[0].productModel} 
          productOS={data[0].productOS}
          productInfo={data[0].productInfo}>
      </Product>
      <Product 
          productImage={data[1].productImage}
          productName={data[1].productName}
          productPrice={data[1].productPrice} 
          productCompany={data[1].productCompany} 
          productModel={data[1].productModel} 
          productOS={data[1].productOS}
          productInfo={data[1].productInfo}>
      </Product>
   
   </div>
  );
}

export default App;
