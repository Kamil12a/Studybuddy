// import MenuItem from "@material-ui/core/MenuItem/MenuItem";
// import { useState, useEffect } from "react";
// import Select from "@material-ui/core/Select";

// export const ControlledSelect = ({
//   name,
//   value,
//   options,
//   onFocus,
//   onChange,
//   onBlur,
// }) => {
//   const [localValue, setLocalValue] = useState(value ?? ""); // we want to keep value locally
//   useEffect(() => setLocalValue(value ?? ""), [value]); // we want to update local value on prop value change
//   const handleFocus = () => {
//     if (onFocus) {
//       onFocus();
//     }
//   };
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setLocalValue(value);
//     if (onChange) {
//       onChange(value);
//     }
//   };
//   const handleBlur = (e) => {
//     if (onBlur) {
//       onBlur(e.target.value);
//     }
//   };
//   return (
//     <Select
//       name={name}
//       value={localValue} // we want to work in controlled mode
//       onFocus={handleFocus}
//       onChange={handleChange} // we want to work in controlled mode
//       onBlur={handleBlur}
//     >
//       {options?.map((option) => {
//         return (
//           <MenuItem key={option.value} value={option.value}>
//             {option.label ?? option.value}
//           </MenuItem>
//         );
//       })}
//     </Select>
//   );
// };

// export default ControlledSelect;
