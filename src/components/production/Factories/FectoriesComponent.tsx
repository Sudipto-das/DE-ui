
import ItemList from "../ItemList";

const factories = [
    {
      image: 'https://via.placeholder.com/150',  // Replace with actual image URL
      title: 'Standard',
      discount: '10%',
      rating: 4,
      budget: '$50,000',
      duration: '12 weeks',
      size: '800 sq ft / 1 bedroom apartment',
    },
    {
      image: 'https://via.placeholder.com/150',  // Replace with actual image URL
      title: 'Premium',
      discount: '20%',
      rating: 5,
      budget: '$50,000',
      duration: '12 weeks',
      size: '800 sq ft / 1 bedroom apartment',
    },
    {
      image: 'https://via.placeholder.com/150',  // Replace with actual image URL
      title: 'Luxury',
      discount: '30%',
      rating: 5,
      budget: '$50,000',
      duration: '12 weeks',
      size: '800 sq ft / 1 bedroom apartment',
    },
 
  ];
const FactoriesComponent:React.FC = () =>{
    
    return <ItemList data={factories}/>
}
export default FactoriesComponent