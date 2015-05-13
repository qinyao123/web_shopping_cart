/**
 * Created by qinyao on 15-5-12.
 */
function item_count(){
    var get_cart_count=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var cart_num=0;
    for(var j in get_cart_count){
        cart_num+=get_cart_count[j].count;
    }
    $('#cart_count').text("购物车"+"("+cart_num+")");
}