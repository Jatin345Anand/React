// import react from './rect'
import React from 'react';
import Mobile from '../models/mobile';
import ItemInput from '../components/itemInput';
import ItemList from '../components/itemList';
import MobileOperation from '../models/mobileOperation';
// import axios from '../../node_modules/axios';
// import axios from '../../node_modules/axios/dist/axios.min';
export class Crud extends React.Component{
    constructor(props){
      super(props);
      this.title="CRUD ONLINE SHOP";
      this.id=0;
      this.name="";
      this.url="";
      this.price=0;
      this.state={
          itemArray:[],total:0,markCount:0,UnmarkCount:0
      };
      this.ItemArrayClone=[];
    }
    takeID(event){
      this.id=event.target.value;
      console.log(`${event.target.value} and ${event.target.innerHTML}`);

    }
    takeNAME(event){
        this.name=event.target.value;
    }
    takePRICE(event){
        this.price=event.target.value;
    }
    takeURL(event){
        this.url=event.target.value;
    }
    add(){
        let itemobj= new Mobile(this.id,this.name,this.price,this.url,false,0);
        this.ItemArrayClone.push(itemobj);
        //MobileOperation.ADD(itemobj);
        this.updateCount();
    }
    updateCount(){
       console.log(`Update call....`);
        var total =this.ItemArrayClone.length;
  //      console.log("itemarray clone...");
    //    this.ItemArrayClone.forEach((io)=>console.log(`${io.mark}`));
      let markCount=this.ItemArrayClone.filter((IO)=>IO.mark).length;
      let UnmarkCount=total-markCount;       
       this.setState({itemArray:this.ItemArrayClone,total:this.ItemArrayClone.length,UnmarkCount:UnmarkCount,markCount:markCount});
      //console.log("state item array....");
       
    }
    clearALL(){
        console.log(`Clear ALL done...`);
        var Id = this.id=0;
        var Name= this.name="";
        var Price = this.price=0;
        var Url = this.url="";
     //   this.takeID();
//var EVENTID = this.takeID();
  //      console.log(`${EVENTID.target.value} and ${EVENTID.target.innerHTML}`); 
        console.log(`${Id} ${Name} ${Price} ${Url}`);

    }
    update(event){
         var ArrayofID= [];
         MobileOperation.PrepareItem(this.state.itemArray);
        console.log(`itemarrayClone`);
         this.ItemArrayClone.forEach((io)=>console.log(`${io.mark}`));
         console.log(`itemarray`);
         this.state.itemArray.forEach((io)=>console.log(`${io.mark}`));
         var ID1=this.ItemArrayClone.filter((io)=>io.mark==true);
         var ID=this.state.itemArray.filter((io)=>io.mark==false);
         console.log(`id1 = ${ID.length}`);
        //  ArrayofID.push(ID);
        //  var l1= MobileOperation.GetItem();
        //  l1.forEach(element => {
        //      console.log(`id = ${element.mark}`);
        //  });  
         console.log(`id = ${ID1.length}`);
         var u1,m1,t1;

         return ID;

    }
    
    componentWillMount(){
        // axios.get("http://localhost:4444/mobiles")
        // .then(function (response) {
        //   console.log(response.data);
        //   MobileOperation.PrepareItem(response.data);
        //   var a=MobileOperation.GetItem();
        //    console.log(`${a.name} and ${a.length}`);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
    }
    save(){
      console.log(`called save....`);
      if(window.localStorage){
          console.log(`local strorage available`);
          localStorage.setItem('details',JSON.stringify(this.state.itemArray));
      }
      else{
          console.log(`local storage not available..`);
      }
    }
    delete(){
        //this.setState({itemArray:newMarkedList});
        var UnmarkedItems= this.update();
        var um1=UnmarkedItems.length;
        var total1=this.state.itemArray.length;
        var m1=total1-um1;
        this.setState({itemArray:UnmarkedItems,UnmarkCount:um1,markCount:m1,total:total1});
    }
    search(identity){
        var l1 = this.state.itemArray;
        l1.forEach((io)=>console.log(io.mark));
       var VALUE;
        if(VALUE=="id"){
             var id1 ;
            var i= l1.filter((io)=>io.id==id1)[0];
         return i;
        } 
        else if(VALUE=="price"){
            var price1;
            var p= l1.filter((io)=>io.price==price1)[0];
          return p;    
        }
        else if(VALUE=="name"){
            var name1  ;
            var n = l1.filter((io)=>io.name==name1)[0];
            return n;
        }
    }
    sort(identity){
       console.log(`vlaue = ${identity.target.value}`);
       console.log(`vlaue = ${identity.target.innerHTML}`);
        this.state.itemArray.forEach((io)=>console.log(`${io.id}`));
        var l1= this.state.itemArray;
         var idArray=[]; var nameArray=[]; var priceArray=[];
         for(var i=0;i<l1.length;i++){
             idArray[i]=l1[i].id;
             nameArray[i]=l1[i].name;
             priceArray[i]=l1[i].price;
         }
        console.log(`${idArray.length} and ${priceArray.length} and ${idArray.length}`);
        priceArray.forEach((io)=>console.log(io));
        nameArray.forEach((io)=>console.log(io));
        idArray.sort(); priceArray.sort(); nameArray.sort();
        priceArray.forEach((io)=>console.log(io));
        nameArray.forEach((io)=>console.log(io));
        idArray.forEach((io)=>console.log(io));
        if(identity=="id"){
            return idArray;
        }
        else if(identity=="name"){
            return nameArray;
        }
        else if(identity=="price"){
            return priceArray;
        }
    }
    load(){
        console.log("loaded...");
        if(window.localStorage){
            var datafromLocalstorage= JSON.parse(localStorage.details);
            this.setState({itemArray:datafromLocalstorage});
        }
        //this.componentWillMount();
    }
    render(){;
        return(
            <div className="container">
            <div></div>
          <h1 className="alert-info">{this.title}</h1>
          <ItemInput takeid={this.takeID.bind(this)} takename={this.takeNAME.bind(this)} 
          takeprice={this.takePRICE.bind(this)}
           takeurl={this.takeURL.bind(this)}
           load={this.load.bind(this)}
           add={this.add.bind(this)}
          save={this.save.bind(this)}
          delete={this.delete.bind(this)}
          search={this.search.bind(this)}
          sort={this.sort.bind(this)} 
          update={this.update.bind(this)}    
       clearALL={this.clearALL.bind(this)}/>
          <h3>Total :{this.state.total} Mark : {this.state.markCount} UnMark : {this.state.UnmarkCount}</h3>
          <ItemList list={this.state.itemArray}
          updateITEMLIST={this.update.bind(this)}
     
 //   d={this.d.bind(this)}
        //   mark={this.mark.bind(this)}
          />
            </div>
            
        );
    }
}