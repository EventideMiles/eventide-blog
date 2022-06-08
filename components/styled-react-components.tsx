const defaultParagraphClasses = "text-justify px-4 block font-serif";
const defaultParagraphStyles = {fontFamily: "'Gentium Plus', serif"};
const defaultHeaderClasses = "text-3xl font-bold text-neutral-700 text-center font-serif max-w-100 mx-auto border-double border-separate border-b-2 border-neutral-300";
const defaultHeaderStyles = {fontFamily: "'Caveat', cursive"};
const defaultSubsectionHeaderClasses = "text-xl text-stone-700 text-center";
const defaultSubsectionHeaderStyles = {fontFamily: "'Dancing Script', cursive"};

const Header = (props: { children:any, className?:string, style?:{} }) => {
  return(
    <h1 className={props.className ? props.className : defaultHeaderClasses} style={props.style ? props.style : defaultHeaderStyles}>{props.children}</h1>
  )
} 

const SubsectionHeader = (props: { children:any, className?:string, style?:{} }) => {
  return(
    <h2 className={props.className ? props.className : defaultSubsectionHeaderClasses} style={props.style ? props.style : defaultSubsectionHeaderStyles}>{props.children}</h2>
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
    <p className={props.className ? props.className : defaultParagraphClasses} style={props.style ? props.style : defaultParagraphStyles}>{props.children}</p>
  )
}

const cssTest = () => {
  return(
    <div className="text-3xl font-bold text-stone-700 text-center font-serif max-w-lg mx-auto border-double border-separate border-b-2 border-neutral-500" />
  )
}

export { Header, SubsectionHeader, P }
