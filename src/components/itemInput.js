import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {SO} from './SamplOutput';
const ItemInput =(props)=>{
  return(
      <div> 
    
          <div class="form-group"> 
          <label for="id">--:ITEM ID:--</label>
          <input type="text" class="form-control" onChange={props.takeid} id="id" placeholder="ID"/>
          </div>
          <div class="form-group">
          <label for="password">--:ITEM NAME:--</label>
          <input type="text"  onChange={props.takename} class="form-control" id="password" placeholder="NAME"/>
         </div> 
         <div class="form-group">
          <label for="price">--:ITEM PRICE:--</label>
          <input type="text" class="form-control" onChange={props.takeprice} id="price" placeholder="PRICE"/>
          </div>
          <div class="form-group">
          <label for="url">--:ITEM URL:--</label>
          <input type="text" class="form-control" onChange={props.takeurl} id="url" placeholder="URL"/>
         </div>
         <button type="button" onClick={props.add} class="btn btn-primary">ADD</button>&nbsp; &nbsp;
         <button type="button" onClick={props.save} class="btn btn-success">SAVE</button>&nbsp; &nbsp;
         <button type="button" onClick={props.delete} class="btn btn-info">DELETE</button>&nbsp; &nbsp;
         <button type="button" class="btn btn-warning" onClick={props.load} >LOAD</button>&nbsp; &nbsp;
         <button type="button" onClick={props.search} class="btn btn-danger">SEARCH</button>&nbsp; &nbsp;
         <button type="button"  onClick={props.update} class="btn  btn-info">UPDATE</button>&nbsp; &nbsp;
         <button type="button" onClick={props.sort} class="btn btn-info">SORT</button>&nbsp; &nbsp;
         <button onClick={props.clearALL} type="button" class="btn btn-primary">CLEAR ALL</button>&nbsp; &nbsp;
                  <button type="button"   class="btn btn-default">Check</button>
      </div>
  );
}
export default ItemInput;