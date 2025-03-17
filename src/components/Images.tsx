interface IProps{
imgURL:string;
imgAlt:string;
imgClassName?:string;

}

const Images =({imgURL,imgAlt,imgClassName}:IProps)=>{
return <img src={imgURL} alt={imgAlt} className={imgClassName} />
}

export default Images ;