////**
////* Created by qinyao on 15-5-5.
//
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
    item = item + '<tr>'+ '<td>' + items[i].classify + '</td><td>' + items[i].name + '</td><td>' + items[i].price + '</td><td>' + items[i].unit + '</td><td>' + '<button id=' + btn_id + ' type="button" style="color:white;background:rgb(88, 135, 207);font-size:20px;border-radius: 5px;" onclick="addShoppingCart(this.id)">加入购物车</button></td>'+ '</tr>';
}
return item;
}
localStorage.setItem('ite', JSON.stringify(lists()));

function item_data(){
  var idata= localStorage.getItem('ite');

}

//function loadAllItems() {
//    return [
//        {
//            classify:'饮料',
//            barcode: 'ITEM000000',
//            name: '可口可乐',
//            unit: '瓶',
//            price: 3.00
//        },
//        {
//            classify:'饮料',
//            barcode: 'ITEM000001',
//            name: '雪碧',
//            unit: '瓶',
//            price: 3.00
//        },
//        {
//            classify:'水果',
//            barcode: 'ITEM000002',
//            name: '苹果',
//            unit: '斤',
//            price: 5.50
//        },
//        {
//            classify:'水果',
//            barcode: 'ITEM000003',
//            name: '荔枝',
//            unit: '斤',
//            price: 15.00
//        },
//        {
//            classify:'生活用品',
//            barcode: 'ITEM000004',
//            name: '电池',
//            unit: '个',
//            price: 2.00
//        },
//        {
//            classify:'食品',
//            barcode: 'ITEM000005',
//            name: '方便面',
//            unit: '袋',
//            price: 4.50
//        }
//    ];
//}
//localStorage.setItem('allItems', JSON.stringify(loadAllItems()));
//var store_list = JSON.parse(localStorage.getItem('allItems'));
//function show_store_list(){
//    var html = '';
//    html = html +'<tr class="list_header"><td id="h1">分类</td><td id="h2">名称</td><td id="h3">单价(元)</td><td id="h4">单位</td><td id="h5"></td>';
//    for(var i in store_list){
//        var btn_id = i.toString();
//        var items = store_list[i];
//        html = html +'<tr>';
//        html = html + '<td>'+items.classify+'</td><td>'+items.name+'</td><td>'+items.price+'</td><td>'+items.unit+'</td><td>'+'<button id='+btn_id+' type="button" style="color:white;background:rgb(88, 135, 207);font-size:20px;border-radius: 10px;" onclick="addShoppingCart(this.id)">加入购物车</button></td>';
//        html = html + '</tr>';
//    }
//    $('#add_table').html(html);
//}