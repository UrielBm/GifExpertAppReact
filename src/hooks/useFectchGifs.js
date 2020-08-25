import { getGifs } from "../helpers/getGifts";

const {useState, useEffect } = require("react");

 export const useFectchGifts=(categoria)=>{
     const [state, setstate] = useState({
         data: [],
         loading: true,
     });
     useEffect(()=>{
            getGifs(categoria)
            .then((imgs)=>{
                    // console.log(imgs);
                    setstate({
                        data: imgs,
                        loading: false,
                    })
            })
     },[categoria])
     return state; // {data:[], loading: true}
 }