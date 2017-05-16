var React = require('react');
//form的component
var GreeterForm = React.createClass({
    onFormSubmit: function(e){
      e.preventDefault();//預防預設的動作，也就是browser重整
     
      var updates = {};//更新user輸入的值所使用的object

      var name = this.refs.name.value;//從下面<input type="text" ref="name" />傳遞props
      var message = this.refs.message.value;
      if (name.length > 0){//如果我們輸入的字串大於0
        this.refs.name.value = '';//刷新讓輸入框變回0
        updates.name = name;//讓這個object有一個新的property值為變數name  
      }
      
      if(message.length > 0){//如果我們輸入的字串大於0
        this.refs.message.value = '';//刷新讓輸入框變回0
        updates.message = message;//更新user輸入的值，藉由定義updates object的property
      }

       //接收到此元件的props並觸動事件，且使用這邊的locoal變數name也就是將經過input傳遞過來的字串
        this.props.onNewData(updates);//將改變的值傳遞去Greeter componert
    },
    render: function(){
       return (
        <form onSubmit={this.onFormSubmit}>
            <div>
              <input type="text" ref="name" placeholder="輸入姓名"/>
            </div>

            <div>
              <textarea ref="message" placeholder="輸入留言"></textarea>
            </div>
            
            <div>
               <button>提交資料</button>
            </div>
            
          </form>
       );
    }
});

module.exports = GreeterForm;