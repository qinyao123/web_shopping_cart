/**
 * Created by qinyao on 15-5-13.
 */
function cart_item(){
    var item_data=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var item_data_list='';
    for(var i in item_data){
        var get_item=item_data[i];
        var btn= i.toString();
       item_data_list+='<tr>'+'<td>'+get_item.classify+'</td><td>'+get_item.name+'</td><td>'+get_item.price+'</td><td>'+get_item.unit+'</td>+<td>'+
       '<button id='+btn+' onclick="cut_item_count(this.id)" style="border-top-left-radius:4px;border-bottom-left-radius:4px;background-color: white;border-color: rgb(202, 204, 204);font-size: 21px;width: 30px;" >-</button>'
       +get_item.count+'<button id='+btn+' onclick="add_item_count(this.id)" style="border-top-right-radius: 4px;border-bottom-right-radius: 4px;background-color: white;border-color: rgb(202, 204, 204);font-size: 21px;width: 30px;">+</button>'
       +'</td><td>'+show_sum(btn)+'</td>' +'</tr>';
    }
    return item_data_list;
}
localStorage.setItem('cart_item_count',JSON.stringify(cart_item()));
function get_cart_item(){
    var get_cart_item_data=JSON.parse(localStorage.getItem('cart_item_count'));
    $('#tab').html( get_cart_item_data);
}
function show_sum(id){
    var btn=id;
    var item_sum=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var get_item_sum=item_sum[btn];
    var get_final_item_sum='';
    for(var i in get_item_sum){
        if(get_item_sum.classify!='水果'&&get_item_sum.count>=3&&get_item_sum.classify!='生活用品'){
            get_final_item_sum=get_item_sum.price*(get_item_sum.count-parseInt(get_item_sum.count/3))+'元'+'('+'原价:'+' '+get_item_sum.price*get_item_sum.count+'元'+')';
        }
        else{
            get_final_item_sum=get_item_sum.price*get_item_sum.count+'元';
        }
    }
    return get_final_item_sum;
}
function add_item_count(id){
    var btn=id;
    var add_item=JSON.parse(localStorage.getItem('shopping_cart_list'));
    add_item[btn].count = add_item[btn].count +1;
    localStorage.setItem('shopping_cart_list', JSON.stringify(add_item));
    location.reload();
}
function cut_item_count(id){
    var btn=id;
    var add_item=JSON.parse(localStorage.getItem('shopping_cart_list'));
    if(add_item[btn].count==1){
        add_item.splice(btn,1);
    }else{
        add_item[btn].count = add_item[btn].count -1;}
    localStorage.setItem('shopping_cart_list', JSON.stringify(add_item));
    location.reload();
}
function sum (){
    var item_sum=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var  get_item_sum=0;
    var get_final_sum=0;
    for(var i in item_sum){
        if(item_sum[i].classify!='水果'&&item_sum[i].count>=3&&item_sum[i].classify!='生活用品'){
        get_item_sum+= ( item_sum[i].count-parseInt( item_sum[i].count/3))*item_sum[i].price;
    }
    else{
            get_final_sum+= item_sum[i].count* item_sum[i].price;
    }
    }get_item_sum= get_final_sum+get_item_sum;
    $('#sum').text('总计:'+get_item_sum.toFixed(2)+'元');
}