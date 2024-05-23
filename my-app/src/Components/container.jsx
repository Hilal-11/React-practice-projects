import './container.css';
import image from './image.png';
function Container() {
    return(
        <div>
            <div className="main_container">
                <div className="image_box">
                    <img src={image}/>
                </div>

                <div className='about_box'>
                    <h1>React Development</h1>
                    <h2>Waseem Ahmad Ganie</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla quasi qui repellendus veritatis ad consectetur autem debitis magni amet facilis quidem eveniet aliquam reiciendis, fugiat perferendis vitae laudantium et ipsam blanditiis voluptas, earum ipsa, exercitationem animi. Vel dolor repellat ea deleniti fuga aliquam saepe atque voluptas odio, hic veniam.</p>
                </div>
                <div className='buttons'>
                    <button className='btns'>View More</button>
                    <button className='btns'>Explore More</button>
                </div>
            </div>
        </div>
    )
}
export default Container;
