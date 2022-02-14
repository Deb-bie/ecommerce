import React, { useState, useEffect } from 'react';
import { DataGrid } from "@material-ui/data-grid";
import Navbar from "../../components/navbar/navbar.js";
import { db } from '../../firebase/firebase.js';
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"; 
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Add, ProductListItem, ProductListImg } from './productListStyles.js';






const ProductList = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products", "All_Products","Product"), 
        (snapshot) => {

            setProductList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        });

        return unsub;
    }, []);



    const handleEdit = async(id, img, title, description, stock, retailPrice, wholesalePrice,) => {
        navigate("/productlist/" + id, {
          state: {
            id: id,
            img: img,
            title: title,
            description: description,
            stock: stock,
            retailPrice: retailPrice,
            wholesalePrice: wholesalePrice,
          }
        })   
    }

    const handleAdd = () => {
        navigate("/addproduct")   
    }

    const handleDelete = async(id) => {
        if (window.confirm('Do you want to delete this producr?')) {
          await deleteDoc(doc(db, "Products", id));
        } else {
          console.log('Thing was not saved to the database.');
        }
    }


    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },

        {
            field: "productImg",
            headerName: "Product Image",
            width: 150,
            renderCell: (params) => {
              return (
                <ProductListItem>
                  <ProductListImg src={params.row.productImg} alt="" />
                </ProductListItem>
              );
            },
        },

        {
            field: "productCategory",
            headerName: "Product Category",
            width: 160,
            renderCell: (cellValues) => {
              return (
                <div style={{ color: "blue", fontSize: 18, width: "100%", textAlign: "left" }}>
                  {cellValues.value}
                </div>
              );
            }
        },

        {
            field: "productTitle",
            headerName: "Product Title",
            width: 160,
            renderCell: (cellValues) => {
              return (
                <div style={{ color: "blue", fontSize: 18, width: "100%", textAlign: "left" }}>
                  {cellValues.value}
                </div>
              );
            }
        },

        {
            field: "productDescription",
            headerName: "Product Description",
            width: 160,
            renderCell: (cellValues) => {
              return (
                <div style={{ color: "black", fontSize: 18, width: "100%", textAlign: "left" }}>
                  {cellValues.value}
                </div>
              );
            }
        },


        {
            field: "stock",
            headerName: "Stock",
            // type: "number",
            width: 120,
            align: "center"
        },

        {
            field: "price",
            headerName: "Price",
            width: 120,
            align: "center"
        },


        {
            field: "edit",
            headerName: "Edit",
            width: 90,
            align: "center",
            renderCell: (params) => {
                return (
                    <EditOutlined style={{ color: "green", cursor: "pointer" }} onClick={() => handleEdit(
                        params.row.id, 
                        params.row.productImg,
                        params.row.productCategory,
                        params.row.productTitle, 
                        params.row.productDescription,
                        params.row.stock,
                        params.row.price)}
                    />
                );
            },
        },


        {
            field: "delete",
            headerName: "Delete",
            width: 90,
            align: "center",
            renderCell: (params) => {
              return (
                <DeleteOutline
                style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDelete(params.row.id)}
                />
              );
            },
        },
    ];


    const rows = productList.map((product) => (
        {
          id: product.id,
          productImg: product.image,
          productCategory: product.category,
          productTitle: product.title,
          productDescription: product.description,
          stock: product.stock,
          price: product.price,
          edit: product.id
        }
    ));



    return(
        <>
           <Navbar />

          <div className="add">

            <Add>
              <Fab color="primary" aria-label="add product" onClick={handleAdd} className="fab">
                <AddIcon />
              </Fab>
            </Add>

              <div style={{ height: 700, margin: "25px"}}>
                  <DataGrid
                      rowHeight={100}
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      checkboxSelection
                      // onCellClick={handleCellClick}
                      // onRowClick={handleRowClick}  
                  />
              </div>
          </div>
        </>
    )
}


export default ProductList;

