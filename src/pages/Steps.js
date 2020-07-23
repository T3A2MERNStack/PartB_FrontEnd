// import React from "react";
// import { useForm, useFieldArray, Controller } from "react-hook-form";

// let renderCount = 0;

// const Steps = () => {
//     const { register, control, handleSubmit, reset } = useForm({
//         defaultValues: {
//           steps: [{step: "step example"}]
//         }
//       });
//       const { fields, append, prepend, remove, swap } = useFieldArray(
//         {
//           control,
//           name: "steps"
//         }
//       );
//     const onSubmit = data => console.log("data", data);

//   return (
//       <>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <h1>Instructions</h1>
//             <p>The following demo allow you to delete, append, prepend items</p>
//             <span className="counter">Render Count: {renderCount}</span>
//             <ul>
//                 {fields.map((item, index) => {
//                 return (
//                     <li key={item.id}>
//                     <input
//                         name={`step[${index}]`}
//                         defaultValue={`${item.step}`} // make sure to set up defaultValue
//                         ref={register()}
//                     />

                    
//                     <button type="button" onClick={() => remove(index)}>
//                         Delete
//                     </button>
//                     </li>
//                 );
//                 })}
//             </ul>
//             <section>
//                 <button
//                 type="button"
//                 onClick={() => {
//                     append({ firstName: "appendBill", lastName: "appendLuo" });
//                 }}
//                 >
//                 append
//                 </button>
//                 <button
//                 type="button"
//                 onClick={() =>
//                     prepend({
//                     firstName: "prependFirstName",
//                     lastName: "prependLastName"
//                     })
//                 }
//                 >
//                 prepend
//                 </button>

//                 <button type="button" onClick={() => swap(1, 2)}>
//                 swap
//                 </button>

//                 <button
//                 type="button"
//                 onClick={() =>
//                     reset({
//                     test: [{ firstName: "Bill", lastName: "Luo" }]
//                     })
//                 }
//                 >
//                 reset
//                 </button>
//             </section>

//         <input type="submit" />
//         </form>
//       </>
//     );
//   }


//   export default Steps;