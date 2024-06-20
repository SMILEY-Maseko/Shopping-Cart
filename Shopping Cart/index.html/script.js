const product = [
    {
        id: 1,
        image: 'image/imageAF.jpg',
        title: 'Air Force 1',
        price: 50.00
    },
    {
        id: 2,
        Image: 'image/imageAJ.jpg',
        title: 'Air Jordan',
        price: 40.00

    },
    {
        id: 3,
        Image: 'image/imageAM',
        title: 'Air Max',
        price: 70.00

    },
    {
        id: 4,
        Image: 'image/imageBL',
        title: 'Blaze',
        price: 30.00

    },
    {
        id: 5,
        Image: 'image/imageHD',
        title: 'High Dunk',
        price: 80.00

    },
    {
        id: 6,
        Image: 'image/imageLD.jpg',
        title: 'Low Dunk',
        price: 90.00

    },
    

];
const categories = [...new Set(product.map((item)=>
    {return}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, item price} = item;
    return (
        `div class=`box
    )
})    
