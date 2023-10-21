const geyProd = async () => {
    var ans = await fetch("http://localhost:3000/api/prods")
    ans = await ans.json();
    if (ans.success == true) {
        return ans.res;
    }
    else {
        return { sucess: false }
    }
}
export default async function Page() {
    var am = await geyProd();
    console.log(am)
    return (
        <div>
            <h2>Check Prods</h2>
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Company</td>
                        <td>Cayegory</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        am.map((elem) => (
                            <tr>
                                <td>{elem.name}</td>
                                <td>{elem.price}</td>
                                <td>{elem.color}</td>
                                <td>{elem.company}</td>
                                <td>{elem.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}