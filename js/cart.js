/**
 * Created by qinyao on 15-5-13.
 */
function cart_item(){
    var item_data=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var item_data_list='';
    for(var i in item_data){
        var get_item=item_data[i];
        var btn_cut= i.toString();
        var btn_add= i.toString();
       item_data_list+='<tr>'+'<td>'+get_item.classify+'</td><td>'+get_item.name+'</td><td>'+get_item.price+'</td><td>'+get_item.unit+'</td>+<td>'+'<button id='+btn_cut+' onclick="cut_item_count(this.id)" style="border-top-left-radius:4px;border-bottom-left-radius:4px;" >-</button>'+get_item.count+'<button id='+btn_add+' onclick="add_item_count(this.id)" style="border-top-right-radius: 4px;border-bottom-right-radius: 4px">+</button>'+'</td><td >'+show_sum()+'</td>' +'</tr>';
    }
    return item_data_list;
}
localStorage.setItem('cart_item_count',JSON.stringify(cart_item()));
function get_cart_item(){
    var get_cart_item_data=JSON.parse(localStorage.getItem('cart_item_count'));
    $('#tab').html( get_cart_item_data);
}
function show_sum(id){
    //var btn_add=id;
    //var item_sum=JSON.parse(localStorage.getItem('shopping_cart_list'));
    //var get_item_sum=item_sum[btn_add];
    //var get_final_item_sum='';
    //for(var i =0;i<get_item_sum.length;i++){
    //    get_final_item_sum+=get_item_sum.price*get_item_sum.count;
    //}
}
function add_item_count(id){
    var btn_add=id;

}
function cut_item_count(id){}