interface IProps{
msg:string

}
/**
 * Reusable component for displaying error messages.
 * 
 * @component
 * @param {IProps} props - The props object.
 * @param {string} props.msg - The error message to display. If empty, nothing is rendered.
 * 
 * @returns {JSX.Element | null} A styled error message if `msg` exists, otherwise `null`.
 */

const ErrorsMsg =({msg}:IProps)=>{
return msg?<span className="block text-red-700 text-sm font-semibold">{msg}</span>:null;
// return <span className="block text-red-700 text-sm font-semibold">{msg}</span>;
}
export default ErrorsMsg ;