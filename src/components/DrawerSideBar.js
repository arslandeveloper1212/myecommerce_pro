import React from 'react';
import { Menu, Drawer, Space, Badge } from 'antd';
import { Link } from 'react-router-dom';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { useSelector } from 'react-redux';
const { SubMenu } = Menu;

function MegaMenu() {
    const [drawerVisible, setDrawerVisible] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const item = useSelector(state => state.allcart.cart);
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate("/cartdatapage");
    };

    return (
        <div style={{ backgroundColor: "white" }}>

            <Drawer
                title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Sub Category</span>
                        <CloseIcon style={{ cursor: 'pointer' }} onClick={toggleDrawer} />
                    </div>
                }
                placement="right"
                closable={false}
                onClose={toggleDrawer}
                visible={drawerVisible}
                width={300}
            >
                <MegaList />
                <div className="shop-link mt-5">
                    <Link style={{textDecoration:"none", color:"black"}} to="/shop">Shop</Link>
                </div>
                <div className='section_nav_wrapper_clicked mt-5'>
                    <PersonOutlineIcon />
                    <span className='mb-0' style={{ cursor: "pointer" }}>Account </span>
                    &nbsp;
                    <Badge badgeContent={item.length} color="primary">
                        <AddShoppingCartIcon onClick={handleClick} style={{ cursor: "pointer" }} />
                    </Badge>
                </div>
            </Drawer>

            <ToggleButton
                style={{ border: "none" }}
                value="right"
                aria-label="right aligned"
                onClick={toggleDrawer}
            >
                <FormatAlignRightIcon />
            </ToggleButton>
        </div>
    );
}

function MegaList() {
    return (
        <Space direction='horizontal'>
            <Menu>
                <Menu.Item key="Furniture">
                    <Link style={{textDecoration:"none", color:"black"}} to="/furniture">Furniture</Link>
                </Menu.Item>
                <Menu.Item key="Laptop">
                    <Link style={{textDecoration:"none", color:"black"}} to="/laptop">Laptop</Link>
                </Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item key="HandBag">
                    <Link style={{textDecoration:"none", color:"black"}} to="/hand-bag">Hand Bag</Link>
                </Menu.Item>
                <Menu.Item key="Headphone">
                    <Link style={{textDecoration:"none", color:"black"}} to="/headphone">Headphone</Link>
                </Menu.Item>
            </Menu>
        </Space>
    );
}

export default MegaMenu;
