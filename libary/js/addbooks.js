var vm = new Vue({
    el: '#app',
    data: {
        newBook: {
            name: '',
            price: 0,
            author: ' '
        },
        book: [{
            name: 'JavaScript权威指南',
            price: 90,
            author: '（美）弗兰纳根'
        }, {
            name: 'JavaScript高级程序设计',
            price: 66,
            author: 'Nicholas C. Zakas'
        }, {
            name: 'JavaScript设计模式',
            price: 45,
            author: '张容铭'
        }, {
            name: 'JavaScript语言精粹',
            price: 38,
            author: 'Douglas Crockford'
        }]
    },
    methods: {
        createBook: function() {
            this.book.push(this.newBook);
            // 添加完newBook对象后，重置newBook对象
            this.newBook = {
                name: '',
                price: 0,
                author: ' '
            }
        },
        deleteBook: function(index) {
            // 删一个数组元素
            this.book.splice(index, 1);
            alert("您所选中的" + " '" + this.book[index].name + "'" + " 已删除");
        }
    }
})
