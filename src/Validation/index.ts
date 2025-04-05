// ** ProductObject === errorsObject (title.description,imageUrl,price)
// الفكره اية ؟ هي اظهار رسالة خطأ تحت حقل الادخل عندم عدم وجود شروط معينة

// create function use for validation
// function Returns ErrorObjects{} =>> errors ={title.description,imageUrl,price}

/**
 * Validates a product object to ensure it meets specific criteria.
 *
 * This function checks the following fields:
 * - `title`: must be a non-empty string between 10 and 80 characters.
 * - `description`: must be a non-empty string between 30 and 150 characters.
 * - `price`: required, must be a valid number.
 * - `image`: required, must be a valid URL.
 *
 * @param product - An object representing the product to validate, containing:
 *   - title: string
 *   - image: string
 *   - price: number | string
 *   - description: string
 *
 * @returns An object containing the `errors` object with validation messages for each field.
 * If a field is valid, its corresponding error message will be an empty string.
 *
 * @example
 * ```ts
 * const result = productValidation({
 *   title: "Short",
 *   image: "image.jpg",
 *   price: 100,
 *   description: "Too short desc"
 * });
 * console.log(result.errors.title); // "Product title must be between 10 and 80 charcters !!"
 * console.log(result.errors.description); // "Product description must be between 30 and 150 charcters !!"
 * ```
 */


export const productValidation = (product:{title:string;image:string;price:string;description:string})=>{
    // لازم دي يكون ليها نوع علشان بنستخدم التايب سكريبت 
    // Initialize the errors object with empty strings
const errors:{title:string;image:string;price:string;description:string} = {
    title:"",
    image:"",
    price:"",
    description:""
}
// Validate that the image field contains a valid URL
const validURL = /^(http?|https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(product.image);

// Title validation: must be between 10 and 80 characters
if(!product.title.trim()|| product.title.length <10||product.title.length>80){
    errors.title="Product title must be between 10 and 80 charcters !!";
}
// description validation: must be between 30 and 150 characters
if(!product.description.trim()|| product.description.length <30||product.description.length>150){
    errors.description="Product description must be between 30 and 150 charcters !!";
}
// Price validation: must be a valid number and not empty
if(!product.price.trim()||isNaN(Number(product.price))){
errors.price = "Price is  valid or required !!";
}
// Image URL validation
if(!product.image.trim()||!validURL){
    errors.image = "URL is Valid or required !!";
}
return {errors}
}