# Course Registration Website

Welcome to the Course Registration Website! This website allows user to select courses, Add them to their cart and manage those course which they have selected.Here are the key feature-🚀


* #### Add course to the Cart 🛒

Here, a user can browse through multiple courses and add them to their cart section by clicking the 'select' button.

* Restriction on adding duplicate courses 🚫

A user may unintentionally add one course multiple times. However, it is not possible to do.Because I have prevented the user from selecting one course multiple times.

* Credit hour limit of 20 hours ⏳

A credit hour limit of 20 hours is enforced in the cart. This prevents the user from exceeding the limit.

* Total credit counter 🔢

Lastly, it may be overwhelming for a user to count the credit hours again and again after selecting courses. No need to worry! A real-time counter has been added to the cart, and it changes dynamically if a user selects any course.








## State Management

In this project, I utilize React's **`useState`** hook for state management.

1. **`selectedCourses` state**

**Initialization**

I initialize the **`selectedCourses`** state as an empty array using **`useState`**.

```
  const [selectedCourses, setSelectedCourses] = useState([])
```

**Adding a New Course**

When a user clicks the select button, that course data is preserved in the **`setSelectedCourses`** array.

```
    const newSelectedCourse = [...selectedCourses, course]
    setSelectedCourses(newSelectedCourse)
```

**Sending as `Propst`**

**`selectedCourses`** are sent as props to the Cart Component to display course data in the cart section.
```
 <Cart selectedCourses={selectedCourses} />
      
```

**Mapping and Displaying**

I map through the **`selectedCourses`** and display individual course data.
```
{selectedCourses.map((course) => (
    <!-- content here -->
  ))}
```
2. **`setTotalCredit` state**

We declare a variable named **`count`**, and after counting the credit hours, we assign that value to the **`totalCredit`** state which initial value assigned to `0`
```
  const [totalCredit, setTotalCredit] = useState(0)
// ... 
    setTotalCredit(count)
```

**Sending as `Props`**

To display data in the Cart section, I pass the **`totalCredit`** state as props to the Cart component
```
<Cart  totalCredit={totalCredit}/>
```
 and show the output in the Cart section 
 ```
    <p>Total Credit Hour: {totalCredit}</p>
 ```

3. **`creditRemaining` state**

The remaining credit after a user selects a course is stored in the **`creditRemaining`** state which initial value is `20`

**Sending as Props**

To display data in the Cart section, I pass the **`creditRemaining`** state as props to the Cart component and show the output.
 // Passing the 'creditRemaining' prop to the Cart component.
 ```
<Cart creditRemaining={creditRemaining} />

// Displaying the credit hours remaining.
<h4 className='text-sm text-blue-500 font-bold'>
  Credit Hour remaining {creditRemaining} hr
</h4>
```

  
      


Thank you for using our Course Registration website!
