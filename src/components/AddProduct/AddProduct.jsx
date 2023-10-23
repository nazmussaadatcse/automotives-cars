import Swal from "sweetalert2";



const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const short_description = form.short_description.value;

        const newCar = {
            name, type, photo, brand, price, ratings, short_description
        }
        console.log(newCar);

        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Item has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="bg-gray-200 rounded-md m-4 p-16 lg:w-3/4 mx-auto">
            <h2 className="font-bold text-xl">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* name and type row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Product name" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <select name="type" className="select select-bordered w-full rounded-md">
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
                        <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <select name="brand" className="select select-bordered w-full rounded-md">
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
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full rounded-md " />
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="number" defaultValue={5} name="ratings" placeholder="ratings (5 max)" className="input input-bordered w-full rounded-md " />
                    </div>


                </div>
                {/*short description row  */}
                <div className="md:flex gap-4 my-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full rounded-md " />
                    </div>

                </div>
                <div>
                    <input className="btn btn-block rounded-md my-2 bg-white border border-green-500 hover:bg-gray-50" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;