import PropTypes from 'prop-types';

const Cart = ({selectedCourses, totalCredit, creditRemaining}) => {
    return (
        <div className="rounded-xl h-[300px] bg-base-100 shadow-xl p-2">
            <h4 className=' text-sm text-blue-500 font-bold'>Credit Hour remaining {creditRemaining} hr </h4>
            <hr />
            <h2 className=' text-lg font-bold'>Course Name</h2>
            <ol className='list-decimal px-5'>
  {selectedCourses.map((course) => (
    <li className='font-normal' key={course.id}>{course.course_name}</li>
  ))}
</ol>
    <hr />
    <p>Total Credit Hour: {totalCredit}</p>

  </div>

    );
};

Cart.propTypes = {
    
};

export default Cart;