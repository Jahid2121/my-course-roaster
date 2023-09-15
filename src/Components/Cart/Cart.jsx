import PropTypes from 'prop-types';

const Cart = ({selectedCourses, totalCredit, creditRemaining}) => {
    return (
        <div className="w-96 bg-base-100 shadow-xl ml-4 p-8">
            <h4 className=' text-xl text-blue-500 font-bold'>Credit Hour remaining {creditRemaining} hr </h4>
            <hr />
            <h2 className=' text-lg font-bold'>Course Name</h2>
            <ol>
  {selectedCourses.map((course) => (
    <li key={course.id}>{course.course_name}</li>
  ))}
</ol>
    <p>Total Credit Hour: {totalCredit}</p>

  </div>

    );
};

Cart.propTypes = {
    
};

export default Cart;