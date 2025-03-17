interface IProps{
className:string;

}

const CircleColor =({className}:IProps)=>{
return (
    <>
 <span className={`${className} w-4 h-4 rounded-full cursor-pointer`}/>
    </>

)
}

export default CircleColor ;