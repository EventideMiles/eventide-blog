// Tailwind Classes
const DEFAULT_PARAGRAPH_CLASSES = "text-justify px-4 block font-serif";
const DEFAULT_HEADER_CLASSES = "text-3xl font-bold text-neutral-700 text-center font-serif max-w-100 mx-auto border-double border-separate border-b-2 border-neutral-300";
const DEFAULT_SUBSECTION_HEADER_CLASSES = "text-xl text-stone-700 text-center";

// Style Objects
const DEFAULT_PARAGRAPH_STYLES = {fontFamily: "'Gentium Plus', serif"};
const DEFAULT_HEADER_STYLES = {fontFamily: "'Caveat', cursive"};
const DEFAULT_SUBSECTION_HEADER_STYLES = {fontFamily: "'Dancing Script', cursive"};

const Header = (props: { children:any, className?:string, style?:{} }) => {
  return(
    <h1 className={props.className ? props.className : DEFAULT_HEADER_CLASSES} style={props.style ? props.style : DEFAULT_HEADER_STYLES}>{props.children}</h1>
  )
} 

const SubsectionHeader = (props: { children:any, className?:string, style?:{} }) => {
  return(
    <h2 className={props.className ? props.className : DEFAULT_SUBSECTION_HEADER_CLASSES} style={props.style ? props.style : DEFAULT_SUBSECTION_HEADER_STYLES}>{props.children}</h2>
  )
}

// const Ul = (props: { listItems:Array<string> }) => {
//   if (!Array.isArray(props.listItems)) { return(
//     <ul>
//       <li>Make sure to send Ul an array of strings.</li>
//     </ul>
//   )};
//   return(
//     <ul>
//         {props.listItems.map((item:string) => (
//           <li key={item}>{item}</li>
//         ))}
//     </ul>
//   )
// }

const P = (props:{ children:any, className?:string, style?:{} }) => {
  return(
    <p className={props.className ? props.className : DEFAULT_PARAGRAPH_CLASSES} style={props.style ? props.style : DEFAULT_PARAGRAPH_STYLES}>{props.children}</p>
  )
}

const cssTest = () => {
  return(
    <div className="text-3xl font-bold text-stone-700 text-center font-serif max-w-lg mx-auto border-double border-separate border-b-2 border-neutral-500" />
  )
}

export { Header, SubsectionHeader, P }
