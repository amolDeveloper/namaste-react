const Contact = () => {
    return (
        <div className="text-center bg-gray-200 m-2 p-2">
            <h1 className="font-bold">Contact Us</h1>
            <form className="flex flex-col w-4/12 mx-auto my-4">
                <input className="m-2 p-2 border-2 border-black rounded-lg" type="text" placeholder="Name"/>
                <input className="m-2 p-2 border-2 border-black rounded-lg" type="text" placeholder="Message"/>
                <button className="w-20 my-2 mx-auto p-2 rounded-lg border-2 border-black bg-gray-500">Submit</button>
            </form>
        </div>
    )
}

export default Contact;