import { Menu, Space, Typography } from 'antd';

function MegaMenu() {
    return (
        <div  style={{backgroundColor: "white"}}>
        
        <Menu 
            mode='horizontal'
        items={[
           {
            label: "Category",
            key: "Category",
            children:[
               {
                label: <MegaList/>,
                key: "MegaList",
                style:{
                    height: "fit-content",
                    backgroundColor: "white",
                   
                }
               }
              
               
                
            ]
           },
           {
            label: "Cart",
            key: "Cart",
          
           },
           {
            label: "What's New",
            key: "What's New",
           },
           {
            label: "Delivery",
            key: "Delivery",
           
           }
        ]}
        style={{border: "none", boxShadow: "none"}}
        />
      
        </div>
        
    )
   
}


function MegaList(){
    return (
      <div >
      <Typography.Title style={{paddingTop:"10px"}} level={3}>Sub Category</Typography.Title>
      <Space direction='horizontal'>
      <Menu items={
        [
            {
                label: "Furniture",
                key: "Furniture",
                
            },
            {
                label: "Shoe",
                key: "Shoe",
            },
           {
                label: "Laptop",
                key: "Laptop",
            }, 
        ]
      }
      style={{border: "none", boxShadow: "none" }}
      />
       <Menu  items={[
        {
            label: "Hand Bag",
            key: "Hand Bag",
        }, 
        {
            label: "Headphone",
            key: "Headphone",
        }, 
        {
            label: "Book",
            key: "Book",
        }, 
       ]}
       style={{border: "none", boxShadow: "none" }}
       /> 
       </Space>
      </div> 
     
    )
}




export default MegaMenu;