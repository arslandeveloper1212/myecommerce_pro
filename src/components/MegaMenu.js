import { Menu, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
function MegaMenu() {
    return (
        <div style={{ backgroundColor: "white" }}>

            <Menu
                mode='horizontal'
                items={[
                    {
                        label: "Category",
                        key: "Category",
                        children: [
                            {
                                label: <MegaList />,
                                key: "MegaList",
                                style: {
                                    height: "fit-content",
                                    backgroundColor: "white",


                                }
                            }



                        ]
                    },
                    {
                        label: <Link style={{ textDecoration: "none" }} to="/shop">Shop</Link>,
                        key: "Shop",

                    },
                    {
                        label: "What's New",
                        key: "What's New",
                    },

                ]}
                style={{ border: "none", boxShadow: "none" }}
            />

        </div>

    )

}


function MegaList() {
    return (
        <div >
            <Typography.Title style={{ paddingTop: "10px" }} level={3}>Sub Category</Typography.Title>
            <Space direction='horizontal'>
                <Menu items={
                    [
                        {
                            label: <Link style={{ textDecoration: "none" }} to="/furniture">Furniture</Link>,
                            key: "Furniture",

                        },
                        {
                            label: <Link style={{ textDecoration: "none" }} to="/shoe">Shoe</Link>,
                            key: "Shoe",
                        },
                        {
                            label: <Link style={{ textDecoration: "none" }} to="/Laptop">Laptop</Link>,
                            key: "Laptop",
                        },
                    ]
                }
                    style={{ border: "none", boxShadow: "none" }}
                />
                <Menu items={[
                    {
                        label: <Link style={{ textDecoration: "none" }} to="/hand-bag">Hand Bag</Link>,
                        key: "Hand Bag",
                    },
                    {
                        label: <Link style={{ textDecoration: "none" }} to="/headphone">Headphone</Link>,
                        key: "Headphone",
                    },
                    {
                        label: <Link style={{ textDecoration: "none" }} to="/book">Book</Link>,
                        key: "Book",
                    },
                ]}
                    style={{ border: "none", boxShadow: "none" }}
                />
            </Space>
        </div>

    )
}




export default MegaMenu;