import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateProduct = () => {

    const products = useLoaderData();
    const { id } = useParams();
    console.log(id);

    const product = products.find((updateItem) => updateItem._id === id);

    const {
        name, type, photo, brand, price, ratings, short_description
    } = product;
    console.log(product);

    const handleUpdateProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const short_description = form.short_description.value;

        const updatedProduct = {
            name, type, photo, brand, price, ratings, short_description
        }
        console.log(updatedProduct);


        fetch(`http://localhost:5000/car/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Item updated!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="bg-gray-200 rounded-md m-4 p-16 lg:w-3/4 mx-auto">
            <h2 className="font-bold text-xl">Update Product</h2>
            <form onSubmit={handleUpdateProduct}>
                {/* name and type row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" defaultValue={name} name="name" placeholder="Product name" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select name="type" defaultValue={type} className="select select-bordered w-full rounded-md">
                            <option value="hybrid">Hybrid</option>
                            <option value="fuel">Fuel</option>
                            <option value="electric">Electric</option>
                        </select>
                    </div>

                </div>
                {/* photo and brand row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" defaultValue={photo} name="photo" placeholder="PhotoURL" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select name="brand" defaultValue={brand} className="select select-bordered w-full rounded-md">
                            <option value="toyota">Toyota</option>
                            <option value="ford">Ford</option>
                            <option value="bmw">BMW</option>
                            <option value="mercedes_benz">Mercedes-Benz</option>
                            <option value="tesla">Tesla</option>
                            <option value="honda">Honda</option>
                        </select>
                    </div>


                </div>
                {/* price and short ratings row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price $</span>
                        </label>
                        <input type="text" defaultValue={price} name="price" placeholder="Price $" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <select name="ratings" defaultValue={ratings} className="select select-bordered w-full rounded-md">
                            <option value="5">5</option>
                            <option value="4.5">4.5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="3.5">3.5</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="0">0</option>
                        </select>
                    </div>


                </div>
                {/*short description row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" defaultValue={short_description} name="short_description" placeholder="Short Description" className="input input-bordered w-full rounded-md " />
                    </div>

                </div>
                <div>
                    <input className="btn btn-block rounded-md my-2 bg-white border border-green-500 hover:bg-gray-50" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;