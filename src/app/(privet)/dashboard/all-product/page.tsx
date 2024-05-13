"use client"
import useProducts from '@/Components/Hooks/useProduct';
import React from 'react';

const AllProduct = () => {

  const { data, isLoading, error } = useProducts();
  return (
    <div className='py-10'>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             

              {data.map((products,index) => {
                return (

                  <>
                    {/* row 1 */}
                    <tr>
                      <th>
                        { index+1}
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{ products.name}</div>
                           
                          </div>
                        </div>
                      </td>
                      <td>
                       {products.category}
                       
                      </td>
                      <td>{ products.price}</td>
                      <th>
                        { products.rating}
                      </th>
                    </tr>
                  </>

                )
              })}
              
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;