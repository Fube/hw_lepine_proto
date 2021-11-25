import { Formik } from "formik";
import { useRouter } from "next/router";
import Nav from "../components/Nav";

export default function Requests() {
    const router = useRouter();
    const getErrorFor = (text) =>
        text ? (
            <div className="alert alert-error">
                <div className="flex-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 mx-2 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        ></path>
                    </svg>
                    <label>{text}</label>
                </div>
            </div>
        ) : (
            ""
        );

    const handleValidate = (values) => {
        const errors = {};
        if (!values.orderId) {
            errors.orderId = "Required";
        }
        if (!values.sku) {
            errors.sku = "Required";
        } else if (isNaN(values.sku)) {
            errors.sku = "Must be a number";
        }

        if (!values.quantity) {
            errors.quantity = "Required";
        } else if (+values.quantity < 1) {
            errors.quantity = "Must be greater than 0";
        } else if (+values.quantity % 1 !== 0) {
            errors.quantity = "Must be an integer";
        }

        if (!values.neededBy) {
            errors.neededBy = "Required";
        } else if (new Date(values.neededBy) < new Date()) {
            errors.neededBy = "Must be in the future";
        }

        return errors;
    };

    return (
        <>
            <Nav />
            <h1 className="text-center mt-6 text-3xl">Transfer Request</h1>
            <Formik
                initialValues={{
                    orderId: "",
                    sku: "",
                    item: "",
                    quantity: "",
                    neededBy: new Date(60 * 60 * 24 * 1000),
                }}
                validate={handleValidate}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));

                        setSubmitting(false);
                        router.push("/");
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <>
                        <div className="flex justify-center">
                            <form onSubmit={handleSubmit} className="">
                                <div className="form-control my-4">
                                    <label className="label"></label>
                                    <span className="label-text">Order ID</span>
                                    <div className="my-2">
                                        <input
                                            className="input input-bordered w-full"
                                            placeholder="Order ID"
                                            type="text"
                                            name="orderId"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.orderId}
                                        />
                                    </div>
                                    <span className="text-center">
                                        {getErrorFor(
                                            errors.orderId &&
                                                touched.orderId &&
                                                errors.orderId
                                        )}
                                    </span>
                                    {/* </label> */}
                                </div>

                                <div className="form-control my-4">
                                    <label className="label"></label>
                                    <span className="label-text">Item SKU</span>
                                    <div className="my-2">
                                        <input
                                            className="input input-bordered w-full"
                                            placeholder="SKU"
                                            type="text"
                                            name="sku"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.sku}
                                        />
                                    </div>
                                    <span className="text-center">
                                        {getErrorFor(
                                            errors.sku &&
                                                touched.sku &&
                                                errors.sku
                                        )}
                                    </span>
                                    {/* </label> */}
                                </div>

                                <div className="form-control my-4">
                                    <label className="label"></label>
                                    <span className="label-text">Quantity</span>
                                    <div className="my-2">
                                        <input
                                            className="input input-bordered w-full"
                                            placeholder="Quantity"
                                            type="number"
                                            name="quantity"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.quantity}
                                        />
                                    </div>
                                    <span className="text-center">
                                        {getErrorFor(
                                            errors.quantity &&
                                                touched.quantity &&
                                                errors.quantity
                                        )}
                                    </span>
                                    {/* </label> */}
                                </div>

                                <div className="form-control my-4">
                                    <label className="label"></label>
                                    <span className="label-text">
                                        Needed By
                                    </span>
                                    <div className="my-2">
                                        <input
                                            className="input input-bordered w-full"
                                            placeholder="Needed By"
                                            type="date"
                                            name="neededBy"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.neededBy}
                                        />
                                    </div>
                                    <span className="text-center">
                                        {getErrorFor(
                                            errors.neededBy &&
                                                touched.neededBy &&
                                                errors.neededBy
                                        )}
                                    </span>
                                    {/* </label> */}
                                </div>

                                <div className="flex justify-around">
                                    <button
                                        className="btn btn-success"
                                        type="submit"
                                        disabled={
                                            isSubmitting ||
                                            Object.keys(errors).length > 0
                                        }
                                    >
                                        Submit
                                    </button>
                                    <button className="btn btn-error">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </Formik>
        </>
    );
}
