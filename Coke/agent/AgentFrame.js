import {Recipient} from '../message/Recipient.js'
import {Message} from '../message/Message.js'
import {Agent} from './Agent.js'
import {Coca_ColaFactory} from '../coke/Coca_ColaFactory.js';
import {PepsiFactory} from '../coke/PepsiFactory.js';
import {OrderBuilder} from '../customer/OrderBuilder.js';
import {DeliverMethod} from './DeliverMethod.js';

export class  AgentFrame{
    constructor() {
        this.facade()
        this.info = "";
        this.isSelectCocaCola = true;
        this.isSelectPepsi = false;
        this.isSelectCocaColaC = true;
        this.isSelectPepsiC = false;
        this.isSelectExpress = true;
        this.isSelectTradition = false;
        this.callStock = false;
        this.time = 0;
        this.customName = ""
        this.customAddress = ""
    }

    facade(){
        let panel = d3.select('body').append('div')
        panel.append('lable').text('1.代理商选择进货 :  ')
        panel.append('br')
        let cb1 = panel.append('input').attr('type', 'checkbox').attr('name', 'Coke').attr('value', 'Coca_Cola').attr('checked', 'true')
        let ct1 = panel.append('lable').text('Coca_Cola')
        panel.append('br')
        let cb2 = panel.append('input').attr('type', 'checkbox').attr('name', 'Coke').attr('value', 'Pepsi')
        let ct2 = panel.append('lable').text('Pepsi')
        panel.append('br')
        let bt1 = panel.append('button').text('确认')
        panel.append('br')

        panel.append('lable').text('2.可乐公司供货 :  ')
        panel.append('br')
        let bt2 = panel.append('button').text('发货&提醒')
        panel.append('br')

        panel.append('lable').text('3.顾客购买商品 :  ')
        panel.append('br')
        panel.append('lable').text('Name    :  ')
        let name = panel.append('input').attr('type', 'text').attr('id', 'name')
        panel.append('br')
        panel.append('lable').text('Address :  ')
        let address = panel.append('input').attr('type', 'text').attr('id', 'address')
        panel.append('br')
        panel.append('lable').text('Goods   :  ')
        let cb1C = panel.append('input').attr('type', 'checkbox').attr('name', 'Coke').attr('value', 'Coca_Cola').attr('checked', 'true')
        panel.append('lable').text('Coca_Cola')
        let cb2C = panel.append('input').attr('type', 'checkbox').attr('name', 'Coke').attr('value', 'Pepsi')
        panel.append('lable').text('Pepsi')
        panel.append('br')
        panel.append('lable').text('Deliver :  ')
        let rb1 = panel.append('input').attr('type', 'radio').attr('name', 'deliver').attr('value', 'Express').attr('checked', 'true')
        panel.append('lable').text('Express')
        let rb2 = panel.append('input').attr('type', 'radio').attr('name', 'deliver').attr('value', 'Tradition')
        panel.append('lable').text('Tradition')
        panel.append('br')
        let bt3 = panel.append('button').text('确定')
        panel.append('br')
        let tf = panel.append('textarea').attr('rows', '50').attr('cols', '100')
        this.panel = panel
        this.cb1 = cb1
        this.cb2 = cb2
        this.ct1 = ct1
        this.ct2 = ct2
        this.bt1 = bt1
        this.bt2 = bt2
        this.bt3 = bt3
        this.cb1C = cb1C
        this.cb2C = cb2C
        this.rb1 = rb1
        this.rb2 = rb2
        this.tf  = tf
        this.name = name
        this.address = address
    }

    interAction(){
        let instance = this;

        function stock(company, goods, time) {
            let recipient = new Recipient(company, '12345678@email');
            let message = new Message('代理商', recipient);
            let clone = message.clone();
            let agentC = new Agent()
            agentC.setMessage(clone);
            instance.tf.transition().delay(time += 1000).text(instance.info)
            instance.info = instance.info + '\n代理商向' + company + '请求进货：' + goods + '*x件'
            instance.info = instance.info + '\n发件人：' + agentC.getMessage().getSender()
            instance.info = instance.info + '\n收件人：' + agentC.getMessage().getRecipient()
            instance.tf.transition().delay(time += 1000).text(instance.info)
            instance.info = instance.info + '\n邮件发送中... '
            instance.tf.transition().delay(time += 1000).text(instance.info)
            instance.info = instance.info + '\n发送成功!!! '
            instance.tf.transition().delay(time += 1000).text(instance.info)
            instance.info = instance.info + '\n等待可乐公司送货'
            instance.tf.transition().delay(time += 1000).text(instance.info)
            return instance.time
        }
        instance.cb1.on('change', function () {
            instance.isSelectCocaCola =  !instance.isSelectCocaCola;
        })
        instance.cb2.on('change', function () {
            instance.isSelectPepsi = !instance.isSelectPepsi;
        })

        instance.name.on('change', function () {
            instance.customName = document.getElementById('name').value
        })
        instance.address.on('change', function () {
            instance.customAddress = document.getElementById('address').value
        })
        instance.cb1C.on('change', function () {
            instance.isSelectCocaColaC = !instance.isSelectCocaColaC;
        })
        instance.cb2C.on('change', function () {
            instance.isSelectPepsiC = !instance.isSelectPepsiC;
        })
        instance.rb1.on('change', function () {
            instance.isSelectExpress = !instance.isSelectExpress;
            instance.isSelectTradition = !instance.isSelectTradition;
        })
        instance.rb2.on('change', function () {
            instance.isSelectExpress = !instance.isSelectExpress;
            instance.isSelectTradition = !instance.isSelectTradition;
        })
        instance.bt1.on('click', function () {
            instance.tf.text("")
            instance.info = '\n========--1、代理商选择进货--========'
            instance.tf.transition().delay(instance.time).text(instance.info)
            instance.info = instance.info + '\n开始发送邮件...'
            if (instance.isSelectCocaCola) {
                instance.time = stock('可口可乐公司', '可口可乐', instance.time)
            }
            if (instance.isSelectPepsi) {
                instance.time = stock('百事可乐公司', '百事可乐', instance.time)
            }
            instance.callStock = true
        })
        instance.bt2.on('click', function () {
            instance.info = '\n========--2、可乐公司供货--========';
            instance.time = 0;
            instance.tf.text(instance.info)
            if (instance.callStock) {
                instance.callStock = false;
                let coca = new Coca_ColaFactory()
                let pepsi = new PepsiFactory()
                if (instance.isSelectCocaCola) {
                    instance.info = instance.info + '\n' + coca.produceCoke().produce()
                    instance.tf.transition().delay(instance.time += 100).text(instance.info)
                }
                if (instance.isSelectPepsi) {
                    instance.info = instance.info + '\n' + pepsi.produceCoke().produce()
                    instance.tf.transition().delay(instance.time += 100).text(instance.info)
                }
                instance.info = instance.info + '\n已发货请注意查收！，邮件发送中...  发送成功!!!'
                instance.tf.transition().delay(instance.time += 1000).text(instance.info)
                instance.info = instance.info + '\n代理商验收商品并签收，商品售卖中'
                instance.tf.transition().delay(instance.time += 1000).text(instance.info)

            } else {
                instance.info = instance.info + '\n未接受到发货请求！'
                instance.tf.transition().delay(instance.time += 100).text(instance.info)
            }
        })
        instance.bt3.on('click', function () {
            instance.info = '\n========--3、销售给顾客--========';
            instance.time = 0;
            instance.tf.text(instance.info)
            let goods = ""
            if (instance.isSelectCocaColaC) {
                goods = goods + 'Coca_Cola '
            }
            if (instance.isSelectPepsiC) {
                goods = goods + 'Pepsi '
            }
            let builder = new OrderBuilder(instance.customName, goods, instance.customAddress);
            let order = builder.create();

            instance.info = instance.info + '\n顾客姓名：' + order.getName()
            instance.info = instance.info + '\n购买商品：' + order.getGoods()
            instance.info = instance.info + '\n顾客地址：' + order.getAddress()
            instance.tf.transition().delay(instance.time += 100).text(instance.info)

            let deliverGoods = new DeliverMethod(instance.isSelectExpress);
            instance.info = instance.info + '\n' + deliverGoods.selectMethod()
            instance.tf.transition().delay(instance.time += 100).text(instance.info)
        })
    }

}






