/**
 * Slice a given text to a maximum size, appending "..." if the text is longer.
 * @param {string} txt The text to slice.
 * @param {number} [maxSize=100] The maximum size of the sliced text.
 * @returns {string} The sliced text.
 */
export function textSlice(txt:string,maxSize:number = 100){
    if(txt.length >= maxSize){
        return txt.slice(0,maxSize) + "...";
    }
    else{
        return txt;
    }
}

/**
 * Slice a given title to a maximum size, appending "..." if the title is longer.
 * @param {string} titleTxt The title to slice.
 * @param {number} [maxTitle=25] The maximum size of the sliced title.
 * @returns {string} The sliced title.
 */
export function titleSlicer (titleTxt:string,maxTitle:number = 25){
    if(titleTxt.length >= maxTitle){
        return titleTxt.slice(0,maxTitle) + "...";
    }
    else{
        return titleTxt;
    }
}