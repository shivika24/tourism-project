import React,{Component} from 'react';
import logohead from '../../images/logoaboutmain.svg'

class About extends Component{
    state={
        mainpagedata:this.props.statedatapass
    }
    render(){
        return(
            <div>
               <div>
               <img src={logohead}/>
               </div>
               <p>
               India is beautiful and rich in diversity country. People come from another country to enjoy a vision of the glory of nature. Tourism in India offers wide things to do in India. There are many Best Tourist Places in India like the majestic Himalayas, Ocean, historical monuments, museums, forts, sanctuaries, places of religious interest, palaces, etc. Whenever Indian Tourism is one of the popular tourist destinations in Asia. Surrounded by the Himalayan ranges in the north and surrounded by water (The Arabian Sea, Bay of Bengal and the Indian Ocean). Likewise, Historical monuments, forts etc. add to the grandeur of the country.Tourism in India is the second largest foreign exchange earner. The tourism in India employs the number of peoples like the hotel industry, travel agency, handicraft and many more.
               </p>
            </div>
        )
    }
}
export default About;