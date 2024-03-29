import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loadedData = useLoaderData()
    const {_id, name, brand, price, type, rating, description, img} = loadedData[0] || {};
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const img = form.img.value;
        const updateProduct = {name, brand, price, type, rating, description, img}
        fetch(`https://server-site-chi.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                Swal.fire(
                    'Successful Update!',
                    'Update product successfully',
                    'success'
                )
            }
        })
    }
    return (
        <div className="my-10 mx-[5%] sm:mx-[10%]">
            <button className="btn btn-secondary rounded mb-2" onClick={handleGoBack}>Go Back</button>
            <div className=" p-5 sm:px-14 sm:py-20  border-2 rounded-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center px-[5%] mb-5 md:mb-10">Update product</h1>
                <form className="font-semibold text-lg" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <label htmlFor="name">Name: 
                        <input type="text" name="name" defaultValue={name} required placeholder="Name" className="input input-bordered bg-transparent border-secondary w-full mt-2" />
                        </label>
                        <label htmlFor="brand">Brand name: 
                        <select className="select select-bordered w-full mt-2 bg-transparent border-secondary" name="brand" defaultValue={brand} >
                            <option className="text-black" value="Apple">Apple</option>
                            <option className="text-black" value="LG">LG</option>
                            <option className="text-black" value="Dell">Dell</option>
                            <option className="text-black" value="Lenovo">Lenovo</option>
                            <option className="text-black" value="Samsung">Samsung</option>
                            <option className="text-black" value="Sony">Sony</option>
                            <option className="text-black" value="Intel">Intel</option>
                        </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <label htmlFor="price">Price: 
                        <input type="number" name="price" defaultValue={price} required placeholder="Price" className="input input-bordered bg-transparent border-secondary w-full mt-2" />
                        </label>
                        <label htmlFor="type">Type: 
                        <input type="text" name="type" defaultValue={type} required placeholder="Type" className="input input-bordered bg-transparent border-secondary w-full mt-2" />
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <label htmlFor="rating">Rating: 
                        <input type="number" name="rating" defaultValue={rating} required placeholder="Rating" className="input input-bordered bg-transparent border-secondary w-full mt-2" />
                        </label>
                        <label htmlFor="img">Image url: 
                        <input type="text" name="img" defaultValue={img} required placeholder="Image url" className="input input-bordered bg-transparent border-secondary w-full mt-2" />
                        </label>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                    <label htmlFor="Description">Description: 
                        <textarea className="textarea bg-transparent border-secondary w-full mt-2 resize-none"  type="text" name="description" defaultValue={description} required placeholder="Description" ></textarea>
                        </label>
                    </div>
                    <button className="btn btn-secondary btn-outline btn-block my-5" type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;