/**
 * Created by qinyao on 15-5-17.
 */
function times(){
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time= date.getFullYear() + '年' + (month < 10 ? 0 : '') + month + '月' + (day < 10 ? 0 : '') + day + '日 ' + (hour < 10 ? 0 : '') + hour + ':' + (minute < 10 ? 0 : '') + minute + ':' + (second < 10 ? 0 : '') + second ;
    $('#time').text(time);
}
function cart_item(){
    var item_data=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var item_data_list='';
    var save_item_list='';
    for(var i in item_data){
        var get_item=item_data[i];
        var btn= i.toString();
        item_data_list+='<tr>'+'<td>'+get_item.classify+'</td><td>'+get_item.name+'</td><td>'+get_item.price+'</td><td>'+get_item.unit+'</td>+<td>'+get_item.count+'</td><td id='+btn+'>'+show_sum(btn)+'</td>' +'</tr>';
    }
    for(var j in item_data){
        var save_this_item=item_data[j];
        if(save_this_item.classify!=='水果'&&save_this_item.classify!=='生活用品'&&save_this_item.count>=3){
            save_item_list+='<tr>'+'<td>'+save_this_item.classify+'</td><td>'+save_this_item.name+'</td><td>'+parseInt(save_this_item.count/3)+'</td>'+'<tr>'
        }
    }return  [item_data_list,save_item_list];
}
localStorage.setItem('pay_item_count',JSON.stringify(cart_item()[0]));
localStorage.setItem('save_item',JSON.stringify( cart_item()[1]));
function get_cart_item(){
    var get_cart_item_data=JSON.parse(localStorage.getItem('pay_item_count'));
    var get_save_this_item=JSON.parse(localStorage.getItem('save_item'));
    $('#tab').html( get_cart_item_data);
    $('#table').html(get_save_this_item);
}
function show_sum(id){
    var btn=id;
    var item_sum=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var get_item_sum=item_sum[btn];
    var get_final_item_sum=0;
    for(var i in get_item_sum){
        if(get_item_sum.classify!='水果'&&get_item_sum.count>=3&&get_item_sum.classify!='生活用品'){
            get_final_item_sum=get_item_sum.price*(get_item_sum.count-parseInt(get_item_sum.count/3))+'元'+'('+'原价:'+get_item_sum.price*get_item_sum.count+'元'+')';
        }
        else{
            get_final_item_sum=get_item_sum.price*get_item_sum.count+'元';
        }
    }
    return get_final_item_sum;
}
function pay_sum_item(){
    var item_sum=JSON.parse(localStorage.getItem('shopping_cart_list'));
    var  get_item_sum=0;
    var get_final_sum=0;
    var save_sum=0;
    for(var i in item_sum){
        if(item_sum[i].classify!='水果'&&item_sum[i].count>=3&&item_sum[i].classify!='生活用品'){
            get_item_sum+= ( item_sum[i].count-parseInt( item_sum[i].count/3))*item_sum[i].price;
            save_sum+=parseInt( item_sum[i].count/3)*item_sum[i].price;
        }
        else{
            get_final_sum+= item_sum[i].count* item_sum[i].price;
        }
    }get_item_sum= get_final_sum+get_item_sum;
    $('#save').text('节省:'+save_sum.toFixed(2)+'元');
    $('#sum').text('总计:'+get_item_sum.toFixed(2)+'元');
}
function get_empty(){
    localStorage.clear();
}
