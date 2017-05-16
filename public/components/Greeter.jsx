var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');


var Greeter = React.createClass({
//預設props值
 getDefaultProps: function(){
      return {
          name: '請輸入姓名',
          message: '請輸入留言'
      };
    },
//設定元件內的state狀態 
  getInitialState: function(){
    return {
        name: this.props.name,//將name的state 設為等於屬性名的value，透過props傳過來也就是字串Paul
        message: this.props.message  
  };
  },
 //點擊事件區塊
      handleNewData: function(updates){
         this.setState(updates);
      },
//render出去的
  render: function(){
    var name = this.state.name;//fetch上面的state值
    var message = this.state.message;//一定要記得使用this.props.屬性名
     return (
        <div>
          <GreeterMessage name={name} message = {message}/>  
          <GreeterForm onNewData={this.handleNewData} />
        </div>
      );
    }
});

module.exports = Greeter;