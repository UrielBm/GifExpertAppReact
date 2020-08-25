 export const getGifs = async(categoria) =>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI( categoria )}&limit=10&api_key=YtR1Oq7fjYBcgrjmJ2fGHVXeYY0H7C34`;
     const respuesta= await fetch(url);
     const {data} = await respuesta.json();
     const gift = data.map(imagen=>{
         return {
             id: imagen.id,
             title: imagen.title,
             url: imagen.images?.downsized_medium.url,
         }
     })
    //    console.log(gift);
       return gift;
} 