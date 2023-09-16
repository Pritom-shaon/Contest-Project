import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Carosol = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://contiguglia.com/wp-content/uploads/2019/06/7CD05707-3C05-4A36-AF95-8DACE7380EFD-1080x675.jpeg" />
                </div>
                <div>
                    <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/01/how-to-start-an-online-business.png" />
                </div>
                <div>
                    <img src="https://channelx.world/wp-content/uploads/2023/07/Strategies-And-Tactics-For-Effective-Online-Marketing-shutterstock_765947833-1024x683.jpg" />
                </div>
            </Carousel>
        </div>
    )
}
export default Carosol