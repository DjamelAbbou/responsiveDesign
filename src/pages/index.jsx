import Container from "@/ui/container";

export default function HomePage() {
  return (
    <Container className="mt-16 text-white text-2xl">Hello world</Container>
  );
}

// export function withValidations(Component) {
//   return function wrappedComponent({}) {
//     const [errors, setErrors] = useState([]);
//     return (
//       <>
//         <Component />
//         {errors.length > 0 && <div>{errors.join(", ")}</div>}
//       </>
//     );
//   };
// }
