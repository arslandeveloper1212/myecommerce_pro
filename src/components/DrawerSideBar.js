import React from 'react';
import { Menu, Drawer, Space, Badge } from 'antd';
import { Link } from 'react-router-dom';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import { useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
const { SubMenu } = Menu;

function MegaMenu() {
    const [drawerVisible, setDrawerVisible] = React.useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const item = useSelector(state => state.allcart.cart)
    console.log(item.length)

    const Navigate = useNavigate();

    const handleClick = (e) => {
      Navigate("/cartdatapage")
    }
    return (
        <div style={{ backgroundColor: "white" }}>
           
            <Drawer
                title="Sub Category"
                placement="right"
                closable={false}
                onClose={toggleDrawer}
                visible={drawerVisible}
                width={300}
            >
                <MegaList />
                <div className='section_nav_wrapper_clicked mt-5'>
                    <PersonOutlineIcon />
                    <span className='mb-0' style={{ cursor: "pointer" }}>Account </span>
                    &nbsp;
                    <Badge badgeContent={item.length} color="primary" > 
                        <AddShoppingCartIcon onClick={handleClick} style={{cursor:"pointer"}} />
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
        <Space direction='vertical'>
            <Menu>
                <Menu.Item key="Furniture">
                    <Link to="/furniture">Furniture</Link>
                </Menu.Item>
                <Menu.Item key="Laptop">
                    <Link to="/laptop">Laptop</Link>
                </Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item key="HandBag">
                    <Link to="/hand-bag">Hand Bag</Link>
                </Menu.Item>
                <Menu.Item key="Headphone">
                    <Link to="/headphone">Headphone</Link>
                </Menu.Item>
            </Menu>
        </Space>
    );
}

export default MegaMenu;
