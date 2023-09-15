import PropTypes from 'prop-types';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = props => {
    return (
        <>
        <div className=' w-3/4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
            <SingleCourse />
        </div>
        
        </>
    );
};

Courses.propTypes = {
    
};

export default Courses;