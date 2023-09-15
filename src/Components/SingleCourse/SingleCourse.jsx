import PropTypes from 'prop-types';

const SingleCourse = ({course, handleSelectButton}) => {
    const {image, course_name, course_details, price, credit_hours} = course
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt={`${course_name}`} className=" w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{course_name}</h2>
    <p>{course_details}</p>
    <div className=' flex gap-2'>
        <p>Price : {price}</p>
        <p>Credit : {credit_hours}</p>
    </div>
    <div className="card-actions">
      <button className="btn text-white bg-[#2F80ED]" onClick={() => handleSelectButton(course)}>Select</button>
    </div>
  </div>
</div>
        </>
    );
};

SingleCourse.propTypes = {
    
};

export default SingleCourse;