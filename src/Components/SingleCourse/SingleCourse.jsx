import PropTypes from 'prop-types';

const SingleCourse = ({course, handleSelectButton}) => {
    const {image, course_name, course_details, price, credit_hours} = course
    return (
        <>
            <div className="bg-base-100 shadow-xl max-w-[290px] gap-3">

    <img src={image} alt={`${course_name}`} className=" w-full" />

  <div className="">
    <h2 className="text-[18px] font-semibold">{course_name}</h2>
    <p className='text-[13px] font-normal'>{course_details}</p>
    <div className='flex gap-3 mt-3 mb-3'>
        <p>Price :  {price}</p>
        <p>Credit : {credit_hours}</p>
    </div>
    <div>
      <button className="btn w-full font-semibold text-white bg-[#2F80ED]" onClick={() => handleSelectButton(course)}>Select</button>
    </div>
  </div>
</div>
        </>
    );
};

SingleCourse.propTypes = {
    
};

export default SingleCourse;