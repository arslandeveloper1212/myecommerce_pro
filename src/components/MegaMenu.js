import { Menu, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
function MegaMenu() {
    return (
        <div style={{ backgroundColor: "white"}}>

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
                                className:'heading_megamenu',
                                style: {
                                    height: "fit-content",
                                    backgroundColor: "white",

                                }
                            }



                        ]
                    },
                    {
                        label: <Link className='heading_megamenu' style={{ textDecoration: "none" }} to="/shop">Shop</Link>,
                        key: "Shop",

                    },
                    {
                        label: <Link className='heading_megamenu' style={{ textDecoration: "none" }} to="/contact-form">Contact Us</Link>,
                        key: "contact",

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
            <Typography.Title className='heading_megamenu' style={{ padding:"10px" }} level={3}>Sub Category</Typography.Title>
            <Space direction='horizontal'>
                <Menu  items={
                    [
                        {
                            label: <Link className='heading_megamenu' style={{ textDecoration: "none" }} to="/category/furniture">Furniture</Link>,
                            key: "Furniture",

                        },
                        
                        {
                            label: <Link className='heading_megamenu' style={{ textDecoration: "none" }} to="/category/Laptop">Laptop</Link>,
                            key: "Laptop",
                        },
                    ]
                }
                    style={{ border: "none", boxShadow: "none" }}
                />
                <Menu items={[
                    {
                        label: <Link className='heading_megamenu' style={{ textDecoration: "none" }} to="/category/hand-bag">Hand Bag</Link>,
                        key: "Hand Bag",
                    },
                    {
                        label: <Link className='heading_megamenu' style={{ textDecoration: "none" }} to="/category/headphone">Headphone</Link>,
                        key: "Headphone",
                    },
                    
                ]}
                    style={{ border: "none", boxShadow: "none" }}
                />
            </Space>
        </div>

    )
}




export default MegaMenu;