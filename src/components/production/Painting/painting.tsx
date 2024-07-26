
import ItemList from "../ItemList";

const painting = [
    {
      image: 'https://via.placeholder.com/150',  // Replace with actual image URL
      title: 'Standard',
      discount: '10%',
      rating: 4,
      budget: '$50,000',
      duration: '12 weeks',
      size: '800 sq ft / 1 bedroom apartment',
      companyLogo:'/Asian_Paints_Logo.svg'
    },
    {
      image: 'https://via.placeholder.com/150',  // Replace with actual image URL
      title: 'Premium',
      discount: '20%',
      rating: 5,
      budget: '$50,000',
      duration: '12 weeks',
      size: '800 sq ft / 1 bedroom apartment',
      companyLogo:'/Asian_Paints_Logo.svg'
    },
    {
      image: 'https://via.placeholder.com/150',  // Replace with actual image URL
      title: 'Luxury',
      discount: '30%',
      rating: 5,
      budget: '$50,000',
      duration: '12 weeks',
      size: '800 sq ft / 1 bedroom apartment',
      companyLogo:'/Asian_Paints_Logo.svg'
    },
 
  ];
const PaintingComponent:React.FC = () =>{
    
    return <ItemList data={painting}/>
}
export default PaintingComponent