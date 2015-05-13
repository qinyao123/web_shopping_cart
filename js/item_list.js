
function lists(){
  var items=[
      {
            classify:'饮料',
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            classify:'饮料',
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            classify:'水果',
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            classify:'水果',
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            classify:'生活用品',
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            classify:'食品',
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }

    ];

var item='';
for(var i in items) {
   var item_count =items[i];
    var btn = i.toString();
    item = item + '<tr>'+ '<td>' + item_count.classify + '</td><td>' + item_count.name + '</td><td>' + item_count.price + '</td><td>' + item_count.unit + '</td><td>' + '<button id='+btn+' style="color:white;background:rgb(67, 105, 207);font-size:20px;border-radius: 5px;border-color:rgb(67, 105, 207); " onclick="add_item(this.id)">加入购物车</button></td>'+ '</tr>';
}
return [item,items];
}
localStorage.setItem('cart_list', JSON.stringify(lists()[0]));
localStorage.setItem('allItems', JSON.stringify(lists()[1]));
function showItem() {
    var item_data = JSON.parse(localStorage.getItem('cart_list'));
    $('#tab').html(item_data);
}

function add_item(id) {
    var btn = id;
    var all_item = JSON.parse(localStorage.getItem('allItems'));
    var cart_item = all_item[btn];
    cart_item.count = 1;
    cart_item.freecount = -1;
    var get_cart_list= JSON.parse(localStorage.getItem('shopping_cart_list'))||[];

    if(get_cart_list.length == 0){
        get_cart_list.push(cart_item);
    }
    else{
        for(var i = 0; i < get_cart_list.length; i ++){
            if(get_cart_list[i].barcode == cart_item.barcode){
                get_cart_list[i].count ++;
                break;
            }
            else if(get_cart_list[i].barcode != cart_item.barcode && i == get_cart_list.length-1){
                get_cart_list.push(cart_item);
                break;
            }
        }
    }

    localStorage.setItem('shopping_cart_list', JSON.stringify(get_cart_list));
    location.reload();
}


