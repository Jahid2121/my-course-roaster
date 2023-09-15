import PropTypes from 'prop-types';
import SingleCourse from '../SingleCourse/SingleCourse';
import { useEffect, useState } from 'react';


const Courses = ({handleSelectButton}) => {
    const [courses, setCourses] = useState([])

    useEffect(()=> {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ml-3'>
        {
            courses.map(course => <SingleCourse key={course.id} handleSelectButton={handleSelectButton} course={course}/> )
        }
            
        </div>
        
        </>
    );
};

Courses.propTypes = {
    
    
};

export default Courses;