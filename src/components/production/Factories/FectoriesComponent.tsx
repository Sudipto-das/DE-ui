import { useRecoilValue, useResetRecoilState } from "recoil";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemList from "../ItemList";
import { projectDataState } from "../../../store/projectsState/projectDataState";
import ProjectsList from "../../dashboard/projectList";
import { selectProjectAtom } from "../../../store/slectProjectState";

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

const FactoriesComponent: React.FC = () => {
  const projects = useRecoilValue(projectDataState);
  const selectedProject = useRecoilValue(selectProjectAtom);
  const resetSelectedProject = useResetRecoilState(selectProjectAtom);
  const location = useLocation();

  // Reset selectedProject when the route changes
  useEffect(() => {
    resetSelectedProject();
  }, [location.pathname, resetSelectedProject]);

  return (
    <>
      {selectedProject ? (
        <ItemList data={factories} />
      ) : (
        <ProjectsList projects={projects} isLoading={false} />
      )}
    </>
  );
};

export default FactoriesComponent;
